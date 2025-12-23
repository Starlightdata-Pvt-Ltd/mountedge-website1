/*import { type VariantProps } from "class-variance-authority";
import { ArrowRightIcon } from "lucide-react";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import Github from "../../logos/github";
import { Badge } from "../../ui/badge";
import { Button, buttonVariants } from "../../ui/button";
import Glow from "../../ui/glow";
import { Mockup, MockupFrame } from "../../ui/mockup";
import Screenshot from "../../ui/screenshot";
import { Section } from "../../ui/section";

interface HeroButtonProps {
  href: string;
  text: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
}

interface HeroProps {
  title?: string;
  description?: string;
  mockup?: ReactNode | false;
  badge?: ReactNode | false;
  buttons?: HeroButtonProps[] | false;
  className?: string;
}

export default function Hero({
  title = "Give your big idea the design it deserves",
  description = "Professionally designed blocks and templates built with React, Shadcn/ui and Tailwind that will help your product stand out.",
  mockup = (
    <Screenshot
      srcLight="/dashboard-light.png"
      srcDark="/dashboard-dark.png"
      alt="Launch UI app screenshot"
      width={1248}
      height={765}
      className="w-full"
    />
  ),
  badge = (
    <Badge variant="outline" className="animate-appear">
      <span className="text-muted-foreground">
        New version of Launch UI is out!
      </span>
      <a href="https://www.launchuicomponents.com/" className="flex items-center gap-1">
        Get started
        <ArrowRightIcon className="size-3" />
      </a>
    </Badge>
  ),
  buttons = [
    {
      href: "https://www.launchuicomponents.com/",
      text: "Get Started",
      variant: "default",
    },
    {
      href: "https://www.launchuicomponents.com/",
      text: "Github",
      variant: "glow",
      icon: <Github className="mr-2 size-4" />,
    },
  ],
  className,
}: HeroProps) {
  return (
    <Section
      className={cn(
        "fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0",
        className,
      )}
    >
      <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {badge !== false && badge}
          <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            {title}
          </h1>
          <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
            {description}
          </p>
          {buttons !== false && buttons.length > 0 && (
            <div className="animate-appear relative z-10 flex justify-center gap-4 opacity-0 delay-300">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant || "default"}
                  size="lg"
                  asChild
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
          {mockup !== false && (
            <div className="relative w-full pt-12">
              <MockupFrame
                className="animate-appear opacity-0 delay-700"
                size="small"
              >
                <Mockup
                  type="responsive"
                  className="bg-background/90 w-full rounded-xl border-0"
                >
                  {mockup}
                </Mockup>
              </MockupFrame>
              <Glow
                variant="top"
                className="animate-appear-zoom opacity-0 delay-1000"
              />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
} */

   /*import { type VariantProps } from "class-variance-authority";

import { ReactNode } from "react";

import { cn } from "@/lib/utils";


import { Badge } from "../../ui/badge";
import { Button, buttonVariants } from "../../ui/button";
import Glow from "../../ui/glow";
import { Mockup, MockupFrame } from "../../ui/mockup";
import Screenshot from "../../ui/screenshot";
import { Section } from "../../ui/section";

interface HeroButtonProps {
  href: string;
  text: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
}

interface HeroProps {
  title?: ReactNode; // <-- change here
  description?: ReactNode; // optional: allows JSX for description too
  mockup?: ReactNode | false;
  badge?: ReactNode | false;
  buttons?: HeroButtonProps[] | false;
  className?: string;
}




export default function Hero({
  title = (
    <>
      <span className="block text-4xl sm:text-5xl md:text-6xl font-bold">
        Secure. Scalable.
      </span>
      <span className="block text-blue-500 text-4xl sm:text-5xl md:text-6xl font-bold">
        Unified Cybersecurity.
      </span>
    </>
  ),
  description = "MSPL is engineering a next-generation secure access ecosystem—combining Zero Trust browsing, micro-firewall network enforcement, and enterprise-grade services into one unified platform built for high-compliance, security-first enterprises.",
  mockup = (
    <Screenshot
      srcLight="/dashboard-light.png"
      srcDark="/dashboard-dark.png"
      alt="Launch UI app screenshot"
      width={1248}
      height={765}
      className="w-full max-w-full"
    />
  ),
  badge = (
    <Badge variant="outline" className="animate-appear">

     
    </Badge>
  ),
  buttons = [
    {
      href: "",
      text: "Request Technical Demo",
      variant: "default",
    },
    {
      href: "",
      text: "Download Architecture WhitePaper",
      variant: "glow",
    },
  ],
  className,
}: HeroProps) {
  return (
    <Section
      className={cn(
        "fade-bottom overflow-hidden pb-8 sm:pb-12 md:pb-16 -mt-20 sm:-mt-24",
        className
      )}
    >
      <div className="max-w-container mx-auto flex flex-col gap-12 sm:gap-16">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12 px-4 sm:px-0">
          {badge !== false && badge}
          
          
          <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-transparent drop-shadow-2xl leading-tight">
            {title}
          </h1>

         
          <p className="text-sm sm:text-base md:text-lg lg:text-xl animate-appear text-muted-foreground relative z-10 max-w-full sm:max-w-[640px] md:max-w-[740px] font-medium opacity-0 delay-100">
            {description}
          </p>

         
          {buttons !== false && buttons.length > 0 && (
            <div className="animate-appear relative z-10 flex flex-col sm:flex-row gap-4 opacity-0 delay-300 justify-center">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant || "default"}
                  size="lg"
                  asChild
                  className="w-full sm:w-auto"
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

         
          {mockup !== false && (
            <div className="relative w-full pt-8 sm:pt-12">
              <MockupFrame
                className="animate-appear opacity-0 delay-700"
                size="small"
              >
                <Mockup
                  type="responsive"
                  className="bg-background/90 w-full rounded-xl border-0"
                >
                  {mockup}
                </Mockup>
              </MockupFrame>
              <Glow
                variant="top"
                className="animate-appear-zoom opacity-0 delay-1000"
              />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}*/


