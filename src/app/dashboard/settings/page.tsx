import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Settings, User, Bell, CreditCard, Link2, Shield } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground mt-1">
          Manage your account and preferences
        </p>
      </div>

      {/* Profile */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <User className="w-5 h-5 text-muted-foreground" />
            <div>
              <CardTitle>Profile</CardTitle>
              <CardDescription>Your account information</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Name</label>
              <Input defaultValue="John Smith" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input defaultValue="john@marathon.org" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Organization</label>
            <Input defaultValue="City Marathon Association" />
          </div>
          <Button>Save Changes</Button>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <div>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Configure alerts and reminders</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Email Notifications</p>
              <p className="text-sm text-muted-foreground">Receive daily coverage reports</p>
            </div>
            <Badge variant="outline" className="text-green-600 border-green-600">Enabled</Badge>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">SMS Alerts</p>
              <p className="text-sm text-muted-foreground">Get notified when coverage drops below threshold</p>
            </div>
            <Badge variant="outline" className="text-green-600 border-green-600">Enabled</Badge>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Coverage Threshold</p>
              <p className="text-sm text-muted-foreground">Alert when station coverage falls below</p>
            </div>
            <div className="flex items-center gap-2">
              <Input className="w-20" defaultValue="75" />
              <span className="text-sm text-muted-foreground">%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Integrations */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Link2 className="w-5 h-5 text-muted-foreground" />
            <div>
              <CardTitle>Integrations</CardTitle>
              <CardDescription>Connect with other services</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-sm">RS</span>
              </div>
              <div>
                <p className="font-medium">RunSignUp</p>
                <p className="text-sm text-muted-foreground">Import volunteers directly</p>
              </div>
            </div>
            <Button variant="outline">Connect</Button>
          </div>
          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm">TW</span>
              </div>
              <div>
                <p className="font-medium">Twilio</p>
                <p className="text-sm text-muted-foreground">SMS messaging</p>
              </div>
            </div>
            <Badge className="bg-green-600">Connected</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Billing */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <CreditCard className="w-5 h-5 text-muted-foreground" />
            <div>
              <CardTitle>Billing</CardTitle>
              <CardDescription>Manage your subscription</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Current Plan</p>
              <p className="text-sm text-muted-foreground">Regional - $150/month</p>
            </div>
            <Button variant="outline">Upgrade</Button>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Next Billing Date</p>
              <p className="text-sm text-muted-foreground">April 1, 2026</p>
            </div>
            <Button variant="ghost" size="sm">View Invoices</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
