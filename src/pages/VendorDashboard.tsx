import { DashboardLayout } from "@/components/DashboardLayout";
import { VendorSidebar } from "@/components/VendorSidebar";
import { MetricCard } from "@/components/MetricCard";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Package, CalendarCheck, DollarSign, Star } from "lucide-react";

const metrics = [
  { title: "Total Equipment", value: "156", change: "+4 this month", changeType: "positive" as const, icon: Package },
  { title: "Active Bookings", value: "23", change: "+3 this week", changeType: "positive" as const, icon: CalendarCheck },
  { title: "Monthly Revenue", value: "$12,480", change: "+9.2%", changeType: "positive" as const, icon: DollarSign },
  { title: "Rating", value: "4.8", change: "Based on 142 reviews", changeType: "neutral" as const, icon: Star },
];

const equipment = [
  { name: "RED Komodo 6K", category: "Camera", status: "active" as const, rate: "$850/day" },
  { name: "Aputure 600d Pro", category: "Lighting", status: "active" as const, rate: "$120/day" },
  { name: "DJI RS 3 Pro", category: "Stabilizer", status: "pending" as const, rate: "$75/day" },
  { name: "Sennheiser MKH 416", category: "Audio", status: "active" as const, rate: "$45/day" },
];

const bookings = [
  { equipment: "RED Komodo 6K", client: "Nova Films", dates: "Mar 15–18", status: "confirmed" as const, total: "$3,400" },
  { equipment: "Aputure 600d Pro", client: "Bright Lens Co.", dates: "Mar 16–17", status: "pending" as const, total: "$240" },
  { equipment: "DJI RS 3 Pro", client: "SteadyCam LLC", dates: "Mar 18–20", status: "confirmed" as const, total: "$225" },
];

export default function VendorDashboard() {
  return (
    <DashboardLayout sidebar={<VendorSidebar />} userName="Vendor">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Vendor Dashboard</h1>
          <p className="text-muted-foreground text-sm">Manage your equipment and bookings.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => <MetricCard key={m.title} {...m} />)}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="rounded-2xl border-border/50 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold">Equipment Inventory</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-border/50 hover:bg-transparent">
                    <TableHead className="text-xs">Equipment</TableHead>
                    <TableHead className="text-xs">Category</TableHead>
                    <TableHead className="text-xs">Status</TableHead>
                    <TableHead className="text-xs text-right">Rate</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {equipment.map((e, i) => (
                    <TableRow key={i} className="border-border/50">
                      <TableCell className="font-medium text-sm">{e.name}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{e.category}</TableCell>
                      <TableCell><StatusBadge status={e.status} /></TableCell>
                      <TableCell className="text-right text-sm font-medium">{e.rate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border/50 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold">Recent Bookings</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-border/50 hover:bg-transparent">
                    <TableHead className="text-xs">Equipment</TableHead>
                    <TableHead className="text-xs">Client</TableHead>
                    <TableHead className="text-xs">Status</TableHead>
                    <TableHead className="text-xs text-right">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bookings.map((b, i) => (
                    <TableRow key={i} className="border-border/50">
                      <TableCell className="font-medium text-sm">{b.equipment}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{b.client}</TableCell>
                      <TableCell><StatusBadge status={b.status} /></TableCell>
                      <TableCell className="text-right text-sm font-medium">{b.total}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
