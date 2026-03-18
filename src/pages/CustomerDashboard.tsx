import { DashboardLayout } from "@/components/DashboardLayout";
import { CustomerSidebar } from "@/components/CustomerSidebar";
import { MetricCard } from "@/components/MetricCard";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarCheck, Heart, ShoppingCart, DollarSign } from "lucide-react";

const metrics = [
  { title: "Active Bookings", value: "3", change: "2 upcoming", changeType: "neutral" as const, icon: CalendarCheck },
  { title: "Favorites", value: "12", change: "+2 this week", changeType: "positive" as const, icon: Heart },
  { title: "Cart Items", value: "4", change: "$1,240 total", changeType: "neutral" as const, icon: ShoppingCart },
  { title: "Total Spent", value: "$8,420", change: "Lifetime", changeType: "neutral" as const, icon: DollarSign },
];

const featuredEquipment = [
  { name: "Sony FX6", category: "Cinema Camera", rate: "$550/day", image: "🎥" },
  { name: "ARRI SkyPanel S60", category: "Lighting", rate: "$180/day", image: "💡" },
  { name: "Sennheiser MKH 416", category: "Microphone", rate: "$45/day", image: "🎙️" },
  { name: "DJI Ronin 4D", category: "Stabilizer", rate: "$400/day", image: "📷" },
  { name: "Blackmagic URSA Mini", category: "Cinema Camera", rate: "$380/day", image: "🎬" },
  { name: "Aputure 300x", category: "Lighting", rate: "$95/day", image: "✨" },
];

const recentBookings = [
  { equipment: "ARRI ALEXA Mini", dates: "Mar 10–14", status: "completed" as const, total: "$6,000" },
  { equipment: "Cooke S4/i Lens Set", dates: "Mar 16–18", status: "confirmed" as const, total: "$1,350" },
  { equipment: "Dana Dolly", dates: "Mar 20–21", status: "pending" as const, total: "$160" },
];

export default function CustomerDashboard() {
  return (
    <DashboardLayout sidebar={<CustomerSidebar />} userName="Customer">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Welcome back, Jordan</h1>
          <p className="text-muted-foreground text-sm">Find and rent the perfect equipment for your next shoot.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => <MetricCard key={m.title} {...m} />)}
        </div>

        {/* Featured Equipment */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Featured Equipment</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredEquipment.map((item) => (
              <Card key={item.name} className="rounded-2xl border-border/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer">
                <CardContent className="p-5">
                  <div className="text-3xl mb-3">{item.image}</div>
                  <h3 className="font-semibold text-sm">{item.name}</h3>
                  <p className="text-xs text-muted-foreground">{item.category}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-sm font-bold text-primary">{item.rate}</span>
                    <Button size="sm" variant="outline" className="rounded-lg text-xs h-7 border-border/50">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Bookings */}
        <Card className="rounded-2xl border-border/50 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold">Recent Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentBookings.map((booking, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-border/30 last:border-0">
                  <div>
                    <p className="text-sm font-medium">{booking.equipment}</p>
                    <p className="text-xs text-muted-foreground">{booking.dates}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <StatusBadge status={booking.status} />
                    <span className="text-sm font-medium">{booking.total}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
