"use client"
import Header from "./Header"
import * as React from "react"
import {
  House,
} from "lucide-react"

import { NavMain } from "../components/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarRail,
} from "../components/ui/sidebar"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: House,
      items: [
        {
          title: "Catálogo",
          url: "#",
        },
        {
          title: "Eventos",
          url: "#",
        },
        {
          title: "Forúm",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <>
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      
      <SidebarRail />
    </Sidebar>
    </>
  )
}
