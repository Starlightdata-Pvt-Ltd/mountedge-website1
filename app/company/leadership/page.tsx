// app/leadership/page.tsx (or pages/leadership.tsx)
// Paste this file as-is. If import paths differ in your repo, update them (see note below).
"use client";

import React from "react";
import { cn } from "@/lib/utils";

import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Glow from "@/components/ui/glow";
import { Mockup, MockupFrame } from "@/components/ui/mockup";

type Leader = {
  id: string;
  name: string;
  title: string;
  bio: string;
  quote?: string;
  img?: string; // path to avatar
  linkedin?: string;
};

const LEADERS: Leader[] = [
  {
    id: "l1",
    name: "Arjun Mehra",
    title: "Founder & CEO",
    bio:
      "Product-led founder focused on building secure, privacy-first browsing experiences for enterprises. 15+ years in product and operations.",
    quote: "Build with empathy. Ship with speed.",
    img: "/avatars/arjun.png",
    linkedin: "#",
  },
  {
    id: "l2",
    name: "Neha Sharma",
    title: "CTO",
    bio:
      "Systems architect and distributed-systems engineer. Leads engineering strategy, platform reliability and scale initiatives.",
    quote: "Reliability is the best feature.",
    img: "/avatars/neha.png",
    linkedin: "#",
  },
  {
    id: "l3",
    name: "Saurav Banerjee",
    title: "Head of Product",
    bio:
      "Solves customer problems with simple, intuitive interfaces — from discovery to large-scale adoption across enterprises.",
    quote: "Design for humans, not for screens.",
    img: "/avatars/saurav.png",
    linkedin: "#",
  },
  {
    id: "l4",
    name: "Priya Verma",
    title: "Head of Design",
    bio:
      "Design systems advocate with a focus on clarity, accessibility and delightful micro-interactions.",
    quote: "Clarity creates trust.",
    img: "/avatars/priya.png",
    linkedin: "#",
  },
];

export default function LeadershipPage() {
  return (
    <main className="w-full">
      {/* HERO */}
      <Section className="pt-12 pb-8">
        <div className="max-w-container mx-auto text-center px-4 sm:px-0">
          <Badge variant="outline" className="mx-auto mb-4">
            Leadership
          </Badge>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Meet the team building secure browsing for enterprises
          </h1>

          <p className="mx-auto max-w-2xl text-muted-foreground text-sm sm:text-base mb-6 font-medium">
            Our leadership combines product, security, and systems engineering experience to build
            tools that prioritize privacy, compliance and reliable scale. We value clarity, ownership,
            and fast customer feedback loops.
          </p>

          <div className="flex justify-center gap-3 mx-auto max-w-sm">
            <Button variant="default" size="lg" asChild>
              <a href="#leadership-grid">View Leaders</a>
            </Button>
            <Button
              variant="glow"
              size="lg"
              asChild
              className="border-2 border-transparent hover:border-blue-500 rounded-md transition"
            >
              <a href="#our-mission">Our Mission</a>
            </Button>
          </div>
        </div>
      </Section>

      {/* MISSION + MOCKUP */}
      <Section id="our-mission" className="pt-0 pb-6">
        <div className="max-w-container mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">Our mission</h2>
              <p className="text-muted-foreground mb-4">
                To empower enterprises with a secure, manageable browsing platform that reduces
                risk without compromising usability. We believe security should be invisible when it
                works and obvious when action is required.
              </p>

              <ul className="space-y-3 text-sm">
                <li className="flex gap-3 items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2" />
                  <span>
                    Leadership drives product clarity — converting strategy into measurable outcomes.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2" />
                  <span>
                    We operate with a security-first mindset across product, engineering and design.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2" />
                  <span>
                    We prioritize customer feedback — shipping small, learning fast, iterating safely.
                  </span>
                </li>
              </ul>

              <div className="mt-6 flex gap-3">
                <Button variant="default" size="lg" asChild>
                  <a href="/about">About MSPL</a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-2 border-blue-500 rounded-md hover:bg-blue-50 transition"
                >
                  <a href="/contact">Contact Leadership</a>
                </Button>
              </div>
            </div>

            <div>
              <MockupFrame size="small" className="rounded-xl shadow-xl overflow-hidden">
                <Mockup type="responsive" className="w-full bg-background/90 p-4 rounded-xl">
                  <div className="flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg">
                    <img
                      src="/Star1.png"
                      alt="team mockup"
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

      {/* LEADERSHIP GRID */}
      <Section id="leadership-grid" className="pt-6 pb-6">
        <div className="max-w-container mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Leadership team</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERS.map((l) => (
              <article
                key={l.id}
                className="group relative rounded-xl border border-slate-100 p-6 bg-white/80 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                    {/* Replace src path with real avatar */}
                    <img
                      src={l.img ?? "/avatars/default.png"}
                      alt={l.name}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-lg font-semibold">{l.name}</h4>
                    <p className="text-sm text-muted-foreground">{l.title}</p>
                    <p className="mt-3 text-sm text-muted-foreground">{l.bio}</p>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-xs text-muted-foreground italic">“{l.quote}”</div>
                      <div className="flex items-center gap-2">
                        <a
                          href={l.linkedin ?? "#"}
                          className="text-sm text-blue-600 underline"
                          aria-label={`View ${l.name} on LinkedIn`}
                        >
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* subtle accent on hover */}
                <div
                  className={cn(
                    "pointer-events-none absolute inset-0 rounded-xl ring-0 group-hover:ring-4 group-hover:ring-blue-100 transition"
                  )}
                />
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* ADVISORS */}
      <Section className="pt-6 pb-6">
        <div className="max-w-container mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Advisors</h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full border border-slate-100 bg-white/80">Dr. Meera Kulkarni — Security Researcher</span>
            <span className="px-3 py-1 rounded-full border border-slate-100 bg-white/80">R. Patel — Enterprise Sales</span>
            <span className="px-3 py-1 rounded-full border border-slate-100 bg-white/80">S. Iyer — Privacy & Compliance</span>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="pt-6 pb-12">
        <div className="max-w-container mx-auto text-center">
          <h4 className="text-2xl font-semibold mb-2">Want to talk to our leadership team?</h4>
          <p className="text-muted-foreground mb-4">Request a meeting or invite us for a technical briefing.</p>

          <div className="flex justify-center gap-3">
            <Button variant="default" size="lg" asChild>
              <a href="/contact">Request a briefing</a>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-2 border-blue-500 rounded-md hover:bg-blue-50">
              <a href="/about#team">Learn about the company</a>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
