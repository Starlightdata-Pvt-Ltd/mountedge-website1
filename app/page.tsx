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
// fixed double slash in import path
import IndustriesSection from "@/components/sections/Industries/default";
import { ShieldCheck, Users, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Hero />
      <Section className="relative bg-white py-24 overflow-hidden">
        {/* BACKGROUND ACCENTS */}
        <div aria-hidden={true} className="absolute inset-0 pointer-events-none">
          {/* top blue glow */}
          <div
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[420px] rounded-full blur-[80px]"
            style={{
              background:
                "radial-gradient(circle at center, rgba(37,99,235,0.18), rgba(37,99,235,0.08), transparent 70%)",
            }}
          />
          {/* subtle grid texture */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        {/* INTRO */}
        <div className="relative z-10 max-w-4xl mx-auto text-center mb-20 px-4">
          <p
            className="
              text-lg sm:text-xl md:text-2xl
              font-medium
              text-muted-foreground
              leading-relaxed
              animate-in fade-in slide-in-from-bottom-4
              duration-700 ease-out
            "
          >
            MSPL brings together a modular cybersecurity product suite, a unified secure
            access platform, and deep enterprise services — purpose-built for
            <span className="text-foreground font-semibold">
              {" "}
              high-compliance, high-risk environments
            </span>
            .
          </p>
        </div>

        {/* GLASS CARDS */}
        <div className="relative z-10 max-w-container mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3 px-6">
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
            const Icon = f.icon; // <-- render as component
            return (
              <div
                key={f.title}
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
                  hover:border-blue-500/40

                  animate-in fade-in slide-in-from-bottom-6
                  duration-700
                "
                style={{ animationDelay: `${i * 140}ms` }}
              >
                {/* GLASS GLOW EDGE */}
                <div
                  aria-hidden={true}
                  className="
                    absolute inset-0 rounded-3xl
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                  "
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(37,99,235,0.18), transparent 40%, transparent 60%, rgba(37,99,235,0.12))",
                  }}
                />

                {/* ICON */}
                <div className="relative z-10 flex items-center mb-6">
                  <div
                    className="
                      mr-4
                      p-4
                      rounded-2xl

                      bg-gradient-to-br
                      from-blue-500/25
                      to-blue-600/10

                      border border-blue-500/40
                      shadow-inner

                      transition-all duration-300
                      group-hover:from-blue-500/35
                      group-hover:to-blue-600/25
                    "
                  >
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>

                  <h4 className="text-xl font-semibold text-foreground">
                    {f.title}
                  </h4>
                </div>

                {/* DESCRIPTION */}
                <p className="relative z-10 text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {f.desc}
                </p>

                {/* BOTTOM MICRO-LINE */}
                <div className="relative z-10 mt-8 h-px w-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
              </div>
            );
          })}
        </div>
      </Section>

      <Services />

      <PlatformArchitecture />

      <PartnersPage />
      <ProductsPage />
      <Stats />
      <IndustriesSection />
      <MSPLDifferencePage />
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
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

              {/* Subtle floating badge (animated) */}
              <motion.div
                aria-hidden={true}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
                className="absolute -top-5 right-6 hidden md:flex items-center gap-2 rounded-full px-3 py-1 text-xs bg-slate-800/70 border border-white/6 shadow"
                style={{ backdropFilter: "blur(6px)" }}
              >
                <span className="inline-flex items-center justify-center rounded-full bg-sky-600/10 p-1">
                  <ShieldCheck className="h-4 w-4 text-sky-400" />
                </span>
                <span className="text-xs text-slate-200 font-medium">Zero Trust Ready</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Inline styles */}
        <style>{`
          /* Respect reduced motion preferences */
          @media (prefers-reduced-motion: reduce) {
            .motion-reduced { animation: none !important; transition: none !important; }
          }
        `}</style>
      </section>
    </>
  );
}
