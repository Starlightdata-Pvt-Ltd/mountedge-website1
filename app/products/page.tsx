import React from "react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function ProductsPage() {
  return (
    <main>
      <Section className={cn("py-20")}>
        <div className="max-w-container mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Our Offerings
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3">
              Products Built for Security & Performance
            </h1>
            <p className="text-muted-foreground mt-4">
              We build enterprise-grade secure solutions that protect your
              workforce, infrastructure and business operations.
            </p>
          </div>

          {/* Products Grid */}
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Product Card */}
            <div className="p-8 rounded-3xl border bg-card shadow-sm hover:shadow-md transition-shadow flex items-center gap-6">
              <div className="flex-shrink-0">
                <img
                  src="https://mountedge-website.netlify.app/star-secure-logo-transparent.svg"
                  alt="Star Secure"
                  className="h-20 w-20 object-contain"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold">Star Secure Browser (SSB)</h3>
                <p className="text-muted-foreground mt-2">
                  An enterprise-grade secure browser built using zero-trust
                  architecture to protect people, data, networks and IT assets.
                </p>

                <Button variant="ghost" className="mt-4 px-0" asChild>
                  <a href="/products/star-secure" className="flex items-center gap-1">
                    Learn More <ArrowRight size={16} />
                  </a>
                </Button>
              </div>
            </div>

            {/* Why MountEdge Card */}
            <div className="p-8 rounded-3xl border bg-card shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold">Why MountEdge?</h3>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                We combine industry expertise, client-first processes and
                innovation-driven engineering. Our products are designed to
                deliver measurable security outcomes backed by strong R&D and a
                deep understanding of modern digital threats.
              </p>

              <Button variant="ghost" className="mt-4 px-0" asChild>
                <a href="/about" className="flex items-center gap-1">
                  Explore Our Approach <ArrowRight size={16} />
                </a>
              </Button>
            </div>
          </div>

          {/* More Products CTA (Future Scalability) */}
          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <a href="/products/all">View All Products</a>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
