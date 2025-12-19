"use client";

import React, { useRef, useEffect } from "react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PARTNER_COUNT = 6;
const PARTNER_SRC = (i: number) =>
  `https://mountedge-website.netlify.app/partners/${i}.svg`;

export default function PartnersPage() {
  const partners = Array.from({ length: PARTNER_COUNT }, (_, i) => i + 1);
  const trackRef = useRef<HTMLDivElement | null>(null);

  // pause/resume helpers
  const pause = () => {
    const t = trackRef.current;
    if (!t) return;
    // respect reduced motion — if user prefers reduced motion, nothing to do
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    t.style.animationPlayState = "paused";
  };

  const resume = () => {
    const t = trackRef.current;
    if (!t) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    t.style.animationPlayState = "running";
  };

  // ensure animation is running initially on mount (some browsers might not set it from inline style when modified)
  useEffect(() => {
    const t = trackRef.current;
    if (!t) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      t.style.animation = "none";
      return;
    }
    t.style.animationPlayState = "running";
  }, []);

  return (
    <main>
      <Section className={cn("py-20")}>
        <div className="max-w-container mx-auto text-center">
          <p className="text-sm font-semibold uppercase text-muted-foreground tracking-wide">
            Trusted By
          </p>

          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Our Partners & Integrations
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We collaborate with best-in-class technology partners to deliver
            secure, reliable and scalable outcomes for our customers.
          </p>

          {/* CTA */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button asChild>
              <a href="/contact">Contact Sales</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="/resources">View Resources</a>
            </Button>
          </div>

          {/* Scrolling partners rail */}
          <div className="mt-10">
            <div className="relative overflow-hidden">
              {/* Track: duplicated to create seamless loop */}
              <div
                ref={trackRef}
                className="partners-track will-change-transform flex gap-8 items-center"
                style={{
                  animation: "partners-marquee 18s linear infinite",
                }}
                role="list"
                aria-label="Partners carousel"
              >
                {/* first copy */}
                {partners.map((i) => (
                  <div
                    key={`p1-${i}`}
                    className="flex-shrink-0 flex items-center justify-center"
                    role="listitem"
                    aria-label={`Partner ${i}`}
                    // Pause on hover/focus/touch on each partner item
                    onMouseEnter={pause}
                    onMouseLeave={resume}
                    onFocus={pause}
                    onBlur={resume}
                    onTouchStart={pause}
                    onTouchEnd={resume}
                    tabIndex={0} // allow keyboard focus so focus pauses too
                  >
                    <img
                      src={PARTNER_SRC(i)}
                      alt={`partner-${i}`}
                      className="h-12 w-auto opacity-90 filter transition-transform transform group-hover:scale-105"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                ))}

                {/* second copy (for seamless scroll) */}
                {partners.map((i) => (
                  <div
                    key={`p2-${i}`}
                    className="flex-shrink-0 flex items-center justify-center"
                    role="listitem"
                    aria-label={`Partner ${i}`}
                    onMouseEnter={pause}
                    onMouseLeave={resume}
                    onFocus={pause}
                    onBlur={resume}
                    onTouchStart={pause}
                    onTouchEnd={resume}
                    tabIndex={0}
                  >
                    <img
  src={PARTNER_SRC(i)}
  alt={`partner-${i}`}
  loading="lazy"
  draggable={false}
  className="
    h-12 
    w-auto 
    bg-transparent
    mix-blend-multiply
    opacity-90
    transition-transform
    hover:scale-105
  "
/>

                  </div>
                ))}
              </div>

              {/* Optional left & right overlays for soft fade */}
              <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background/100 to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background/100 to-transparent" />
            </div>

       
          </div>
        </div>
      </Section>

      {/* Inline CSS for marquee animation and hover-pause fallback */}
      <style>{`
        @keyframes partners-marquee {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }

        .partners-track {
          width: calc(200% + 4rem); /* two copies inline for seamless loop */
        }

        /* For users who prefer reduced motion, stop animation entirely */
        @media (prefers-reduced-motion: reduce) {
          .partners-track {
            animation: none !important;
          }
        }
      `}</style>
    </main>
  );
}
