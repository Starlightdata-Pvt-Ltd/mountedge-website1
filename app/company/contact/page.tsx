 /*
 "use client";

import { useState } from "react";
import Hero from "@/components/sections/hero/default";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <>

      <Hero
        title={"Contact Us"}
        description={"Get in touch — we’d love to hear about your project."}
        badge={false}
        mockup={false}
      />

      <Section>
        <div className="max-w-container mx-auto grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">Let's talk</h3>
            <p className="mt-4 text-muted-foreground">
              Tell us about your project and timeline. We typically reply within
              one business day.
            </p>
            <dl className="mt-6 space-y-3 text-muted-foreground">
              <div>
                <dt className="font-medium text-foreground">Phone</dt>
                <dd>+91-91-94-29-694511</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Email</dt>
                <dd>Sales@mountedgesolutions.com</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Address</dt>
                <dd>Max Towers, Sector 16B, Noida, 201301</dd>
              </div>
            </dl>
          </div>

          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const to = "Sales@mountedgesolutions.com";
                window.location.href = `mailto:${to}?subject=${encodeURIComponent(
                  "Contact from website: " + form.name,
                )}&body=${encodeURIComponent(form.message + "\n\n" + form.email)}`;
              }}
              className="grid gap-3"
            >
              <label className="grid">
                <span className="text-sm font-medium">Full name</span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 rounded-md border px-3 py-2"
                  placeholder="Your name"
                />
              </label>

              <label className="grid">
                <span className="text-sm font-medium">Email</span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 rounded-md border px-3 py-2"
                  placeholder="you@company.com"
                />
              </label>

              <label className="grid">
                <span className="text-sm font-medium">Message</span>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 min-h-[120px] rounded-md border px-3 py-2"
                  placeholder="Tell us about your project..."
                />
              </label>

              <div className="pt-2">
                <Button type="submit">Send message</Button>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </>



  );
}  */




  "use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ShieldCheck, Lock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Contact MSPL
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Request a product demo or book a consultation with our security
            experts.  
            <span className="block mt-1 font-medium text-slate-800">
              We respond within 24 hours. Your data stays protected.
            </span>
          </p>
        </motion.div>
      </section>

      {/* ================= FORM + TRUST ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 border border-slate-200 rounded-xl p-8"
          >
            <h2 className="text-2xl font-semibold">
              Request Demo or Consultation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <Input label="Full Name" required />
              <Input label="Work Email" type="email" required />
              <Input label="Phone Number" required />
              <Input label="Company Name" required />
              <Input label="Designation (Optional)" />
              <Select
                label="How can we help?"
                options={[
                  "Request Demo",
                  "Book Consultation",
                  "Partner with MSPL",
                  "General Inquiry",
                ]}
              />
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium mb-2">
                Message (Optional)
              </label>
              <textarea
                rows={4}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            {/* TRUST NOTES */}
            <div className="mt-6 space-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald-600" />
                Your data is encrypted in transit.
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                We never share information with third parties.
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-sky-600 px-6 py-3 text-white font-medium hover:bg-sky-700 transition"
            >
              Submit Request
            </button>
          </motion.form>

          {/* CONTACT DETAILS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Contact Details</h3>

              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-sky-600" />
                  <span>+91-XXXXXXXXXX</span>
                </div>

                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-sky-600" />
                  <span>sales@mountedgesolutions.com</span>
                </div>

                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-sky-600" />
                  <span>
                    MountEdge Solutions Pvt. Ltd.  
                    <br />
                    India
                  </span>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-xl p-6 text-sm text-slate-600">
              <p>
                Enterprise support available for CISOs, CIOs, infrastructure
                heads, and security teams.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= WHY MSPL ================= */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-10">Why MSPL</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Engineering-first cybersecurity company",
              "Built for DPDP, GDPR, RBI & IRDAI compliance",
              "Unified secure access platform",
              "50+ years of collective security experience",
            ].map((item) => (
              <div
                key={item}
                className="border border-slate-200 rounded-xl p-6 bg-white text-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= QUICK LINKS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <QuickLink title="Explore Products" />
          <QuickLink title="Explore Platform" />
          <QuickLink title="Explore Services" />
        </div>
      </section>

      {/* ================= COMPLIANCE ================= */}
      <section className="bg-slate-50 py-10">
        <div className="max-w-7xl mx-auto px-6 text-sm text-slate-600">
          <p>
            Your data is stored securely in India (MeitY-region).  
            We follow strict Zero Trust and access governance practices internally.
          </p>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="border border-slate-200 rounded-xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-lg font-medium">
            Still have questions? Talk to our team directly.
          </p>
          <div className="flex gap-4">
            <a
              href="mailto:sales@mountedgesolutions.com"
              className="text-sky-600 font-medium hover:underline"
            >
              Email Us
            </a>
            <a
              href="tel:+91XXXXXXXXXX"
              className="text-sky-600 font-medium hover:underline"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function Input({
  label,
  type = "text",
  required,
}: {
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        {label} {required && "*"}
      </label>
      <input
        type={type}
        required={required}
        className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
      />
    </div>
  );
}

function Select({
  label,
  options,
}: {
  label: string;
  options: string[];
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <select className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500">
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function QuickLink({ title }: { title: string }) {
  return (
    <div className="border border-slate-200 rounded-xl p-6 hover:border-sky-400 transition cursor-pointer">
      <p className="font-medium">{title}</p>
    </div>
  );
}

