"use client";

import Image from "next/image";
import Link from "next/link";
import {
    BuildingLibraryIcon,
    HeartIcon,
    AcademicCapIcon,
    BriefcaseIcon,
} from "@heroicons/react/24/outline";


const INDUSTRIES = [
    {
        id: "bfsi",
        tag: "Compliance Risk",
        tagColor: "bg-amber-100 text-amber-700",
        title: "BFSI",
        desc: "Built for regulatory compliance, data sovereignty, and secure digital banking.",
        icon: BuildingLibraryIcon,

    },
    {
        id: "healthcare",
        tag: "Data Governance",
        tagColor: "bg-blue-100 text-blue-700",
        title: "Healthcare",
        desc: "Built for patient data protection, EMR security, and HIPAA compliance.",
        icon: HeartIcon,
    },
    {
        id: "education",
        tag: "Security & Integrity",
        tagColor: "bg-emerald-100 text-emerald-700",
        title: "Education",
        desc: "Built for secure exam environments, learning platforms, and academic integrity.",
        icon: AcademicCapIcon,
    },
    {
        id: "enterprise",
        tag: "Distributed Workforce",
        tagColor: "bg-violet-100 text-violet-700",
        title: "Enterprise",
        desc: "Built for distributed teams, remote access, and hybrid infrastructure.",
        icon: BriefcaseIcon,
    },
];

export default function IndustriesSection() {
    return (
        <section className="bg-white py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
                {/* Badge */}
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium text-blue-600">
                    Industry Solutions
                </span>

                {/* Heading */}
                <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
                    Industries We Support
                </h2>

                {/* Subtitle */}
                <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                    Purpose-built for compliance-heavy, mission-critical sectors.
                </p>

                {/* Cards */}
                <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {INDUSTRIES.map((item) => (
                        <article
                            key={item.id}
                            className="group rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition bg-white"
                        >
                            {/* Tag */}
                            <span
                                className={`inline-block mb-4 px-3 py-1 text-xs font-semibold rounded-full ${item.tagColor}`}
                            >
                                {item.tag}
                            </span>

                            {/* Icon / Image */}
                            {/* Icon */}
                            <div className="mb-5">
                                <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${item.tagColor}`}>
                                    <item.icon className="h-6 w-6 text-current" />
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-semibold text-gray-900">
                                {item.title}
                            </h3>

                            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                                {item.desc}
                            </p>

                            {/* CTA */}
                            <Link
                                href={`/industries/${item.id}`}
                                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition"
                            >
                                Explore Industry <span className="group-hover:translate-x-1 transition">→</span>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
