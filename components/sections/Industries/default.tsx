// components/IndustriesSection.tsx
"use client";

import React from "react";

type Card = {
  tag: { label: string; color: string }; // color is a Tailwind bg/border color token fragment (e.g. "amber-600")
  title: string;
  desc: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export default function IndustriesSection() {
  const cards: Card[] = [
    {
      tag: { label: "COMPLIANCE RISK", color: "amber-600" },
      title: "BFSI",
      desc: "Built for regulatory compliance, data sovereignty, and secure digital banking",
      icon: IconBank,
    },
    {
      tag: { label: "DATA GOVERNANCE", color: "sky-500" },
      title: "Healthcare",
      desc: "Built for patient data protection, EMR security, and HIPAA compliance",
      icon: IconHeart,
    },
    {
      tag: { label: "SECURITY & INTEGRITY", color: "teal-400" },
      title: "Education",
      desc: "Built for secure exam environments, learning platforms, and academic integrity",
      icon: IconGraduation,
    },
    {
      tag: { label: "DISTRIBUTED WORKFORCE", color: "violet-500" },
      title: "Enterprise",
      desc: "Built for distributed teams, remote access, and hybrid infrastructure",
      icon: IconBriefcase,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Dark card panel */}
        <div className="relative rounded-3xl bg-white px-10 py-16 overflow-hidden">
          {/* Decorative centered glow behind the header */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-36 left-1/2 -translate-x-1/2 w-[820px] h-[360px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle at 50% 40%, rgba(11, 214, 255, 0.03), rgba(11, 202, 255, 0.04) 40%, transparent 60%)",
            }}
          />

          {/* Small pill badge above title */}
          <div className="relative z-10 text-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-cyan-700 text-sm font-medium text-blue-300  ">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" aria-hidden>
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              Industry Solutions
            </span>
          </div>

          {/* Header */}
          <header className="relative z-10 text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold text-black">
              Industries We Support
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              Purpose-built for compliance-heavy, mission-critical sectors.
            </p>
          </header>

          {/* Cards grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cards.map((c, i) => {
              const tagColor = c.tag.color;
              return (
                <article
                  key={i}
                  className="group relative rounded-2xl border border-slate-800/60 p-6 bg-white hover:bg-sky-blue transition-colors duration-300"
                >
                  {/* small tag pill top-left */}
                  <div className="absolute top-2 left-6 z-20">
                    <span
                      className={`inline-flex items-center gap-2 px-3 py-0.5 rounded-full text-[11px] font-medium text-${tagColor} border border-${tagColor}/20`}
                      // NOTE: className interpolation with Tailwind color names must match the set of classes compiled by Tailwind.
                    >
                      • {c.tag.label}
                    </span>
                  </div>

                  <div className="flex flex-col h-full">
                    <div className="mt-5 mb-6">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-slate-700 bg-black group-hover:bg-black transition-colors">
                        <c.icon className="w-6 h-6 text-cyan-300" />
                      </div>
                    </div>

                    <h3 className="text-white text-lg mb-2">{c.title}</h3>
                    <p className="text-slate-600 text-sm mb-6 flex-1">{c.desc}</p>

                    <div>
                      <a className="text-blue-600 hover:underline text-sm font-medium inline-flex items-center gap-2">
                        Explore Industry
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* subtle inner stroke using pseudo layer */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-2xl"
                    style={{
                      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.02)",
                    }}
                  />
                </article>
              );
            })}
          </div>

          {/* bottom subtle grid line */}
          <div className="mt-12 h-12" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Inline Icons (typed) ---------------- */

function IconBank(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none">
      <path d="M3 10.5L12 5l9 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 21V11h14v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 14v3M14 14v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconHeart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none">
      <path d="M20.8 7.6a4.6 4.6 0 00-6.4-.2L12 9.9l-2.4-2.5a4.6 4.6 0 10-6.4 6.6L12 21l9.2-6.8a4.6 4.6 0 00-.4-6.6z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconGraduation(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 17c1.8 1.2 4 2 8 2s6.2-.8 8-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconBriefcase(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="7" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 7V6a4 4 0 018 0v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
