"use client";

import PartnersPage from "@/app/partners/page";
import React from "react";
import Image from "next/image";
import Stats from "@/components/sections/stats/default";

// Fully TypeScript-safe Data Analytics Page
export default function DataAnalytics() {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold">Data Analytics Services</h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Starlight Data’s Data Analytics services empower organizations to transform raw data into meaningful insights. We help businesses make informed decisions, optimize operations, and drive growth using advanced analytics, visualization, and data-driven strategies.
        </p>

        <div className="mt-10 relative w-full h-80 sm:h-96 mx-auto">
          <Image
            src="/digital.png"
            alt="Data Analytics"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Services + Sticky Form */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Services List */}
        <div className="lg:col-span-2">
          <ServiceList />
        </div>

        {/* Right Column: Sticky Form */}
        <div className="lg:col-span-1">
          <div className="sticky top-20 bg-white p-6 rounded-xl shadow-lg border border-slate-200">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 1234567890"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Organisation</label>
                <input
                  type="text"
                  placeholder="Your Organisation"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">How Can We Help?</label>
                <textarea
                  placeholder="Describe your data or analytics needs..."
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500 h-24 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-sky-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-sky-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-semibold">Ready to Unlock Insights?</h3>
          <p className="mt-2 text-slate-600">
            Turn your data into a strategic advantage with advanced analytics and expert guidance.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block bg-sky-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-sky-700 transition"
          >
            Get In Touch
          </a>
        </div>
      </section>

      <PartnersPage />
      <Stats />
    </main>
  );
}

// Type definitions for service sections
interface ServiceSectionProps {
  title: string;
  children: React.ReactNode;
}

function ServiceSection({ title, children }: ServiceSectionProps) {
  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold text-slate-800">{title}</h3>
      <div className="mt-3 space-y-2 text-slate-600">{children}</div>
    </div>
  );
}

function ServiceList() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-8">
      <ServiceSection title="Data Analytics Services">
        <p>• Descriptive Analytics: Understanding historical data to identify trends, patterns, and performance metrics.</p>
        <p>• Diagnostic Analytics: Analyzing data to determine why certain events or outcomes occurred.</p>
        <p>• Predictive Analytics: Using statistical models and machine learning to forecast future trends and behaviors.</p>
        <p>• Prescriptive Analytics: Providing actionable recommendations to optimize business decisions.</p>
        <p>• Real-Time Analytics: Processing live data streams for immediate insights and faster decision-making.</p>
      </ServiceSection>

      <ServiceSection title="Business Intelligence & Reporting">
        <p>• Dashboard Development: Interactive dashboards for real-time visibility into key business metrics.</p>
        <p>• Data Visualization: Clear and intuitive charts, graphs, and reports for better understanding.</p>
        <p>• KPI Tracking: Monitoring critical performance indicators aligned with business goals.</p>
        <p>• Executive Reporting: High-level reports designed for leadership and stakeholders.</p>
      </ServiceSection>

      <ServiceSection title="Advanced Analytics & AI">
        <p>• Machine Learning Models: Building intelligent models to detect patterns and automate insights.</p>
        <p>• Customer Analytics: Understanding customer behavior, segmentation, and lifetime value.</p>
        <p>• Risk & Fraud Analytics: Identifying anomalies and mitigating risks through data-driven analysis.</p>
        <p>• Forecasting & Demand Planning: Predicting demand and optimizing supply chain operations.</p>
      </ServiceSection>

      <ServiceSection title="Data Engineering & Management">
        <p>• Data Warehousing: Designing and managing scalable data warehouses.</p>
        <p>• ETL / ELT Pipelines: Extracting, transforming, and loading data from multiple sources.</p>
        <p>• Data Quality & Governance: Ensuring accuracy, consistency, and compliance of data.</p>
        <p>• Cloud Data Platforms: Leveraging cloud technologies for scalable analytics solutions.</p>
      </ServiceSection>

      <ServiceSection title="Industry-Specific Analytics Solutions">
        <p>• Financial Analytics: Performance analysis, forecasting, and compliance reporting.</p>
        <p>• Marketing Analytics: Campaign performance, attribution modeling, and ROI analysis.</p>
        <p>• Operations Analytics: Process optimization and efficiency improvement.</p>
        <p>• Healthcare & Public Sector Analytics: Data-driven insights for better outcomes and planning.</p>
      </ServiceSection>
    </section>
  );
}
