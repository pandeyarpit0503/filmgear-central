import { Card, CardContent } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { Clapperboard, Truck, Camera, Store, Crown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const roles = [
  { id: "driver", icon: Truck, title: "Driver", description: "Transport equipment between locations and sets", route: "/producer" },
  { id: "cameraman", icon: Camera, title: "Camera Man", description: "Manage camera equipment and shooting schedules", route: "/producer" },
  { id: "vendor", icon: Store, title: "Vendor", description: "List and rent out your film equipment", route: "/vendor" },
  { id: "producer", icon: Crown, title: "Producer", description: "Full production management and oversight", route: "/producer" },
];

export default function ProducerLoginPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    const role = roles.find((r) => r.id === selected);
    if (role) navigate(role.route);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-lg space-y-6">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clapperboard className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold">FilmGear Pro</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Select your role</h1>
          <p className="text-sm text-muted-foreground">Choose how you'll use the platform</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {roles.map((role) => (
            <Card
              key={role.id}
              className={cn(
                "rounded-2xl border-border/50 cursor-pointer transition-all hover:shadow-md hover:-translate-y-0.5",
                selected === role.id && "border-primary ring-1 ring-primary shadow-md"
              )}
              onClick={() => setSelected(role.id)}
            >
              <CardContent className="p-5 text-center space-y-3">
                <div className={cn(
                  "mx-auto rounded-xl w-12 h-12 flex items-center justify-center transition-colors",
                  selected === role.id ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                )}>
                  <role.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">{role.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{role.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button
          className="w-full rounded-xl bg-primary hover:bg-primary/90 h-11"
          disabled={!selected}
          onClick={handleContinue}
        >
          Continue
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          <Link to="/login" className="text-primary hover:underline font-medium">← Back to Customer Login</Link>
        </p>
      </div>
    </div>
  );
}
