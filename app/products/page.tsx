import React from "react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function ProductsPage() {
  return (
    <main className="bg-white">
      <Section className={cn("py-20")}>
        <div className="max-w-container mx-auto px-4">
          {/* Header */}
          <div className="relative text-center max-w-2xl mx-auto">
            {/* subtle blue texture behind heading */}
            <div
              aria-hidden
              className="absolute left-1/2 -translate-x-1/2 -top-6 w-[420px] h-[120px] rounded-full blur-3xl opacity-60"
              style={{
                background:
                  "radial-gradient(circle at 30% 40%, rgba(37,99,235,0.12), rgba(37,99,235,0.04) 40%, transparent 70%)",
              }}
            />

            <p className="relative z-10 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Our Offerings
            </p>

            <h1 className="relative z-10 mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Products Built for{" "}
              <span className="text-blue-600">Security & Performance</span>
            </h1>

            <p className="relative z-10 text-muted-foreground mt-4">
              We build enterprise-grade secure solutions that protect your
              workforce, infrastructure, and business operations.
            </p>
          </div>

          {/* Products Grid */}
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {/* Product Card */}
            <div
              className="
                group relative p-8 rounded-3xl border border-gray-100 bg-white
                shadow-sm transition-all duration-300
                hover:shadow-xl hover:border-blue-200
                flex gap-6
              "
            >
              {/* left accent rail */}
              <span
                aria-hidden
                className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-blue-500/60"
              />

              <div className="flex-shrink-0">
                <div className="h-20 w-20 rounded-2xl border border-gray-100 bg-white shadow-sm flex items-center justify-center transition-transform group-hover:scale-105">
                  <img
                    src="https://mountedge-website.netlify.app/star-secure-logo-transparent.svg"
                    alt="Star Secure"
                    className="h-12 w-12 object-contain"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Star Secure Browser (SSB)
                </h3>

                <p className="text-muted-foreground mt-2 leading-relaxed">
                  An enterprise-grade secure browser built using zero-trust
                  architecture to protect people, data, networks, and IT assets.
                </p>

                <Button
                  variant="ghost"
                  className="mt-4 px-0 group-hover:text-blue-600"
                  asChild
                >
                  <a
                    href="/products/star-secure"
                    className="flex items-center gap-1"
                  >
                    Learn More
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </Button>
              </div>
            </div>

            {/* Why MountEdge Card */}
            <div
              className="
                group relative p-8 rounded-3xl border border-gray-100 bg-white
                shadow-sm transition-all duration-300
                hover:shadow-xl hover:border-blue-200
              "
            >
              {/* subtle corner highlight */}
              <div
                aria-hidden
                className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-3xl opacity-40"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(37,99,235,0.10), transparent 60%)",
                }}
              />

              <h3 className="text-xl font-bold text-gray-900">
                Why MountEdge?
              </h3>

              <p className="text-muted-foreground mt-3 leading-relaxed">
                We combine industry expertise, client-first processes, and
                innovation-driven engineering. Our products deliver measurable
                security outcomes backed by strong R&D and a deep understanding
                of modern digital threats.
              </p>

              <Button
                variant="ghost"
                className="mt-4 px-0 group-hover:text-blue-600"
                asChild
              >
                <a href="/about" className="flex items-center gap-1">
                  Explore Our Approach
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </Button>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-14 text-center">
            <Button size="lg" className="rounded-xl px-8" asChild>
              <a href="/products/all">View All Products</a>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}