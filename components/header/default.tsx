import React from "react";

export default function HeaderSection() {
  return (
    <section className="w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Secure, Scalable & <span className="text-rose-400">Smart Platform</span>
          </h1>

          <p className="mt-4 text-gray-300 text-base md:text-lg">
            Build modern, secure, and performance-driven applications with our
            next-generation technology stack.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="px-6 py-3 bg-rose-500 hover:bg-rose-600 rounded-lg font-medium transition">
              Get Started
            </button>
            <button className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Visual */}
        <div className="flex-1 flex justify-center">
          <div className="w-72 h-72 bg-white/10 rounded-2xl backdrop-blur-lg border border-white/20 shadow-lg flex items-center justify-center text-gray-300">
            Image / Graphic
          </div>
        </div>

      </div>
    </section>
  );
}
