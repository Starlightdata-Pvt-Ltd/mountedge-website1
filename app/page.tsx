"use client";

import CTA from "@/components/sections/cta/default";
import FAQ from "@/components/sections/faq/default";
import FooterSection from "@/components/sections/footer/default";
import Hero from "@/components/sections/hero/default";
import Items from "@/components/sections/items/default";
import Logos from "@/components/sections/logos/default";
import Navbar from "@/components/sections/navbar/default";
import Stats from "@/components/sections/stats/default";
import { Section } from "@/components/ui/section";
import { DevicePhoneMobileIcon, CubeIcon, CloudIcon } from "@heroicons/react/24/outline";
import MSPLDifferencePage from "./mspl-difference/page";
import PartnersPage from "./partners/page";
import ProductsPage from "./products/page";
import ServicesPage from "./services/page";
import Services from "@/components/sections/services/default";
import PlatformArchitecture from "@/components/sections/PlateformArchitecture/default";
import IndustriesSection from "@/components/sections/Industries/default";
import { ShieldCheck, Users, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import WhyMSPL from "@/components/sections/whymspl/default";

export default function Home() {
  return (
    <>
      <Hero />

      {/* GLASS CARDS SECTION */}
      <Section className="relative bg-white py-16 sm:py-20 overflow-hidden">
        {/* Background accents */}
        <div aria-hidden={true} className="absolute inset-0 pointer-events-none">
          <div
           className="absolute -top-24 left-1/2 -translate-x-1/2 w-[90vw] max-w-full sm:max-w-[900px] h-[300px] sm:h-[380px] md:h-[420px] rounded-full blur-[80px]" 
            style={{
              background:
                "radial-gradient(circle at center, rgba(37,99,235,0.18), rgba(37,99,235,0.08), transparent 70%)",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        {/* Intro Text */}
        <div className="relative z-10 max-w-full sm:max-w-2xl md:max-w-4xl mx-auto text-center mb-16 px-4 sm:px-6">
          <p className=" break-words text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
            MSPL brings together a modular cybersecurity product suite, a unified secure
            access platform, and deep enterprise services — purpose-built for
            <span className="text-foreground font-semibold">
              {" "}high-compliance, high-risk environments
            </span>.
          </p>
        </div>

        {/* Glass Cards */}
        <div className="relative z-10 max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6">
          {[
            {
              title: "Products",
              desc: "Zero Trust Browser, Micro-Firewall Network (MFN), Secure Access Suite",
              icon: DevicePhoneMobileIcon,
            },
            {
              title: "Platform",
              desc: "Unified policy engine, governance, analytics, and centralized enforcement",
              icon: CubeIcon,
            },
            {
              title: "Services",
              desc: "Cybersecurity, Cloud, Digital Transformation, Managed IT Operations",
              icon: CloudIcon,
            },
          ].map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group relative rounded-3xl p-6 sm:p-8 backdrop-blur-xl bg-white/65 border border-white/60 shadow-[0_30px_80px_rgba(15,30,70,0.15)] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_40px_120px_rgba(37,99,235,0.25)] hover:border-blue-500/40 animate-in fade-in slide-in-from-bottom-6"
                style={{ animationDelay: `${i * 140}ms` }}
              >
                {/* Glow */}
                <div
                  aria-hidden={true}
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(37,99,235,0.18), transparent 40%, transparent 60%, rgba(37,99,235,0.12))",
                  }}
                />

                {/* Icon + Title */}
                <div className="relative z-10 flex items-center mb-4 sm:mb-6">
                  <div className="mr-4 p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-blue-500/25 to-blue-600/10 border border-blue-500/40 shadow-inner transition-all duration-300 group-hover:from-blue-500/35 group-hover:to-blue-600/25">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-foreground">{f.title}</h4>
                </div>

                {/* Description */}
                <p className="relative z-10 text-muted-foreground leading-relaxed text-sm sm:text-base break-words">
                  {f.desc}
                </p>

                {/* Bottom Line */}
                <div className="relative z-10 mt-6 h-px w-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
              </div>
            );
          })}
        </div>
      </Section>

      {/* Other Sections */}
      <Services />
      <PlatformArchitecture />
      <PartnersPage />
      <ProductsPage />
      <Stats />
      <MSPLDifferencePage />
      <WhyMSPL />

      {/* CTA Section */}
      <section className="relative py-16 sm:py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-full sm:max-w-2xl md:max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="rounded-xl border border-white/10 p-8 sm:p-10 text-center bg-gradient-to-b from-slate-900/80 to-slate-900/95 shadow-xl backdrop-blur-md"
              role="region"
              aria-labelledby="enterprise-cta-title"
            >
              <h2 id="enterprise-cta-title" className="text-xl sm:text-2xl font-semibold">
                Ready to strengthen your enterprise security?
              </h2>

              <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
                Partner with MSPL to design and deploy a comprehensive Zero Trust
                security architecture — built for scale, observability and compliance.
              </p>

              {/* CTAs */}
              <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">

                <a
                  href="/company/contact"
                  className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 rounded-md bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-sm sm:text-base font-medium shadow-md transition transform hover:scale-[1.02]"
                >
                  <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5" />
                  Book Consultation
                </a>

                <a
                  href="/platform"
                  className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 rounded-md border border-white/20 text-sm sm:text-base font-medium hover:bg-white/6 transition"
                >
                  Explore Secure Access Platform
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
