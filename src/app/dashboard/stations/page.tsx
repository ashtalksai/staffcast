import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { mockStations, mockVolunteers, getCoverageColor } from "@/lib/data";
import { MapPin, Users, AlertTriangle, CheckCircle, Plus } from "lucide-react";

export default function StationsPage() {
  const getStationVolunteers = (stationName: string) => {
    return mockVolunteers.filter(v => v.station === stationName);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold">Stations</h1>
          <p className="text-muted-foreground mt-1">
            Monitor coverage and staffing for each station
          </p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Station
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {mockStations.filter(s => s.status === "good").length}
                </div>
                <p className="text-sm text-muted-foreground">Fully Covered</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-amber-200">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-600">
                  {mockStations.filter(s => s.status === "warning").length}
                </div>
                <p className="text-sm text-muted-foreground">Need Attention</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">
                  {mockStations.filter(s => s.status === "critical").length}
                </div>
                <p className="text-sm text-muted-foreground">Critical</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Station Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockStations.map((station) => {
          const volunteers = getStationVolunteers(station.name);
          const avgReliability = volunteers.length > 0 
            ? Math.round(volunteers.reduce((acc, v) => acc + v.reliabilityScore, 0) / volunteers.length)
            : 0;
          
          return (
            <Card 
              key={station.id}
              className={
                station.status === "critical" ? "border-red-300" :
                station.status === "warning" ? "border-amber-300" : ""
              }
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      station.status === "good" ? "bg-green-100" :
                      station.status === "warning" ? "bg-amber-100" : "bg-red-100"
                    }`}>
                      <MapPin className={`w-5 h-5 ${
                        station.status === "good" ? "text-green-600" :
                        station.status === "warning" ? "text-amber-600" : "text-red-600"
                      }`} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{station.name}</CardTitle>
                      <CardDescription>
                        {station.confirmed}/{station.required} volunteers assigned
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant={
                    station.status === "good" ? "default" :
                    station.status === "warning" ? "secondary" : "destructive"
                  }>
                    {station.coverage}% coverage
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Predicted Coverage</span>
                    <span className={`font-medium ${
                      station.coverage >= 85 ? "text-green-600" :
                      station.coverage >= 70 ? "text-amber-600" : "text-red-600"
                    }`}>
                      {station.coverage}%
                    </span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all ${getCoverageColor(station.coverage)}`}
                      style={{ width: `${station.coverage}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-sm text-muted-foreground">Avg Reliability</p>
                    <p className={`text-lg font-semibold ${
                      avgReliability >= 85 ? "text-green-600" :
                      avgReliability >= 70 ? "text-amber-600" : "text-red-600"
                    }`}>
                      {avgReliability}%
                    </p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-sm text-muted-foreground">Standby Ready</p>
                    <p className="text-lg font-semibold">
                      {mockVolunteers.filter(v => v.status === "standby").length > 0 ? "Yes" : "No"}
                    </p>
                  </div>
                </div>

                {station.status !== "good" && (
                  <Button className="w-full" variant="outline">
                    <Users className="w-4 h-4 mr-2" />
                    Activate Standby Volunteers
                  </Button>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
