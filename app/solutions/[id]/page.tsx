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





type CTAButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
};


import { ComponentType } from "react";

type FeatureCardProps = {
  Icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
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
const FeatureCard = ({ Icon, title, desc }: FeatureCardProps) => (
  <motion.article
    whileHover={{ y: -6 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md"
  >
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-red-50">
        <Icon className="h-6 w-6 text-red-600" />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-xs text-slate-600">{desc}</p>
      </div>
    </div>
  </motion.article>
);

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-7xl mx-auto px-6">{children}</div>
);


const SectionBadge = ({ text }: { text: string }) => (
  <span className="inline-block mb-4 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
    {text}
  </span>
);




 /*function Services() {
  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Heading *
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 mb-4 text-sm rounded-full border border-slate-300 text-slate-700">
            Service Catalogue
          </span>

          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
            Cybersecurity Services We Deliver
          </h2>

          <p className="mt-4 text-sm text-slate-600 max-w-xl mx-auto">
            Comprehensive security services spanning identity, infrastructure,
            data, and operations
          </p>
        </div>

        {/* Cards *
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
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
              icon: BugAnIcon,
              title: "Security Posture Assessment & Penetration Testing",
              desc: "Comprehensive audits, vulnerability assessments, and ethical hacking exercises.",
              items: [
                "Infrastructure vulnerability scanning",
                "Application penetration testing",
                "Red team exercises",
                "Remediation roadmap",
              ],
            },
          ].map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-base font-semibold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-3 text-sm text-slate-600">
                {service.desc}
              </p>

              <ul className="mt-5 space-y-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <span className="mt-1 h-4 w-4 rounded-full border border-emerald-500 text-emerald-500 flex items-center justify-center text-xs">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA *
        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-6 py-2.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition">
            Request Detailed Scope
          </button>
        </div>
      </Container>
    </section>
  );
}  */


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
    <div className="mx-auto max-w-7xl grid gap-10 grid-cols-1 md:grid-cols-2 px-4 sm:px-6 lg:px-8">
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <div
            key={service.title}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-1"
          >
            {/* Icon above title */}
            <div  className="flex justify-center">
              <div className="flex items-center justify-center rounded-full bg-gradient-to-br from-sky-50 to-indigo-50 p-3 lg:p-4 shadow-sm hover:border-blue-500">
                <Icon className="h-6 w-6 text-indigo-600 transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>

            {/* Title + description (centered for visual balance) */}
            <h3 className="text-basefont-semiboldtext-slate-900transition-colorsduration-900
    group-hover:text-indigo-600
  ">
              {service.title}
            </h3>

            <p className="mt-3 text-sm text-slate-600">
              {service.desc}
            </p>

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
          </div>
        );
      })}
    </div>
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
        <div className="relative grid gap-8 md:grid-cols-2">
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
              className="relative rounded-2xl p-8 bg-white border border-slate-200 shadow-sm"
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
        <div className="relative mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">
            Why MSPL’s Approach Is Different
          </h3>

          <div className="grid gap-6 sm:grid-cols-3">
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
            <div key={s.title} className="rounded-xl border border-slate-200 bg-white p-6 text-center">
              <s.icon className="h-8 w-8 mx-auto text-indigo-600" />
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}



/* our methodology*/


function Methodology() {
  const steps = [
    {
      num: "01",
      title: "Assess",
      desc: "Deep-dive analysis of security posture, compliance requirements, and business objectives.",
    },
    {
      num: "02",
      title: "Architect",
      desc: "Design tailored Zero Trust solutions aligned with your infrastructure and risk profile.",
    },
    {
      num: "03",
      title: "Implement",
      desc: "Deployment with minimal disruption, comprehensive testing, and team enablement.",
    },
    {
      num: "04",
      title: "Manage",
      desc: "Continuous monitoring, optimization, and support for long-term security resilience.",
    },
  ];

  return (
    <section className="py-20 border-t border-slate-100 bg-white text-center">

      {/* Section Badge */}
      <div className="inline-block text-sm px-3 py-1 rounded-full bg-sky-600 text-white text-sm font-medium hover:bg-sky-700 transition">
        Industry Applications
      </div>

      {/* Headings */}
      <h3 className="mt-4 text-3xl font-bold text-slate-900">
        Built for High-Compliance Industries
      </h3>

      <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">
        Tailored cybersecurity approaches for industry-specific challenges and regulatory requirements
      </p>

      {/* Steps */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {steps.map((s) => (
          <div
            key={s.num}
            className="rounded-xl border border-slate-200 p-8 text-left bg-white hover:shadow-lg transition"
          >
            <div className="text-sky-600 font-bold text-xl">{s.num}</div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              {s.title}
            </h4>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =====================
Industries Section
===================== */


function Industries() {
  const industries = ["BFSI", "Healthcare", "Education",];
  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-14">
          <SectionBadge text="Platform Integration" />
          <h2 className="text-3xl font-bold">How Services Amplify the MSPL Platform</h2>
          <p className="mt-3 text-slate-600">Our cybersecurity services are designed to integrate seamlessly <br></br> with MSPL's product ecosystem</p>
        </div>


        <div className="grid gap-8 w-180 ml-70 ">
          {industries.map((i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold">{i}</h3>
              <p className="mt-2 text-sm text-slate-600">Security architectures aligned with industry‑specific regulations.</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}


/* =====================
Why Choose MSPL
===================== */

function WhyMSPL() {
  const points = [
    "Engineering‑First Security",
    "OEM Partnership Ecosystem",
    "Methodology‑Driven Delivery",
    "Platform‑Centric Approach",
  ];


  return (
    <section className="py-20 border-t border-slate-200">
      <Container>
        <div className="text-center mb-14">
          <SectionBadge text="Why MSPL" />
          <h2 className="text-3xl font-bold">Why Choose MSPL for Cybersecurity Services</h2>
          <p>Engineering excellence meets enterprise-grade security expertise</p>
        </div>


        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div key={p} className="rounded-xl border border-slate-200 bg-white p-6 text-center">
              <CheckCircleIcon className="h-8 w-8 mx-auto text-green-600" />
              <p className="mt-3 text-sm font-medium">{p}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}


function Enterprise() {
  return (
    <section className="py-24 bg-white text-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="rounded-xl border border-slate-200 p-10 text-center bg-white">

          {/* Badge */}
          <div className="inline-block text-sm px-3 py-1 rounded-full bg-sky-600 text-white text-sm font-medium hover:bg-sky-700 transition">
            Ready to Modernize?
          </div>

          {/* Heading */}
          <h2 className="mt-4 text-2xl md:text-3xl font-semibold  text-slate-900">
            Ready to Modernize Your Enterprise?
          </h2>

          {/* Sub text */}
          <p className="mt-4 text-base text-slate-600 max-w-3xl mx-auto">
            Partner with MSPL for end-to-end cybersecurity and IT transformation services
          </p>

          {/* Highlights */}
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-slate-600">
            <span>50+ Years Expertise</span>
            <span>10+ OEM Partners</span>
            <span>Engineering-First Approach</span>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <button className="px-6 py-2 rounded-md bg-sky-600 text-white text-sm font-medium hover:bg-sky-700 transition">
              Book a Consultation
            </button>

            <button className="px-6 py-2 rounded-md border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50 transition">
              Download Service Portfolio
            </button>
          </div>

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
              <FeatureCard key={i} {...item} />
            ))}
          </div>
        </section>


      </div>



      <Philosophy />
      <ServicesCards/>
      <WayOfWorking />
      <Methodology />
      <Industries />
      <WhyMSPL />
      <Enterprise />


    </main>
  );
}



