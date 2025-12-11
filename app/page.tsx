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
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero
        title={"WELCOME TO MOUNTEDGE"}
        description={
          "Leave the tech to us. We simplify technology with cloud, cybersecurity, and digital transformation so your business stays secure, agile, and ahead of the competition."
        }
        badge={false}
        mockup={false}
      />

      <Section>
        <div className="max-w-container mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Equity Investment", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing." },
            { title: "Startup Focus", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing." },
            { title: "High Reward", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing." },
            { title: "Access to Capital", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing." },
          ].map((f) => (
            <div key={f.title} className="p-6 rounded-2xl border bg-card shadow-sm">
              <h4 className="text-lg font-semibold">{f.title}</h4>
              <p className="text-muted-foreground mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-container mx-auto">
          <h3 className="text-3xl font-semibold text-center mb-8">Our Services</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {["Cybersecurity Solutions","Cloud & IT Infrastructure","Digital Transformation & Innovation","Consulting & Managed Services"].map((s) => (
              <div key={s} className="p-6 rounded-2xl border bg-card shadow-sm">
                <h4 className="text-xl font-semibold">{s}</h4>
                <p className="text-muted-foreground mt-3">Protecting your business is at the core of what we do. Our services ensure resilience and scalability as you grow.</p>
                <a className="mt-4 inline-block text-primary hover:underline" href="#">Read more →</a>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-container mx-auto text-center">
          <h3 className="text-3xl font-semibold">Partners</h3>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
            {[1,2,3,4,5,6].map((i) => (
              <img
                key={i}
                src={`https://mountedge-website.netlify.app/partners/${i}.svg`}
                alt={`partner-${i}`}
                className="h-12 w-auto opacity-90"
              />
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-container mx-auto">
          <h3 className="text-3xl font-semibold text-center">Products</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="p-6 rounded-2xl border bg-card shadow-sm flex items-center gap-6">
              <div className="flex-shrink-0">
                <img src="https://mountedge-website.netlify.app/star-secure-logo-transparent.svg" alt="Star Secure" className="h-16 w-16" />
              </div>
              <div>
                <h4 className="text-xl font-semibold">Star Secure Browser (SSB)</h4>
                <p className="text-muted-foreground mt-2">An enterprise-grade secure browser built with zero-trust principles to protect users, data, and IT assets.</p>
                <a className="mt-3 inline-block text-primary hover:underline" href="#">View All Products →</a>
              </div>
            </div>
            <div className="p-6 rounded-2xl border bg-card shadow-sm">
              <h4 className="text-xl font-semibold">Why MountEdge?</h4>
              <p className="text-muted-foreground mt-2">We combine industry expertise, client-centric processes, and innovative technology to drive business outcomes.</p>
            </div>
          </div>
        </div>
      </Section>

      <Items />
      <FAQ />
      <CTA />
      <Stats />
      <Button>Button</Button>
      <FooterSection />
    </>
  );
}
