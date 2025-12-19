// app/page.tsx
import OurServices from "@/components/sections/ourservices.tsx/page";
import React from "react";
import {
  Landmark,
  HeartPulse,
  GraduationCap,
  Building2,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900 antialiased">
      <Hero />
      <OurServices />
      <Approach />
      < FinalCTA />
      <Methodology/>
      <IndustryExpertise/>
      <Enterprise/>


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
            Our Services
            <span className="block text-sky-600"></span>
          </h1>

          <p className="mt-6 text-sm md:text-base text-slate-600">
            End-to-end cybersecurity, cloud, and IT modernization services engineered for enterprise scale and compliance-heavy environments.
            <br></br>
            MSPL delivers full-stack cybersecurity, cloud, digital transformation, and managed IT services—built to help enterprises modernize securely and scale with confidence.
          </p>

          <ul className="mt-6 flex flex-wrap justify-center gap-6 text-xs text-slate-500">

          </ul>


        </div>
      </div>
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
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s) => (
          <div
            key={s.num}
            className="group rounded-xl border border-slate-200 p-6 text-left bg-white
                       shadow-sm hover:shadow-xl hover:-translate-y-1
                       transition-all duration-300 ease-out"
          >
            {/* Number */}
            <div className="text-sky-600 font-bold text-xl tracking-wide">
              {s.num}
            </div>

            {/* Title */}
            <h4 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
              {s.title}
            </h4>

            {/* Description */}
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}


/* ================= FINAL CTA ================= */
function FinalCTA() {
  return (
    <section className="py-24 bg-white text-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="rounded-xl border border-slate-200 p-10 text-center bg-white">
          
          <div className="inline-block text-sm px-3 py-1 rounded-full bg-sky-600 text-white text-sm font-medium hover:bg-sky-700 transition">
            Platform + Services
          </div>

          <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-slate-900">
            How Our Services Support the MSPL Platform
          </h2>

          <p className="mt-4 text-base text-slate-600 max-w-3xl mx-auto">
            Our services enable seamless implementation, integration, and ongoing management of the MSPL Secure Access Platform—including Zero Trust Browser, MFN, and unified governance layers.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-slate-600">
            <span>Platform implementation</span>
            <span>Identity & policy alignment</span>
            <span>Security posture modernization</span>
            <span>Cloud + Zero Trust integration</span>
          </div>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <button className="px-6 py-2 rounded-md bg-sky-600 text-white text-sm font-medium hover:bg-sky-700">
              Explore Secure Access Platform
            </button>
          </div>

        </div>
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
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {industries.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="rounded-xl border border-slate-200 p-8 bg-white hover:shadow-lg transition text-center"
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

















