"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Users, 
  MapPin, 
  UserCheck, 
  MessageSquare, 
  Settings,
  Zap,
  Bell,
  LogOut
} from "lucide-react";

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Overview" },
  { href: "/dashboard/volunteers", icon: Users, label: "Volunteers" },
  { href: "/dashboard/stations", icon: MapPin, label: "Stations" },
  { href: "/dashboard/standby", icon: UserCheck, label: "Standby" },
  { href: "/dashboard/messages", icon: MessageSquare, label: "Messages" },
  { href: "/dashboard/settings", icon: Settings, label: "Settings" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <header className="border-b border-border bg-white sticky top-0 z-50">
        <div className="flex items-center justify-between h-16 px-6">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">StaffCast</span>
            </Link>
            <div className="hidden md:flex items-center gap-1 bg-secondary/50 rounded-lg px-3 py-1.5">
              <span className="text-sm text-muted-foreground">Event:</span>
              <span className="text-sm font-medium">Spring City Marathon 2026</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
            </Button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent" />
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-border bg-white h-[calc(100vh-4rem)] sticky top-16">
          <nav className="p-4 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start gap-3",
                      isActive && "bg-secondary text-foreground font-medium"
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </nav>
          <div className="absolute bottom-4 left-4 right-4">
            <Link href="/">
              <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground">
                <LogOut className="w-5 h-5" />
                Sign Out
              </Button>
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
