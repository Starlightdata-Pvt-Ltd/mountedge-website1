"use client";

import React from "react";
import Navbar from "@/components/sections/navbar/default";
import FooterSection from "@/components/sections/footer/default";
import Hero from "@/components/sections/hero/default";
import { Section } from "@/components/ui/section";
import { ChevronRight, CheckCircle, Phone } from "lucide-react";

/* ---------------------------
   Types
   --------------------------- */
type ValueCardProps = {
  title: string;
  desc: string;
};

type StatProps = {
  label: string;
  value: string;
};

type ServiceCardProps = {
  title: string;
  desc: string;
};

type ProductCardProps = {
  name: string;
  lead: string;
};

type FaqItemProps = {
  q: string;
  a: string;
};

/* ---------------------------
   Page
   --------------------------- */
export default function AboutPage(): JSX.Element {
  return (
    <>
      <Navbar />
      <Hero
        title={"About MountEdge Solutions"}
        description={
          "Connecting you to opportunities — MountEdge Solutions empowers businesses with innovative IT solutions that drive efficiency, growth, and digital transformation."
        }
        badge={false}
        mockup={false}
      />

      {/* Mission & Values */}
      <Section>
        <div className="max-w-container mx-auto grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-semibold">Our mission</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We partner with product teams and enterprises to design and
              deliver polished, secure digital experiences. Clarity, performance
              and delightful UI guide our engineering and consulting approach.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <ValueCard
                title="Design-first"
                desc="Clarity and usability guide every decision — from UX to code."
              />
              <ValueCard
                title="Collaborative"
                desc="We work closely with stakeholders, developers and users."
              />
              <ValueCard
                title="Shipping &gt; Perfect"
                desc="We iterate quickly, learn from users, and improve fast."
              />
              <ValueCard
                title="Diversity & Inclusion"
                desc="Diverse teams build better products and stronger relationships."
              />
            </div>
          </div>

          <aside className="rounded-lg bg-gradient-to-b from-white/3 to-white/2 p-6 shadow-sm ring-1 ring-white/6">
            <h3 className="text-xl font-medium">Quick facts</h3>
            <p className="mt-3 text-muted-foreground">
              MountEdge Solutions — a trusted partner for enterprise IT &
              cybersecurity.
            </p>

            <dl className="mt-6 grid grid-cols-2 gap-4">
              <Stat label="Years (collective)" value="50+" />
              <Stat label="OEM Partners" value="10+" />
              <Stat label="Make in India" value="100%" />
              <Stat label="Team size" value="150+" />
            </dl>

            <a
              href="tel:+1232341234"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-95"
              aria-label="Call MountEdge"
            >
              <Phone size={16} /> Call Us Now
            </a>
          </aside>
        </div>
      </Section>

      {/* Services */}
      <Section>
        <div className="max-w-container mx-auto">
          <h3 className="text-2xl font-semibold">Our Services</h3>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Fueling innovation & growth — solutions across cybersecurity, cloud,
            digital transformation and managed services.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              title="Cybersecurity Solutions"
              desc="Enterprise-grade security controls to protect people, data and infrastructure."
            />
            <ServiceCard
              title="Cloud & IT Infrastructure"
              desc="Scalable, reliable infrastructure across cloud and on-prem deployments."
            />
            <ServiceCard
              title="Digital Transformation"
              desc="Reimagine processes, products and customer journeys for the digital era."
            />
            <ServiceCard
              title="Consulting & Managed Services"
              desc="Ongoing strategic guidance, managed operations and SLAs tailored to your needs."
            />
          </div>
        </div>
      </Section>

      {/* Clients / Partners */}
      <Section>
        <div className="max-w-container mx-auto">
          <h3 className="text-2xl font-semibold">Trusted by</h3>
          <p className="mt-2 text-muted-foreground">
            A sample of partners and customers we have supported.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 items-center">
            {[
              "Astorry",
              "Mirolly Group",
              "Fast Truck",
              "Dirro Media",
              "Lighthouse",
              "Strong Steal",
            ].map((c) => (
              <div
                key={c}
                className="flex items-center justify-center rounded-md bg-muted/10 py-4 px-3 text-sm font-medium shadow-sm"
                aria-hidden
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Products */}
      <Section>
        <div className="max-w-container mx-auto">
          <h3 className="text-2xl font-semibold">Our Products</h3>
          <p className="mt-2 text-muted-foreground">
            Enterprise-grade products built with security and policy at the
            center.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProductCard
              name="Star Secure Browser (SSB)"
              lead="Enterprise secure browser with zero-trust policies and granular controls."
            />
            <ProductCard
              name="Star Secure"
              lead="Endpoint controls and secure browsing for regulated industries."
            />
            <ProductCard
              name="Star Secure Suite"
              lead="Bundle for secure access, DLP and compliance automation."
            />
          </div>
        </div>
      </Section>

      {/* Why MountEdge / CTA */}
      <Section>
        <div className="max-w-container mx-auto grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h3 className="text-2xl font-semibold">Why MountEdge?</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Industry expertise, client-centric delivery, and an innovation
              mindset — designed to reduce risk, speed adoption, and deliver
              measurable outcomes.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle size={18} />
                <span className="text-muted-foreground">
                  Deep domain experience across enterprise and government.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={18} />
                <span className="text-muted-foreground">
                  Transparent engagement models and custom pricing after
                  discovery.
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border p-6 bg-surface/40">
            <h4 className="text-lg font-medium">Let’s grow together</h4>
            <p className="mt-3 text-muted-foreground">
              Whether you’re modernizing, scaling or building something new, we
              partner with you end-to-end.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow"
              >
                Contact Us
              </a>
              <a className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium">
                View Products <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ + Contact */}
      <Section>
        <div className="max-w-container mx-auto grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">FAQ</h3>
            <p className="mt-2 text-muted-foreground">
              Common inquiries — short, clear answers to help you get started.
            </p>

            <div className="mt-4 space-y-3">
              <FaqItem
                q="What services do you provide?"
                a="Cybersecurity, Cloud & IT Infrastructure, Digital Transformation, and Managed Services."
              />
              <FaqItem
                q="Do you offer support & training?"
                a="Yes — full support, onboarding and training are part of our engagements."
              />
              <FaqItem
                q="How can I get pricing?"
                a="Pricing varies by scope. Contact us for a tailored proposal after a short discovery call."
              />
            </div>
          </div>

          <div id="contact" className="rounded-lg border p-6 bg-white/3">
            <h3 className="text-2xl font-semibold">Contact Us</h3>
            <p className="mt-2 text-muted-foreground">
              Looking for a strategic partner to help you scale? Drop a message
              — we'll respond within business hours.
            </p>

            <ContactForm />
          </div>
        </div>
      </Section>

      <FooterSection />
    </>
  );
}

/* ---------------------------
   Subcomponents (typed)
   --------------------------- */

function ValueCard({ title, desc }: ValueCardProps): JSX.Element {
  return (
    <div className="rounded-lg border p-4 bg-white/2 hover:shadow transition">
      <h4 className="font-medium">{title}</h4>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

function Stat({ label, value }: StatProps): JSX.Element {
  return (
    <div className="rounded-md bg-muted/5 p-3 text-center">
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd className="mt-1 text-xl font-semibold">{value}</dd>
    </div>
  );
}

function ServiceCard({ title, desc }: ServiceCardProps): JSX.Element {
  return (
    <article className="rounded-lg border p-6 flex flex-col justify-between hover:shadow-lg transition">
      <div>
        <h4 className="text-lg font-medium">{title}</h4>
        <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <a className="text-sm font-medium inline-flex items-center gap-2">
          Read more <ChevronRight size={16} />
        </a>
        <span className="text-xs text-muted-foreground">Service card bg</span>
      </div>
    </article>
  );
}

function ProductCard({ name, lead }: ProductCardProps): JSX.Element {
  return (
    <div className="rounded-lg border p-5 bg-white/2 hover:shadow transition">
      <div className="flex items-center justify-between">
        <div>
          <h5 className="font-semibold">{name}</h5>
          <p className="mt-2 text-sm text-muted-foreground">{lead}</p>
        </div>
        <div className="ml-4 rounded-full bg-muted/10 px-3 py-1 text-xs font-medium">
          View
        </div>
      </div>
    </div>
  );
}

function FaqItem({ q, a }: FaqItemProps): JSX.Element {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <div className="rounded-md border">
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full flex items-center justify-between px-4 py-3 text-left"
        aria-expanded={open}
        aria-controls={q}
      >
        <span className="font-medium">{q}</span>
        <ChevronRight
          size={16}
          className={`transform transition ${open ? "rotate-90" : "rotate-0"}`}
          aria-hidden
        />
      </button>

      {open && (
        <div id={q} className="px-4 pb-4 text-sm text-muted-foreground">
          {a}
        </div>
      )}
    </div>
  );
}

/* ---------------------------
   Contact Form (typed)
   --------------------------- */
function ContactForm(): JSX.Element {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [sent, setSent] = React.useState<boolean>(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setLoading(true);

    // Example: simulate async submit — replace with real API call
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 900);
  }

  return (
    <form onSubmit={onSubmit} className="mt-4 grid gap-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          name="firstName"
          aria-label="First name"
          placeholder="First name"
          className="rounded-md border px-3 py-2"
          required
        />
        <input
          name="lastName"
          aria-label="Last name"
          placeholder="Last name"
          className="rounded-md border px-3 py-2"
        />
      </div>

      <input
        name="mobile"
        aria-label="Mobile"
        placeholder="Mobile number"
        className="rounded-md border px-3 py-2"
        inputMode="tel"
      />
      <textarea
        name="question"
        aria-label="Your question"
        placeholder="Your question"
        rows={4}
        className="rounded-md border px-3 py-2"
        required
      />

      <div className="flex items-center justify-between gap-3">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-white disabled:opacity-60"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Question"}
        </button>

        <div className="text-sm text-muted-foreground">Or call +123-234-1234</div>
      </div>

      {sent && (
        <div className="mt-3 rounded-md bg-green-50 p-3 text-sm text-green-800">
          Thanks — we received your message and will be in touch.
        </div>
      )}
    </form>
  );
}
