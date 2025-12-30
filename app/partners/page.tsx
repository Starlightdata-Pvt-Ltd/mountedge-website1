"use client";

import React, { useRef, useEffect } from "react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PARTNER_COUNT = 6;
// images placed in: public/partners/1.png ... 6.png
const PARTNER_SRC = (i: number) => `/${i}.png`;

export default function PartnersPage() {
  const partners = Array.from({ length: PARTNER_COUNT }, (_, i) => i + 1);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const pause = () => {
    const t = trackRef.current;
    if (!t) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    t.style.animationPlayState = "paused";
  };

  const resume = () => {
    const t = trackRef.current;
    if (!t) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    t.style.animationPlayState = "running";
  };

  useEffect(() => {
    const t = trackRef.current;
    if (!t) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      t.style.animation = "none";
      return;
    }
    t.style.animationPlayState = "running";
  }, []);

  return (
    <main>
      <Section className={cn("py-20")}>
        <div className="max-w-container mx-auto text-center px-4">
          <p className="text-sm font-semibold uppercase text-muted-foreground tracking-wide">
            Trusted By
          </p>

          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold fancy-heading">
            Our Partners & Integrations
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We collaborate with best-in-class technology partners to deliver secure,
            reliable and scalable outcomes for our customers.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <Button asChild>
              <a href="/contact">Contact Sales</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="/resources">View Resources</a>
            </Button>
          </div>

          <div className="mt-10">
            <div className="relative overflow-hidden">
              <div className="mx-auto max-w-4xl">
                {/* Simplified container: no background gradients/white overlays */}
                <div className="relative rounded-2xl p-6">
                  <div
                    ref={trackRef}
                    className="partners-track will-change-transform flex gap-8 items-center"
                    role="list"
                    aria-label="Partners carousel"
                  >
                    {partners.map((i) => (
                      <div
                        key={`p1-${i}`}
                        className="flex-shrink-0 flex items-center justify-center px-4"
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
                          alt={`Partner ${i} logo`}
                          loading="lazy"
                          draggable={false}
                          className="logo-img h-12 w-auto object-contain"
                        />
                      </div>
                    ))}

                    {partners.map((i) => (
                      <div
                        key={`p2-${i}`}
                        className="flex-shrink-0 flex items-center justify-center px-4"
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
                          alt={`Partner ${i} logo`}
                          loading="lazy"
                          draggable={false}
                          className="logo-img h-12 w-auto object-contain"
                        />
                      </div>
                    ))}
                  </div>

                  {/* removed the white fade overlays so nothing else animates */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <style>{`
        :root { --marquee-duration: 18s; }

        @keyframes partners-marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        /* marquee only moves the logo track */
        .partners-track {
          width: calc(200% + 6rem);
          gap: 2rem;
          padding: 0.5rem 0;
          display: flex;
          align-items: center;
          animation: partners-marquee var(--marquee-duration) linear infinite;
        }

        /* keep logos simple — subtle lift on hover */
        .logo-img {
          transition: transform 220ms ease, filter 220ms ease;
          border-radius: 6px;
        }

        .logo-img:hover,
        .logo-img:focus {
          transform: translateY(-3px) scale(1.06);
        }

        @media (prefers-reduced-motion: reduce) {
          .partners-track { animation: none !important; }
        }

        @media (min-width: 1024px) {
          :root { --marquee-duration: 24s; }
        }

        @media (max-width: 480px) {
          :root { --marquee-duration: 12s; }
        }

        .partners-track [tabindex]:focus {
          outline: 3px solid rgba(59,130,246,0.18);
          outline-offset: 4px;
          border-radius: 8px;
        }

        .fancy-heading {
          background-image:
            linear-gradient(90deg, #0f172a 60%, rgba(59,130,246,0.25)),
            repeating-linear-gradient(135deg, rgba(59,130,246,0.03) 0 3px, transparent 3px 8px);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          -webkit-text-stroke: 0.35px rgba(0,0,0,0.9);
        }
      `}</style>
    </main>
  );
}
