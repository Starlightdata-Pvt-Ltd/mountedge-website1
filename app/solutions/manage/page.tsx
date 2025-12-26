"use client";

import PartnersPage from "@/app/partners/page";
import React from "react";
import Image from "next/image";
import Stats from "@/components/sections/stats/default";

// Fully TypeScript-safe Managed Security Services Page
export default function ManagedSecurityServices() {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold">Managed Security Services</h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Starlight Data&apos;s Managed Security Services (MSS) deliver continuous
          protection, threat detection, and rapid incident response to safeguard
          your organization&apos;s IT infrastructure, critical assets, and business
          operations.
        </p>

        <div className="mt-10 relative w-full h-80 sm:h-96 mx-auto">
          <Image
            src="/Manage security.png" // keep image path same
            alt="Managed Security Services"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Services + Sticky Form */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Services List */}
        <div className="lg:col-span-2">
          <ServiceList />
        </div>

        {/* Right Column: Sticky Form */}
        <div className="lg:col-span-1">
          <div className="sticky top-20 bg-white p-6 rounded-xl shadow-lg border border-slate-200">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 1234567890"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Organisation</label>
                <input
                  type="text"
                  placeholder="Your Organisation"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  How Can We Help?
                </label>
                <textarea
                  placeholder="Write your message..."
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500 h-24 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-sky-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-sky-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-semibold">Ready to Get Started?</h3>
          <p className="mt-2 text-slate-600">
            Strengthen your security posture with proactive monitoring,
            intelligent threat detection, and expert incident response.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block bg-sky-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-sky-700 transition"
          >
            Get In Touch
          </a>
        </div>
      </section>

      <PartnersPage />
      <Stats />
    </main>
  );
}

// Types
interface ServiceSectionProps {
  title: string;
  children: React.ReactNode;
}

function ServiceSection({ title, children }: ServiceSectionProps) {
  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold text-slate-800">{title}</h3>
      <div className="mt-3 space-y-2 text-slate-600">{children}</div>
    </div>
  );
}

function ServiceList() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-8">
      <ServiceSection title="Security Command Center">
        <p>
          • 24/7 monitoring and rapid response to security events, ensuring
          continuous protection of your organization’s infrastructure.
        </p>
      </ServiceSection>

      <ServiceSection title="MXDR (Managed Extended Detection and Response)">
        <p>
          • Integrated endpoint detection and network monitoring to proactively
          defend against sophisticated cyber threats and attacks.
        </p>
      </ServiceSection>

      <ServiceSection title="Dark Web Monitoring">
        <p>
          • Continuous scanning of dark web forums and marketplaces to detect
          exposed sensitive data and mitigate emerging cyber risks.
        </p>
      </ServiceSection>

      <ServiceSection title="Incident Response">
        <p>
          • Rapid containment, investigation, and remediation of security
          incidents to minimize damage and maintain business continuity.
        </p>
      </ServiceSection>

      <ServiceSection title="VMDR Services">
        <p>
          • Vulnerability Management, Detection, and Response combining
          vulnerability scanning, threat detection, and real-time remediation.
        </p>
      </ServiceSection>

      <ServiceSection title="Digital Forensics">
        <p>
          • Comprehensive breach investigation, data recovery, and legal
          documentation through advanced forensic analysis and evidence
          collection.
        </p>
      </ServiceSection>

      <ServiceSection title="Managed Red Team Operation Assessments">
        <p>
          • Simulated cyberattacks to evaluate defenses, uncover vulnerabilities,
          and strengthen your overall security posture.
        </p>
      </ServiceSection>

      <ServiceSection title="Threat Management">
        <p>
          • Continuous monitoring and analysis to identify, neutralize, and
          mitigate emerging threats before they impact your organization.
        </p>
      </ServiceSection>

      <ServiceSection title="Custom Security Solutions">
        <p>
          • Tailored security solutions designed to meet your unique business
          requirements and align with your strategic objectives.
        </p>
      </ServiceSection>
    </section>
  );
}
