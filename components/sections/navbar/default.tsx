
"use client";

import { useState } from "react";
import { type VariantProps } from "class-variance-authority";
import { Menu, ChevronDown, ChevronUp } from "lucide-react";
import { ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Button, buttonVariants } from "../../ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "../../ui/navbar";
import Navigation from "../../ui/navigation";
import Image from "next/image"; // ✅ Added this
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../../ui/sheet";

interface NavbarLink {
  text: string;
  href: string;
}

interface NavbarActionProps {
  text: string;
  href: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
  isButton?: boolean;
}

interface NavbarProps {
  logo?: ReactNode;
  name?: string;
  homeUrl?: string;
  mobileLinks?: NavbarLink[];
  actions?: NavbarActionProps[];
  showNavigation?: boolean;
  customNavigation?: ReactNode;
  className?: string;
}

export default function Navbar({
  // 🔥 Updated logo to use your image
  logo = (
    <Image
      src="/logo.png"
      alt="MSPL Logo"
      width={130}           // max desktop width
      height={60}
      className="object-contain py-1 w-24 sm:w-25 md:w-32 lg:w-36 h-auto"
    />

  ),

  // 🔥 Updated text
  name = "",

  homeUrl = "/",
  actions = [
    {
      text: "Request Demo",
      href: "/company/contact",
      isButton: true,
      variant: "default",
    },
  ],
  showNavigation = true,
  customNavigation,
  className,
}: NavbarProps) {


  // --- Desktop + Mobile menu structure ---
  const menuItems = [
    { title: "Home", href: "/", isLink: true },
    { title: "Products", href: "/products" },
    { title: "Services", content: "components", href: "/services" },
    { title: "Resources", content: "resources" },
    { title: "Company", content: "company" },
  ];

  const components = [
    { title: "Cybersecurity Services", href: "/solutions/cyber" },
    { title: "Cloud & IT Infrastructure", href: "/solutions/cloud/" },
    { title: "Digital Transformation", href: "/solutions/digital" },
    { title: "Automation & RPA", href: "/solutions/automation" },
    { title: "Data & Analytics", href: "/solutions/analytics" },
    { title: "Managed IT & Security Ops", href: "/solutions/manage" },
    { title: "GRC & Compliance", href: "/solutions/grc" },
  ];

  const resources = [
    { title: "Blogs", href: "/resources/blogs" },
    { title: "Case Studies", href: "/resources/case-studies" },
    { title: "Knowledge Base", href: "/resources/kb" },
    { title: "Press Release", href: "/resources/press" },
  ];

  const company = [
    { title: "About Us", href: "/company/about" },
    { title: "Careers", href: "/company/careers" },
    { title: "Contact", href: "/company/contact" },
  ];

  const getSubmenu = (content: string | undefined) => {
    if (content === "components") return components;
    if (content === "resources") return resources;
    if (content === "company") return company;
    return null;
  };

  // State for mobile submenu open/close
  const [openMap, setOpenMap] = useState<Record<number, boolean>>({});
  const toggleOpen = (index: number) => {
    setOpenMap(prev => ({ ...prev, [index]: !prev[index] }));
  };




  return (
    <header className={cn("sticky top-0 z-50 -mb-4 px-4 pb-4", className)}>
      <div className="fade-bottom bg-background/15 absolute left-0 h-24 w-full backdrop-blur-lg"></div>
      <div className="max-w-container relative mx-auto">
        <NavbarComponent>
          <NavbarLeft>
            <Link
              href={homeUrl}
              className="flex items-center gap-2 text-xl font-bold"
            >
              {logo}
              {name}
            </Link>
          </NavbarLeft>
          <NavbarRight className="flex items-center gap-2">
            {/* Desktop Navigation */}
            {showNavigation && (
              <div className="hidden md:flex items-center gap-4">
                {customNavigation || <Navigation />}
              </div>
            )}

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-2">
              {actions.map((action, index) =>
                action.isButton ? (
                  <Button key={index} variant={action.variant || "default"} asChild>
                    <Link href={action.href}>
                      {action.icon}
                      {action.text}
                      {action.iconRight}
                    </Link>
                  </Button>
                ) : (
                  <Link key={index} href={action.href} className="text-sm">
                    {action.text}
                  </Link>
                ),
              )}
            </div>

            {/* Mobile Hamburger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="w-5 h-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="p-6 w-64">
                {/* Add a header and title for accessibility */}
                <SheetHeader>
                  <SheetTitle>
                    <VisuallyHidden>Navigation Menu</VisuallyHidden>
                  </SheetTitle>

                </SheetHeader>



                <nav className="flex flex-col gap-2 text-base font-medium mt-4">
                  {/* Logo at top of mobile menu */}
                  <Link href={homeUrl} className="flex items-center gap-2 mb-4">
                    {logo}
                    {name && <span className="font-bold">{name}</span>}
                  </Link>

                  {/* Home button as first link */}
                  <Link
                    href="/"
                    className="block px-2 py-2 rounded hover:bg-gray-100 font-semibold"
                  >
                    Home
                  </Link>

                  {/* Render the rest of menu items */}
                  {menuItems.map((item, idx) => {
                    const submenu = getSubmenu(item.content);
                    const isOpen = !!openMap[idx];

                    // Skip Home because we already added it
                    if (item.title === "Home") return null;

                    if (!submenu) {
                      return (
                        <Link
                          key={idx}
                          href={item.href || "/"}
                          className="block px-2 py-2 rounded hover:bg-gray-100"
                        >
                          {item.title}
                        </Link>
                      );
                    }

                    return (
                      <div key={idx} className="w-full">
                        <button
                          onClick={() => toggleOpen(idx)}
                          className="w-full flex items-center justify-between px-2 py-2 rounded hover:bg-gray-100"
                        >
                          <span>{item.title}</span>
                          <span className="ml-2">
                            {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </span>
                        </button>

                        {isOpen && submenu && (
                          <div className="mt-1 ml-3 flex flex-col gap-1">
                            {submenu.map((s, sIdx) => (
                              <Link
                                key={sIdx}
                                href={s.href}
                                className="px-2 py-2 rounded hover:bg-gray-200 text-sm"
                              >
                                {s.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </nav>

                {/* Mobile Request Demo Button */}
                <div className="mt-6">
                  {actions.map((action, index) =>
                    action.isButton ? (
                      <Button
                        key={index}
                        variant={action.variant || "default"}
                        className="w-full"
                        asChild
                      >
                        <Link href={action.href}>
                          {action.text}
                        </Link>
                      </Button>
                    ) : null
                  )}
                </div>

              </SheetContent>
            </Sheet>

          </NavbarRight>

        </NavbarComponent>
      </div>
    </header>
  );
}

