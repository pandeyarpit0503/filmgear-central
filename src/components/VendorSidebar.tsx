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
import { LayoutDashboard, Package, CalendarCheck, DollarSign, Film, Settings, Clapperboard } from "lucide-react";

const items = [
  { title: "Dashboard", url: "/vendor", icon: LayoutDashboard },
  { title: "Inventory", url: "/vendor/inventory", icon: Package },
  { title: "Bookings", url: "/vendor/bookings", icon: CalendarCheck },
  { title: "Revenue", url: "/vendor/revenue", icon: DollarSign },
  { title: "Equipment", url: "/vendor/equipment", icon: Film },
  { title: "Settings", url: "/vendor/settings", icon: Settings },
];

export function VendorSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <div className="flex h-14 items-center gap-2 px-4 border-b border-sidebar-border">
        <Clapperboard className="h-5 w-5 text-primary shrink-0" />
        {!collapsed && <span className="font-bold text-sm tracking-tight">FilmGear Pro</span>}
      </div>
      <SidebarContent className="py-2">
        <SidebarGroup className="px-2">
          <SidebarGroupLabel className="text-xs font-semibold uppercase tracking-wider text-sidebar-foreground/50 px-2">
            Vendor
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
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
      </SidebarContent>
    </Sidebar>
  );
}
