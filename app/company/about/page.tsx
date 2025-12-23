// app/page.tsx
import React from "react";

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900 antialiased">
      <Hero />
      <WhoWeAre />
      <InfoCards />
      <WhatMakesUsDifferent />
      <Expertise />
      <Leadership />
      <Partners />
      <Approach />
      <SecurityCompliance />
      <CultureValues />
      <JoinTeam />
      <FinalCTA />

      <footer className="py-10 text-center text-sm text-slate-500">© 2025 MSPL. All rights reserved.</footer>
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* subtle decorative circle */}
      <div className="absolute right-0 top-10 -z-10 opacity-10 pointer-events-none w-80 h-80 rounded-full bg-gradient-to-br from-sky-200 to-indigo-200 hidden lg:block" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-20 lg:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Engineering the Future of
            <span className="block text-sky-600">Secure Access</span>
          </h1>

          <p className="mt-6 text-sm md:text-base text-slate-600">
            A unified, Zero Trust-driven security ecosystem built for high-compliance enterprises by a team
            with 50+ years collective experience in cybersecurity and enterprise IT.
          </p>

          <ul className="mt-6 flex flex-wrap justify-center gap-6 text-xs text-slate-500">
            <li>50+ Years Collective Expertise</li>
            <li>Engineering-First Approach</li>
            <li>10+ OEM Partners</li>
          </ul>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              className="inline-flex items-center px-5 py-2 rounded-md bg-sky-600 text-white text-sm font-medium shadow hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300"
              href="#request"
            >
              Request Technical Walkthrough
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-5 py-2 rounded-md text-sm font-medium text-slate-900 
             border border-gray-500 hover:border-blue-500 hover:bg-white hover:text-black
             transition-all duration-300 overflow-hidden"
            >
              Download Architecture Whitepaper
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

function WhoWeAre() {
  return (
    <section className="bg-white border-t border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-700">Who We Are</h2>
        <p className="mt-4 text-slate-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
          MSPL builds a modular cybersecurity ecosystem—Zero Trust Browser, Micro Firewall Network, and Secure
          Access Suite—designed to unify secure access across users, devices, apps, and networks. Our
          engineering-led services strengthen adoption, governance, and long-term resilience across cloud, cyber,
          and IT environments.
        </p>
        <a className="mt-6 inline-block text-sky-600 text-base font-medium hover:underline">
          See Product Suite →
        </a>

      </div>
    </section>
  );
}

function InfoCards() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        <Card title="Vision" icon={<DotIcon />}>
          A secure access ecosystem engineered for modern, compliance-heavy enterprises.
        </Card>

        <Card title="Mission" icon={<LockIcon />}>
          Build products and solutions that unify Zero Trust enforcement, strengthen governance, and simplify
          security at scale.
        </Card>
      </div>
    </section>
  );
}

function Card({
  title,
  children,
  icon,
}: {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-150 bg-white">
      <div className="flex items-start gap-4">
        <div className="flex-none">{icon}</div>
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-slate-800">
            {title}
          </h3>

          <p className="mt-2 text-base md:text-lg text-slate-600 leading-relaxed">
            {children}
          </p>

        </div>
      </div>
    </div>
  );
}

function WhatMakesUsDifferent() {
  const features = [
    { title: "Engineering-first", desc: "Security-by-design, built by experts who understand threat landscapes." },
    { title: "Modular Architecture", desc: "Integrated product ecosystem for unified security." },
    { title: "Unified Governance", desc: "Single-pane analytics across all enforcement layers." },
    { title: "Cloud-native", desc: "Automation-focused, built for scale and resilience." },
    { title: "Compliance-ready", desc: "Designed for high-compliance verticals." },
    { title: "Performance-focused", desc: "Low-latency enforcement with high availability." },
  ];

  return (
    <section className="bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-16">
        <div className="text-center">
          <div className="inline-block text-sm px-3 bg-blue
           hover:text-blue-600 py-1 rounded-full bg-slate-50 text-slate-600">
            What Sets Us Apart
          </div>
          <h2 className="mt-6 text-3xl font-semibold">What Makes Us Different</h2>
          <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">
            Our philosophy is rooted in deep engineering expertise and security-first thinking.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-lg border border-dark gray p-5 
                         hover:border-blue-500 hover:shadow-xl hover:-translate-y-2 
                         transition-all duration-300 bg-white cursor-pointer"
            >
              <h4 className="text-lg font-semibold text-slate-800 hover:text-blue-600 transition-colors duration-300">
                {f.title}
              </h4>
              <p className="mt-2 text-lg text-slate-600  transition-colors duration-300">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* --- Small SVG icons --- */
function DotIcon() {
  return (
    <div className="w-11 h-11 rounded-full bg-sky-50 flex items-center justify-center ring-1 ring-sky-100">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="6" stroke="#0ea5e9" strokeWidth="1.5" fill="#7dd3fc" />
      </svg>
    </div>
  );
}
function LockIcon() {
  return (
    <div className="w-11 h-11 rounded-full bg-indigo-50 flex items-center justify-center ring-1 ring-indigo-100">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="5" y="10" width="14" height="9" rx="1.5" stroke="#4f46e5" strokeWidth="1.5" />
        <path d="M8 10V8a4 4 0 118 0v2" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function SmallCard({ title, children, accent }: { title: string; children: React.ReactNode; accent?: string }) {
  return (
    <div className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{ background: accent === "indigo" ? "#eef2ff" : "#ecfeff" }}>
          {accent === "indigo" ? <EmojiLock /> : <EmojiDot />}
        </div>
        <div>
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="mt-2 text-sm text-slate-600">{children}</p>
        </div>
      </div>
    </div>
  );
}

function EmojiDot() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="6" fill="#7dd3fc" />
    </svg>
  );
}
function EmojiLock() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="5" y="10" width="14" height="9" rx="2" stroke="#6366f1" strokeWidth="1.2" fill="#c7d2fe" />
    </svg>
  );
}

