import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { mockEvent, mockStations, mockVolunteers, getCoverageColor } from "@/lib/data";
import { Users, Calendar, MapPin, AlertTriangle, CheckCircle, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const daysUntilEvent = Math.ceil(
    (new Date(mockEvent.date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );

  const confirmedCount = mockVolunteers.filter(v => v.status === "confirmed").length;
  const pendingCount = mockVolunteers.filter(v => v.status === "pending").length;
  const standbyCount = mockVolunteers.filter(v => v.status === "standby").length;
  const atRiskCount = mockVolunteers.filter(v => v.reliabilityScore < 70).length;
  const stationsAtRisk = mockStations.filter(s => s.status !== "good").length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold">{mockEvent.name}</h1>
          <div className="flex items-center gap-4 mt-2 text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(mockEvent.date).toLocaleDateString("en-US", { 
                weekday: "long", 
                year: "numeric", 
                month: "long", 
                day: "numeric" 
              })}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {mockEvent.location}
            </span>
          </div>
        </div>
        <Badge 
          variant="outline" 
          className={`text-lg px-4 py-2 ${daysUntilEvent <= 7 ? "border-primary text-primary" : ""}`}
        >
          <Clock className="w-4 h-4 mr-2" />
          {daysUntilEvent} days until race day
        </Badge>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Volunteers</CardDescription>
            <CardTitle className="text-3xl">{mockVolunteers.length}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>{confirmedCount} confirmed, {pendingCount} pending</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Predicted Show Rate</CardDescription>
            <CardTitle className="text-3xl text-green-600">{mockEvent.predictedShowRate}%</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-green-600">
              <TrendingUp className="w-4 h-4" />
              <span>Above industry average (60%)</span>
            </div>
          </CardContent>
        </Card>

        <Card className={stationsAtRisk > 0 ? "border-amber-500" : ""}>
          <CardHeader className="pb-2">
            <CardDescription>Stations Coverage</CardDescription>
            <CardTitle className="text-3xl">
              {mockStations.filter(s => s.status === "good").length}/{mockStations.length}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`flex items-center gap-2 text-sm ${stationsAtRisk > 0 ? "text-amber-600" : "text-green-600"}`}>
              {stationsAtRisk > 0 ? (
                <>
                  <AlertTriangle className="w-4 h-4" />
                  <span>{stationsAtRisk} stations need attention</span>
                </>
              ) : (
                <>
                  <CheckCircle className="w-4 h-4" />
                  <span>All stations covered</span>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Standby Pool</CardDescription>
            <CardTitle className="text-3xl">{standbyCount}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>Ready to activate</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Coverage Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Station Coverage</CardTitle>
              <Link href="/dashboard/stations">
                <Button variant="ghost" size="sm">View All</Button>
              </Link>
            </div>
            <CardDescription>Predicted volunteer coverage by station</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockStations.slice(0, 5).map((station) => (
              <div key={station.id} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{station.name}</span>
                  <span className={`font-mono ${
                    station.coverage >= 85 ? "text-green-600" :
                    station.coverage >= 70 ? "text-amber-600" : "text-red-600"
                  }`}>
                    {station.coverage}%
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all ${getCoverageColor(station.coverage)}`}
                    style={{ width: `${station.coverage}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>At-Risk Volunteers</CardTitle>
              <Link href="/dashboard/volunteers">
                <Button variant="ghost" size="sm">View All</Button>
              </Link>
            </div>
            <CardDescription>Volunteers with reliability score below 70%</CardDescription>
          </CardHeader>
          <CardContent>
            {atRiskCount === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <CheckCircle className="w-12 h-12 mx-auto mb-2 text-green-500" />
                <p>All volunteers have good reliability scores!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {mockVolunteers
                  .filter(v => v.reliabilityScore < 70)
                  .slice(0, 4)
                  .map((volunteer) => (
                    <div key={volunteer.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-medium">{volunteer.name}</p>
                        <p className="text-sm text-muted-foreground">{volunteer.station}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="destructive" className="font-mono">
                          {volunteer.reliabilityScore}%
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">
                          Last contact: {volunteer.lastContact}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks for race day preparation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
              <Users className="w-6 h-6" />
              <span>Import Volunteers</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
              <AlertTriangle className="w-6 h-6" />
              <span>Send Reminders</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
              <CheckCircle className="w-6 h-6" />
              <span>Activate Standby</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
              <TrendingUp className="w-6 h-6" />
              <span>View Reports</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
