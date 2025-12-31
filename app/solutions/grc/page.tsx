"use client";

import PartnersPage from "@/app/partners/page";
import React from "react";
import Image from "next/image";
import Stats from "@/components/sections/stats/default";


// Fully TypeScript-safe IT Infrastructure Page
export default function ITInfrastructure() {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold">GRC Services</h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Modern, resilient cloud architectures, migration services, and
          24/7 managed operations to keep your business available at scale with
          performance, reliability and security.
        </p>

        <div className="mt-10 relative w-full h-80 sm:h-96 mx-auto">
          <Image
            src="/IT infrasturcture.png" // replace with your image path
            alt="IT Infrasturcture"
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
                <label className="block text-sm font-medium mb-1">How Can We Help?</label>
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
      {/* CTA / Contact Section */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-semibold">Ready to Get Started?</h3>
          <p className="mt-2 text-slate-600">
            Supercharge your organisation’s success with cutting-edge IT
            solutions and 24/7 expert support.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block bg-sky-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-sky-700 transition"
          >
            Get In Touch
          </a>
        </div>
      </section>
      <PartnersPage/>
      <Stats/>
    </main>
  );
}


      
    
  


// Type definitions for service sections
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
      <ServiceSection title="Data Center Services">
        <p>• Custom-designed data centers built for high reliability.</p>
        <p>• 24/7 management and monitoring with efficient uptime.</p>
        <p>• Secure colocation with advanced connectivity.</p>
      </ServiceSection>

      <ServiceSection title="Cloud Services">
        <p>• Seamless Cloud Migration with minimal disruption.</p>
        <p>• Ongoing Cloud Management and optimization.</p>
        <p>• Hybrid cloud solutions for continuity and scale.</p>
      </ServiceSection>

      <ServiceSection title="IT Operations">
        <p>• Managed IT with proactive monitoring and fast response.</p>
        <p>• 24/7 system monitoring and issue resolution.</p>
        <p>• Patch Management and Help Desk support.</p>
      </ServiceSection>

      <ServiceSection title="Network Services">
        <p>• Network design and implementation tailored to performance.</p>
        <p>• Continuous network monitoring and optimization.</p>
        <p>• High security with advanced routing and firewalls.</p>
      </ServiceSection>

      <ServiceSection title="Infrastructure Security">
        <p>• Firewall and IDS/IPS protecting against threats.</p>
        <p>• SD-WAN solutions for secure, flexible networks.</p>
        <p>• Structured cabling and resilient connectivity.</p>
      </ServiceSection>

      <ServiceSection title="Data Management">
        <p>• Database optimization and secure administration.</p>
        <p>• Fast and reliable data migration services.</p>
        <p>• Trusted backup and disaster recovery plans.</p>
      </ServiceSection>

      <ServiceSection title="IT Consulting">
        <p>• Infrastructure assessments for performance and security.</p>
        <p>• Future-ready capacity planning.</p>
        <p>• Strategic technology roadmaps aligned with business goals.</p>
      </ServiceSection>

      <ServiceSection title="AV & Monitoring Solutions">
        <p>• Seamless AV integration for effective communication.</p>
        <p>• High-quality conferencing and digital signage.</p>
        <p>• NOC room solutions for real-time infrastructure monitoring.</p>
      </ServiceSection>
    </section>
  );
}