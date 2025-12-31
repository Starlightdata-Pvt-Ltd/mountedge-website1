"use client";

import Link from "next/link";
import * as React from "react";
import { ReactNode } from "react";
import { Square, Grid2X2 } from "lucide-react";

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
    { title: "Home", content: "home", href: "/", isLink: true },
    { title: "Products", content: "products" },
    { title: "Services", content: "components", href: "/services" },
    { title: "Resources", content: "resources" },
    { title: "Company", content: "company" },
  ],

  components = [
    { title: "Cybersecurity Services", href: "/solutions/cyber", description: "" },
    { title: "Cloud & IT Infrastructure", href: "/solutions/cloud/", description: "" },
    { title: "Digital Transformation", href: "/solutions/digital", description: "" },
    { title: "Automation & RPA", href: "/solutions/automation", description: "" },
    { title: "Data & Analytics", href: "/solutions/analytics", description: "" },
    { title: "Managed IT & Security Ops", href: "/solutions/manage", description: "" },
    { title: "GRC & Compliance", href: "/solutions/grc", description: "" },
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
      <div className="-mt-3">
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
                    {/* ================= PRODUCTS ================= */}
                    {item.content === "products" ? (
                      <div className="flex w-full gap-1 rounded-xl bg-white p-2">
                        {/* LEFT */}
                        <div className="w-[340px] space-y-1">
                          <div
                            className="rounded-lg px-2 py-1.5 cursor-pointer transition-colors
hover:bg-accent hover:text-accent-foreground"
                          role="button"
                          tabIndex={0}
                        >
                          <h4 className="text-sm font-semibold group-hover:text-black-600">
                            Zero Trust Browser
                          </h4>
                          <p className="text-xs text-slate-900">
                            Secure browsing with built-in zero trust
                          </p>
                        </div>

                        <div
                          className="rounded-lg px-2 py-1.5 cursor-pointer transition-colors
hover:bg-accent hover:text-accent-foreground"

                  
                          role="button"
                          tabIndex={0}
                        >
                          <h4 className="text-sm font-semibold group-hover:text-black-600">
                            Micro Firewall Network (MFN)
                          </h4>
                          <p className="text-xs text-slate-900">
                            Network segmentation and enforcement
                          </p>
                        </div>

                        <div
                          className="rounded-lg px-2 py-1.5 cursor-pointer transition-colors
hover:bg-accent hover:text-accent-foreground"

                          role="button"
                          tabIndex={0}
                        >
                          <h4 className="text-sm font-semibold group-hover:text-black-600">
                            Secure Access Suite
                          </h4>
                          <p className="text-xs text-slate-900">
                            Complete access management solution
                          </p>
                        </div>

                        <Link
                          href="/products"
                          className="block px-4 pt-1 text-xs font-medium text-blue-600 hover:text-blue-700 hover:underline"

                        >
                          All Products
                        </Link>

                        <div className="mt-2 rounded-lg border-t border-slate-200 pt-2 px-2">
                          <p className="mb-2 text-[10px] uppercase tracking-wide text-slate-900">
                            Coming Soon
                          </p>

                          <div className="flex items-center justify-between py-1 text-[11px] text-slate-900">
                            <span>Identity Layer</span>
                            <span className="rounded-full bg-slate-200 px-2 py-[2px] text-[10px]">
                              Coming Soon
                            </span>
                          </div>

                          <div className="flex justify-between text-[11px] leading-tight text-slate-00">
                            <span>Analytics Engine</span>
                            <span className="rounded-full bg-slate-200 px-2 text-[10px]">
                              Coming Soon
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* RIGHT CARD */}
                    <div className="w-[240px] rounded-2xl bg-gradient-to-b from-blue-900 to-blue-800 p-5 text-white flex flex-col">
                      <h3 className="text-sm font-semibold">
                        Unified with the MSPL Platform
                      </h3>

                      <p className="mt-1 text-xs text-blue-100">
                        Zero Trust security across browser, network and access layers
                      </p>

                      <div className="mt-3 flex gap-3">
                        {/* Icon 1 */}
                        <button
                          className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10
                 border border-white/20 text-blue-300 hover:bg-white/20
                 transition transform hover:scale-105"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                            <rect x="4" y="4" width="16" height="16" rx="3" />
                          </svg>
                        </button>

                        {/* Icon 2 */}
                        <button
                          className="flex h-10 w-10 items-center justify-center rounded-lg
                 bg-gradient-to-br from-teal-500 to-cyan-500 text-white
                 hover:opacity-90 transition transform hover:scale-105"
                        >
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <circle cx="3.5" cy="3.5" r="1.2" fill="white" />
                            <circle cx="10.5" cy="3.5" r="1.2" fill="white" />
                            <circle cx="3.5" cy="10.5" r="1.2" fill="white" />
                            <circle cx="10.5" cy="10.5" r="1.2" fill="white" />
                          </svg>
                        </button>
                      </div>

                      {/* PUSHED TO BOTTOM */}
                      <Link
                        href="/platform"
                        className="mt-auto pt-4 inline-block text-xs font-medium
             text-blue-200 hover:text-white
             underline underline-offset-4 transition"
                      >
                        → Explore Platform
                      </Link>
                    </div>
                  </div>


                    /* ================= SERVICES ================= */
                  ) : item.content === "components" ? (
                  <div className="flex w-[490px] gap-9 p-2">
                    <ul className="space-y-2 list-none p-0">
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

                      <li className="pt-2 pl-4">
                        <Link
                          href="/services"
                          className="text-sm text-blue-500 font-medium  hover:underline"
                        >
                          All Services →
                        </Link>
                      </li>
                    </ul>

                    <div className="w-[220px] rounded-xl bg-gradient-to-b from-blue-900 to-blue-800 p-6 text-white">
                      <h4 className="text-lg font-semibold">Need Guidance?</h4>
                      <p className="mt-2 text-sm text-slate-300">
                        Our experts can help design the right security architecture
                      </p>
                      <Link
                        href="/company/contact"
                        className="mt-8 block rounded-xl bg-blue-600 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700"
                      >
                        Book Consultation
                      </Link>
                    </div>
                  </div>

                  ) : item.content === "resources" ? (
                  <ul className="grid w-[220px] gap-1 p-2">
                    {resources.map((r) => (
                      <ListItem key={r.title} title={r.title} href={r.href} />
                    ))}
                  </ul>

                  ) : item.content === "company" ? (
                  <ul className="grid w-[220px] gap-1 p-2">
                    {company.map((c) => (
                      <ListItem key={c.title} title={c.title} href={c.href} />
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
    </div>
    </NavigationMenu >
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
            "block rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
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
