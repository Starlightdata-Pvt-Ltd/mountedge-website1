"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ShieldCheckIcon,
  Cog6ToothIcon,
  CircleStackIcon,
  ChartBarIcon,
  LockClosedIcon,
  ChevronDownIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";

/**
 * PlatformArchitecture — hover-interactive version
 * - No dialog / modal
 * - Hover or keyboard-focus a pillar to highlight it
 * - One card is active by default ("policy")
 * - Kebab (⋮) menu remains for secondary actions (Overview, Docs, Request Demo)
 *
 * Tailwind required. No external libs.
 */

export default function PlatformArchitecture() {
  const [expandedRow, setExpandedRow] = useState<number | null>(0);
  // default active pillar: 'policy'
  const [activePillar, setActivePillar] = useState<string>("policy");

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      // pressing Esc returns to default active pillar and collapses rows
      if (e.key === "Escape") {
        setActivePillar("policy");
        setExpandedRow(null);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const rows: { title: string; short?: string; bullets: string[] }[] = [
    {
      title: "Control Plane",
      short: "Orchestrates configuration, identity, and telemetry",
      bullets: ["Central orchestration", "Identity-aware controls", "Audit-ready logs"],
    },
    {
      title: "Data Plane",
      short: "Fast path for secure traffic enforcement",
      bullets: ["High-throughput enforcement", "Low-latency forwarding", "Resilient routing"],
    },
    {
      title: "Policy Layer",
      short: "Evaluates policies & makes allow/deny decisions",
      bullets: ["Contextual decisions", "Policy versioning", "Staging & rollout"],
    },
  ];

  const pillars: {
    key: string;
    icon: React.ComponentType<Record<string, unknown>>;
    title: string;
    desc: string;
    details: string;
    capabilities?: string[];
  }[] = [
    {
      key: "policy",
      icon: CircleStackIcon,
      title: "Policy Engine",
      desc: "Centralized policy orchestration",
      details:
        "Policy Engine unifies rules across browser, network and endpoint controls. It supports policy staging, rollouts, previews, and immutable audit trails for compliance.",
      capabilities: ["Versioning", "Staging", "Preview", "Audit Trails"],
    },
    {
      key: "governance",
      icon: ShieldCheckIcon,
      title: "Governance",
      desc: "Unified access control",
      details:
        "Governance provides role-based access, approval workflows, and compliance attestations. Integrates with identity providers and supports delegated approvals.",
      capabilities: ["RBAC", "Workflows", "SAML/OIDC", "Attestations"],
    },
    {
      key: "analytics",
      icon: ChartBarIcon,
      title: "Threat Analytics",
      desc: "Real-time threat intelligence",
      details:
        "Threat Analytics correlates events for rapid investigations and forensic timelines while preserving privacy and compliance requirements.",
      capabilities: ["Correlation", "Forensics", "Anomaly Detection"],
    },
    {
      key: "zt",
      icon: LockClosedIcon,
      title: "Zero Trust Enforcement",
      desc: "Continuous validation",
      details:
        "Continuous verification with adaptive risk scoring and micro-segmentation to enforce least-privilege access across users and devices.",
      capabilities: ["Adaptive Risk", "Device Posture", "Micro-Segmentation"],
    },
  ];

  return (
    <section className="bg-white/80 backdrop-blur-sm py-20 px-4">
      <div className="max-w-6xl mx-auto text-center relative">
        {/* Decorative top glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 w-[820px] h-[360px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 40% 30%, rgba(11,110,255,0.14), rgba(11,110,255,0.06) 35%, transparent 60%)",
          }}
        />

        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 text-sm font-medium text-blue-600 bg-white/60 backdrop-blur-sm">
          Platform Architecture
        </span>

        {/* Heading */}
        <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
          Unified Secure Access <span className="text-blue-600">Platform</span>
        </h1>

        {/* Subtext */}
        <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-base sm:text-lg">
          The foundational architecture that powers all MSPL products—engineered for unified
          governance, enforcement, and visibility.
        </p>

        {/* Card containing architecture + pillars */}
        <div className="mt-14 relative rounded-2xl p-6 sm:p-10 shadow-lg border border-gray-100 bg-white/70 backdrop-blur-sm">
          {/* Layers rows */}
          <div className="space-y-4">
            {rows.map((r, idx) => (
              <ArchitectureRow
                key={r.title}
                index={idx}
                title={r.title}
                short={r.short}
                bullets={r.bullets}
                active={expandedRow === idx}
                onToggle={() => setExpandedRow((s) => (s === idx ? null : idx))}
              />
            ))}
          </div>

          {/* Divider */}
          <div className="my-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

          {/* Platform Pillars (grid + hover / focus interactive) */}
          <div className="text-left">
            <p className="text-sm font-semibold text-blue-600 mb-6">Platform Pillars</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((p) => (
                <Pillar
                  key={p.key}
                  data={p}
                  active={activePillar === p.key}
                  // mouse/focus handlers that change active state but do not open any dialog
                  onHover={() => setActivePillar(p.key)}
                  onLeave={() => setActivePillar("policy")}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <button
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white text-sm font-medium hover:bg-blue-700 transition"
            onClick={() => {
              setExpandedRow((s) => (s === 0 ? null : 0));
              setActivePillar("policy");
            }}
          >
            Explore Platform Architecture →
          </button>
          <p className="mt-3 text-sm text-gray-500">See how our platform unifies browser, network, and access control</p>
        </div>
      </div>
    </section>
  );
}

/* -------- ArchitectureRow (expandable with capability chips) -------- */

function ArchitectureRow({
  title,
  short,
  bullets,
  active,
  onToggle,
  index,
}: {
  title: string;
  short?: string;
  bullets: string[];
  active?: boolean;
  onToggle?: () => void;
  index?: number;
}) {
  return (
    <div
      className={`group relative rounded-xl border px-5 py-4 transition-all duration-300 ${
        active ? "border-blue-500 bg-blue-50 shadow-md" : "border-gray-200 bg-white"
      }`}
    >
      <div
        role="button"
        tabIndex={0}
        aria-expanded={!!active}
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
            e.preventDefault();
            onToggle?.();
          }
        }}
        className="flex items-center justify-between cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <span
            className={`h-3 w-3 rounded-full ${active ? "bg-blue-600 animate-pulse" : "bg-gray-400"}`}
            aria-hidden
          />
          <p className="font-medium text-gray-900">{title}</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500 hidden sm:inline">{short}</span>
          <ChevronDownIcon
            className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${active ? "rotate-180 text-blue-600" : ""}`}
            aria-hidden
          />
        </div>
      </div>

      {/* Expand content: capability chips + explanation */}
      <div
        className={`overflow-hidden transition-all duration-500 ${active ? "max-h-[320px] mt-4" : "max-h-0"}`}
        aria-hidden={!active}
      >
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {bullets.map((b) => (
              <span
                key={b}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/60 backdrop-blur-sm border border-gray-100"
              >
                {b}
              </span>
            ))}
          </div>

          <div className="mt-4 text-sm text-gray-600">
            <p>
              {title} coordinates the lifecycle and enforcement for related functions across the platform.
              Expand or collapse to keep the UI tidy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------- Pillar component (hover / focus interactive, kebab menu for actions) -------- */

function Pillar({
  data,
  active,
  onHover,
  onLeave,
}: {
  data: {
    key: string;
    icon: React.ComponentType<Record<string, unknown>>;
    title: string;
    desc: string;
    details: string;
    capabilities?: string[];
  };
  active?: boolean;
  onHover?: () => void;
  onLeave?: () => void;
}) {
  const Icon = data.icon;
  // local menu state for kebab dropdown
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <div
      // do NOT bind onClick to open dialogs — only hover/focus changes active state
      className={`group relative rounded-2xl p-6 border transition-all duration-300 ease-out ${
        active ? "border-blue-400 bg-white shadow-xl scale-[1.01]" : "border-gray-200 bg-white/80"
      }`}
      onMouseEnter={() => onHover && onHover()}
      onMouseLeave={() => onLeave && onLeave()}
      onFocus={() => onHover && onHover()}
      onBlur={() => onLeave && onLeave()}
      tabIndex={0}
      role="button"
      aria-pressed={active}
    >
      <div className="flex items-start justify-between">
        <div>
          <div
            className="mb-4 inline-flex rounded-full p-3 border shadow-inner transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, rgba(11,110,255,0.07), rgba(11,110,255,0.02))",
              borderColor: active ? "rgba(59,130,246,0.45)" : undefined,
            }}
          >
            <Icon className="h-7 w-7 text-blue-600" />
          </div>
          <h4 className={`font-semibold text-gray-900 ${active ? "text-blue-600" : ""}`}>{data.title}</h4>
          <p className="mt-2 text-sm text-gray-600">{data.desc}</p>
        </div>

        {/* Kebab / dropdown for secondary actions (does not change active state) */}
        <div
          className="ml-4 flex flex-col items-end"
          onClick={(e) => {
            // prevent unintended bubbling — kebab interactions shouldn't change pillar hover state
            e.stopPropagation();
          }}
        >
          <div ref={menuRef} className="relative">
            <button
              onClick={() => setMenuOpen((s) => !s)}
              aria-haspopup="menu"
              aria-expanded={menuOpen}
              className="p-2 rounded-full hover:bg-gray-100 transition"
              title="More actions"
            >
              <EllipsisVerticalIcon className="h-5 w-5 text-gray-600" />
            </button>

            {menuOpen && (
              <div
                role="menu"
                aria-label={`${data.title} actions`}
                className="absolute right-0 mt-2 w-44 rounded-lg bg-white border border-gray-100 shadow-lg z-20"
              >
                <ul className="py-2">
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setMenuOpen(false);
                        // Overview action — for now just highlight this card (keeping behaviour inline)
                        // you can wire this to a route if needed
                      }}
                      role="menuitem"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Overview
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setMenuOpen(false);
                        window.open("/docs", "_blank");
                      }}
                      role="menuitem"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Docs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setMenuOpen(false);
                        window.location.href = "/request-demo";
                      }}
                      role="menuitem"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Request Demo
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* capabilities chips (no metrics) */}
      {data.capabilities && (
        <div className="mt-4 flex flex-wrap gap-2">
          {data.capabilities.map((c) => (
            <span key={c} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/60 backdrop-blur-sm border border-gray-100">
              {c}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
