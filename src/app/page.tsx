import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Bell, BarChart3, Zap, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">StaffCast</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="#pricing" className="text-muted-foreground hover:text-foreground">
                Pricing
              </Link>
              <Link href="/dashboard">
                <Button variant="outline">Log in</Button>
              </Link>
              <Link href="/dashboard">
                <Button>Start Free Trial</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('/pattern.svg')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/10 border-0">
                Trusted by 500+ race directors
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                No more{" "}
                <span className="text-primary">5AM volunteer panic</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                AI-powered volunteer prediction so you can sleep the night before race day. Know who&apos;ll show up before they don&apos;t.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/dashboard">
                  <Button size="lg" className="text-lg px-8">
                    Start Free Trial
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-white"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">2,500+</span> races managed
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <Card className="relative shadow-2xl border-0">
                <CardHeader className="border-b border-border bg-muted/50">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Coverage Overview</CardTitle>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      Race Day Ready
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Water Station 1</span>
                      <span className="text-green-600 font-medium">95% coverage</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-[95%] bg-green-500 rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Finish Line</span>
                      <span className="text-green-600 font-medium">88% coverage</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-[88%] bg-green-500 rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Medical Tent</span>
                      <span className="text-amber-600 font-medium">72% coverage</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-[72%] bg-amber-500 rounded-full" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground pt-2">
                    💡 3 standby volunteers ready to activate for Medical Tent
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              40% of volunteers ghost on race day
            </h2>
            <p className="text-lg text-muted-foreground">
              Race directors discover gaps at 5AM when replacement is impossible. 
              Critical shortages at water stations, finish lines, and medical tents. 
              Industry still uses spreadsheets.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <Users className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Predict Show-ups</CardTitle>
                <CardDescription>
                  AI scores each volunteer for reliability based on confirmation timing, 
                  past history, and engagement patterns.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <BarChart3 className="w-10 h-10 text-accent mb-2" />
                <CardTitle>See Coverage Gaps</CardTitle>
                <CardDescription>
                  Dashboard shows predicted gaps before they happen. 
                  Know which stations need backup days in advance.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <Bell className="w-10 h-10 text-green-500 mb-2" />
                <CardTitle>Auto-Activate Standby</CardTitle>
                <CardDescription>
                  When confidence drops, automatically reach out to 
                  standby volunteers via SMS. Fill gaps before race day.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything you need for race day confidence
            </h2>
            <p className="text-lg text-muted-foreground">
              From CSV import to SMS reminders, we&apos;ve got your volunteer logistics covered.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "CSV Import", desc: "Upload your volunteer list from RunSignUp, Excel, or Google Sheets" },
              { icon: BarChart3, title: "Reliability Scoring", desc: "Each volunteer gets a score based on confirmation speed and history" },
              { icon: Shield, title: "Coverage Dashboard", desc: "See which stations are at risk and which are fully covered" },
              { icon: Bell, title: "SMS Reminders", desc: "Automatic reminders at 1 week, 3 days, 1 day, and morning-of" },
              { icon: Zap, title: "Standby Activation", desc: "One-click activation of backup volunteers when needed" },
              { icon: CheckCircle, title: "Post-Event Tracking", desc: "Record who showed up to improve future predictions" },
            ].map((feature, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="w-8 h-8 text-primary mb-2" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Start free for your first event. No credit card required.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="relative">
              <CardHeader>
                <CardTitle>Community</CardTitle>
                <CardDescription>For small local races</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">$75</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {["Up to 100 volunteers", "Basic reliability scoring", "SMS reminders", "Email support"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant="outline">Get Started</Button>
              </CardContent>
            </Card>
            <Card className="relative border-primary shadow-lg scale-105">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-white">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle>Regional</CardTitle>
                <CardDescription>For growing race series</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">$150</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {["Up to 500 volunteers", "Advanced AI predictions", "Standby auto-activation", "Priority support", "Multi-event tracking"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/dashboard">
                  <Button className="w-full">Start Free Trial</Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="relative">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For race series & timing companies</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">$500</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {["Unlimited volunteers", "Custom integrations", "White-label option", "Dedicated account manager", "API access"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant="outline">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to sleep better before race day?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join 500+ race directors who trust StaffCast for their volunteer logistics.
          </p>
          <Link href="/dashboard">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Start Your Free Trial
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">StaffCast</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2026 StaffCast. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
