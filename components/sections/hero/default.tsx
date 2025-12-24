import { type VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

import { Badge } from "../../ui/badge";
import { Button, buttonVariants } from "../../ui/button";
import Glow from "../../ui/glow";
import { Mockup, MockupFrame } from "../../ui/mockup";
import { Section } from "../../ui/section";

interface HeroButtonProps {
  href: string;
  text: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
}

interface HeroProps {
  title?: ReactNode;
  description?: ReactNode;
  mockup?: ReactNode | false;
  badge?: ReactNode | false;
  buttons?: HeroButtonProps[] | false;
  className?: string;
}

export default function Hero({
  title = (
    <>
      <span className="block tracking-tight">
        Secure. Scalable.
      </span>
      <span className="block tracking-tight text-blue-600">
        Unified Cybersecurity.
      </span>
    </>
  ),
  description = (
    <>
      MSPL is building a next-generation secure access platform—combining Zero Trust
      browsing, micro-firewall enforcement, and enterprise-grade services into a
      unified ecosystem designed for regulated, security-first organizations.
    </>
  ),
  mockup = (
    <div className="relative">
      {/* Blue atmospheric overlay to neutralize warm tones */}
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-blue-500/5 mix-blend-multiply" />

      <img
        src="/Dashboard-light.png.png"
        alt="MSPL platform dashboard"
        width={1248}
        height={765}
        className="relative z-10 w-full h-auto rounded-xl object-contain contrast-105 saturate-110"
        draggable={false}
      />
    </div>
  ),
  badge = (
    <Badge
      variant="outline"
      className="border-muted bg-white text-muted-foreground animate-appear"
    >
      Enterprise-Grade Security Platform
    </Badge>
  ),
  buttons = [
    {
      href: "/about",
      text: "Request Technical Demo",
      variant: "default",
    },
    {
      href: "/whitepaper",
      text: "Download Architecture Whitepaper",
      variant: "glow",
    },
  ],
  className,
}: HeroProps) {
  return (
    <Section
      className={cn(
        "relative bg-white overflow-hidden pb-14 sm:pb-20 md:pb-28 -mt-20 sm:-mt-24",
        className
      )}
    >
      {/* Subtle blue Launch UI glow (NOT background color) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[10%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]" />
      </div>

      <div className="max-w-container mx-auto flex flex-col gap-12 sm:gap-20">
        <div className="flex flex-col items-center text-center gap-6 sm:gap-10 px-4">
          {badge !== false && badge}

          {/* Headline */}
          <h1 className="animate-appear opacity-0 delay-100 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance text-foreground">
            {title}
          </h1>

          {/* Description */}
          <p className="animate-appear opacity-0 delay-200 max-w-[760px] text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground font-medium">
            {description}
          </p>

          {/* CTAs */}
          {buttons !== false && buttons.length > 0 && (
            <div className="animate-appear opacity-0 delay-300 flex flex-col sm:flex-row gap-4 justify-center">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  size="lg"
                  variant={button.variant || "default"}
                  asChild
                  className={cn(
                    "transition-all duration-300",
                    button.text.includes("Whitepaper") &&
                      "border border-blue-500/60 bg-white text-blue-600 hover:bg-blue-50"
                  )}
                >
                  <a href={button.href}>
                    {button.icon}
                    {button.text}
                    {button.iconRight}
                  </a>
                </Button>
              ))}
            </div>
          )}

          {/* Dashboard Mockup */}
          {mockup !== false && (
            <div className="relative w-full pt-12 sm:pt-16">
              <MockupFrame
                size="small"
                className="animate-appear opacity-0 delay-500 transition-transform duration-500 hover:-translate-y-1"
              >
                <Mockup className="bg-white rounded-2xl shadow-xl border border-border/50">
                  {mockup}
                </Mockup>
              </MockupFrame>

              {/* Blue highlight glow */}
              <Glow
                variant="top"
                className="animate-appear-zoom opacity-0 delay-700"
              />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}