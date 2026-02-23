import { NextRequest, NextResponse } from 'next/server';

// Simple CSV parser for volunteer data
function parseCSV(csvText: string) {
  const lines = csvText.trim().split('\n');
  if (lines.length < 2) {
    throw new Error('CSV must have header and at least one data row');
  }

  const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
  const volunteers = [];

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',').map(v => v.trim());
    const volunteer: Record<string, string> = {};
    
    headers.forEach((header, index) => {
      volunteer[header] = values[index] || '';
    });

    // Calculate initial reliability score based on confirmation timing
    // Early signups get higher scores
    const score = calculateReliabilityScore(volunteer);

    volunteers.push({
      name: volunteer.name || volunteer.full_name || `${volunteer.first_name || ''} ${volunteer.last_name || ''}`.trim(),
      email: volunteer.email || '',
      phone: volunteer.phone || volunteer.phone_number || '',
      station: volunteer.station || volunteer.assignment || 'Unassigned',
      score,
      status: getStatusFromScore(score),
      confirmedAt: volunteer.confirmed_at || volunteer.signup_date || new Date().toISOString(),
    });
  }

  return volunteers;
}

function calculateReliabilityScore(volunteer: Record<string, string>): number {
  let score = 50; // Base score

  // Previous events attended (if available)
  const pastEvents = parseInt(volunteer.past_events || volunteer.events_attended || '0');
  score += Math.min(pastEvents * 5, 25); // Up to 25 points for history

  // Confirmation timing (earlier = better)
  const signupDate = volunteer.signup_date || volunteer.confirmed_at;
  if (signupDate) {
    const daysAgo = Math.floor((Date.now() - new Date(signupDate).getTime()) / (1000 * 60 * 60 * 24));
    if (daysAgo > 14) score += 15; // Signed up 2+ weeks ago
    else if (daysAgo > 7) score += 10; // Signed up 1+ week ago
    else if (daysAgo > 3) score += 5; // Signed up 3+ days ago
  }

  // Email engagement (if available)
  if (volunteer.email_opened === 'true' || volunteer.email_opened === 'yes') {
    score += 5;
  }
  if (volunteer.email_clicked === 'true' || volunteer.email_clicked === 'yes') {
    score += 5;
  }

  return Math.min(Math.max(score, 0), 100);
}

function getStatusFromScore(score: number): string {
  if (score >= 80) return 'Confirmed';
  if (score >= 60) return 'Likely';
  return 'At Risk';
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    const csvText = await file.text();
    const volunteers = parseCSV(csvText);

    // In production, you would save these to the database here
    // For MVP, we return the parsed data

    return NextResponse.json({
      success: true,
      message: `Imported ${volunteers.length} volunteers`,
      volunteers,
      summary: {
        total: volunteers.length,
        confirmed: volunteers.filter(v => v.status === 'Confirmed').length,
        likely: volunteers.filter(v => v.status === 'Likely').length,
        atRisk: volunteers.filter(v => v.status === 'At Risk').length,
      }
    });
  } catch (error) {
    console.error('CSV import error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to parse CSV' },
      { status: 400 }
    );
  }
}
