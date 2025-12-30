"use client";

import React from "react";

export default function WhyMSPL() {
    const cards = [
        { title: "Engineering-first, security-first philosophy", icon: IconCode },
        { title: "50+ years of collective expertise", icon: IconUsers },
        { title: "Modular product suite built for high-compliance environments", icon: IconModules },
        { title: "Cloud-native, automation-led architecture", icon: IconCloud },
        { title: "10+ OEM technology partners", icon: IconHandshake },
        { title: "Designed for BFSI, Healthcare, Education, and high-risk sectors", icon: IconBuilding },
    ];

    return (
        <section className="py-16 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="rounded-3xl p-8 sm:p-12">
                    <header className="relative text-center mb-10 sm:mb-12">
                        {/* Decorative top glow */}
                        <div
                            aria-hidden
                            className="pointer-events-none absolute -top-24 sm:-top-28 left-1/2 -translate-x-1/2 w-[600px] sm:w-[820px] h-[240px] sm:h-[360px] rounded-full blur-3xl"
                            style={{
                                background:
                                    "radial-gradient(circle at 40% 30%, rgba(11,110,255,0.14), rgba(11,110,255,0.06) 35%, transparent 60%)",
                            }}
                        />

                        {/* Heading */}
                        <h2 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-semibold text-black">
                            Why MSPL
                        </h2>

                        <p className="relative z-10 mt-3 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
                            Built for enterprises that demand zero-compromise security and engineering rigor.
                        </p>
                    </header>

                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                        {cards.map((c, i) => (
                            <article
                                key={i}
                                className="group relative flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl border border-blue-300 bg-white transition-all duration-300 hover:bg-blue-50 hover:shadow-[0_8px_24px_rgba(37,99,235,0.15)]"
                            >
                                {/* Icon */}
                                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl border border-blue-300 bg-blue-50 group-hover:bg-blue-100 transition-colors">
                                    <c.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                                </div>

                                {/* Text */}
                                <h3 className="text-slate-800 text-sm sm:text-base md:text-lg font-medium">
                                    {c.title}
                                </h3>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- Icons ---------------- */

function IconCode(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} viewBox="0 0 24 24" fill="none">
            <path d="M16 18l6-6-6-6M8 6L2 12l6 6" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    );
}

function IconUsers(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
            <path d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    );
}

function IconModules(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} viewBox="0 0 24 24" fill="none">
            <path d="M12 2v6M12 22v-6M4 12h6M14 12h6" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    );
}

function IconCloud(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} viewBox="0 0 24 24" fill="none">
            <path d="M20 17.5A5 5 0 0018 7h-1.3A8 8 0 104 16.2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    );
}

function IconHandshake(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} viewBox="0 0 24 24" fill="none">
            <path d="M14 7l7 7M3 21l9-9 3 3 6-6" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    );
}

function IconBuilding(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} viewBox="0 0 24 24" fill="none">
            <path d="M3 21h18M5 21V7h14v14" stroke="currentColor" strokeWidth="1.5" />
            <path d="M9 10h.01M9 14h.01M13 10h.01M13 14h.01" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    );
}
