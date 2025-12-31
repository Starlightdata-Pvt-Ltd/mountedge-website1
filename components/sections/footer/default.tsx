import { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "../../ui/footer";

import Link from "next/link";


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
  logo = (
    <Image
      src="/mountedge.png"
      alt="MSPL Logo"
      width={140}
      height={60}
      className="object-contain py-1"
    />
  ),
  name = "",
  columns = [
    {
  title: "Products",
  links: [
    { text: "Zero Trust Browser", href: "/" },
    { text: "Micro firewall Network", href: "/" },
    { text: "Secure Access Suite", href: "/" },
    { text: "Product Archive", href: "/" },
    { text: "Plateform", href: "/" },

    // Coming Soon
    { text: "Identity Layer (Coming Soon)", href: "/" },
    { text: "Analytics Engine (Coming Soon)", href: "/" },
  ],
},


    {
      title: "Services",
      links: [
        { text: "Cybersecurity Services", href: "/solutions/cyber" },
        { text: "Cloud & IT Infrastructure", href: "/solutions/cloud/" },
        { text: "Digital Transformation", href: "/solutions/digital" },
        { text: "Automation & RPA", href: "/solutions/automation" },
        { text: "Managed IT & Security Ops", href: "/solutions/manage" },
        { text: "Data & Analytics", href: "/solutions/analytics" },
        { text: "GRC / Compliance Services", href: "/solutions/grc" },
        { text: "All Services", href: "/services" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About Us", href: "/company/about" },
        { text: "Partners", href: "/" },
        { text: "Careers", href: "/company/careers" },
        { text: "Contact", href: "/company/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Blogs", href: "/" },
        { text: "Case Study", href: "/" },
        { text: "Knowledge Base", href: "/" },
        { text: "Press Release", href: "/" },
      ],
    },
    // NOTE: "Trust & Compliance" removed as requested
  ],
  copyright = "MountEdge Solutions Pvt. Ltd Bangalore, Karnataka, India",
  policies = [
    { text: "+91 (XXX) XXX-XXXX Mon-Fri, 9AM-6PM IST", href: "/" },
    { text: "contact@mspl.tech support@mspl.tech", href: "/" },
  ],

  className,
}: FooterProps) {
  // define desired order for equal columns
  const orderedTitles = ["Company", "Products", "Resources", "Services"];
  const orderedColumns = orderedTitles
    .map((t) => columns.find((c) => c.title === t))
    .filter(Boolean) as FooterColumnProps[];

  return (
    <footer className={cn("bg-background w-full px-4 py-8", className)}>
      <div className="max-w-container mx-auto">
        <Footer>
          {/* Use a responsive grid so the logo + 4 columns share equal width on md+ */}
          <FooterContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 items-start">
            {/* Logo: occupy first column */}
            {/* Logo: occupy first column */}
<FooterColumn className="col-span-2 sm:col-span-2 md:col-span-1 self-start">
  <div className="flex flex-col gap-1 pt-0">
    <div className="flex items-start gap-2 -mt-4">
      {/* wrap logo so we can nudge it up slightly without changing original logo code */}
      <div className="-mt-1">{logo}</div>
      <h3 className="text-xl font-bold mt-1">{name}</h3>
    </div>

    <p className="text-sm text-muted-foreground leading-relaxed">
      Building the next-generation secure access ecosystem for modern enterprises.
    </p>

    <p className="text-xs text-muted-foreground">
      Powered by <span className="font-semibold">MountEdge Solutions</span>
    </p>

    <div className="flex flex-col">
      <Link
        href="/company/contact"
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-blue-600 transition"
      >
        → Request a Demo
      </Link>

      <Link
        href="/company/contact"
        className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-blue-600 transition"
      >
        → Book Consultation
      </Link>
    </div>
  </div>
</FooterColumn>



            {/* Render ordered columns: each will take 1 column on md */}
            {orderedColumns.map((column, index) => (
              <FooterColumn key={index} className="col-span-1">
                <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                <div className="flex flex-col mt-2 gap-2">
                  {column.links.map((link, linkIndex) => {
  const isComing = link.text.includes("(Coming Soon)");
  const label = isComing ? link.text.replace(" (Coming Soon)", "") : link.text;

  return (
    <a
      key={linkIndex}
      href={link.href}
      className="text-muted-foreground text-sm hover:text-blue-500 transition-colors"
    >
      {isComing ? (
        <div className="flex items-center gap-3">
          <span>{label}</span>
          <span className="text-xs px-2 py-0.5 rounded-full border border-muted-foreground text-muted-foreground">
            Coming Soon
          </span>
        </div>
      ) : (
        <span>{label}</span>
      )}
    </a>
  );
})}

                </div>
              </FooterColumn>
            ))}
          </FooterContent>

          {/* Footer Bottom with icons - keep responsive layout */}
          <FooterBottom className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 mt-6">

            {/* LOCATION */}
            <div className="group flex items-center gap-2 text-sm cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-muted-foreground group-hover:text-blue-500 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 
    7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 
    0-2.5-1.12-2.5-2.5S10.62 6.5 12 
    6.5s2.5 1.12 2.5 2.5S13.38 
    11.5 12 11.5z"/>
              </svg>

              <span className="group-hover:text-blue-500 transition-colors text-sm">
                MountEdge Solutions Pvt. Ltd Bangalore, Karnataka, India
              </span>
            </div>


            {/* PHONE */}
            <div className="flex flex-col gap-0.5">
              <a
                href="tel:+91XXXXXXXXXX"
                className="group flex items-center gap-2 whitespace-nowrap"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-muted-foreground group-hover:text-blue-500 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 
  6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 
  2.53.76 3.88.76a1 1 0 011 1v3.5a1 
  1 0 01-1 1C10.07 21 3 13.93 3 
  5.5a1 1 0 011-1H7.5a1 1 0 011 
  1c0 1.35.27 2.67.76 3.88a1 
  1 0 01-.21 1.11l-2.43 2.3z"/>
                </svg>

                <span className="group-hover:text-blue-500">
                  +91 (XXX) XXX-XXXX
                </span>
              </a>

              <span className="ml-6 text-muted-foreground hover:text-blue-500 transition-colors cursor-pointer text-sm">
                Mon–Fri, 9AM–6PM
              </span>

            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-0.5">
              <a
                href="mailto:contact@mspl.tech"
                className="group flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-muted-foreground group-hover:text-blue-500 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 
  2v12c0 1.1.9 2 2 2h16c1.1 
  0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/>
                </svg>

                <span className="group-hover:text-blue-500">
                  contact@mspl.tech
                </span>
              </a>

              <a
                href="mailto:support@mspl.tech"
                className="ml-6 text-muted-foreground hover:text-blue-500 transition-colors text-sm"
              >
                support@mspl.tech
              </a>
            </div>
          </FooterBottom>

          {/* FOOTER LEGAL / SUB-BOTTOM */}
          <div className="border-t border-border mt-6 pt-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">

              {/* LEFT : POLICIES */}
              <div className="flex flex-wrap items-center gap-4">
                <a href="/privacy-policy" className="hover:text-blue-500 transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms-of-use" className="hover:text-blue-500 transition-colors">
                  Terms of Use
                </a>
                <a href="/cookie-policy" className="hover:text-blue-500 transition-colors">
                  Cookie Policy
                </a>
                <a href="/data-residency" className="hover:text-blue-500 transition-colors">
                  Data Residency Statement
                </a>
              </div>

              {/* RIGHT : COPYRIGHT + ICONS */}
              <div className="flex items-center gap-4">
                <div className="text-xs text-muted-foreground">{copyright}</div>

                {/* LINKEDIN ICON */}
                <a href="https://www.linkedin.com/company/mspl" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 
          2.24 5 5 5h14c2.76 0 5-2.24 
          5-5v-14c0-2.76-2.24-5-5-5zm-11 
          19h-3v-10h3v10zm-1.5-11.25c-.97 
          0-1.75-.79-1.75-1.75s.78-1.75 
          1.75-1.75 1.75.78 
          1.75 1.75-.78 1.75-1.75 1.75zm13.5 
          11.25h-3v-5.5c0-1.38-.03-3.16-1.93-3.16-1.93 
          0-2.23 1.5-2.23 3.05v5.61h-3v-10h2.88v1.37h.04c.4-.76 
          1.37-1.56 2.82-1.56 3.02 0 3.58 1.99 3.58 4.58v5.61z"/>
                  </svg>
                </a>

                {/* GITHUB ICON */}
                <a href="https://github.com/mspl" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.63 0-12 5.37-12 12 0 
          5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
          0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 
          1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 
          3.492.998.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 
          0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 
          3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 
          3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 
          3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 
          1.096.81 2.21 0 1.596-.015 2.884-.015 3.276 0 .315.21.69.825.57 
          C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
              </div>

            </div>
          </div>
        </Footer>
      </div>
    </footer>
  );
}
