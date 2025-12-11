import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import LaunchUI from "../../logos/launch-ui";
import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "../../ui/footer";
import { ModeToggle } from "../../ui/mode-toggle";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  showModeToggle?: boolean;
  className?: string;
}

export default function FooterSection({
  logo = <LaunchUI />,
  name = "MountEdge Solutions",
  columns = [
    {
      title: "Quick Links",
      links: [
        { text: "Home", href: "/" },
        { text: "About Us", href: "/about" },
        { text: "Services", href: "/services" },
        { text: "Products", href: "/" },
        { text: "Blog", href: "/" },
        { text: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { text: "Equity Financing", href: "/" },
        { text: "Mentorship", href: "/" },
        { text: "Networking", href: "/" },
        { text: "Due Diligence", href: "/" },
        { text: "Strategic Guidance", href: "/" },
      ],
    },
    {
      title: "Contact",
      links: [
        { text: "+91-91-94-29-694511", href: "tel:+91919429694511" },
        { text: "Sales@mountedgesolutions.com", href: "mailto:Sales@mountedgesolutions.com" },
        { text: "Max Towers, Sector 16B, Noida, 201301", href: "https://maps.google.com" },
      ],
    },
  ],
  copyright = "© 2025 MountEdge Solutions. All rights reserved",
  policies = [
    { text: "Privacy Policy", href: "/" },
    { text: "Terms of Service", href: "/" },
  ],
  showModeToggle = true,
  className,
}: FooterProps) {
  return (
    <footer className={cn("bg-background w-full px-4", className)}>
      <div className="max-w-container mx-auto">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                {logo}
                <h3 className="text-xl font-bold">{name}</h3>
              </div>
            </FooterColumn>
            {columns.map((column, index) => (
              <FooterColumn key={index}>
                <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="text-muted-foreground text-sm"
                  >
                    {link.text}
                  </a>
                ))}
              </FooterColumn>
            ))}
          </FooterContent>
          <FooterBottom>
            <div>{copyright}</div>
            <div className="flex items-center gap-4">
              {policies.map((policy, index) => (
                <a key={index} href={policy.href}>
                  {policy.text}
                </a>
              ))}
              {showModeToggle && <ModeToggle />}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
