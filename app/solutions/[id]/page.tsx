"use client"

import React from "react";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  LockClosedIcon,
  CloudIcon,
  EyeIcon,
  KeyIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
  BugAntIcon,
  CheckCircleIcon,
  FingerPrintIcon,
  CircleStackIcon,
  BellAlertIcon,
} from "@heroicons/react/24/outline";



import { Code2, ShieldCheck, Zap, Users, ArrowRight, CheckCircle } from "lucide-react";


type CTAButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
};


import { ComponentType } from "react";
import IndustriesPage from "@/app/industries/page";
import PlatformArchitecture from "@/components/sections/PlateformArchitecture/default";
import ServicesAmplifyPage from "@/app/Plateform/page";

type FeatureCardProps = {
  Icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
  index?: number;
};


/* ---------------- CTA Button ---------------- */

const CTAButton = ({ children, variant = "primary" }: CTAButtonProps) => (
  <button
    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all
      focus:outline-none focus:ring-2 focus:ring-indigo-500
      ${variant === "primary"
        ? "bg-indigo-600 text-white shadow hover:bg-indigo-700"
        : "bg-white border border-slate-200 text-slate-700 hover:border-indigo-300"
      }`}
  >
    {children}
  </button>
);

/* ---------------- Featured Button ---------------- */

const FeatureCard = ({ Icon, title, desc, index = 0 }: FeatureCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className={`
        group relative rounded-3xl p-6
        backdrop-blur-xl bg-white/60
        border border-white/30
        shadow-[0_20px_60px_rgba(15,23,42,0.12)]
        transition-all duration-400 will-change-transform
        hover:-translate-y-2 hover:shadow-[0_30px_100px_rgba(37,99,235,0.16)]
      `}
    >
      {/* subtle glow edge (appears on hover) */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(37,99,235,0.12), rgba(99,102,241,0.06) 40%, transparent 70%)",
        }}
      />

      {/* Icon + title */}
      <div className="relative z-10 flex items-center gap-4 mb-4">
        <div
          className={`
            p-3 rounded-2xl
            bg-gradient-to-br from-sky-50/60 to-indigo-50/40
            border border-sky-200/40 shadow-inner
            transition-transform duration-300 group-hover:scale-105
          `}
        >
          <Icon className="w-6 h-6 text-indigo-600" />
        </div>

        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      </div>

      {/* description */}
      <p className="relative z-10 text-sm text-slate-600 leading-relaxed">
        {desc}
      </p>

      {/* bottom micro-line */}
      <div className="relative z-10 mt-6 h-px w-full bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent" />
    </motion.article>
  );
};

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-7xl mx-auto px-6">{children}</div>
);


const SectionBadge = ({ text }: { text: string }) => (
  <span className="inline-block mb-4 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
    {text}
  </span>
);



// top of file//
function ServicesCards() {
  const services = [
    {
      icon: ShieldCheckIcon,
      title: "Zero Trust Network Access (ZTNA) Implementation",
      desc: "Design and deploy identity-centric, context-aware access controls that eliminate implicit trust.",
      items: [
        "Policy-based access enforcement",
        "Continuous verification architecture",
        "Micro-segmentation implementation",
        "Integration with identity providers",
      ],
    },
    {
      icon: KeyIcon,
      title: "Identity & Access Management (IAM)",
      desc: "Comprehensive IAM strategy, implementation, and governance for enterprise identity infrastructure.",
      items: [
        "Centralized identity governance",
        "MFA & adaptive authentication",
        "Role-based access control (RBAC)",
        "Privileged access management (PAM)",
      ],
    },
    {
      icon: ComputerDesktopIcon,
      title: "Security Monitoring & SIEM",
      desc: "Deploy enterprise-grade SIEM and event management for real-time threat detection.",
      items: [
        "Centralized log management",
        "Threat detection & correlation",
        "Compliance reporting automation",
        "Incident investigation workflows",
      ],
    },
    {
      icon: CloudIcon,
      title: "Cloud Security Posture Management (CSPM)",
      desc: "Continuous monitoring and remediation of cloud misconfigurations and compliance violations.",
      items: [
        "Multi-cloud security assessment",
        "Automated compliance checks",
        "Misconfiguration remediation",
        "Cloud workload protection",
      ],
    },
    {
      icon: LockClosedIcon,
      title: "Data Security & Data Loss Prevention (DLP)",
      desc: "Protect sensitive data across endpoints, networks, and cloud with advanced DLP strategies.",
      items: [
        "Data classification & discovery",
        "Policy-based data protection",
        "Encryption & tokenization",
        "Insider threat detection",
      ],
    },
    {
      icon: GlobeAltIcon,
      title: "Security Operations Center (SOC) Setup",
      desc: "24/7 security monitoring, threat hunting, and incident response capabilities.",
      items: [
        "SOC infrastructure setup",
        "Playbooks & runbook development",
        "Threat intelligence integration",
        "Incident response automation",
      ],
    },
    {
      icon: BugAntIcon,
      title: "Security Posture Assessment & Penetration Testing",
      desc: "Comprehensive audits, vulnerability assessments, and ethical hacking exercises.",
      items: [
        "Infrastructure vulnerability scanning",
        "Application penetration testing",
        "Red team exercises",
        "Remediation roadmap",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      {/* SECTION HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-sm font-medium text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
          Service Catalogue
        </span>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
          Cybersecurity Services We Deliver
        </h2>

        <p className="mt-3 max-w-2xl mx-auto text-lg text-slate-600">
          Comprehensive security services spanning identity, infrastructure,
          data, and operations
        </p>
      </div>

      {/* GLASS CARDS */}
      <div className="mx-auto mt-14 max-w-7xl grid gap-10 grid-cols-1 md:grid-cols-2 px-4 sm:px-6 lg:px-8">
        {services.map((service, i) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="
                group relative
                rounded-3xl
                p-8

                backdrop-blur-xl
                bg-white/65
                border border-white/60

                shadow-[0_30px_80px_rgba(15,30,70,0.15)]
                transition-all duration-500 ease-out

                hover:-translate-y-2
                hover:shadow-[0_40px_120px_rgba(37,99,235,0.25)]
                hover:border-indigo-500/40
              "
            >
              {/* GLASS GLOW */}
              <div
                aria-hidden
                className="
                  absolute inset-0 rounded-3xl
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                "
                style={{
                  background:
                    "linear-gradient(135deg, rgba(79,70,229,0.18), transparent 40%, transparent 60%, rgba(59,130,246,0.12))",
                }}
              />

              {/* CONTENT */}
              <div className="relative z-10">
                {/* ICON */}
                <div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-sky-50 to-indigo-50 p-4 border border-indigo-200/40 shadow-inner">
                  <Icon className="h-6 w-6 text-indigo-600 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* TITLE */}
                <h3 className="mt-5 text-base font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 text-sm text-slate-600">
                  {service.desc}
                </p>

                {/* LIST */}
                <ul className="mt-5 space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <span className="mt-1 h-4 w-4 rounded-full border border-emerald-500 text-emerald-500 flex items-center justify-center text-xs">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* MICRO DIVIDER */}
                <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}


/* =====================
Philosophy Section
===================== */


function Philosophy() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <Container>
        {/* heading */}
        <div className="relative text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 text-sm rounded-full border border-indigo-200 bg-indigo-50 text-indigo-600">
            Our Approach
          </span>

          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
            MSPL’s Cybersecurity Philosophy
          </h2>
        </div>

        {/* top cards */}
        <div className="relative grid  gap-8 md:grid-cols-2">
          {[
            {
              title: "Engineering-First Security",
              desc: `We design security architectures the same way we build products—
with precision, testing, and a deep understanding of system behavior under attack conditions.

Our team brings decades of experience in secure system design, cryptography,
network security, and threat modeling.`,
            },
            {
              title: "Zero Trust by Default",
              desc: `Every service we deliver embeds Zero Trust principles:
verify explicitly, use least-privilege access, and assume breach.

We don’t just implement tools—we transform security culture and
operational workflows around continuous verification.`,
            },
          ].map((card) => (
            <div
              key={card.title}
              className="relative rounded-2xl p-8 bg-white border border-blue-200 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                {card.title}
              </h3>

              <p className="text-sm leading-relaxed text-slate-600 whitespace-pre-line">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* bottom section */}
        <div className="relative mt-14 rounded-2xl border border-blue-200 bg-slate-50 p-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">
            Why MSPL’s Approach Is Different
          </h3>

          <div className="grid  gap-6 sm:grid-cols-3">
            {[
              {
                title: "Vendor-Neutral Guidance",
                desc: "We recommend what’s right for you, not what benefits our bottom line.",
              },
              {
                title: "Platform Integration",
                desc: "Services designed to amplify MSPL’s product ecosystem.",
              },
              {
                title: "Compliance-First Design",
                desc: "Security architectures built with audit readiness in mind.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <span className="mt-1 h-5 w-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs">
                  ✓
                </span>

                <div>
                  <p className="text-sm font-medium text-slate-900">
                    {item.title}
                  </p>
                  <p className="text-sm text-slate-600 mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}




/* =====================
Way of Working
===================== */


function WayOfWorking() {
  const steps = [
    { title: "Assess", icon: EyeIcon, desc: "Deep analysis of current security posture and risks." },
    { title: "Architect", icon: CloudIcon, desc: "Design Zero Trust aligned architectures." },
    { title: "Implement", icon: ShieldCheckIcon, desc: "Phased deployment with minimal disruption." },
    { title: "Manage", icon: LockClosedIcon, desc: "Continuous monitoring and optimization." },
  ];


  return (
    <section className="py-20 border-t border-slate-200">
      <Container>
        <div className="text-center mb-16">
          <SectionBadge text="Our Method" />
          <h2 className="text-3xl font-bold">The MSPL Way of Working</h2>
          <p className="mt-3 text-slate-600">A proven, systematic cybersecurity transformation model</p>
        </div>


        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
  {steps.map((s) => (
    <div
      key={s.title}
      className="
        group
        rounded-2xl
        p-[1px]
        bg-gradient-to-r from-blue-300 via-sky-400 to-indigo-300
        transition-all duration-300
      "
    >
      <div
        className="
          rounded-2xl
          bg-white
          p-6
          text-center
          transition-all duration-300
          group-hover:shadow-[0_20px_50px_rgba(37,99,235,0.25)]
        "
      >
        <s.icon className="h-8 w-8 mx-auto text-indigo-600" />
        <h3 className="mt-4 font-semibold">{s.title}</h3>
        <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
      </div>
    </div>
  ))}
</div>

      </Container>
    </section>
  );
}

/* ----------------------------- Final CTA ----------------------------- */

function FinalCTA() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6 relative">
        {/* Decorative background blobs */}
        <div
          aria-hidden={true}
          className="pointer-events-none absolute inset-x-0 top-0 -translate-y-1/3 -z-10 flex justify-center"
          style={{ height: 260 }}
        >
          <div
            className="w-full max-w-3xl rounded-3xl blur-3xl opacity-20"
            style={{
              height: 260,
              background:
                "radial-gradient(400px 120px at 20% 20%, rgba(14,165,233,0.08), transparent 15%), radial-gradient(420px 120px at 80% 80%, rgba(59,130,246,0.06), transparent 18%)",
            }}
          />
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="rounded-xl border border-white/10 p-10 text-center bg-gradient-to-b from-slate-900/80 to-slate-900/95 shadow-xl backdrop-blur-md"
            role="region"
            aria-labelledby="enterprise-cta-title"
          >
            <h2 id="enterprise-cta-title" className="text-2xl font-semibold">
              Ready to strengthen your enterprise security?
            </h2>

            <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto">
              Partner with MSPL to design and deploy a comprehensive Zero Trust
              security architecture — built for scale, observability and
              compliance.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <a
                href="/contact"
                role="button"
                aria-label="Book consultation"
                className="inline-flex items-center gap-3 px-6 py-2 rounded-md bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-sm font-medium shadow-md transform-gpu transition duration-200 hover:scale-[1.02] focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-400/30"
              >
                <ShieldCheck className="h-4 w-4" />
                Book Consultation
              </a>

              <a
                href="/platform"
                role="button"
                aria-label="Explore secure access platform"
                className="inline-flex items-center gap-3 px-6 py-2 rounded-md border border-white/20 text-sm font-medium hover:bg-white/6 transition focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-700/40"
              >
                Explore Secure Access Platform
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Trust list + badges */}
            <div className="mt-6 flex justify-center gap-6 text-xs text-slate-300 flex-wrap items-center">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-sky-400" />
                <span>Engineering-first approach</span>
              </div>

              <div className="hidden sm:block h-0.5 w-px bg-white/8 mx-2" aria-hidden={true} />

              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-sky-400" />
                <span>Compliance-ready solutions</span>
              </div>

              <div className="hidden sm:block h-0.5 w-px bg-white/8 mx-2" aria-hidden={true} />

              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-sky-400" />
                <span>Proven track record</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* =====================
Page Export
===================== */

/* ---------------- Main Page ---------------- */
export default function CybersecurityServicesPage() {

  const features = [
    {
      Icon: ExclamationTriangleIcon,
      title: "Legacy Security Models",
      desc:
        "Perimeter-first defenses fail against modern threats and remote work realities.",
    },
    {
      Icon: FingerPrintIcon,
      title: "Compliance Complexity",
      desc:
        "GDPR, SOC2 and evolving regulations demand continuous governance.",
    },
    {
      Icon: CloudIcon,
      title: "Cloud Sprawl",
      desc:
        "Multi-cloud environments create visibility gaps and policy challenges.",
    },
    {
      Icon: ShieldCheckIcon,
      title: "Insider Threats",
      desc:
        "Privileged access abuse and credential theft remain top attack vectors.",
    },
    {
      Icon: CircleStackIcon,
      title: "Data Exposure",
      desc:
        "Sensitive data across SaaS and on-prem increases breach risk.",
    },
    {
      Icon: BellAlertIcon,
      title: "Alert Fatigue",
      desc:
        "Security teams overwhelmed by noise may miss real threats.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-14">
        {/* Badge */}
        <span className="inline-block mb-6 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
          Services
        </span>

        {/* Hero */}
        <section className="grid gap-10 lg:grid-cols-2 items-center ">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold">
              Cybersecurity Services
            </h1>
            <p className="mt-4 max-w-xl text-slate-600">
              Enterprise-grade security strategy, Zero Trust implementation,
              and modern threat protection.
            </p>

            <div className="mt-6 flex gap-3 flex-wrap">
              <CTAButton>Book a Consultation</CTAButton>
              <CTAButton variant="secondary">
                Request Solution Assessment
              </CTAButton>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="my-12 h-px bg-slate-200" />

        {/* Challenges */}
        <section className="text-center">
          <div className="text-sm inline-block px-3 py-1 rounded-full bg-red-50 ">Core Capabilities</div>

          <h2 className="text-2xl font-semibold">
            Security Challenges Enterprises Face Today
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-sm text-slate-600">
            Legacy security models can no longer handle modern attack surfaces.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, i) => (
              <FeatureCard key={i} Icon={item.Icon} title={item.title} desc={item.desc} index={i} />
            ))}
          </div>
        </section>
      </div>

      <Philosophy />
      <ServicesCards />
      <WayOfWorking />
      <IndustriesPage />
      <ServicesAmplifyPage />
      <FinalCTA />


    </main>
  );
}



