
"use client";
import { type VariantProps } from "class-variance-authority";
import { Menu } from "lucide-react";
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
      src="/logo.png"   // 👉 Put your logo name here
      alt="MSPL Logo"
      width={90}
      height={40}
      className="object-contain py-1"

    />
  ),

  // 🔥 Updated text
  name = "",

  homeUrl = "/",
  mobileLinks = [
    { text: "Home", href: "/" },
     { text: "Products", href: "/products" },
    { text: "Services", href: "/services" },
    { text: "Resources", href: "/resources" },
    { text: "company", href: "/company" },

      // ✅ Company pages
  { text: "About Us", href: "/company/about" },
  { text: "Contact", href: "/company/contact" },
  { text: "Career", href: "/company/career" },
  ],
  actions = [
    {
      text: "Request Demo",
      href: "/contact",
      isButton: true,
      variant: "default",
    },
  ],
  showNavigation = true,
  customNavigation,
  className,
}: NavbarProps) {
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

                <nav className="flex flex-col gap-4 text-lg font-medium mt-4">
                  <Link href={homeUrl} className="flex items-center gap-2 text-xl font-bold">
                    {logo}
                    <span>{name}</span>
                  </Link>
                  {mobileLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {link.text}
                    </Link>
                  ))}
                  {/* Mobile actions */}
                  {actions.map((action, index) =>
                    action.isButton ? (
                      <Button key={index} variant={action.variant || "default"} asChild className="w-full">
                        <Link href={action.href}>
                          {action.icon}
                          {action.text}
                          {action.iconRight}
                        </Link>
                      </Button>
                    ) : (
                      <a key={index} href={action.href} className="text-sm">
                        {action.text}
                      </a>
                    ),
                  )}
                </nav>
              </SheetContent>
            </Sheet>

          </NavbarRight>

        </NavbarComponent>
      </div>
    </header>
  );
}

