import { Calendar, CalendarDays, Inbox, Grid } from "lucide-react";
import React from "react";

export interface NavItem {
  id?: string;
  name: string;
  link: string;
  icon: React.ReactNode;
}

export const primaryNavItems: NavItem[] = [
  {
    id: "primary",
    name: "Inbox",
    link: "/loggedin/inbox",
    icon: <Inbox className="w-4 h-4" />,
  },
  {
    name: "Today",
    link: "/loggedin/today",
    icon: <Calendar className="w-4 h-4" />,
  },
  {
    name: "Upcoming",
    link: "/loggedin/upcoming",
    icon: <CalendarDays className="w-4 h-4" />,
  },
  {
    id: "filters",
    name: "Filters & Labels",
    link: "/loggedin/filters-labels",
    icon: <Grid className="w-4 h-4" />,
  },
];
