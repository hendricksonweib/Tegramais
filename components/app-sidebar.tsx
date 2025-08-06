"use client"

import * as React from "react"
import {
  House,
} from "lucide-react"
import { NavMain } from "../components/nav-main"
import { NavUser } from "../components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "../components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Olá visitante",
    email: "Seja bem-vindo(a)!",
    avatar: "/avatars/shadcn.jpg",
  },
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
            <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
    </>
  )
}
