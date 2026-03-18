import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Film,
  Package,
  CalendarCheck,
  BarChart3,
  Shield,
  Wrench,
  ArrowRight,
  Clapperboard,
} from "lucide-react";

const features = [
  { icon: Package, title: "Inventory Management", description: "Track all your film equipment in one centralized dashboard with real-time availability." },
  { icon: CalendarCheck, title: "Instant Booking", description: "Streamline rental requests with automated booking confirmations and scheduling." },
  { icon: BarChart3, title: "Analytics", description: "Gain insights into equipment utilization, revenue, and rental trends." },
  { icon: Shield, title: "Secure Payments", description: "Process payments securely with built-in invoicing and payment tracking." },
  { icon: Wrench, title: "Maintenance Tracking", description: "Schedule and log equipment maintenance to prevent downtime." },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <Clapperboard className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold tracking-tight">FilmGear Pro</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild className="rounded-xl">
              <Link to="/login">Log in</Link>
            </Button>
            <Button asChild className="rounded-xl bg-primary hover:bg-primary/90">
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 pt-24 pb-20 text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
            <Film className="h-3.5 w-3.5 text-primary" />
            Equipment Rental + Production Management
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Manage Your Equipment Rentals{" "}
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Like a Pro
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The all-in-one platform for film equipment rental marketplaces and production management.
            Inventory tracking, instant booking, analytics, and team coordination — all in one place.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <Button size="lg" asChild className="rounded-xl bg-primary hover:bg-primary/90 h-12 px-8 text-base">
              <Link to="/signup">Start as Vendor</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-xl h-12 px-8 text-base border-border/50">
              <Link to="/customer">
                Browse Equipment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Everything you need to manage film gear</h2>
          <p className="mt-3 text-muted-foreground">Powerful tools built for production teams and equipment vendors.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {features.map((feature) => (
            <Card key={feature.title} className="rounded-2xl border-border/50 bg-card shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
              <CardContent className="p-6 space-y-3">
                <div className="rounded-xl bg-primary/10 w-10 h-10 flex items-center justify-center">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/50 bg-card/50">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Ready to streamline your production?</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Join thousands of production teams managing their equipment rentals with FilmGear Pro.
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button size="lg" asChild className="rounded-xl bg-primary hover:bg-primary/90 h-12 px-8">
              <Link to="/signup">Get Started Free</Link>
            </Button>
            <Button size="lg" variant="ghost" asChild className="rounded-xl h-12 px-8">
              <Link to="/producer-login">Producer Login</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="container mx-auto px-6 flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clapperboard className="h-4 w-4 text-primary" />
            <span>FilmGear Pro</span>
          </div>
          <p>© 2026 FilmGear Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
