import {
 Landmark,
  Hospital,
  GraduationCap,
  Building2,
} from "lucide-react";

export default function IndustriesPage() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <span className="inline-block rounded-full border border-slate-300 px-4 py-1 text-sm text-slate-600">
            Industries We Serve
          </span>

          <h2 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Built for High-Compliance Industries
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Tailored cybersecurity approaches for industry-specific challenges
            and regulatory requirements
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* BFSI */}
          <div className="rounded-xl border border-slate-200 p-6 shadow-sm transition hover:shadow-md">
            <div className="flex items-center gap-3">
             <Landmark className="h-6 w-6 text-slate-700" />

              <h3 className="text-lg font-semibold text-slate-900">BFSI</h3>
            </div>

            <div className="mt-5 space-y-4 text-sm">
              <div>
                <p className="font-medium text-red-600">PROBLEM</p>
                <p className="mt-1 text-slate-600">
                  Regulatory compliance (RBI, PCI-DSS), fraud prevention, and
                  secure customer data management
                </p>
              </div>

              <div>
                <p className="font-medium text-blue-600">MSPL APPROACH</p>
                <p className="mt-1 text-slate-600">
                  Zero Trust implementation with strong IAM, DLP, and transaction
                  monitoring
                </p>
              </div>

              <div>
                <p className="font-medium text-emerald-600">EXPECTED IMPACT</p>
                <p className="mt-1 text-slate-600">
                  Reduced breach risk, audit-ready compliance, enhanced customer
                  trust
                </p>
              </div>
            </div>
          </div>

          {/* Healthcare */}
          <div className="rounded-xl border border-slate-200 p-6 shadow-sm transition hover:shadow-md">
            <div className="flex items-center gap-3">
              <Hospital className="h-6 w-6 text-slate-700" />
              <h3 className="text-lg font-semibold text-slate-900">
                Healthcare
              </h3>
            </div>

            <div className="mt-5 space-y-4 text-sm">
              <div>
                <p className="font-medium text-red-600">PROBLEM</p>
                <p className="mt-1 text-slate-600">
                  HIPAA compliance, patient data protection, and legacy system
                  security
                </p>
              </div>

              <div>
                <p className="font-medium text-blue-600">MSPL APPROACH</p>
                <p className="mt-1 text-slate-600">
                  Data encryption, access controls, and secure remote access for
                  healthcare providers
                </p>
              </div>

              <div>
                <p className="font-medium text-emerald-600">EXPECTED IMPACT</p>
                <p className="mt-1 text-slate-600">
                  HIPAA compliance, protected patient records, secure telehealth
                  infrastructure
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="rounded-xl border border-slate-200 p-6 shadow-sm transition hover:shadow-md">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-slate-700" />
              <h3 className="text-lg font-semibold text-slate-900">Education</h3>
            </div>

            <div className="mt-5 space-y-4 text-sm">
              <div>
                <p className="font-medium text-red-600">PROBLEM</p>
                <p className="mt-1 text-slate-600">
                  Student data privacy, ransomware attacks, and limited security
                  budgets
                </p>
              </div>

              <div>
                <p className="font-medium text-blue-600">MSPL APPROACH</p>
                <p className="mt-1 text-slate-600">
                  Cost-effective ZTNA, endpoint protection, and security
                  awareness programs
                </p>
              </div>

              <div>
                <p className="font-medium text-emerald-600">EXPECTED IMPACT</p>
                <p className="mt-1 text-slate-600">
                  Protected student data, reduced ransomware risk, scalable
                  security
                </p>
              </div>
            </div>
          </div>

          {/* Enterprise */}
          <div className="rounded-xl border border-slate-200 p-6 shadow-sm transition hover:shadow-md">
            <div className="flex items-center gap-3">
              <Building2 className="h-6 w-6 text-slate-700" />
              <h3 className="text-lg font-semibold text-slate-900">
                Enterprise
              </h3>
            </div>

            <div className="mt-5 space-y-4 text-sm">
              <div>
                <p className="font-medium text-red-600">PROBLEM</p>
                <p className="mt-1 text-slate-600">
                  Complex IT environments, remote workforce security, and
                  insider threats
                </p>
              </div>

              <div>
                <p className="font-medium text-blue-600">MSPL APPROACH</p>
                <p className="mt-1 text-slate-600">
                  Comprehensive Zero Trust framework with PAM, SIEM, and cloud
                  security
                </p>
              </div>

              <div>
                <p className="font-medium text-emerald-600">EXPECTED IMPACT</p>
                <p className="mt-1 text-slate-600">
                  Unified security posture, reduced attack surface, operational
                  efficiency
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
