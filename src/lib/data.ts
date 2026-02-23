// Mock data for the StaffCast MVP

export interface Volunteer {
  id: string;
  name: string;
  email: string;
  phone: string;
  station: string;
  shift: string;
  reliabilityScore: number;
  status: "confirmed" | "pending" | "standby" | "declined";
  confirmationSpeed: "fast" | "medium" | "slow";
  pastEvents: number;
  showedUp: number;
  lastContact: string;
}

export interface Station {
  id: string;
  name: string;
  required: number;
  confirmed: number;
  coverage: number;
  status: "good" | "warning" | "critical";
}

export interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
  totalVolunteers: number;
  confirmedVolunteers: number;
  predictedShowRate: number;
}

export const mockEvent: Event = {
  id: "1",
  name: "Spring City Marathon 2026",
  date: "2026-03-15",
  location: "Downtown City Park",
  totalVolunteers: 156,
  confirmedVolunteers: 142,
  predictedShowRate: 87,
};

export const mockStations: Station[] = [
  { id: "1", name: "Water Station 1 (Mile 3)", required: 12, confirmed: 12, coverage: 95, status: "good" },
  { id: "2", name: "Water Station 2 (Mile 7)", required: 12, confirmed: 11, coverage: 88, status: "good" },
  { id: "3", name: "Water Station 3 (Mile 13)", required: 12, confirmed: 10, coverage: 78, status: "warning" },
  { id: "4", name: "Finish Line", required: 20, confirmed: 19, coverage: 91, status: "good" },
  { id: "5", name: "Medical Tent", required: 8, confirmed: 6, coverage: 72, status: "warning" },
  { id: "6", name: "Registration Desk", required: 15, confirmed: 15, coverage: 96, status: "good" },
  { id: "7", name: "Bag Check", required: 10, confirmed: 9, coverage: 85, status: "good" },
  { id: "8", name: "Course Marshals", required: 25, confirmed: 22, coverage: 82, status: "good" },
];

export const mockVolunteers: Volunteer[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    phone: "+1 555-0101",
    station: "Water Station 1 (Mile 3)",
    shift: "6:00 AM - 12:00 PM",
    reliabilityScore: 95,
    status: "confirmed",
    confirmationSpeed: "fast",
    pastEvents: 8,
    showedUp: 8,
    lastContact: "2026-03-10",
  },
  {
    id: "2",
    name: "Mike Chen",
    email: "mike.chen@email.com",
    phone: "+1 555-0102",
    station: "Finish Line",
    shift: "5:00 AM - 2:00 PM",
    reliabilityScore: 92,
    status: "confirmed",
    confirmationSpeed: "fast",
    pastEvents: 5,
    showedUp: 5,
    lastContact: "2026-03-11",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    email: "emily.r@email.com",
    phone: "+1 555-0103",
    station: "Medical Tent",
    shift: "5:00 AM - 2:00 PM",
    reliabilityScore: 88,
    status: "confirmed",
    confirmationSpeed: "medium",
    pastEvents: 3,
    showedUp: 3,
    lastContact: "2026-03-09",
  },
  {
    id: "4",
    name: "James Wilson",
    email: "james.w@email.com",
    phone: "+1 555-0104",
    station: "Water Station 2 (Mile 7)",
    shift: "6:00 AM - 12:00 PM",
    reliabilityScore: 72,
    status: "confirmed",
    confirmationSpeed: "slow",
    pastEvents: 2,
    showedUp: 1,
    lastContact: "2026-03-08",
  },
  {
    id: "5",
    name: "Lisa Park",
    email: "lisa.p@email.com",
    phone: "+1 555-0105",
    station: "Registration Desk",
    shift: "4:00 AM - 9:00 AM",
    reliabilityScore: 98,
    status: "confirmed",
    confirmationSpeed: "fast",
    pastEvents: 12,
    showedUp: 12,
    lastContact: "2026-03-12",
  },
  {
    id: "6",
    name: "David Kim",
    email: "david.k@email.com",
    phone: "+1 555-0106",
    station: "Course Marshals",
    shift: "5:30 AM - 1:00 PM",
    reliabilityScore: 65,
    status: "pending",
    confirmationSpeed: "slow",
    pastEvents: 1,
    showedUp: 0,
    lastContact: "2026-03-05",
  },
  {
    id: "7",
    name: "Amanda Foster",
    email: "amanda.f@email.com",
    phone: "+1 555-0107",
    station: "Medical Tent",
    shift: "5:00 AM - 2:00 PM",
    reliabilityScore: 45,
    status: "pending",
    confirmationSpeed: "slow",
    pastEvents: 0,
    showedUp: 0,
    lastContact: "2026-02-28",
  },
  {
    id: "8",
    name: "Robert Martinez",
    email: "robert.m@email.com",
    phone: "+1 555-0108",
    station: "Bag Check",
    shift: "5:00 AM - 11:00 AM",
    reliabilityScore: 85,
    status: "confirmed",
    confirmationSpeed: "medium",
    pastEvents: 4,
    showedUp: 4,
    lastContact: "2026-03-10",
  },
  {
    id: "9",
    name: "Jennifer Lee",
    email: "jennifer.l@email.com",
    phone: "+1 555-0109",
    station: "Water Station 3 (Mile 13)",
    shift: "6:00 AM - 12:00 PM",
    reliabilityScore: 78,
    status: "confirmed",
    confirmationSpeed: "medium",
    pastEvents: 2,
    showedUp: 2,
    lastContact: "2026-03-09",
  },
  {
    id: "10",
    name: "Chris Anderson",
    email: "chris.a@email.com",
    phone: "+1 555-0110",
    station: "Finish Line",
    shift: "5:00 AM - 2:00 PM",
    reliabilityScore: 91,
    status: "confirmed",
    confirmationSpeed: "fast",
    pastEvents: 6,
    showedUp: 6,
    lastContact: "2026-03-11",
  },
  {
    id: "11",
    name: "Rachel Green",
    email: "rachel.g@email.com",
    phone: "+1 555-0111",
    station: "Medical Tent",
    shift: "5:00 AM - 2:00 PM",
    reliabilityScore: 55,
    status: "standby",
    confirmationSpeed: "medium",
    pastEvents: 1,
    showedUp: 1,
    lastContact: "2026-03-07",
  },
  {
    id: "12",
    name: "Tom Brady",
    email: "tom.b@email.com",
    phone: "+1 555-0112",
    station: "Course Marshals",
    shift: "5:30 AM - 1:00 PM",
    reliabilityScore: 82,
    status: "confirmed",
    confirmationSpeed: "fast",
    pastEvents: 3,
    showedUp: 3,
    lastContact: "2026-03-10",
  },
];

export function getScoreColor(score: number): string {
  if (score >= 85) return "text-green-600";
  if (score >= 70) return "text-amber-600";
  return "text-red-600";
}

export function getScoreBgColor(score: number): string {
  if (score >= 85) return "bg-green-500";
  if (score >= 70) return "bg-amber-500";
  return "bg-red-500";
}

export function getCoverageColor(coverage: number): string {
  if (coverage >= 85) return "bg-green-500";
  if (coverage >= 70) return "bg-amber-500";
  return "bg-red-500";
}

export function getStatusBadgeVariant(status: string): "default" | "secondary" | "destructive" | "outline" {
  switch (status) {
    case "confirmed": return "default";
    case "pending": return "secondary";
    case "standby": return "outline";
    case "declined": return "destructive";
    default: return "secondary";
  }
}
