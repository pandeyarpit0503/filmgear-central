import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type StatusType = "confirmed" | "pending" | "completed" | "overdue" | "active";

interface StatusBadgeProps {
  status: StatusType;
}

const statusConfig: Record<StatusType, { label: string; className: string }> = {
  confirmed: { label: "Confirmed", className: "bg-primary/15 text-primary border-primary/20 hover:bg-primary/20" },
  pending: { label: "Pending", className: "bg-warning/15 text-warning border-warning/20 hover:bg-warning/20" },
  completed: { label: "Completed", className: "bg-success/15 text-success border-success/20 hover:bg-success/20" },
  overdue: { label: "Overdue", className: "bg-destructive/15 text-destructive border-destructive/20 hover:bg-destructive/20" },
  active: { label: "Active", className: "bg-primary/15 text-primary border-primary/20 hover:bg-primary/20" },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];
  return (
    <Badge variant="outline" className={cn("rounded-full text-xs font-medium", config.className)}>
      {config.label}
    </Badge>
  );
}
