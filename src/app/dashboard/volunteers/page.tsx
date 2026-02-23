"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { mockVolunteers, getScoreColor, getScoreBgColor, getStatusBadgeVariant, Volunteer } from "@/lib/data";
import { Search, Upload, Filter, Mail, Phone, MoreHorizontal } from "lucide-react";

export default function VolunteersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const filteredVolunteers = mockVolunteers.filter((volunteer) => {
    const matchesSearch = 
      volunteer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      volunteer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      volunteer.station.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === "all" || volunteer.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const sortedVolunteers = [...filteredVolunteers].sort((a, b) => b.reliabilityScore - a.reliabilityScore);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold">Volunteers</h1>
          <p className="text-muted-foreground mt-1">
            Manage your volunteer roster and track reliability scores
          </p>
        </div>
        <Button>
          <Upload className="w-4 h-4 mr-2" />
          Import CSV
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{mockVolunteers.length}</div>
            <p className="text-sm text-muted-foreground">Total</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-green-600">
              {mockVolunteers.filter(v => v.status === "confirmed").length}
            </div>
            <p className="text-sm text-muted-foreground">Confirmed</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-amber-600">
              {mockVolunteers.filter(v => v.status === "pending").length}
            </div>
            <p className="text-sm text-muted-foreground">Pending</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-muted-foreground">
              {mockVolunteers.filter(v => v.status === "standby").length}
            </div>
            <p className="text-sm text-muted-foreground">Standby</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="relative w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, email, or station..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={filterStatus === "all" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setFilterStatus("all")}
              >
                All
              </Button>
              <Button
                variant={filterStatus === "confirmed" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setFilterStatus("confirmed")}
              >
                Confirmed
              </Button>
              <Button
                variant={filterStatus === "pending" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setFilterStatus("pending")}
              >
                Pending
              </Button>
              <Button
                variant={filterStatus === "standby" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setFilterStatus("standby")}
              >
                Standby
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Station</TableHead>
                <TableHead>Shift</TableHead>
                <TableHead>Reliability</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>History</TableHead>
                <TableHead>Last Contact</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedVolunteers.map((volunteer) => (
                <TableRow key={volunteer.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{volunteer.name}</p>
                      <p className="text-sm text-muted-foreground">{volunteer.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>{volunteer.station}</TableCell>
                  <TableCell className="text-sm">{volunteer.shift}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${getScoreBgColor(volunteer.reliabilityScore)}`}
                          style={{ width: `${volunteer.reliabilityScore}%` }}
                        />
                      </div>
                      <span className={`font-mono text-sm font-medium ${getScoreColor(volunteer.reliabilityScore)}`}>
                        {volunteer.reliabilityScore}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusBadgeVariant(volunteer.status)}>
                      {volunteer.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm">
                    {volunteer.showedUp}/{volunteer.pastEvents} events
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {volunteer.lastContact}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button variant="ghost" size="icon" title="Send Email">
                        <Mail className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" title="Send SMS">
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
