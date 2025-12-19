import {
  Layers,
  ShieldCheck,
  Network,
  Cpu,
  BadgeCheck,
  Workflow,
  Boxes,
} from "lucide-react";

export default function ServicesAmplifyPage() {
  return (
    <main className="bg-white">
      {/* SECTION 1 */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm text-blue-700">
            <Layers className="h-4 w-4" />
            Platform Integration
          </span>

          <h2 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl">
            How Services Amplify the MSPL Platform
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Our cybersecurity services are designed to integrate seamlessly with
            MSPL’s product ecosystem
          </p>
        </div>

        {/* Service Cards */}
        <div className="mx-auto mt-16 max-w-4xl space-y-6 px-2">
          {/* Card 1 */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-blue-50 p-2">
                <ShieldCheck className="h-6 w-6 text-blue-600" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  StarSecure Zero Trust Browser
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  IAM services integrate seamlessly with browser-based access
                  controls for granular, context-aware authentication and
                  authorization.
                </p>

                <p className="mt-3 text-sm font-medium text-emerald-600">
                  ✓ Unified identity layer across web applications
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-blue-50 p-2">
                <Network className="h-6 w-6 text-blue-600" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Micro Firewall Network (MFN)
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  ZTNA and network segmentation services leverage MFN to enforce
                  micro-perimeter security at the application level.
                </p>

                <p className="mt-3 text-sm font-medium text-emerald-600">
                  ✓ Zero trust network enforcement without VPN complexity
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-blue-50 p-2">
                <Cpu className="h-6 w-6 text-blue-600" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  MSPL Secure Access Platform
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  All cybersecurity services feed into the unified platform for
                  centralized policy management, monitoring, and governance.
                </p>

                <p className="mt-3 text-sm font-medium text-emerald-600">
                  ✓ Single pane of glass security operations
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-6 text-center">
            <button className="rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 transition">
              Explore MSPL Products
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="mx-auto max-w-6xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm text-blue-700">
            <BadgeCheck className="h-4 w-4" />
            Why MSPL
          </span>

          <h2 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Why Choose MSPL for Cybersecurity Services
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Engineering excellence meets enterprise-grade security expertise
          </p>

          {/* Value Cards */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: "Engineering-First Security",
                desc: "Security engineering expertise with deep Zero Trust architecture knowledge.",
              },
              {
                icon: Boxes,
                title: "OEM Partnership Ecosystem",
                desc: "Strategic partnerships enabling best-of-breed integrations.",
              },
              {
                icon: Workflow,
                title: "Methodology-Driven Delivery",
                desc: "Proven assessment, implementation, and optimization frameworks.",
              },
              {
                icon: Layers,
                title: "Platform-Centric Approach",
                desc: "Integrated security services aligned to a cohesive ecosystem.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-white p-6 text-left shadow-sm"
              >
                <div className="mb-4 inline-flex rounded-lg bg-blue-50 p-2">
                  <item.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
