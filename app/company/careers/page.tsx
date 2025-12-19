"use client";

import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";

import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Glow from "@/components/ui/glow";
import { Mockup, MockupFrame } from "@/components/ui/mockup";

type Job = {
  id: string;
  title: string;
  team: string;
  location: string;
  type: string;
  summary: string;
};

const JOBS: Job[] = [
  {
    id: "1",
    title: "Frontend Engineer (React / TypeScript)",
    team: "Product",
    location: "Remote / India",
    type: "Full-time",
    summary:
      "Build polished, performant UI components for our security browser product. Ownership from design to shipping.",
  },
  {
    id: "2",
    title: "Backend Engineer (Go / Cloud)",
    team: "Infrastructure",
    location: "Bengaluru / Remote",
    type: "Full-time",
    summary:
      "Design and operate highly available microservices and APIs that power telemetry and policy enforcement.",
  },
  {
    id: "3",
    title: "Product Designer",
    team: "Design",
    location: "Remote",
    type: "Full-time",
    summary:
      "Own end-to-end product experiences — research, prototypes, high-fidelity UI and design systems.",
  },
  {
    id: "4",
    title: "Customer Success Engineer",
    team: "Customer",
    location: "Lucknow / Hybrid",
    type: "Contract",
    summary:
      "Work with enterprise customers during onboarding, integrations and troubleshooting.",
  },
];

