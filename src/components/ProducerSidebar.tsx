import { useLocation } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  LayoutDashboard,
  Film,
  CalendarCheck,
  Activity,
  BarChart3,
  Package,
  FileText,
  Camera,
  ShoppingCart,
  Truck,
  Fuel,
  MapPin,
  Users,
  ImageIcon,
  User,
  Settings,
  ChevronRight,
  Clapperboard,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface SidebarSection {
  label: string;
  collapsible?: boolean;
  items: { title: string; url: string; icon: any }[];
}

const sections: SidebarSection[] = [
  {
    label: "Main",
    items: [
      { title: "Dashboard", url: "/producer", icon: LayoutDashboard },
      { title: "Film Equipment", url: "/producer/equipment", icon: Film },
      { title: "Rental Bookings", url: "/producer/bookings", icon: CalendarCheck },
      { title: "Active Rentals", url: "/producer/active-rentals", icon: Activity },
      { title: "Reports & Analytics", url: "/producer/reports", icon: BarChart3 },
    ],
  },
  {
    label: "Camera Dept",
    collapsible: true,
    items: [
      { title: "Asset Handover", url: "/producer/asset-handover", icon: Package },
      { title: "RFQ Management", url: "/producer/rfq", icon: FileText },
      { title: "Camera Reports", url: "/producer/camera-reports", icon: Camera },
      { title: "Expendables", url: "/producer/expendables", icon: ShoppingCart },
    ],
  },
  {
    label: "Transport",
    collapsible: true,
    items: [
      { title: "Trip Logger", url: "/producer/trip-logger", icon: Truck },
      { title: "Fuel Entry", url: "/producer/fuel-entry", icon: Fuel },
      { title: "Geofence", url: "/producer/geofence", icon: MapPin },
    ],
  },
  {
    label: "Operations",
    collapsible: true,
    items: [
      { title: "Service Personnel", url: "/producer/personnel", icon: Users },
      { title: "Photo Verification", url: "/producer/photo-verify", icon: ImageIcon },
    ],
  },
  {
    label: "Settings",
    collapsible: true,
    items: [
      { title: "Profile", url: "/producer/profile", icon: User },
      { title: "Settings", url: "/producer/settings", icon: Settings },
    ],
  },
];

export function ProducerSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <div className="flex h-14 items-center gap-2 px-4 border-b border-sidebar-border">
        <Clapperboard className="h-5 w-5 text-primary shrink-0" />
        {!collapsed && <span className="font-bold text-sm tracking-tight">FilmGear Pro</span>}
      </div>
      <SidebarContent className="py-2">
        {sections.map((section) => (
          <SidebarSectionGroup
            key={section.label}
            section={section}
            collapsed={collapsed}
            currentPath={currentPath}
          />
        ))}
      </SidebarContent>
    </Sidebar>
  );
}

function SidebarSectionGroup({
  section,
  collapsed,
  currentPath,
}: {
  section: SidebarSection;
  collapsed: boolean;
  currentPath: string;
}) {
  const hasActive = section.items.some((i) => currentPath === i.url);
  const [open, setOpen] = useState(hasActive || !section.collapsible);

  if (section.collapsible && !collapsed) {
    return (
      <Collapsible open={open} onOpenChange={setOpen} className="px-2">
        <CollapsibleTrigger className="flex items-center gap-2 w-full px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-sidebar-foreground/50 hover:text-sidebar-foreground transition-colors">
          <ChevronRight className={cn("h-3 w-3 transition-transform", open && "rotate-90")} />
          {section.label}
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenu>
            {section.items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <NavLink
                    to={item.url}
                    end
                    className="hover:bg-sidebar-accent/50 rounded-lg"
                    activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    <span>{item.title}</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <SidebarGroup className="px-2">
      {!collapsed && (
        <SidebarGroupLabel className="text-xs font-semibold uppercase tracking-wider text-sidebar-foreground/50 px-2">
          {section.label}
        </SidebarGroupLabel>
      )}
      <SidebarGroupContent>
        <SidebarMenu>
          {section.items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <NavLink
                  to={item.url}
                  end
                  className="hover:bg-sidebar-accent/50 rounded-lg"
                  activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {!collapsed && <span>{item.title}</span>}
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
