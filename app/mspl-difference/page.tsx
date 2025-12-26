// app/mspl-difference/page.tsx
import React from "react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle, ArrowRight, X } from "lucide-react";

export default function MSPLDifferencePage(): React.ReactElement {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
      <Section className={cn("py-20")}>
        <div className="max-w-container mx-auto px-4">
          {/* Pill CTA */}
          <div className="flex justify-center">
            <span
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-sky-200/30 text-sm shadow-sm"
              aria-hidden
            >
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-sky-500 shadow-sm" />
              <span className="font-medium">The MSPL Difference</span>
            </span>
          </div>

          {/* Heading */}
          <header className="mt-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              The Problem <span className="text-slate-400">→</span> MSPL's Approach
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-slate-600 text-sm sm:text-base">
              Cybersecurity today is fragmented &ndash; multiple vendors, disjointed policies,
              inconsistent enforcement, and wide blind spots across browsers, networks,
              and devices. MSPL unifies governance, policy, and enforcement under a single
              modern Zero-Trust platform.
            </p>
          </header>

          {/* Comparison row */}
          <section className="mt-12">
            {/* NOTE: changed items-start -> items-center to vertically center the middle transform circle
                Also set each card to h-full so the center aligns between cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Problem card */}
              <article
                aria-labelledby="problem-heading"
                className="relative h-full rounded-2xl border border-red-50/60 bg-white/60 backdrop-blur-md p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                {/* decorative accent */}
                <span className="absolute -right-10 -top-8 w-44 h-44 rounded-full opacity-10 blur-2xl bg-gradient-to-tr from-red-400 to-rose-500" />

                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-red-50/80 flex items-center justify-center border border-red-100">
                    <X className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 id="problem-heading" className="text-lg font-semibold">
                    The Problem
                  </h3>
                </div>

                <ul className="space-y-5 text-sm text-slate-700">
                  {[
                    {
                      title: "Fragmentation",
                      subtitle: "Multiple disconnected tools",
                      icon: (
                        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
                          <path d="M6 18L18 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M6 6h.01M18 18h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ),
                    },
                    {
                      title: "Multi-vendor stack",
                      subtitle: "Integration complexity",
                      icon: (
                        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
                          <path d="M3 12h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ),
                    },
                    {
                      title: "No unified governance",
                      subtitle: "Policy disparity across layers",
                      icon: (
                        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
                          <path d="M12 4v16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ),
                    },
                    {
                      title: "Data leakage risk",
                      subtitle: "Silent exfiltration gaps",
                      icon: (
                        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
                          <path d="M3 12h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ),
                    },
                  ].map((it) => (
                    <li key={it.title}>
                      <div className="flex gap-3">
                        <div className="text-red-500 mt-1">{it.icon}</div>
                        <div>
                          <div className="font-semibold text-slate-900">{it.title}</div>
                          <div className="text-xs text-slate-600 mt-0.5">{it.subtitle}</div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between">
                  <div className="text-xs text-slate-500">Legacy approach</div>
                  <Button asChild size="sm">
                    <a href="#" aria-label="Learn about fragmentation">Read more →</a>
                  </Button>
                </div>
              </article>

              {/* Flow indicator — vertically centered between the two cards */}
              <div className="hidden lg:flex items-center justify-center">
                {/* make the container full-height so arrow aligns middle between cards */}
                <div className="h-full flex items-center">
                  <div className="flex flex-col items-center gap-4">
                    {/* glassy circle with gradient + hover */}
                    <button
                      aria-hidden
                      className="group relative h-16 w-16 rounded-full flex items-center justify-center bg-white/70 backdrop-blur-md border border-sky-100/50 shadow-lg hover:scale-105 transform transition-all duration-250 focus:outline-none"
                      title="Transform"
                    >
                      {/* subtle inner ring */}
                      <span className="absolute inset-0 rounded-full ring-1 ring-sky-100/40 pointer-events-none" />
                      <span className="absolute -inset-6 rounded-full opacity-20 blur-2xl bg-gradient-to-tr from-sky-400 to-cyan-300 pointer-events-none" />
                      <ArrowRight className="h-6 w-6 text-sky-600 animate-arrow" />
                    </button>

                    <div className="text-xs text-slate-500">Transform</div>
                  </div>
                </div>
              </div>

              {/* Approach card */}
              <article
                aria-labelledby="approach-heading"
                className="relative h-full rounded-2xl border border-sky-100/60 bg-white/70 backdrop-blur-md p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="absolute -left-10 -bottom-8 w-44 h-44 rounded-full opacity-10 blur-2xl bg-gradient-to-tr from-sky-400 to-cyan-400" />

                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-sky-50/80 flex items-center justify-center border border-sky-100">
                    {/* success check */}
                    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 id="approach-heading" className="text-lg font-semibold">
                    MSPL's Approach
                  </h3>
                </div>

                <p className="text-sm text-slate-600 mb-4">
                  A unified, modular Zero-Trust ecosystem engineered from day one for:
                </p>

                <ul className="space-y-3 text-sm">
                  {[
                    "Unified secure access",
                    "Zero Trust architecture",
                    "Policy + governance + analytics",
                    "Cloud-native, sovereignty-backed",
                  ].map((row) => (
                    <li key={row} className="flex items-start gap-3">
                      <div className="mt-1">
                        <CheckCircle className="h-5 w-5 text-sky-500" />
                      </div>
                      <div className="text-sm">
                        <div className="font-medium text-slate-900">{row}</div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="text-xs text-slate-500">Modern outcome</div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button asChild size="sm">
                      <a href="#" aria-label="See MSPL approach">See approach →</a>
                    </Button>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* Impact area */}
          <div className="mt-12 flex flex-col items-center gap-10">
            <div className="w-full max-w-4xl rounded-2xl border border-slate-100/60 bg-white/60 backdrop-blur-md p-6 shadow-md">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-emerald-50/80 flex items-center justify-center border border-emerald-100">
                    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
                      <path d="M4 12h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold">Expected Impact</h4>
                </div>

                <div className="text-sm text-slate-600 max-w-md">
                  A single platform that eliminates silos, reduces operational friction,
                  and measurably strengthens your security posture and compliance readiness.
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: "Reduced attack surface", tone: "sky" },
                  { title: "Faster compliance readiness", tone: "emerald" },
                  { title: "Streamlined operations", tone: "violet" },
                ].map((t) => (
                  <div
                    key={t.title}
                    className={`rounded-lg border bg-white/60 backdrop-blur-sm p-4 flex items-center gap-3 shadow-sm transform hover:scale-101 transition-all`}
                  >
                    <div className={`rounded-full p-2 bg-${t.tone}-50 border border-${t.tone}-100`}>
                      <CheckCircle className={`h-5 w-5 text-${t.tone}-500`} />
                    </div>
                    <div className="text-sm font-medium text-slate-900">{t.title}</div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm text-slate-600 max-w-3xl text-center">
              MSPL reduces vendor sprawl, enforces consistent policy across layers, and provides
              the telemetry and governance to act confidently.
            </p>
          </div>
        </div>
      </Section>

      {/* Inline styles for animations & small utility tweaks */}
      <style>{`
        /* arrow pulse animation: small, smooth nudge to indicate direction */
        @keyframes arrow-pulse {
          0% { transform: translateX(0) scale(1); opacity: 1; }
          50% { transform: translateX(6px) scale(1.03); opacity: 0.85; }
          100% { transform: translateX(0) scale(1); opacity: 1; }
        }
        .animate-arrow {
          animation: arrow-pulse 1.4s ease-in-out infinite;
          will-change: transform, opacity;
        }

        /* small hover scale utility (non-intrusive) */
        .hover\\:scale-101:hover { transform: scale(1.01); }

        /* darken backgrounds on hover for glass elements (subtle) */
        .backdrop-blur-md:hover { box-shadow: 0 10px 30px rgba(2,6,23,0.08); }

        /* responsive tweak: hide center arrow on small screens */
        @media (max-width: 1024px) {
          .lg\\:flex { display: none; }
        }

        /* accessible preference */
        @media (prefers-reduced-motion: reduce) {
          .animate-arrow { animation: none !important; }
          * { transition: none !important; }
        }
      `}</style>
    </main>
  );
}
