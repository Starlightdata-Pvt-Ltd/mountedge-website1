"use client";

import PartnersPage from "@/app/partners/page";
import React from "react";
import Image from "next/image";
import Stats from "@/components/sections/stats/default";

// Fully TypeScript-safe Digital Forensics Page
export default function DigitalForensics() {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold">Digital Forensics Services</h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Starlight Data's Digital Forensics services help organizations investigate and recover crucial evidence from digital devices and networks. We provide comprehensive solutions to uncover the truth, preserve evidence, and support legal or corporate investigations with the highest level of accuracy.
        </p>

        <div className="mt-10 relative w-full h-80 sm:h-96 mx-auto">
          <Image
            src="/digital.png" // keep your image path
            alt="Digital Forensics"
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
            Supercharge your organisation’s success with cutting-edge IT solutions and 24/7 expert support.
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
      <ServiceSection title="Digital Forensics">
        <p>• Computer Forensics / Disk Forensics: Recovery and analysis of data from computers and storage devices to investigate security breaches or illegal activities.</p>
        <p>• Mobile Forensics: Extracting and analyzing data from mobile devices to support investigations into criminal activities or security incidents.</p>
        <p>• Image/Video Forensics: Detailed analysis of digital images and video files to determine authenticity and uncover evidence.</p>
        <p>• DVR Forensics: Investigating and recovering video footage from DVR systems for criminal or corporate investigations.</p>
        <p>• Network Forensics: Monitoring and analyzing network traffic to identify malicious activity or track cyberattacks.</p>
        <p>• Email Forensics: Investigating email data to uncover fraud, harassment, or other malicious activities.</p>
      </ServiceSection>

      <ServiceSection title="Specialised Forensics Tools">
        <p>• Forensic Workstation: High-performance tools to perform in-depth forensic investigations with secure environments for data analysis.</p>
        <p>• Write Blocker: Preventing data modification during forensic analysis to preserve the integrity of digital evidence.</p>
        <p>• Forensics Duplicator: Ensuring exact copies of digital evidence are made without altering the original data.</p>
        <p>• Password Recovery: Using specialized tools to recover passwords from encrypted files or devices during investigations.</p>
        <p>• High-End GPU Server for Password Breaking: Utilizing powerful servers with GPU capabilities to break complex passwords for investigations.</p>
        <p>• GSM Locator: Tracking mobile devices to pinpoint the location of a device during an investigation.</p>
      </ServiceSection>

      <ServiceSection title="Cyber and Fraud Analysis">
        <p>• Cryptoanalysis: Analyzing cryptographic data to identify weaknesses and uncover hidden transactions or communications.</p>
        <p>• Deep Web/Dark Web Monitoring: Identifying threats and stolen data on the deep web and dark web that may target your organization.</p>
        <p>• Fraud Analysis: Investigating fraudulent activities and financial crimes, including money laundering and cyber fraud.</p>
        <p>• Malware Analysis: Dissecting malicious software to understand its behavior and prevent future attacks.</p>
      </ServiceSection>

      <ServiceSection title="Audio and Video Forensics">
        <p>• Audio Forensics: Analyzing and enhancing audio recordings for clarity and authenticity in legal investigations.</p>
        <p>• Audio/Video Surveillance: Recovering and analyzing surveillance footage for evidentiary purposes, ensuring integrity and accuracy.</p>
      </ServiceSection>

      <ServiceSection title="Additional Forensics Services">
        <p>• Social Media Forensics (OSINT): Investigating social media platforms for evidence of fraud, harassment, or criminal activity.</p>
        <p>• Big Data Analysis: Analyzing large datasets to uncover patterns or anomalies related to fraud, security breaches, or cybercrimes.</p>
        <p>• Lawful Interception Solution: Implementing legal surveillance and interception solutions to track communications as per regulations.</p>
        <p>• Crime Scene Reconstructor: Reconstructing digital crime scenes based on evidence to provide insights for investigations.</p>
        <p>• Clean Room: A controlled environment to analyze digital devices without compromising evidence integrity or contamination.</p>
      </ServiceSection>
    </section>
  );
}

