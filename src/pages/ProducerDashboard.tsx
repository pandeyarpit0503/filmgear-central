import { DashboardLayout } from "@/components/DashboardLayout";
import { ProducerSidebar } from "@/components/ProducerSidebar";
import { MetricCard } from "@/components/MetricCard";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Film,
  Activity,
  DollarSign,
  Gauge,
  Camera,
  Truck,
  Lightbulb,
  Mic,
  Download,
  Plus,
  Users,
  FileText,
  AlertTriangle,
  CreditCard,
  CalendarCheck,
} from "lucide-react";

const metrics = [
  { title: "Film Equipment", value: "2,847", change: "+12% from last month", changeType: "positive" as const, icon: Film },
  { title: "Active Rentals", value: "184", change: "+8% from last week", changeType: "positive" as const, icon: Activity },
  { title: "Monthly Revenue", value: "$48,290", change: "+15.3% from last month", changeType: "positive" as const, icon: DollarSign },
  { title: "Utilization Rate", value: "76%", change: "+2.1% from last week", changeType: "positive" as const, icon: Gauge },
];

const departments = [
  { name: "Camera Dept", icon: Camera, users: 24, equipment: 420, utilization: 82 },
  { name: "Transport & Logistics", icon: Truck, users: 12, equipment: 85, utilization: 71 },
  { name: "Lighting", icon: Lightbulb, users: 18, equipment: 310, utilization: 68 },
  { name: "Audio", icon: Mic, users: 9, equipment: 195, utilization: 74 },
];

const recentRentals = [
  { equipment: "ARRI ALEXA Mini LF", client: "Sunset Productions", date: "Mar 15, 2026", status: "confirmed" as const, price: "$1,200/day" },
  { equipment: "Cooke S7/i Full Frame", client: "Meridian Films", date: "Mar 14, 2026", status: "pending" as const, price: "$450/day" },
  { equipment: "DJI Ronin 2", client: "Apex Studios", date: "Mar 13, 2026", status: "completed" as const, price: "$320/day" },
  { equipment: "SkyPanel S60-C", client: "Blue Hour Media", date: "Mar 12, 2026", status: "confirmed" as const, price: "$180/day" },
  { equipment: "Sound Devices 888", client: "Echo Audio Co.", date: "Mar 11, 2026", status: "pending" as const, price: "$275/day" },
];

const alerts = [
  { icon: AlertTriangle, message: "ARRI Amira #12 — Maintenance due in 3 days", type: "warning" },
  { icon: CalendarCheck, message: "New booking request from Pinnacle Films", type: "info" },
  { icon: CreditCard, message: "Payment received — $3,400 from Sunset Productions", type: "success" },
  { icon: AlertTriangle, message: "Zeiss CP.3 Lens Set — Overdue return by 2 days", type: "warning" },
];

export default function ProducerDashboard() {
  return (
    <DashboardLayout sidebar={<ProducerSidebar />} userName="Producer">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Welcome back, Alex</h1>
            <p className="text-muted-foreground text-sm">Here's what's happening with your production today.</p>
          </div>
          <Button variant="outline" className="rounded-xl border-border/50 gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </div>

        {/* Metrics */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <MetricCard key={m.title} {...m} />
          ))}
        </div>

        {/* Department Overview */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Department Overview</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map((dept) => (
              <Card key={dept.name} className="rounded-2xl border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-primary/10 p-2.5">
                      <dept.icon className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm">{dept.name}</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <p className="text-lg font-bold">{dept.users}</p>
                      <p className="text-xs text-muted-foreground">Users</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold">{dept.equipment}</p>
                      <p className="text-xs text-muted-foreground">Equipment</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold">{dept.utilization}%</p>
                      <p className="text-xs text-muted-foreground">Util.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Recent Rentals */}
          <div className="lg:col-span-2">
            <Card className="rounded-2xl border-border/50 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold">Recent Equipment Rentals</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="border-border/50 hover:bg-transparent">
                      <TableHead className="text-xs">Equipment</TableHead>
                      <TableHead className="text-xs">Client</TableHead>
                      <TableHead className="text-xs">Date</TableHead>
                      <TableHead className="text-xs">Status</TableHead>
                      <TableHead className="text-xs text-right">Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentRentals.map((rental, i) => (
                      <TableRow key={i} className="border-border/50">
                        <TableCell className="font-medium text-sm">{rental.equipment}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{rental.client}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{rental.date}</TableCell>
                        <TableCell><StatusBadge status={rental.status} /></TableCell>
                        <TableCell className="text-right text-sm font-medium">{rental.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Alerts & Quick Actions */}
          <div className="space-y-6">
            <Card className="rounded-2xl border-border/50 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold">Equipment Alerts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {alerts.map((alert, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <div className="rounded-lg bg-secondary p-1.5 mt-0.5">
                      <alert.icon className="h-3.5 w-3.5 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{alert.message}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-border/50 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full rounded-xl bg-primary hover:bg-primary/90 gap-2 justify-start">
                  <Plus className="h-4 w-4" /> Add Film Gear
                </Button>
                <Button variant="outline" className="w-full rounded-xl border-border/50 gap-2 justify-start">
                  <Users className="h-4 w-4" /> Manage Team
                </Button>
                <Button variant="outline" className="w-full rounded-xl border-border/50 gap-2 justify-start">
                  <FileText className="h-4 w-4" /> Full Reports
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
