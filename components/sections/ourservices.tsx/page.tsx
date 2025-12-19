// components/OurServices.tsx
import React from "react";

type Service = {
  title: string;
  desc: string;
  points: string[];
  color?: string; // accent color for the small icon badge
};

const SERVICES: Service[] = [
  {
    title: "Cybersecurity Services",
    desc:
      "Comprehensive security strategy, implementation, and threat protection for enterprise environments.",
    points: [
      "Zero Trust implementation",
      "Threat detection & response",
      "Security posture assessment",
      "Vulnerability management",
    ],
    color: "text-sky-600",
  },
  {
    title: "Cloud & IT Infrastructure",
    desc:
      "Cloud migration, hybrid infrastructure, and modernization services for scalable enterprise operations.",
    points: [
      "Cloud migration strategy",
      "Hybrid infrastructure design",
      "Disaster recovery planning",
      "Infrastructure modernization",
    ],
    color: "text-teal-500",
  },
  {
    title: "Digital Transformation & Innovation",
    desc: "End-to-end digital transformation consulting and execution for business modernization.",
    points: [
      "Digital strategy roadmap",
      "Process optimization",
      "Innovation workshops",
      "Change management",
    ],
    color: "text-violet-600",
  },
  {
    title: "AI & Machine Learning",
    desc: "AI strategy, ML model development and automation for data-driven decisions.",
    points: ["AI strategy & roadmap", "Model development", "Predictive analytics", "Automation"],
    color: "text-amber-500",
  },
  {
    title: "Automation & RPA",
    desc: "Robotic process automation and workflow optimization for operational efficiency.",
    points: ["Process automation", "RPA implementation", "Workflow optimization", "Bot lifecycle"],
    color: "text-emerald-500",
  },
  {
    title: "Data Analytics & BI",
    desc: "Data engineering, analytics platforms and BI to accelerate insight-driven decisions.",
    points: ["Data strategy", "Advanced analytics", "Dashboarding", "Platform integration"],
    color: "text-pink-500",
  },
  {
    title: "Governance, Risk & Compliance",
    desc: "GRC frameworks, risk assessments and audit readiness for regulated industries.",
    points: ["Compliance frameworks", "Risk assessments", "Audit preparedness", "Policy management"],
    color: "text-sky-700",
  },
  {
    title: "Managed IT & Security Ops",
    desc: "Managed operations, SOC, monitoring and incident response at scale.",
    points: ["24×7 monitoring", "Incident response", "SOC services", "Patch management"],
    color: "text-indigo-600",
  },
  {
    title: "Enterprise App Development",
    desc: "Custom applications, integrations and modernization services for core systems.",
    points: ["Custom apps", "System integration", "Legacy modernization", "DevOps enablement"],
    color: "text-rose-500",
  },
];

export default function OurServices() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full  bg-sky-600 text-white text-sm font-medium hover:bg-sky-700 transition ">
            Full-Stack Services
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-slate-900">
            Explore Our Services
          </h2>

          <p className="mt-4 text-base text-slate-600">
            Comprehensive service offerings spanning cybersecurity, cloud infrastructure, digital
            transformation, and managed operations.
          </p>
        </div>

        {/* grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Reusable Service Card ---------------- */
function ServiceCard({ title, desc, points, color = "text-sky-600" }: Service) {
  return (
    <article
      className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow duration-150"
      aria-labelledby={title.replace(/\s+/g, "-").toLowerCase()}
    >
      {/* icon badge */}
      <div className="flex items-start gap-4">
        <div
          className={`flex-none h-12 w-12 rounded-lg inline-flex items-center justify-center bg-slate-50 ring-1 ring-slate-100 ${color}`}
          aria-hidden
        >
          <SmallIcon />
        </div>

        <div className="min-w-0">
          <h3 id={title.replace(/\s+/g, "-").toLowerCase()} className="text-lg font-semibold text-slate-900">
            {title}
          </h3>

          <p className="mt-2 text-sm text-slate-600">{desc}</p>

          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                <span className="truncate">{p}</span>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="mt-6 inline-block text-sm font-medium text-sky-600 hover:underline"
            aria-label={`Explore ${title}`}
          >
            Explore Service →
          </a>
        </div>
      </div>
    </article>
  );
}

/* small neutral SVG to represent an icon — replace with brand SVGs if you want */
function SmallIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.14" />
    </svg>
  );
}
