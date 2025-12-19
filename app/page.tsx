import CTA from "@/components/sections/cta/default";
import FAQ from "@/components/sections/faq/default";
import FooterSection from "@/components/sections/footer/default";
import Hero from "@/components/sections/hero/default";
import Items from "@/components/sections/items/default";
import Logos from "@/components/sections/logos/default";
import Navbar from "@/components/sections/navbar/default";
import Stats from "@/components/sections/stats/default";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { DevicePhoneMobileIcon, CubeIcon, CloudIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import MSPLDifferencePage from "./mspl-difference/page";
import PartnersPage from "./partners/page";
import ProductsPage from "./products/page";
import ServicesPage from "./services/page";
import Services from "@/components/sections/services/default";
import PlatformArchitecture from "@/components/sections/PlateformArchitecture/default";
import IndustriesSection from "@/components/sections//Industries/default";

export default function Home() {
  return (
    <>
      <Hero />
      <Section>
        <p className="text-2xl text-center mb-8">
          MSPL brings together a modular cybersecurity product suite, a unified secure
          access platform, and deep <br /> enterprise services—designed for high-compliance, high-risk environments.
        </p>

        <div className="max-w-container mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Products", desc: "Zero Trust Browser, MFN, Secure Access Suite", icon: DevicePhoneMobileIcon },
            { title: "Platform", desc: "Unified policy engine + governance + analytics", icon: CubeIcon },
            { title: "Services", desc: "Cybersecurity, Cloud, Digital Transformation, Managed IT", icon: CloudIcon },
          ].map((f) => (
            <div
              key={f.title}
              className="p-8 rounded-2xl border bg-card shadow-sm w-full sm:w-[300px] lg:w-[350px]"
            >
              <div className="flex items-center mb-4">
                <f.icon className="w-8 h-8 mr-3 text-blue-500" />
                <h4 className="text-xl font-semibold">{f.title}</h4>
              </div>
              <p className="text-muted-foreground mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </Section>
      <PlatformArchitecture/>
      <Services />
      <PartnersPage />
      <ProductsPage />
      <Stats />
    <IndustriesSection/>
      <MSPLDifferencePage />

    </>
  );
}