import { type VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "../../ui/badge";
import { Button, buttonVariants } from "../../ui/button";
import Glow from "../../ui/glow";
import { Mockup, MockupFrame } from "../../ui/mockup";
// removed Screenshot import because we'll render a plain <img> directly
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
      <span className="block text-3xl sm:text-4xl md:text-6xl font-bold">
        Secure. Scalable.
      </span>
      <span className="block text-blue-500 text-3xl sm:text-4xl md:text-6xl font-bold">
        Unified Cybersecurity.
      </span>
    </>
  ),
  description = (
    <>
      MSPL is engineering a next-generation secure access ecosystem—combining Zero Trust
      browsing, micro-firewall network enforcement, and enterprise-grade services into one
      unified platform built for high-compliance, security-first enterprises.
    </>
  ),
  mockup = (
    <div className="w-full">
      <img
        src="/Dashboard-light.png.png"
        alt="Launch UI app screenshot"
        width={1248}
        height={765}
        className="w-full h-auto rounded-lg shadow-lg object-contain"
        loading="eager"
        draggable={false}
      />
    </div>
  ),
  badge = (
    <Badge variant="outline" className="animate-appear">
      {/* optional badge content */}
    </Badge>
  ),
  buttons = [
    {
      href: "/about",
      text: "Request Technical Demo",
      variant: "default",
    },
    {
      href: "",
      text: "Download Architecture WhitePaper",
      variant: "glow",
    },
  ],
  className,
}: HeroProps) {
  return (
    <Section
      className={cn(
        "fade-bottom overflow-hidden pb-8 sm:pb-12 md:pb-16 -mt-20 sm:-mt-24",
        className
      )}
    >
      <div className="max-w-container mx-auto flex flex-col gap-8 sm:gap-12">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-10 px-4 sm:px-0">
          {badge !== false && badge}

          {/* Title */}
          <div
            className="animate-appear relative z-10 inline-block bg-linear-to-r bg-clip-text text-transparent from-foreground to-foreground dark:to-muted-foreground drop-shadow-2xl text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            role="heading"
            aria-level={1}
          >
            {title}
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl animate-appear text-muted-foreground relative z-10 max-w-full sm:max-w-[640px] md:max-w-[740px] font-medium opacity-0 delay-100">
            {description}
          </p>

          {/* Buttons */}
          {buttons !== false && buttons.length > 0 && (
            <div className="animate-appear relative z-10 flex flex-col sm:flex-row gap-4 justify-center opacity-0 delay-300 w-full sm:w-auto">
              {buttons.map((button, index) => (
                <Button
  key={index}
  variant={button.variant || "default"}
  size="lg"
  asChild
  className={button.text === "Download Architecture WhitePaper" ? "border-2 border-blue-500 rounded-md hover:bg-blue-50  transition" : ""}
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

          {/* Mockup */}
          {mockup !== false && (
            <div className="relative w-full pt-8 sm:pt-12">
              <MockupFrame
                className="animate-appear opacity-0 delay-700"
                size="small"
              >
                <Mockup
                  type="responsive"
                  className="bg-background/90 w-full rounded-xl border-0"
                >
                  {mockup}
                </Mockup>
              </MockupFrame>
              <Glow
                variant="top"
                className="animate-appear-zoom opacity-0 delay-1000"
              />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
