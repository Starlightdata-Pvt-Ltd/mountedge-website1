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
          <div className="group relative rounded-xl p-[1px] bg-gradient-to-br from-blue-500 to-cyan-400 shadow-[0_8px_30px_rgba(59,130,246,0.25)]">
            <div className="rounded-xl bg-white p-6 transition-all duration-300 group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.35)]">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-50 p-2 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-blue-600">
                  <Landmark className="h-6 w-6 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-700">
                  BFSI
                </h3>
              </div>

              <div className="mt-5 space-y-4 text-sm">
                <div>
                  <p className="font-medium text-red-600">PROBLEM</p>
                  <p className="mt-1 text-slate-600 group-hover:text-slate-700">
                    Regulatory compliance (RBI, PCI-DSS), fraud prevention, and
                    secure customer data management
                  </p>
                </div>

                <div>
                  <p className="font-medium text-blue-600">MSPL APPROACH</p>
                  <p className="mt-1 text-slate-600 group-hover:text-slate-700">
                    Zero Trust implementation with strong IAM, DLP, and
                    transaction monitoring
                  </p>
                </div>

                <div>
                  <p className="font-medium text-emerald-600">
                    EXPECTED IMPACT
                  </p>
                  <p className="mt-1 text-slate-600 group-hover:text-slate-700">
                    Reduced breach risk, audit-ready compliance, enhanced
                    customer trust
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Healthcare */}
        <div className="group relative rounded-xl p-[1px] bg-gradient-to-br from-emerald-300 via-emerald-200 to-teal-200 shadow-[0_8px_30px_rgba(16,185,129,0.25)]">

            <div className="rounded-xl bg-white p-6 transition-all duration-300 group-hover:shadow-[0_20px_50px_rgba(16,185,129,0.35)]">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-emerald-50 p-2 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-emerald-600">
                  <Hospital className="h-6 w-6 text-emerald-600 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-emerald-700">
                  Healthcare
                </h3>
              </div>

              <div className="mt-5 space-y-4 text-sm">
                <div>
                  <p className="font-medium text-red-600">PROBLEM</p>
                  <p className="mt-1 text-slate-600 group-hover:text-slate-700">
                    HIPAA compliance, patient data protection, and legacy system
                    securitycustomer data management.
                  </p>
                </div>

                <div>
                  <p className="font-medium text-blue-600">MSPL APPROACH</p>
                  <p className="mt-1 text-slate-600 group-hover:text-slate-700">
                    Data encryption, access controls, and secure remote access
                    for healthcare providers
                  </p>
                </div>

                <div>
                  <p className="font-medium text-emerald-600">
                    EXPECTED IMPACT
                  </p>
                  <p className="mt-1 text-slate-600 group-hover:text-slate-700">
                    HIPAA compliance, protected patient records, secure
                    telehealth infrastructure
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="group relative rounded-xl p-[1px] bg-gradient-to-br from-purple-500 to-indigo-400 shadow-[0_8px_30px_rgba(139,92,246,0.25)]">
            <div className="rounded-xl bg-white p-6 transition-all duration-300 group-hover:shadow-[0_20px_50px_rgba(139,92,246,0.35)]">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-purple-50 p-2 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-purple-600">
                  <GraduationCap className="h-6 w-6 text-purple-600 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-purple-700">
                  Education
                </h3>
              </div>

              <div className="mt-5 space-y-4 text-sm">
                <div>
                  <p className="font-medium text-red-600">PROBLEM</p>
                  <p className="mt-1 text-slate-600 group-hover:text-slate-700">
                    Student data privacy, ransomware attacks, and limited
                    security budgets
                  </p>
                </div>

                <div>
                  <p className="font-medium text-blue-600">MSPL APPROACH</p>
                  <p className="mt-1 text-slate-600 group-hover:text-slate-700">
                    Cost-effective ZTNA, endpoint protection, and security
                    awareness programs
                  </p>
                </div>

                <div>
                  <p className="font-medium text-emerald-600">
                    EXPECTED IMPACT
                  </p>
                  <p className="mt-1 text-slate-600 group-hover:text-slate-700">
                    Protected student data, reduced ransomware risk, scalable
                    security
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise */}
          <div className="group relative rounded-xl p-[1px] bg-gradient-to-br from-slate-500 to-slate-400 shadow-[0_8px_30px_rgba(100,116,139,0.25)]">
            <div className="rounded-xl bg-white p-6 transition-all duration-300 group-hover:shadow-[0_20px_50px_rgba(100,116,139,0.35)]">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-slate-100 p-2 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-slate-700">
                  <Building2 className="h-6 w-6 text-slate-700 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-slate-700">
                  Enterprise
                </h3>
              </div>

              <div className="mt-5 space-y-4 text-sm">
                <div>
                  <p className="font-medium text-red-600">PROBLEM</p>
                  <p className="mt-1 text-slate-600 group-hover:text-slate-700">
                    Complex IT environments, remote workforce security, and
                    insider threats
                  </p>
                </div>

                <div>
                  <p className="font-medium text-blue-600">MSPL APPROACH</p>
                  <p className="mt-1 text-slate-600 group-hover:text-slate-700">
                    Comprehensive Zero Trust framework with PAM, SIEM, and cloud
                    security
                  </p>
                </div>

                <div>
                  <p className="font-medium text-emerald-600">
                    EXPECTED IMPACT
                  </p>
                  <p className="mt-1 text-slate-600 group-hover:text-slate-700">
                    Unified security posture, reduced attack surface, operational
                    efficiency
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
