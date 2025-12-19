"use client";

import React from "react";
import { cn } from "@/lib/utils";

import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Glow from "@/components/ui/glow";
import { Mockup, MockupFrame } from "@/components/ui/mockup";

const VALUES = [
  {
    title: "Security First",
    desc: "We design and build with security at the core — not as an afterthought.",
  },
  {
    title: "Ownership & Accountability",
    desc: "Everyone owns outcomes, not just tasks. We take responsibility end-to-end.",
  },
  {
    title: "Clarity Over Complexity",
    desc: "Simple solutions win. We remove noise and focus on what truly matters.",
  },
  {
    title: "Customer Empathy",
    desc: "We deeply understand customer pain points before we build.",
  },
  {
    title: "Continuous Learning",
    desc: "We invest in skills, curiosity, and constant improvement.",
  },
  {
    title: "Speed with Stability",
    desc: "We move fast — without compromising reliability or trust.",
  },
];

export default function CulturePage() {
  return (
    <main className="w-full">
      {/* HERO */}
      <Section className="pt-12 pb-8">
        <div className="max-w-container mx-auto text-center px-4 sm:px-0">
          <Badge variant="outline" className="mx-auto mb-4">
            Our Culture
          </Badge>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4">
            A culture built on trust, ownership, and impact
          </h1>

          <p className="mx-auto max-w-2xl text-muted-foreground text-sm sm:text-base font-medium mb-6">
            At MSPL, culture is not a set of rules — it’s how we think, build, and collaborate every day.
            We empower people to take ownership, move fast, and build secure technology that matters.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button variant="default" size="lg" asChild>
              <a href="#values">Our Values</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-2 border-blue-500 rounded-md hover:bg-blue-50 transition"
            >
              <a href="/careers">Join Our Team</a>
            </Button>
          </div>
        </div>
      </Section>

      {/* CULTURE OVERVIEW */}
      <Section className="pt-0 pb-6">
        <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 sm:px-0">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              How we work together
            </h2>

            <p className="text-muted-foreground mb-4">
              We believe high-performing teams are built on psychological safety,
              clear communication, and strong ownership. Everyone is encouraged to
              share ideas, challenge assumptions, and improve continuously.
            </p>

            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
                Transparent decision-making and open feedback
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
                Remote-friendly and flexible work culture
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
                Deep focus on quality, reliability, and impact
              </li>
            </ul>
          </div>

          <div>
            <MockupFrame size="small" className="rounded-xl shadow-xl overflow-hidden">
              <Mockup type="responsive" className="bg-background/90 p-4 rounded-xl">
                <div className="  flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg">
                  <img
                    src="/Starlight.png"
                    alt="Team collaboration"
                    width={1248}
                    height={765}
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
      </Section>

      {/* VALUES */}
      <Section id="values" className="pt-6 pb-6">
        <div className="max-w-container mx-auto px-4 sm:px-0">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Our Core Values
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((value, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-100 bg-white/80 p-6 shadow-sm hover:shadow-md transition"
              >
                <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* PEOPLE FIRST */}
      <Section className="pt-6 pb-6">
        <div className="max-w-container mx-auto text-center px-4 sm:px-0">
          <h3 className="text-2xl font-semibold mb-3">
            People come first
          </h3>
          <p className="max-w-2xl mx-auto text-muted-foreground mb-6">
            We support our team with flexibility, growth opportunities, and an environment
            where everyone feels valued and heard.
          </p>

          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="px-4 py-2 rounded-full border border-slate-100 bg-white/80">
              Flexible work hours
            </span>
            <span className="px-4 py-2 rounded-full border border-slate-100 bg-white/80">
              Learning & certification support
            </span>
            <span className="px-4 py-2 rounded-full border border-slate-100 bg-white/80">
              Health & wellness benefits
            </span>
            <span className="px-4 py-2 rounded-full border border-slate-100 bg-white/80">
              Inclusive & respectful environment
            </span>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="pt-6 pb-12">
        <div className="max-w-container mx-auto text-center px-4 sm:px-0">
          <h4 className="text-2xl font-semibold mb-2">
            Build your career with us
          </h4>
          <p className="text-muted-foreground mb-5">
            If our culture resonates with you, we’d love to work together.
          </p>

          <div className="flex justify-center gap-3">
            <Button variant="default" size="lg" asChild>
              <a href="/careers">Explore Careers</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-2 border-blue-500 rounded-md hover:bg-blue-50 transition"
            >
              <a href="/leadership">Meet Our Leadership</a>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
