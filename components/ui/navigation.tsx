"use client";

import Link from "next/link";
import * as React from "react";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./navigation-menu";

interface ComponentItem {
  title: string;
  href: string;
  description: string;
}

interface MenuItem {
  title: string;
  href?: string;
  isLink?: boolean;
  content?: ReactNode | string;
}

interface NavigationProps {
  menuItems?: MenuItem[];
  components?: ComponentItem[];
  industries?: ComponentItem[];
  resources?: ComponentItem[];
  company?: ComponentItem[];
  logo?: ReactNode;
  logoTitle?: string;
  logoDescription?: string;
  logoHref?: string;
}

export default function Navigation({
  menuItems = [
    { title: "Home", content: "home", href: "/", isLink:true }, 
    { title: "Products", content: "products" },
    { title: "Services", content: "components" },
    { title: "Resources", content: "resources" },
    { title: "Company", content: "company" },
  ],
  components = [
    { title: "Cybersecurity Services", href: "/solutions/cyber", description: "" },
    { title: "Cloud & IT Infrastructure", href: "/solutions/cloud/", description: "" },
    { title: "Digital Transformation", href: "/solutions/digital", description: "" },
    { title: "Automation & RPA", href: "/solutions/automation", description: "" },
    { title: "Data & Analytics", href: "/solutions/data-analytics", description: "" },
    { title: "Managed IT & Security Ops", href: "/solutions/manage", description: "" },
    { title: "GRC & Compliance", href: "", description: "" },
  ],


  resources = [
    { title: "Blogs", href: "", description: "" },
    { title: "Case Studies", href: "", description: "" },
    { title: "Knowledge Base", href: "", description: "" },
    { title: "Press Release", href: "", description: "" },
  ],

  company = [
    { title: "About Us", href: "/company/about", description: "" },
    { title: "Careers", href: "/company/careers", description: "" },
    { title: "Contact", href: "/company/contact", description: "" },
  ],

  
}: NavigationProps) {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {menuItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            {item.isLink ? (
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                asChild
              >
                <Link href={item.href || ""}>{item.title}</Link>
              </NavigationMenuLink>
            ) : (
              <>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>

                <NavigationMenuContent>
                  {/* ================= SERVICES ================= */}
                  {item.content === "components" ? (
                    <div className="flex w-[780px] gap-8 p-6">
                      {/* LEFT: SERVICES LIST */}
                      <ul className="space-y-1 list-none p-0">
                        {components.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                            className="py-2"
                          >
                            {component.description}
                          </ListItem>
                        ))}

                        <li className="pt-2  pl-4">
                          <Link
                            href="/services"
                            className="text-sm font-medium text-primary hover:underline"
                          >
                            All Services →
                          </Link>
                        </li>
                      </ul>


                      {/* RIGHT: INFO CARD */}
                      <div className="w-[220px] rounded-xl bg-gradient-to-b from-slate-900 to-slate-800 p-6 text-white">
                        <h4 className="text-lg font-semibold">
                          Need Guidance?
                        </h4>

                        <p className="mt-2 text-sm text-slate-300">
                          Our experts can help design the right security
                          architecture for your needs
                        </p>

                        <Link
                          href="/contact"
                          className="mt-8 block rounded-xl bg-blue-600 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
                        >
                          Book Consultation
                        </Link>
                      </div>
                    </div>

                

                  ) : item.content === "resources" ? (
                    <ul className="grid w-[220px] gap-1 p-4">
                      {resources.map((r) => (
                        <ListItem key={r.title} title={r.title} href={r.href}>
                          {r.description}
                        </ListItem>
                      ))}
                    </ul>

                  ) : item.content === "company" ? (
                    <ul className="grid w-[220px] gap-1 p-4">
                      {company.map((c) => (
                        <ListItem key={c.title} title={c.title} href={c.href}>
                          {c.description}
                        </ListItem>
                      ))}
                    </ul>
                  ) : (
                    item.content
                  )}
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  className,
  title,
  children,
  ...props
}: React.ComponentProps<"a"> & { title: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "block rounded-md px-3 py-2 text-sm no-underline transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="font-medium">{title}</div>
          {children && (
            <p className="text-xs text-muted-foreground">{children}</p>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  );
}

