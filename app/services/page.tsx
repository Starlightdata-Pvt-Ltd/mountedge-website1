// app/page.tsx//
"use client";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import OurServices from "@/components/sections/ourservices.tsx/page";
import React from "react";
import {
  Landmark,
  HeartPulse,
  GraduationCap,
  Building2,
} from "lucide-react";
import MethodologyHero from "@/components/ourmethodlogy/default";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // correct ease
    },
  },
};

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900 antialiased">
      <Hero />
      <OurServices />
       <Approach />
      <MethodologyHero />
      <Enterprise/>
      <IndustryExpertise/>
      <FinalCTA />
      
    </main>
  );
}

/* Replace the existing `Hero` function in your file with the code below.
   This version is production-ready, uses framer-motion (already imported),
   is fully responsive, and includes a blue-tint transitional "bleed" at the bottom
   to visually connect the header section to the "Our Services" section. */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background blur elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96  rounded-full blur-3xl" />
      <div className="absolute top-40 -left-24 w-96 h-96  rounded-full blur-3xl" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-24 lg:py-32"
      >
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-6 py-2  rounded-full bg-sky-600/10 text-sky-700 text-5xl mt-1 font-medium -mt-4"
          >
           Our Services 
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="mt-6 text-xl sm:text-l lg:text-l font-extrabold tracking-tight text-slate-900"
          >
            MSPL delivers full-stack cybersecurity, cloud, digital transformation, and managed IT services—built to help enterprises modernize securely and scale with confidence.
  
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed"
          >
            End-to-end cybersecurity, cloud, and IT modernization services
            designed for enterprises operating in compliance-heavy
            environments.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex justify-center gap-4 flex-wrap"
          >
            <button className="px-7 py-3 rounded-md bg-sky-600 text-white text-sm font-semibold hover:bg-sky-700 transition shadow-md">
              Book a Consultation
            </button>

            <button className="px-7 py-3 rounded-md border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-white transition">
              Explore Our Services
            </button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex justify-center gap-6 text-sm text-slate-500 flex-wrap"
          >
            <span>Zero Trust Architecture</span>
            <span>Compliance-Ready</span>
            <span>Enterprise Scale</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}


