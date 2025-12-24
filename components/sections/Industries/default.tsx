"use client";

import React from "react";
import Link from "next/link";
import {
  BuildingLibraryIcon,
  HeartIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const INDUSTRIES = [
  {
    id: "bfsi",
    tag: "Compliance Risk",
    title: "BFSI",
    desc: "Built for regulatory compliance, data sovereignty, and secure digital banking.",
    icon: BuildingLibraryIcon,
  },
  {
    id: "healthcare",
    tag: "Data Governance",
    title: "Healthcare",
    desc: "Built for patient data protection, EMR security, and HIPAA compliance.",
    icon: HeartIcon,
  },
  {
    id: "education",
    tag: "Security & Integrity",
    title: "Education",
    desc: "Built for secure exam environments, learning platforms, and academic integrity.",
    icon: AcademicCapIcon,
  },
  {
    id: "enterprise",
    tag: "Distributed Workforce",
    title: "Enterprise",
    desc: "Built for distributed teams, remote access, and hybrid infrastructure.",
    icon: BriefcaseIcon,
  },
];

export default function IndustriesSection() {
  return (
    <section className="relative bg-white/80 py-20 px-4">
      {/* Decorative gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -translate-y-1/3 -z-10 flex justify-center"
      >
        <div
          className="w-full max-w-6xl rounded-3xl blur-3xl opacity-20"
          style={{
            height: 340,
            background:
              "radial-gradient(800px 200px at 10% 20%, rgba(59,130,246,0.06), transparent 12%), radial-gradient(700px 200px at 90% 80%, rgba(14,165,233,0.04), transparent 12%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 text-sm font-medium text-blue-700 bg-blue-50">
          Industry Solutions
        </span>

        {/* Heading */}
        <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900">
          Industries We Support
        </h2>

        {/* Subtitle */}
        <p className="mt-4 max-w-2xl mx-auto text-slate-600">
          Purpose-built for compliance-heavy, mission-critical sectors. Secure,
          auditable, and tailored to industry-specific regulations.
        </p>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {INDUSTRIES.map((item, idx) => {
            const Icon = item.icon;
            const headingId = `industry-${item.id}`;

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.36, delay: idx * 0.06 }}
                viewport={{ once: true, amount: 0.25 }}
                className="group rounded-2xl border border-slate-100 p-6 hover:shadow-2xl transition-shadow bg-white/70 backdrop-blur-sm"
                aria-labelledby={headingId}
              >
                {/* Top row */}
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-block mb-2 px-3 py-1 text-xs font-semibold rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-50/60">
                    {item.tag}
                  </span>

                  <div
                    className="h-12 w-12 rounded-xl flex items-center justify-center"
                    aria-hidden
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(59,130,246,0.06), rgba(14,165,233,0.04))",
                    }}
                  >
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>

                {/* Title */}
                <h3
                  id={headingId}
                  className="mt-3 text-lg font-semibold text-slate-900"
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>

                {/* Footer */}
                <div className="mt-6 flex items-center justify-between gap-4">
                  <Link
                    href={`/industries/${item.id}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition"
                    aria-label={`Explore ${item.title} industry`}
                  >
                    Explore Industry
                    <span
                      className="inline-block transform transition group-hover:translate-x-1"
                      aria-hidden
                    >
                      →
                    </span>
                  </Link>

                  <div className="hidden sm:inline-flex items-center gap-2 rounded-full px-2 py-1 bg-white/40 text-xs text-slate-500 ring-1 ring-slate-50">
                    <span className="font-medium text-blue-600">Tailored</span>
                    <span>solutions</span>
                  </div>
                </div>

                <style jsx>{`
                  article:focus-within {
                    outline: 3px solid rgba(59, 130, 246, 0.12);
                    outline-offset: 6px;
                    border-radius: 14px;
                  }
                `}</style>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
