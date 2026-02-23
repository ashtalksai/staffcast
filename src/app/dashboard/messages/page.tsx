import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send, Clock, CheckCircle, AlertTriangle } from "lucide-react";

const messageHistory = [
  {
    id: "1",
    type: "sms",
    template: "1 Week Reminder",
    sentTo: 142,
    delivered: 140,
    opened: 128,
    sentAt: "2026-03-08 09:00 AM",
    status: "delivered"
  },
  {
    id: "2",
    type: "sms",
    template: "3 Day Reminder",
    sentTo: 142,
    delivered: 141,
    opened: 135,
    sentAt: "2026-03-12 09:00 AM",
    status: "delivered"
  },
  {
    id: "3",
    type: "sms",
    template: "1 Day Reminder",
    sentTo: 142,
    delivered: 0,
    opened: 0,
    sentAt: "Scheduled: 2026-03-14 09:00 AM",
    status: "scheduled"
  },
  {
    id: "4",
    type: "sms",
    template: "Morning-of Alert",
    sentTo: 142,
    delivered: 0,
    opened: 0,
    sentAt: "Scheduled: 2026-03-15 05:00 AM",
    status: "scheduled"
  }
];

const templates = [
  {
    id: "1",
    name: "1 Week Reminder",
    message: "Hi {name}! Just a reminder that you're signed up to volunteer at {event} on {date}. Please confirm your attendance by replying YES.",
    timing: "7 days before"
  },
  {
    id: "2",
    name: "3 Day Reminder",
    message: "Hi {name}! {event} is coming up in 3 days. You're scheduled for {station} from {shift}. Reply YES to confirm or NO if you can't make it.",
    timing: "3 days before"
  },
  {
    id: "3",
    name: "1 Day Reminder",
    message: "Hi {name}! Tomorrow is the big day! You're volunteering at {station} starting at {time}. See you there!",
    timing: "1 day before"
  },
  {
    id: "4",
    name: "Morning-of Alert",
    message: "Good morning {name}! Today's the day! Please arrive at {station} by {time}. Reply if you have any issues.",
    timing: "Race morning"
  }
];

export default function MessagesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold">Messages</h1>
          <p className="text-muted-foreground mt-1">
            SMS reminders and communication with volunteers
          </p>
        </div>
        <Button>
          <Send className="w-4 h-4 mr-2" />
          Send Message
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">281</div>
            <p className="text-sm text-muted-foreground">Messages Sent</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-green-600">98.5%</div>
            <p className="text-sm text-muted-foreground">Delivery Rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-primary">92%</div>
            <p className="text-sm text-muted-foreground">Response Rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">2</div>
            <p className="text-sm text-muted-foreground">Scheduled</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Message History */}
        <Card>
          <CardHeader>
            <CardTitle>Message History</CardTitle>
            <CardDescription>Recent and scheduled messages</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {messageHistory.map((msg) => (
              <div 
                key={msg.id} 
                className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    msg.status === "delivered" ? "bg-green-100" : "bg-amber-100"
                  }`}>
                    {msg.status === "delivered" ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <Clock className="w-5 h-5 text-amber-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{msg.template}</p>
                    <p className="text-sm text-muted-foreground">{msg.sentAt}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant={msg.status === "delivered" ? "default" : "secondary"}>
                    {msg.status}
                  </Badge>
                  {msg.status === "delivered" && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {msg.opened}/{msg.sentTo} opened
                    </p>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Message Templates */}
        <Card>
          <CardHeader>
            <CardTitle>Message Templates</CardTitle>
            <CardDescription>Pre-configured reminder messages</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {templates.map((template) => (
              <div 
                key={template.id} 
                className="p-4 border border-border rounded-lg space-y-2"
              >
                <div className="flex items-center justify-between">
                  <p className="font-medium">{template.name}</p>
                  <Badge variant="outline">{template.timing}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {template.message}
                </p>
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm">Edit</Button>
                  <Button variant="outline" size="sm">Preview</Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