export default function CareersPage() {
  const [filter, setFilter] = useState<"All" | "Product" | "Infrastructure" | "Design" | "Customer">(
    "All"
  );
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [appName, setAppName] = useState("");
  const [appEmail, setAppEmail] = useState("");
  const [appResume, setAppResume] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const filters = ["All", "Product", "Infrastructure", "Design", "Customer"] as const;

  const visibleJobs = JOBS.filter((j) => (filter === "All" ? true : j.team === filter));

  function openApply(job: Job) {
    setSelectedJob(job);
    setAppName("");
    setAppEmail("");
    setAppResume(null);
    if (fileRef.current) fileRef.current.value = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedJob) return alert("Choose a job to apply for.");
    if (!appName.trim()) return alert("Please enter your name.");
    if (!/^\S+@\S+\.\S+$/.test(appEmail)) return alert("Please enter a valid email.");
    if (!appResume) return alert("Please attach your resume (PDF or DOC).");

    // simulate submit
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    alert(`Thanks ${appName}! Your application for "${selectedJob.title}" has been received.`);
    setSelectedJob(null);
  }

  return (
    <main className="w-full">
      {/* HERO */}
      <Section className="pt-12 pb-8">
        <div className="max-w-container mx-auto text-center">
          <Badge variant="outline" className="mx-auto mb-4">
            We're hiring
          </Badge>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4">
            Join MSPL — Build the future of secure browsing
          </h1>

          <p className="mx-auto max-w-2xl text-muted-foreground text-sm sm:text-base mb-6 font-medium">
            We’re a tight-knit team building enterprise-grade secure access and browsing experiences.
            If you love product, care about performance and security, and want impact — apply.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mx-auto max-w-sm">
            <Button variant="default" size="lg" asChild>
              <a href="#open-roles">View Open Roles</a>
            </Button>
            <Button variant="glow" size="lg" asChild>
              <a href="#why-mspl">Why MSPL</a>
            </Button>
          </div>
        </div>
      </Section>

      {/* MOCKUP / BRAND */}
      <Section className="pt-0 pb-6">
        <div className="max-w-container mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">Work with great people and meaningful problems</h2>
              <p className="text-muted-foreground mb-6">
                From product to infrastructure, we ship quickly, iterate with customers, and invest in a robust engineering culture.
              </p>

              <div className="flex gap-3 flex-wrap">
                <span className="inline-block px-3 py-1 rounded-full border border-slate-200 text-sm font-medium">Flexible hours</span>
                <span className="inline-block px-3 py-1 rounded-full border border-slate-200 text-sm font-medium">Remote friendly</span>
                <span className="inline-block px-3 py-1 rounded-full border border-slate-200 text-sm font-medium">Health benefits</span>
                <span className="inline-block px-3 py-1 rounded-full border border-slate-200 text-sm font-medium">Learning budget</span>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <MockupFrame size="small" className="rounded-xl shadow-xl overflow-hidden">
                <Mockup type="responsive" className="w-full bg-background/90 p-4 rounded-xl">
                  {/* simple image mockup; replace src with your screenshot */}
                  <div className=" flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg">
                    <img
                      src="/star.png"
                      alt="product mockup"
                      className="w-full h-full object-contain"
                      draggable={false}
                      loading="eager"
                    />
                  </div>
                </Mockup>
              </MockupFrame>
              <Glow variant="top" className="mt-4" />
            </div>
          </div>
        </div>
      </Section>

      {/* OPEN ROLES */}
      <Section id="open-roles" className="pt-6 pb-6">
        <div className="max-w-container mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold">Open Roles</h3>
            <div className="hidden sm:flex gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "px-3 py-1 rounded-md text-sm font-medium transition",
                    filter === f ? "bg-blue-50 border border-blue-200" : "border border-slate-100"
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile filter */}
          <div className="flex sm:hidden gap-2 mb-4 overflow-auto">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "px-3 py-1 rounded-md text-sm font-medium whitespace-nowrap",
                  filter === f ? "bg-blue-50 border border-blue-200" : "border border-slate-100"
                )}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {visibleJobs.map((job) => (
              <article
                key={job.id}
                className="rounded-xl border border-slate-100 p-6 bg-white/80 shadow-sm hover:shadow-md transition"
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h4 className="text-lg font-semibold">{job.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{job.summary}</p>
                    <div className="flex gap-2 mt-3 text-xs">
                      <span className="px-2 py-1 rounded bg-slate-50 border border-slate-100">{job.type}</span>
                      <span className="px-2 py-1 rounded bg-slate-50 border border-slate-100">{job.location}</span>
                      <span className="px-2 py-1 rounded bg-slate-50 border border-slate-100">{job.team}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Button variant="default" size="sm" asChild>
                      <button onClick={() => openApply(job)}>Apply</button>
                    </Button>
                    <a className="text-sm text-muted-foreground underline hover:text-blue-600" href="#">
                      View details
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* WHY MSPL / PERKS */}
      <Section id="why-mspl" className="pt-6 pb-6">
        <div className="max-w-container mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Why work at MSPL?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-lg border border-slate-100 bg-white/80">
              <h5 className="font-semibold mb-2">Ownership & Impact</h5>
              <p className="text-sm text-muted-foreground">Ship features end-to-end and measure their impact with real customers.</p>
            </div>
            <div className="p-5 rounded-lg border border-slate-100 bg-white/80">
              <h5 className="font-semibold mb-2">Compensation & Benefits</h5>
              <p className="text-sm text-muted-foreground">Competitive pay, health benefits, and learning stipends.</p>
            </div>
            <div className="p-5 rounded-lg border border-slate-100 bg-white/80">
              <h5 className="font-semibold mb-2">Learning Culture</h5>
              <p className="text-sm text-muted-foreground">Regular tech talks, mentorship and training budget.</p>
            </div>
            <div className="p-5 rounded-lg border border-slate-100 bg-white/80">
              <h5 className="font-semibold mb-2">Flexible Work</h5>
              <p className="text-sm text-muted-foreground">Remote friendly with periodic in-person syncs.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* APPLY FORM (in-page) */}
      <Section className="pt-6 pb-12">
        <div className="max-w-container mx-auto">
          <div className="max-w-3xl mx-auto bg-white/80 border border-slate-100 rounded-xl p-6 shadow">
            <h4 className="text-xl font-semibold mb-3">
              {selectedJob ? `Apply — ${selectedJob.title}` : "Apply for a role"}
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              {selectedJob
                ? "Fill the form below and attach your resume. We'll get back within a few days."
                : "Select a role and click Apply on the job card to prefill the role."}
            </p>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
              <div>
                <label className="text-sm font-medium block mb-1">Full name</label>
                <input
                  value={appName}
                  onChange={(e) => setAppName(e.target.value)}
                  className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-sm font-medium block mb-1">Email</label>
                <input
                  value={appEmail}
                  onChange={(e) => setAppEmail(e.target.value)}
                  className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="text-sm font-medium block mb-1">Resume (PDF or DOC)</label>
                <input
                  ref={fileRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setAppResume(e.target.files?.[0] ?? null)}
                  className="w-full text-sm"
                />
              </div>

              <div className="flex items-center gap-3">
                <Button variant="default" size="lg" asChild>
                  <button type="submit" disabled={submitting} className="w-full">
                    {submitting ? "Submitting..." : "Submit Application"}
                  </button>
                </Button>

                <Button
                  variant="ghost"
                  size="lg"
                  onClick={() => {
                    setSelectedJob(null);
                    setAppName("");
                    setAppEmail("");
                    setAppResume(null);
                    if (fileRef.current) fileRef.current.value = "";
                  }}
                >
                  Clear
                </Button>
              </div>

              <p className="text-xs text-muted-foreground">
                By submitting, you consent to MSPL storing your application details for recruitment purposes.
              </p>
            </form>
          </div>
        </div>
      </Section>
    </main>
  );
}
