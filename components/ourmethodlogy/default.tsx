"use client";

import { motion, type Variants } from "framer-motion";

/**
 * Copy-paste ready React + Tailwind component.
 * - Uses framer-motion for subtle entrance animations
 * - Dark, centered hero block that will visually sit on a white page
 * - Four square step cards with centered square icon boxes
 * - Icon uplift + blue border on hover
 * - Respects prefers-reduced-motion.
 */

const STEPS = [
    {
        id: "01",
        title: "Assess",
        desc: "Deep-dive analysis of security posture, compliance requirements, and business objectives.",
        icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" aria-hidden>
                <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.6" />
            </svg>
        ),
    },
    {
        id: "02",
        title: "Architect",
        desc: "Design tailored Zero Trust solutions aligned with your infrastructure and risk profile.",
        icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" aria-hidden>
                <rect x="6" y="5" width="12" height="3" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
                <rect x="5" y="10.5" width="14" height="3" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
                <rect x="7" y="16" width="10" height="3" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
            </svg>
        ),
    },
    {
        id: "03",
        title: "Implement",
        desc: "Deployment with minimal disruption, comprehensive testing, and team enablement.",
        icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" aria-hidden>
                <path d="M12 3v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M12 18v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.6" />
                <path d="M12 12l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: "04",
        title: "Manage",
        desc: "Continuous monitoring, optimization, and support for long-term security resilience.",
        icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" aria-hidden>
                <path d="M12 6v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M12 16v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
                <path d="M4 12h2M18 12h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
        ),
    },
];

/* ✅ FIXED & TYPED VARIANTS */

const container: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.12,
            when: "beforeChildren",
        },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1], // ✅ easeOut (TS-safe)
        },
    },
};

export default function MethodologyHero() {
    return (
        <section className="relative overflow-hidden bg-white text-slate-900 py-20">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                {/* Pill label */}
                <div className="flex justify-center">
                    <div className="inline-flex items-center gap-2 px-5 py-1 rounded-full bg-sky-600/90 text-white text-sm border border-sky-600/90 shadow-sm">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.1" />
                            <path d="M12 8v4l2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                        Our Methodology
                    </div>

                </div>

                <h2 className="mt-8 text-center text-4xl md:text-5xl font-extrabold tracking-tight">
                    The MSPL Way of Working
                </h2>

                <p className="mt-4 text-center text-slate-600 max-w-2xl mx-auto">
                    A proven, systematic approach to security transformation and IT modernization
                </p>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    className="relative mt-12"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 items-start">
                        {STEPS.map((s) => (
                            <motion.div key={s.id} variants={item} className="relative">
                                <div className="absolute left-1/2 -top-6 -translate-x-1/2">
                                    <div className="w-11 h-11 rounded-full bg-white border border-sky-400 text-sky-600 flex items-center justify-center text-sm shadow-sm">
                                        {s.id}
                                    </div>
                                </div>

                                <article className="mx-auto w-44 h-44 rounded-xl border border-slate-200 bg-white flex items-center justify-center group shadow-sm hover:shadow-lg transition">
                                    <div className="w-20 h-20 flex items-center justify-center bg-sky-50 border border-slate-200 rounded-md transition duration-300 group-hover:-translate-y-3 group-hover:border-sky-500">
                                        <div className="text-sky-300">{s.icon}</div>
                                    </div>
                                </article>

                                <h3 className="mt-6 text-center text-lg font-semibold">{s.title}</h3>
                                <p className="mt-3 text-center text-sm text-slate-600 max-w-xs mx-auto">

                                    {s.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
