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
}
