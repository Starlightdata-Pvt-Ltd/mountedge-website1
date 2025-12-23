"use client";

import React from "react";
import { motion } from "framer-motion";

type Service = {
  title: string;
  desc: string;
  points: string[];
  color?: string;
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
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-sky-600 text-white text-sm font-medium">
            Full-Stack Services
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-slate-900">
            Explore Our Services
          </h2>

          <p className="mt-4 text-base text-slate-600">
            Comprehensive service offerings spanning cybersecurity, cloud infrastructure, digital
            transformation, and managed operations.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Animated Service Card ---------------- */
function ServiceCard({
  title,
  desc,
  points,
  color = "text-sky-600",
  index,
}: Service & { index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      whileHover={{
        y: -10,
        boxShadow: "0 25px 60px rgba(15, 23, 42, 0.15)",
      }}
      className="group rounded-2xl border border-slate-200 bg-white p-6 md:p-8 transition-all"
      aria-labelledby={title.replace(/\s+/g, "-").toLowerCase()}
    >
      <div className="flex items-start gap-4">
        {/* ICON */}
        <div
          className={`flex-none h-12 w-12 rounded-xl inline-flex items-center justify-center
          bg-slate-50 ring-1 ring-slate-100 transition-all duration-300
          group-hover:scale-110 group-hover:bg-slate-100 ${color}`}
        >
          <SmallIcon />
        </div>

        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>

          <p className="mt-2 text-sm text-slate-600">{desc}</p>

          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="mt-6 inline-block text-sm font-medium text-sky-600 transition group-hover:translate-x-1"
          >
            Explore Service →
          </a>
        </div>
      </div>
    </motion.article>
  );
}

/* ---------------- Icon ---------------- */
function SmallIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.14" />
    </svg>
  );
}