/* ---------- Expertise grid (6 small boxes) ---------- */
function Expertise() {
  const items = [
    { title: "Zero Trust Architecture", subtitle: "Policy, posture, governance", accent: "sky" },
    { title: "Secure Access & Governance", subtitle: "Unified enforcement layers", accent: "teal" },
    { title: "Cybersecurity & Threat Protection", subtitle: "Ransomware, phishing, DLP", accent: "purple" },
    { title: "Cloud & IT Infrastructure", subtitle: "Hybrid, infra modernization", accent: "amber" },
    { title: "Digital Transformation & Automation", subtitle: "Apps, APIs, automation", accent: "emerald" },
    { title: "Data Security & Compliance", subtitle: "Sovereignty, auditability", accent: "rose" },
  ];

  return (
    <section className="py-16">
      <div className="text-center">
        <div className="text-sm inline-block px-3 py-1 rounded-full bg-slate-50 text-slate-600">Core Capabilities</div>
        <h2 className="mt-4 text-3xl font-bold">Our Expertise</h2>
        <p className="mt-2 text-lg text-slate-600 max-w-2xl mx-auto">
          Six core capabilities that power our products and services.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((it) => (
          <div key={it.title} className="rounded-lg border border-slate-200 p-5 hover:shadow-lg transition">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md flex items-center justify-center ring-1"
                style={{ background: getBg(it.accent), color: "white" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="6" fill="white" opacity="0.12" /></svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800">{it.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{it.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* color helper for small icon blocks */
function getBg(accent = "sky") {
  const map: Record<string, string> = {
    sky: "#0ea5e9",
    teal: "#14b8a6",
    purple: "#8b5cf6",
    amber: "#f59e0b",
    emerald: "#10b981",
    rose: "#f43f5e",
  };
  return map[accent] ?? "#0ea5e9";
}

/* ---------- Leadership (3 profile cards) ---------- */
function Leadership() {
  const leaders = [
    { role: "Founder & CEO", title: "CEO", desc: "30+ years in cybersecurity, cloud and enterprise IT." },
    { role: "Chief Technology Officer", title: "CTO", desc: "25+ years in secure access engineering and architecture." },
    { role: "Head of Engineering", title: "ENG", desc: "15+ years developing enterprise security automation solutions." },
  ];

  return (
    <section className="py-16 border-t border-slate-100 text-center px-6 sm:px-12">
      <h2 className="mt-4 text-3xl font-bold">Leadership</h2>
      <p className="mt-2 text-lg text-slate-600 max-w-xl mx-auto">
        Led by security engineers and product architects with decades of enterprise experience.
      </p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center">
        {leaders.map((l) => (
          <div 
            key={l.role} 
            className="rounded-lg border border-gray-500 p-6 flex flex-col items-center justify-center max-w-xs h-72 mx-auto"
          >
            {/* Icon */}
            <div className="w-16 h-16 rounded-full bg-sky-600 text-white flex items-center justify-center font-semibold text-lg mb-4">
              {l.title}
            </div>
            {/* Role */}
            <h4 className="text-lg font-semibold text-center">{l.role}</h4>
            {/* Description */}
            <p className="mt-2 text-sm text-slate-600 text-center">{l.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}



/* ---------- Partner ecosystem (buttons grid) ---------- */
function Partners() {
  const logos = [
    "Microsoft Azure",
    "CrowdStrike",
    "Google Cloud",
    "HashiCorp",
    "Palo Alto Networks",
    "AWS",
    "Okta",
    "Cisco"
  ];

  return (
    <section className="py-16 text-center px-6 sm:px-12">
      <h3 className="mt-4 text-3xl font-bold">Partner Ecosystem</h3>
      <p className="mt-2 text-lg text-slate-600 max-w-2xl mx-auto">
        MSPL collaborates with leading OEMs, cloud platforms, and technology partners.
      </p>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
        {logos.map((l) => (
          <button
            key={l}
            className="w-40 h-20 flex items-center justify-center rounded-lg border border-gray-500
                       text-slate-700 font-medium transition-all duration-300 ease-in-out
                       hover:border-blue-500 hover:shadow-lg hover:scale-105"
          >
            {l}
          </button>
        ))}
      </div>
    </section>
  );
}


/* ---------- Our Approach (4 numbered cards) ---------- */
function Approach() {
  const steps = [
    { num: "01", title: "Assess", desc: "Deep-dive analysis of security posture, compliance requirements, and business objectives." },
    { num: "02", title: "Architect", desc: "Design tailored Zero Trust solutions aligned with your infrastructure and risk profile." },
    { num: "03", title: "Implement", desc: "Deployment with minimal disruption using automated tooling and best practices." },
    { num: "04", title: "Manage", desc: "Continuous monitoring, optimization and support to ensure long-term resilience." },
  ];

  return (
    <section className="py-16 border-t border-slate-100 text-center px-6 sm:px-12">
      <h3 className="mt-4 text-3xl font-bold">Our Approach</h3>
      <p className="mt-2 text-lg text-slate-600 max-w-xl mx-auto">
        A proven methodology for delivering secure, compliant solutions.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s) => (
          <div key={s.num} className="rounded-lg border border-slate-200 p-6 text-left">
            <div className="text-slate-700 font-semibold text-lg">{s.num}</div>
            <h4 className="mt-3 text-lg font-semibold">{s.title}</h4>
            <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


/* ================= SECURITY & COMPLIANCE ================= */

function SecurityCompliance() {
  const items = [
    {
      title: "Data Sovereignty",
      desc: "Designed to meet global, regional, and industry-specific data residency and sovereignty requirements.",
    },
    {
      title: "Built for Compliance",
      desc: "Designed for GDPR, CCPA, ISO 27001, and other security standards from the ground up.",
    },
    {
      title: "Access Governance",
      desc: "Zero Trust access control and continuous policy enforcement across users and products.",
    },
    {
      title: "Secure Development",
      desc: "Security-first development lifecycle with DevSecOps principles across delivery stages.",
    },
  ];

  return (
    <section className="py-16 px-6 sm:px-12">
      <div className="text-center">
        <h3 className="mt-4 text-3xl font-bold">Security & Compliance</h3>
        <p className="mt-2 text-lg text-slate-600 max-w-2xl mx-auto">
          Our solutions are designed with security and compliance as top priorities.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it) => (
          <div key={it.title} className="rounded-lg border border-slate-200 p-6 text-left">
            <h4 className="text-lg font-semibold">{it.title}</h4>
            <p className="mt-2 text-sm text-slate-600">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= CULTURE & VALUES ================= */
function CultureValues() {
  const values = [
    { title: "Innovation", desc: "Pushing the boundaries of secure access technology." },
    { title: "Integrity", desc: "Transparent, honest partnerships with every client." },
    { title: "Agility", desc: "Rapid adaptation to emerging threats and technologies." },
    { title: "Partnership", desc: "Long-term commitment to our clients’ success." },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold">Our Culture & Values</h2>
        <p className="mt-2 text-lg text-slate-600">
          The principles that guide how we build, partner, and grow.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-lg border border-slate-200 p-6 bg-white hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold text-slate-800">
                {v.title}
              </h4>
              <p className="mt-2 text-sm text-slate-600">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= JOIN OUR TEAM ================= */
function JoinTeam() {
  return (
    <section className="py-20 text-center">
      <h3 className="text-2xl font-bold">Join Our Team</h3>
      <p className="mt-2 text-lg text-slate-600 max-w-xl mx-auto">
        We're building a future-ready team for modern cybersecurity and cloud innovation.
      </p>

      <button className="mt-6 inline-flex items-center px-6 py-2 rounded-md bg-sky-600 text-white text-lg font-medium hover:bg-sky-700">
        View Open Roles
      </button>
    </section>
  );
}

/* ================= FINAL CTA ================= */
function FinalCTA() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="rounded-xl border border-white/10 p-10 text-center bg-slate-900">
          <h2 className="text-2xl font-semibold">
            Ready to strengthen your enterprise security?
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Partner with MSPL to build a comprehensive Zero Trust security architecture.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <button className="px-6 py-2 rounded-md bg-sky-600 text-white text-sm font-medium hover:bg-sky-700">
              Book Consultation
            </button>
            <button className="px-6 py-2 rounded-md border border-white/30 text-sm font-medium hover:bg-white/10">
              Explore Secure Access Platform
            </button>
          </div>

          <div className="mt-6 flex justify-center gap-6 text-xs text-slate-400">
            <span>Engineering-first approach</span>
            <span>Compliance-ready solutions</span>
            <span>Proven track record</span>
          </div>
        </div>
      </div>
    </section>
  );
}

