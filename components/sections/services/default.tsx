import React from "react";
import Link from "next/link";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    id: "cyber",
    title: "Cybersecurity Solutions",
    desc:
      "Protecting your business is at the core of what we do. Endpoint, network, and cloud controls designed for enterprise risk profiles.",
    cta: "Explore",
    logo: "cyber",
  },
  {
    id: "cloud",
    title: "Cloud & IT Infrastructure",
    desc:
      "Modern, resilient cloud architectures, migration services and 24/7 managed operations to keep you available at scale.",
    cta: "Explore",
    logo: "cloud",
  },
  {
    id: "digital",
    title: "Digital Transformation & Innovation",
    desc:
      "Product-led engineering, automation, and integrations that accelerate time-to-value across your stack.",
    cta: "Explore",
    logo: "digital",
  },
  {
    id: "consulting",
    title: "Automation & RPAS",
    desc:
      "Strategic advisory, compliance enablement, and fully-managed services so your teams can focus on outcomes.",
    cta: "Explore",
    logo: "consulting",
  },

];

function Logo({ type }: { type: string }) {
  switch (type) {
    case "cyber":
      return (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="transform group-hover:scale-105 transition-transform"
          role="img"
        >
          <defs>
            <linearGradient id="g-cyber" x1="0" x2="1">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
          <path
            d="M12 2l7 3v4c0 5-4 9-7 11-3-2-7-6-7-11V5l7-3z"
            stroke="url(#g-cyber)"
            strokeWidth="1.2"
            fill="transparent"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 11.5a2.5 2.5 0 105 0v-1"
            stroke="url(#g-cyber)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "cloud":
      return (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="transform translate-y-0 group-hover:-translate-y-0.5 transition-transform"
          role="img"
        >
          <defs>
            <linearGradient id="g-cloud" x1="0" x2="1">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
          <path
            d="M20 17.5A4.5 4.5 0 0015.5 13h-1A4.5 4.5 0 0010 8.5 4.5 4.5 0 005.5 13H5A3 3 0 005 19h15v-1.5z"
            stroke="url(#g-cloud)"
            strokeWidth="1.2"
            fill="transparent"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "digital":
      return (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="transform group-hover:rotate-3 transition-transform"
          role="img"
        >
          <defs>
            <linearGradient id="g-digital" x1="0" x2="1">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
          </defs>
          <path
            d="M12 2v6M12 22v-6M4 12h6M20 12h-6M5 5l4 4M19 19l-4-4M5 19l4-4M19 5l-4 4"
            stroke="url(#g-digital)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "consulting":
    default:
      return (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="transform group-hover:scale-105 transition-transform"
          role="img"
        >
          <defs>
            <linearGradient id="g-consult" x1="0" x2="1">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#34D399" />
            </linearGradient>
          </defs>
          <path
            d="M8 7a3 3 0 100 6M16 7a3 3 0 100 6M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2"
            stroke="url(#g-consult)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

export default function Services({ className }: { className?: string }) {
  return (
    <Section className={cn("py-16 sm:py-20", className)}>
      <div className="max-w-container mx-auto px-4">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase text-muted-foreground tracking-wider">
            Enterprise  Services
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Comprehensive services to secure and scale your business
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We combine best-in-class technology, hands-on expertise and operational
            processes to deliver outcomes—resilience, compliance, and velocity.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <article
              key={s.id}
              className="
  group relative p-6 rounded-2xl
  border border-white/10
  bg-gradient-to-tr from-white/6 to-white/3
  backdrop-blur-md
  shadow-lg
  

  hover:shadow-2xl
  hover:border-blue-500/40
  flex flex-col justify-between overflow-hidden
"

              aria-labelledby={`service-${s.id}`}
            >
              {/* decorative gradient blur circle */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 w-44 h-44 rounded-full opacity-10 blur-3xl bg-gradient-to-tr from-primary to-secondary"
              />

              <div>
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-3">
                    <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-white/6 border border-white/8 backdrop-blur shadow-sm transition-all duration-300
    group-hover:border-blue-500/50
    group-hover:bg-blue-500/10">
                      <div className="group-hover:scale-105 transition-transform">
                        <Logo type={s.logo} />
                      </div>
                    </div>

                    <div>
                      <h3
                        id={`service-${s.id}`}
                        className="
    text-lg sm:text-xl font-semibold
    transition-colors duration-300
    group-hover:text-blue-500
  "
                      >
                        {s.title}
                      </h3>

                    </div>
                  </div>

                  {/* small badge (kept empty as in original) */}
                  <div className="hidden sm:flex items-center gap-2 px-2 py-1 rounded-full text-[11px] font-medium bg-gradient-to-r from-white/4 to-white/6 border border-white/6">
                  </div>
                </div>

                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <Button asChild size="sm" className="group inline-flex items-center gap-2">
                  <Link
                    href={`/solutions/${s.id}`}
                    aria-label={`${s.title} - ${s.cta}`}
                    className="inline-flex items-center gap-2"
                  >
                    <span className="text-sm">{s.cta}</span>
                    <span className="transform transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </Button>

                <div className="text-xs text-muted-foreground">Trusted partners</div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/3 backdrop-blur-md p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex-1">
            <h4 className="text-lg font-semibold">Need a tailored solution?</h4>
            <p className="mt-2 text-muted-foreground">
              Request a technical demo or a security posture assessment and we'll
              prepare a customised plan for your organisation.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {/* micro partner logos (SVG circles) */}
              <div className="flex items-center gap-2">
                <span className="h-8 w-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white text-xs font-semibold">M</span>
                <span className="text-sm text-muted-foreground">MountEdge</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-400 to-teal-400 flex items-center justify-center text-white text-xs font-semibold">A</span>
                <span className="text-sm text-muted-foreground">Auth</span>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="flex gap-3">
              <Button asChild>
                <a href="#" className="shadow-sm">Request Technical Demo</a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="#">Contact Sales</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