function Approach() {
  const steps = [
    { num: "01", title: "Engineering-First", desc: "Deep technical expertise with security-by-design principles" },
    { num: "02", title: "Security-First", desc: "Zero Trust principles embedded in every solution" },
    { num: "03", title: "Agile Delivery", desc: "Fast, iterative deployment with continuous improvement" },
    {
      num: "04",
      title: "Partnership Ecosystem",
      desc: "10+ OEM technology partnerships for comprehensive solutions",
    },
  ];

  // Icon mapper: square-style SVG icons chosen per title (no extra deps)
  function StepIcon({ title }: { title: string }) {
    const commonClasses = "w-6 h-6";
    if (title.includes("Engineering")) {
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.4 15a7.9 7.9 0 00.6-2.5 7.9 7.9 0 00-.6-2.5l2.2-1.7-2-3.4-2.6.9a8 8 0 00-2.2-1.3L14 0h-4l-.6 4.5a8 8 0 00-2.2 1.3l-2.6-.9-2 3.4 2.2 1.7a7.9 7.9 0 000 5l-2.2 1.7 2 3.4 2.6-.9c.7.45 1.5.82 2.2 1.3L10 24h4l.6-4.5c.76-.28 1.47-.66 2.15-1.11L19 19l.4-4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    }
    if (title.includes("Security")) {
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 2l7 3v5c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V5l7-3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.5 11.5l1.8 1.8L15 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    }
    if (title.includes("Agile")) {
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M3 12h6l-2 8 10-12h-6l2-8L3 12z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    }
    // Partnership / default
    return (
      <svg className={commonClasses} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M3 21v-6a4 4 0 014-4h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 3v6a4 4 0 01-4 4h-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 10l10 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  return (
    <section className="py-20 border-t border-slate-100 bg-white text-center">
      
      {/* Badge */}
      <div className="inline-block text-sm px-3 py-1 rounded-full bg-sky-600 text-white text-sm font-medium hover:bg-sky-700 transition">
        Why MSPL
      </div>

      {/* Heading */}
      <h3 className="mt-5 text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
        Why Choose MSPL as Your Services Partner
      </h3>

      {/* Subtext */}
      <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
        Engineering excellence meets enterprise-grade security—backed by 50+ years of collective experience
      </p>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-10 lg:px-20 mx-auto">
        {steps.map((s) => (
          <div
            key={s.num}
            className="group relative rounded-xl border border-slate-200 p-6 text-left bg-white
                       shadow-sm hover:shadow-xl hover:-translate-y-1
                       transition-all duration-300 ease-out w-full sm:w-56"
          >
            {/* blurred glow overlay (hover) - does not change layout */}
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 rounded-xl blur-3xl bg-sky-50/60" />
            </div>

            {/* Icon (centered) */}
            <div className="flex justify-center">
              {/* square icon box — uplift only the icon on hover, square not circle */}
              <div
                className="w-14 h-14 flex items-center justify-center border border-slate-200 bg-white
                           transform transition-all duration-300 ease-out
                           group-hover:-translate-y-2
                           group-hover:border-sky-600
                           group-hover:rounded-md"
                aria-hidden
              >
                <span className="text-sky-600">
                  <StepIcon title={s.title} />
                </span>
              </div>
            </div>

            {/* Title */}
            <h4 className="mt-4 text-lg font-semibold text-slate-900 text-center group-hover:text-sky-600 transition-colors">
              {s.title}
            </h4>

            {/* Description */}
            <p className="mt-3 text-sm text-slate-600 leading-relaxed text-center">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}


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
        Our Methodology
      </div>

      {/* Headings */}
      <h3 className="mt-4 text-3xl font-bold text-slate-900">
        The MSPL Way of Working
      </h3>

      <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">
        A proven, systematic approach to security transformation and IT modernization
      </p>

      {/* Steps */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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




function IndustryExpertise() {
  const industries = [
    {
      id: "01",
      title: "BFSI",
      icon: Landmark,
    },
    {
      id: "02",
      title: "Healthcare",
      icon: HeartPulse,
    },
    {
      id: "03",
      title: "Education",
      icon: GraduationCap,
    },
    {
      id: "04",
      title: "Enterprise",
      icon: Building2,
    },
  ];

  return (
    <section className="py-20 border-t border-slate-100 bg-white text-center">
      
      {/* Badge */}
      <div className="inline-block text-sm px-3 py-1 rounded-full  bg-sky-600 text-white text-sm font-medium hover:bg-sky-700 transitio">
        Industry Expertise
      </div>

      {/* Heading */}
      <h3 className="mt-4 text-3xl font-bold text-slate-900">
        Built for High-Compliance Environments
      </h3>

      <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">
        Tailored services for high-compliance and high-risk industries
      </p>

      {/* Industry Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 px-40 mx-auto">
  {industries.map((item) => {
    const Icon = item.icon;
    return (
      <div
        key={item.id}
        className="rounded-xl border border-slate-200 p-8 bg-white hover:shadow-lg transition text-center w-full sm:w-56"
      >
        <div className="mx-auto w-14 h-14 rounded-full bg-sky-50 flex items-center justify-center">
          <Icon className="w-7 h-7 text-sky-600" />
        </div>

        <h4 className="mt-4 text-lg font-semibold text-slate-900">
          {item.title}
        </h4>
      </div>
    );
  })}
</div>

    </section>
  );
}


function Enterprise() {
  return (
   <section className="py-24 bg-gradient-to-b from-sky-50 via-blue-50 to-white text-slate-900">


      <div className="max-w-4xl mx-auto px-6">
        
<div className="rounded-xl border border-sky-200/50 p-10 text-center bg-white/70 backdrop-blur-lg shadow-lg">

          
          {/* Badge */}
          <div className="inline-block text-sm px-3 py-1 rounded-full bg-sky-600 text-white text-sm font-medium hover:bg-sky-700 transition">
            Platform + Services
          </div>

          {/* Heading */}
          <h2 className="mt-4 text-2xl md:text-3xl font-semibold  text-slate-900">
           How Our Services Support the MSPL Platform
          </h2>

          {/* Sub text */}
          <p className="mt-4 text-base text-slate-600 max-w-3xl mx-auto">
            Our services enable seamless implementation, integration, and ongoing management of the MSPL Secure Access Platform—including Zero Trust Browser, MFN, and unified governance layers.
          </p>

          {/* Highlights */}
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-slate-600">
           <span className="inline-flex items-center gap-2 text-slate-600">
  <svg
    className="w-4 h-4 text-emerald-500"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
  >
    <path
      d="M5 12l4 4L19 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
   Platform implementation
</span>

            <span className="inline-flex items-center gap-2 text-slate-600">
  <svg
    className="w-4 h-4 text-emerald-500"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
  >
    <path
      d="M5 12l4 4L19 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
 Security posture modernization
</span>

            <span className="inline-flex items-center gap-2 text-slate-600">
  <svg
    className="w-4 h-4 text-emerald-500"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
  >
    <path
      d="M5 12l4 4L19 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  Cloud + Zero Trust integration
</span>

             <span className="inline-flex items-center gap-2 text-slate-600">
  <svg
    className="w-4 h-4 text-emerald-500"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
  >
    <path
      d="M5 12l4 4L19 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
 Identity & policy alignment
</span>

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

















