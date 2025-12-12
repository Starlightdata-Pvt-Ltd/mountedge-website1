 /*"use client";

import Link from "next/link";
import * as React from "react";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import LaunchUI from "../logos/launch-ui";
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
  content?: ReactNode;
}

interface NavigationProps {
  menuItems?: MenuItem[];
  components?: ComponentItem[];
  logo?: ReactNode;
  logoTitle?: string;
  logoDescription?: string;
  logoHref?: string;
  introItems?: {
    title: string;
    href: string;
    description: string;
  }[];
}

export default function Navigation({
  menuItems = [
    {
      title: "Home",
      isLink: true,
      href: "/",
    },
    {
      title: "About",
      isLink: true,
      href: "/about",
    },
    {
      title: "Services",
      isLink: true,
      href: "/services",
    },
    {
      title: "Contact",
      isLink: true,
      href: "/contact",
    },
    {
      title: "Components",
      content: "components",
    },
  ],
  components = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ],
  logo = <LaunchUI />,
  logoTitle = "Launch UI",
  logoDescription = "Landing page template built with React, Shadcn/ui and Tailwind that you can copy/paste into your project.",
  logoHref = "https://www.launchuicomponents.com/",
  introItems = [
    {
      title: "Introduction",
      href: "https://www.launchuicomponents.com/",
      description:
        "Re-usable components built using Radix UI and Tailwind CSS.",
    },
    {
      title: "Installation",
      href: "https://www.launchuicomponents.com/",
      description: "How to install dependencies and structure your app.",
    },
    {
      title: "Typography",
      href: "https://www.launchuicomponents.com/",
      description: "Styles for headings, paragraphs, lists...etc",
    },
  ],
}: NavigationProps) {
  return (
    <NavigationMenu className="hidden md:flex">
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
                  {item.content === "default" ? (
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="from-muted/30 to-muted/10 flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                            href={logoHref}
                          >
                            {logo}
                            <div className="mt-4 mb-2 text-lg font-medium">
                              {logoTitle}
                            </div>
                            <p className="text-muted-foreground text-sm leading-tight">
                              {logoDescription}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      {introItems.map((intro, i) => (
                        <ListItem key={i} href={intro.href} title={intro.title}>
                          {intro.description}
                        </ListItem>
                      ))}
                    </ul>
                  ) : item.content === "components" ? (
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
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
          data-slot="list-item"
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none",
            className,
          )}
          {...props}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
} */

  "use client";

import Link from "next/link";
import * as React from "react";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import LaunchUI from "../logos/launch-ui";
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
  content?: ReactNode;
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
  introItems?: {
    title: string;
    href: string;
    description: string;
  }[];
}

export default function Navigation({
  menuItems = [
    {
      title: "Product",
      content: "default",
    },
    {
      title: "Services",
      content: "components",
    },

    {
      title: "Industries",
      content: "industries", // 👈 UPDATED
    },

    {
      title: "Resources",
      content: "resources",
    },

    {
      title: "Company",
      content: "company",
    },
  ],

  components = [
    {
      title: "Cybersecurity Services",
      href: "",
      description: "",
    },
    {
      title: "Cloud & IT Infrastructure",
      href: "",
      description: "",
    },
    {
      title: "Digital Transformation",
      href: "",
      description: "",
    },
    {
      title: "Automation & RPA",
      href: "",
      description: "",
    },
    {
      title: "Data & Analytics",
      href: "",
      description: "",
    },
    {
      title: "Managed IT & Security OPs",
      href: "",
      description: "",
    },
    {
      title: "GRC & Compilance",
      href: "",
      description: "",
    },
  ],

  // ⭐⭐⭐ ADDED INDUSTRIES LIST
  industries = [
    { title: "Banking & Finance", href: "", description: "" },
    { title: "Healthcare", href: "", description: "" },
    { title: "Retail & E-commerce", href: "", description: "" },
    { title: "Manufacturing", href: "", description: "" },
    { title: "Telecommunications", href: "", description: "" },
    { title: "Education & EdTech", href: "", description: "" },
  ],

  // Added Resources List 
  resources = [
    {
      title: "Blogs",
      href: "",
      description: "",
    },
    {
      title: "Case Studies",
      href: "",
      description: "",
    },
    {
      title: "Whitepapers",
      href: "",
      description: "",
    },
    {
      title: "Reports",
      href: "",
      description: "",
    },
    {
      title: "Press Release",
      href: "",
      description: "",
    },
  ],

  company = [
    {
      title: "About Us",
      href: "",
      description: "",
    },
    {
      title: "Leadership",
      href: "",
      description: "",
    },
    {
      title: "Careers",
      href: "",
      description: "",
    },
    {
      title: "Contact",
      href: "",
      description: "",
    },
    {
      title: "Culture",
      href: "",
      description: "",
    },
  ],

  
  logo = <LaunchUI />,
  logoTitle = "",
  logoDescription = "",
  logoHref = "",
  introItems = [
    {
      title: "",
      href: "",
      description: "",
    },
    {
      title: "",
      href: "",
      description: "",
    },
    {
      title: "",
      href: "",
      description: "",
    },
  ],
}: NavigationProps) {
  return (
    <NavigationMenu className="hidden md:flex ml-auto justify-end pr-6">
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
                <NavigationMenuContent  >
                  {item.content === "default" ? (
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="from-muted/30 to-muted/10 flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                            href={logoHref}
                          >
                            {logo}
                            <div className="mt-4 mb-2 text-lg font-medium">
                              {logoTitle}
                            </div>
                            <p className="text-muted-foreground text-sm leading-tight">
                              {logoDescription}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      {introItems.map((intro, i) => (
                        <ListItem key={i} href={intro.href} title={intro.title}>
                          {intro.description}
                        </ListItem>
                      ))}
                    </ul>
                  ) : item.content === "components" ? (
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols- lg:w-[600px]">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>

                  ) : item.content === "industries" ? ( // ⭐⭐⭐ ADDED BLOCK
                    <ul className="grid w-[150px] gap-0.5 p-3 md:w-[150px] md:grid-cols-1 lg:w-[200px]">

                      {industries.map((industry) => (
                        <ListItem
                          key={industry.title}
                          title={industry.title}
                          href={industry.href}
                        >
                          {industry.description}
                        </ListItem>
                      ))}
                    </ul>

                  ) : item.content === "resources" ? (
                   <ul className="grid w-[150px] gap-0.5 p-3 md:w-[150px] md:grid-cols-1 lg:w-[200px]">
                      {resources.map((r) => (
                        <ListItem key={r.title} title={r.title} href={r.href}>
                          {r.description}
                        </ListItem>
                      ))}
                    </ul>
                  ) : item.content === "company" ? (
                   <ul className="grid w-[150px] gap-0.5 p-3 md:w-[150px] md:grid-cols-1 lg:w-[200px]">
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
          data-slot="list-item"
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none",
            className
          )}
          {...props}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}

