"use client";

import {
  ShieldCheckIcon,
  Cog6ToothIcon,
  CircleStackIcon,
  ChartBarIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

export default function PlatformArchitecture() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 text-sm font-medium text-blue-600">
          Platform Architecture
        </span>

        {/* Heading */}
        <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
          Unified Secure Access <span className="text-blue-600">Platform</span>
        </h1>

        {/* Sub text */}
        <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-base sm:text-lg">
          The foundational architecture that powers all MSPL products—engineered
          for unified governance, enforcement, and visibility.
        </p>

        {/* Architecture Box */}
        <div className="mt-14 border border-gray-200 rounded-2xl p-6 sm:p-10 shadow-sm">
          {/* Layers */}
          <div className="space-y-4">
            <ArchitectureRow title="Control Plane" active/>
            <ArchitectureRow title="Data Plane" active />
            <ArchitectureRow title="Policy Layer" active />
          </div>

          {/* Divider */}
          <div className="my-10 h-px bg-gray-200" />

          {/* Platform Pillars */}
          <div className="text-left">
            <p className="text-sm font-semibold text-blue-600 mb-6">
              Platform Pillars
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Pillar
                icon={CircleStackIcon}
                title="Policy Engine"
                desc="Centralized policy orchestration"
              />
              <Pillar
                icon={ShieldCheckIcon}
                title="Governance"
                desc="Unified access control"
              />
              <Pillar
                icon={ChartBarIcon}
                title="Threat Analytics"
                desc="Real-time threat intelligence"
              />
              <Pillar
                icon={LockClosedIcon}
                title="Zero Trust Enforcement"
                desc="Continuous validation"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <button className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white text-sm font-medium hover:bg-blue-700 transition">
            Explore Platform Architecture →
          </button>
          <p className="mt-3 text-sm text-gray-500">
            See how our platform unifies browser, network, and access control
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Reusable Components ---------- */

function ArchitectureRow({
  title,
  active = false,
}: {
  title: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between rounded-xl border px-5 py-4 transition
      ${
        active
          ? "border-blue-500 bg-blue-50"
          : "border-gray-200 bg-gray-50"
      }`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`h-2.5 w-2.5 rounded-full ${
            active ? "bg-blue-600" : "bg-gray-400"
          }`}
        />
        <p className="font-medium text-gray-900">{title}</p>
      </div>

      <Cog6ToothIcon className="h-5 w-5 text-gray-400" />
    </div>
  );
}


function Pillar({
  icon: Icon,
  title,
  desc,
  
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="
        group
        rounded-2xl
        border border-gray-200
        p-6
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:border-blue-500/60
        hover:shadow-lg
      "
    >
      {/* Icon */}
      <div
        className="
          mb-4
          inline-flex
          rounded-full
          border border-blue-500/40
          bg-blue-500/10
          p-3
          transition-all duration-300 ease-out
          group-hover:-translate-y-1
          group-hover:border-blue-500
        "
      >
        <Icon className="h-7 w-7 text-blue-600" />
      </div>

      {/* Title */}
      <h4
        className="
          font-semibold
          text-gray-900
          transition-colors duration-300
          group-hover:text-indigo-600
        "
      >
        {title}
      </h4>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  );
}
