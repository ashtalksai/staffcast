import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockVolunteers, getScoreColor } from "@/lib/data";
import { UserCheck, Phone, Mail, Clock } from "lucide-react";

export default function StandbyPage() {
  const standbyVolunteers = mockVolunteers.filter(v => v.status === "standby");
  const availableForStandby = mockVolunteers.filter(
    v => v.reliabilityScore >= 75 && v.status === "confirmed"
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold">Standby Pool</h1>
          <p className="text-muted-foreground mt-1">
            Backup volunteers ready to fill gaps when needed
          </p>
        </div>
        <Button>
          <UserCheck className="w-4 h-4 mr-2" />
          Add to Standby
        </Button>
      </div>

      {/* Current Standby */}
      <Card>
        <CardHeader>
          <CardTitle>Current Standby Volunteers</CardTitle>
          <CardDescription>
            These volunteers are on-call and ready to be activated
          </CardDescription>
        </CardHeader>
        <CardContent>
          {standbyVolunteers.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <UserCheck className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No standby volunteers currently assigned</p>
              <p className="text-sm mt-1">Add reliable volunteers to your standby pool</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {standbyVolunteers.map((volunteer) => (
                <Card key={volunteer.id} className="border-dashed">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium">{volunteer.name}</p>
                        <p className="text-sm text-muted-foreground">{volunteer.email}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline" className={getScoreColor(volunteer.reliabilityScore)}>
                            {volunteer.reliabilityScore}% reliable
                          </Badge>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon">
                          <Phone className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Mail className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button size="sm" className="flex-1">Activate</Button>
                      <Button size="sm" variant="outline">Remove</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Suggested for Standby */}
      <Card>
        <CardHeader>
          <CardTitle>Suggested for Standby</CardTitle>
          <CardDescription>
            High-reliability volunteers who could serve as backups
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {availableForStandby.slice(0, 5).map((volunteer) => (
              <div 
                key={volunteer.id} 
                className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent" />
                  <div>
                    <p className="font-medium">{volunteer.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {volunteer.station} • {volunteer.showedUp}/{volunteer.pastEvents} events attended
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    {volunteer.reliabilityScore}%
                  </Badge>
                  <Button variant="outline" size="sm">Add to Standby</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
