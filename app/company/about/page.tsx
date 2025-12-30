"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Code2, ShieldCheck, Zap, Users , ArrowRight, CheckCircle } from "lucide-react";



/*
  Animated About page (single-file). 
  - Uses framer-motion for entrance + subtle hover animations
  - SectionWrapper handles per-section background color + reveal stagger
  - Keep this file as app/page.tsx (or replace existing file)

  INSTALL: npm i framer-motion
*/


const cardContainerVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeInOut",
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 6, scale: 0.995 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: "easeInOut",
    },
  },
};
const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] } },
};

const heroBgGradient = "bg-white";

export default function HomePage() {
  return (
    <main className="text-slate-900 antialiased  selection:text-slate-900">
      <Hero />

      <SectionWrapper id="who" bg="white">
        <WhoWeAre />
      </SectionWrapper>

      <SectionWrapper id="info" bg="slate-50">
        <InfoCards />
      </SectionWrapper>

      <SectionWrapper id="different" bg="white">
        <WhatMakesUsDifferent />
      </SectionWrapper>

      

      <SectionWrapper id="leadership" bg="white">
        <Leadership />
      </SectionWrapper>

      <SectionWrapper id="partners" bg="slate-50">
        <Partners />
      </SectionWrapper>

      <SectionWrapper id="approach" bg="white">
        <Approach />
      </SectionWrapper>

      <SectionWrapper id="security" bg="slate-50">
        <SecurityCompliance />
      </SectionWrapper>

      <SectionWrapper id="culture" bg="white">
        <CultureValues />
      </SectionWrapper>

      <SectionWrapper id="join" bg="slate-50">
        <JoinTeam />
      </SectionWrapper>

      
      <FinalCTA/>
    </main>
  );
}

/* ---------- Section wrapper with reveal animation + bg handling ---------- */
function SectionWrapper({
  children,
  id,
  bg = "white",
}: {
  children: React.ReactNode;
  id?: string;
  bg?: string;
}) {
  // allows passing simple tailwind bg names like "white", "slate-50", or complex strings
  const bgClass = bg.includes(" ") ? bg : `bg-${bg}`;

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={container}
      className={`${bgClass} py-16 transition-colors duration-700`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div variants={fadeUp}>{children}</motion.div>
      </div>
    </motion.section>
  );
}

/* ----------------------------- Hero ----------------------------- */
function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`relative overflow-hidden ${heroBgGradient} py-20 lg:py-28`}
    >
      {/* decorative bubble */}
      <motion.div
        animate={{ x: [0, -12, 0], y: [0, -6, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className="absolute right-0 top-10 -z-10 opacity-20 pointer-events-none w-80 h-80 rounded-full  hidden lg:block"
      />

      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-5 py-1 rounded-full 
              border border-sky-200 
             text-sm text-sky-700 font-medium mb-5"
          >
            <span className="w-2 h-2 rounded-full bg-sky-500"></span>
            About Us
          </motion.div>


          <motion.h1 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Engineering the Future of
            <span className="block text-sky-600">Secure Access</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 text-sm md:text-base text-slate-600">
            A unified, Zero Trust-driven security ecosystem built for high-compliance enterprises by a team
            with 50+ years collective experience in cybersecurity and enterprise IT.
          </motion.p>

          <motion.ul variants={fadeUp} className="mt-6 flex flex-wrap justify-center gap-6 text-xs text-slate-500">
            <li>50+ Years Collective Expertise</li>
            <li>Engineering-First Approach</li>
            <li>10+ OEM Partners</li>
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-8 flex justify-center gap-4 flex-wrap">
            <motion.a
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center px-5 py-2 rounded-md bg-sky-600 text-white text-sm font-medium shadow hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300"
              href="#request"
            >
              Request Technical Walkthrough
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              className="relative inline-flex items-center px-5 py-2 rounded-md text-sm font-medium text-slate-900 border border-gray-300 hover:border-blue-500 hover:bg-white hover:text-black transition-all duration-300 overflow-hidden"
              href="#"
            >
              Download Architecture Whitepaper
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ----------------------------- Who We Are ----------------------------- */
function WhoWeAre() {
  return (
    <div className="text-center">
      <motion.div
  whileHover={{ scale: 1.04 }}
  className="inline-block text-sm px-4 py-1.5 
             rounded-full 
             bg-gradient-to-r from-sky-700 to-blue-700
             text-white 
             font-medium
             shadow-md"
>
  Who We Are
</motion.div>


      <motion.h2 className="mt-6 text-2xl md:text-3xl font-bold text-slate-700">Who We Are</motion.h2>
      <motion.p className="mt-4 text-slate-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
        MSPL builds a modular cybersecurity ecosystem—Zero Trust Browser, Micro Firewall Network, and Secure
        Access Suite—designed to unify secure access across users, devices, apps, and networks. Our
        engineering-led services strengthen adoption, governance, and long-term resilience across cloud, cyber,
        and IT environments.
      </motion.p>

      <motion.a whileHover={{ scale: 1.02 }} className="mt-6 inline-block text-sky-600 text-base font-medium hover:underline">
        See Product Suite →
      </motion.a>
    </div>
  );
}

/* ----------------------------- Info Cards ----------------------------- */

 function InfoCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
      <AnimatedCard title="Vision" icon={<DotIcon />}>
        A secure access ecosystem engineered for modern, compliance-heavy enterprises.engineered for modern, compliance-heavy enterprises.
      </AnimatedCard>

      <AnimatedCard title="Mission" icon={<LockIcon />}>
        Build products and solutions that unify Zero Trust enforcement, strengthen governance, and simplify
        security at scale.
      </AnimatedCard>
    </div>
  );
}

function AnimatedCard({
  title,
  children,
  icon,
}: {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.18 }}
  variants={cardContainerVariants}
  className="rounded-2xl p-[1.5px] bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600"
>
  {/* Inner card fully covers background → border-only look */}
  <motion.div
    whileHover={{ scale: 1.01 }}
    transition={{ type: "spring", stiffness: 260, damping: 26 }}
    className="rounded-xl bg-white p-6 shadow-sm hover:shadow-md hover:bg-blue-50 transition-all duration-200"
  >
    <div className="flex items-start gap-4">
      <div className="flex-none">{icon}</div>

      <div>
        <motion.h3
          variants={titleVariants}
          className="text-lg md:text-xl font-semibold text-slate-800"
        >
          {title}
        </motion.h3>

        <p className="mt-2 text-base md:text-lg text-slate-600 leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  </motion.div>
</motion.div>

  );
}

/* Notes:
 - Outer element creates a visible gradient border using a 1px padding (p-[1px]).
 - The inner element stays white by default and transitions to a very light blue/purple gradient on hover
   for a premium, subtle effect that works on a white page.
 - Rounded corners use rounded-2xl (outer) / rounded-xl (inner) so the gradient border shows neatly.
 - Transition and shadow are added for a smooth, elevated hover effect.
*/

function WhatMakesUsDifferent() {
  const features = [
    { title: "Engineering-first", desc: "Security-by-design, built by experts who understand threat landscapes." },
    { title: "Modular Architecture", desc: "Integrated product ecosystem for unified security." },
    { title: "Unified Governance", desc: "Single-pane analytics across all enforcement layers." },
    { title: "Cloud-native", desc: "Automation-focused, built for scale and resilience." },
    { title: "Compliance-ready", desc: "Designed for high-compliance verticals." },
    { title: "Performance-focused", desc: "Low-latency enforcement with high availability." },
  ];

  return (
    <div>
      <div className="text-center">
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="inline-block text-sm px-4 py-1.5 
             rounded-full 
             bg-gradient-to-r from-sky-700 to-blue-700
             text-white 
             font-medium
             shadow-md
             transition-transform"
        >
          What Sets Us Apart
        </motion.div>

        <h2 className="mt-6 text-3xl font-semibold">What Makes Us Different</h2>
        <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">Our philosophy is rooted in deep engineering expertise and security-first thinking.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
         <motion.div
  key={f.title}
  initial={{ opacity: 0, scale: 0.97 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, amount: 0.15 }}
  whileHover={{
    borderRadius: 16,
    background:
      "linear-gradient(180deg, rgba(240,251,255,0.9), rgba(255,255,255,1))",
    boxShadow:
      "0 0 0 1px rgba(34, 68, 238, 0.45), 0 20px 40px rgba(34, 48, 238, 0.18)",
  }}
  transition={{ type: "spring", stiffness: 180, damping: 26 }}
  style={{
    boxShadow:
      "0 0 0 1px rgba(34, 34, 238, 0.35), 0 10px 28px rgba(34, 68, 238, 0.12)",
  }}
  className="
    rounded-xl
    border border-slate-200
    bg-white
    p-5
    transition-all duration-300
    cursor-pointer
  "
>
  <h4 className="text-lg font-semibold text-slate-800">{f.title}</h4>
  <p className="mt-2 text-lg text-slate-600">{f.desc}</p>
</motion.div>

        ))}
      </div>
    </div>
  );
}



/* ----------------------------- Leadership ----------------------------- */
function Leadership() {
  const leaders = [
    { role: "Founder & CEO", title: "CEO", desc: "30+ years in cybersecurity, cloud and enterprise IT." },
    { role: "Chief Technology Officer", title: "CTO", desc: "25+ years in secure access engineering and architecture." },
    { role: "Head of Engineering", title: "ENG", desc: "15+ years developing enterprise security automation solutions." },
  ];

  return (
    <div className="text-center">
      <h2 className="mt-4 text-3xl font-bold">Leadership</h2>
      <p className="mt-2 text-lg text-slate-600 max-w-xl mx-auto">Led by security engineers and product architects with decades of enterprise experience.</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center">
        {leaders.map((l) => (
          <motion.div
  key={l.role}
  whileHover={{
    boxShadow: "0 14px 30px rgba(14, 149, 233, 0.18)",
    borderColor: "#386ef8ff",
  }}
  transition={{ type: "spring", stiffness: 200, damping: 28 }}
  className="
    group
    rounded-xl
    border border-gray-300
    p-6
    flex flex-col
    items-center
    justify-center
    max-w-xs
    h-72
    mx-auto
    bg-white
    transition-all duration-300
    hover:bg-sky-50
  "
>
  {/* Icon */}
  <motion.div
    whileHover={{ scale: 1.06 }}
    transition={{ type: "spring", stiffness: 260, damping: 20 }}
    className="
      w-16 h-16
      rounded-full
      bg-sky-600
      text-white
      flex items-center
      justify-center
      font-semibold
      text-lg
      mb-4
      shadow-sm
      group-hover:shadow-[0_0_0_6px_rgba(56,189,248,0.18)]
      transition-all duration-300
    "
  >
    {l.title}
  </motion.div>

  <h4 className="text-lg font-semibold text-center">{l.role}</h4>
  <p className="mt-2 text-sm text-slate-600 text-center">{l.desc}</p>
</motion.div>

        ))}
      </div>
    </div>
  );
}

/* ----------------------------- Partners ----------------------------- */
function Partners() {
  const logos = ["Microsoft Azure", "CrowdStrike", "Google Cloud", "HashiCorp", "Palo Alto Networks", "AWS", "Okta", "Cisco"];

  return (
    <div className="text-center">
      <h3 className="mt-4 text-3xl font-bold">Partner Ecosystem</h3>
      <p className="mt-2 text-lg text-slate-600 max-w-2xl mx-auto">MSPL collaborates with leading OEMs, cloud platforms, and technology partners.</p>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
        {logos.map((l) => (
          <motion.button key={l} whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 260, damping: 24 }} className="w-40 h-20 flex items-center justify-center rounded-lg border border-gray-300 text-slate-700 font-medium transition-all duration-300 ease-in-out bg-white">
            {l}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------- Approach ----------------------------- */
function Approach() {
  const steps = [
    { num: "01", title: "Assess", desc: "Deep-dive analysis of security posture, compliance requirements, and business objectives." },
    { num: "02", title: "Architect", desc: "Design tailored Zero Trust solutions aligned with your infrastructure and risk profile." },
    { num: "03", title: "Implement", desc: "Deployment with minimal disruption using automated tooling and best practices." },
    { num: "04", title: "Manage", desc: "Continuous monitoring, optimization and support to ensure long-term resilience." },
  ];

  return (
    <div className="text-center">
      <h3 className="mt-4 text-3xl font-bold">Our Approach</h3>
      <p className="mt-2 text-lg text-slate-600 max-w-xl mx-auto">A proven methodology for delivering secure, compliant solutions.</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s) => (
          <motion.div
  key={s.num}
  initial={{ opacity: 0, scale: 0.97 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, amount: 0.15 }}
  whileHover={{
    borderColor: "#2563eb",
    boxShadow: "0 14px 32px rgba(47, 37, 235, 0.18)",
  }}
  transition={{ type: "spring", stiffness: 200, damping: 26 }}
  className="
    rounded-xl
    border border-slate-200
    p-6
    text-left
    bg-white
    backdrop-blur-sm
    transition-all duration-300
    hover:bg-blue-50
  "
>
  {/* Number synced with border color */}
  <div className="
    text-blue-600
    font-semibold
    text-lg
    tracking-wide
  ">
    {s.num}
  </div>

  <h4 className="mt-3 text-lg font-semibold">{s.title}</h4>
  <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
</motion.div>

        ))}
      </div>
    </div>
  );
}

const IconShield = () => (
  <svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24">
    <path
      d="M12 2l7 3v5c0 5-3 9-7 12-4-3-7-7-7-12V5l7-3z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconLock = () => (
  <svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24">
    <rect x="3" y="11" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M7 11V8a5 5 0 0110 0v3" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const IconLayers = () => (
  <svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24">
    <path d="M12 3l9 5-9 5-9-5 9-5z" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3 13l9 5 9-5" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const IconCode = () => (
  <svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24">
    <path d="M8 17l-5-5 5-5M16 7l5 5-5 5" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

/* ----------------------------- SecurityCompliance ----------------------------- */
function SecurityCompliance() {
  const items = [
    {
      title: "Data Sovereignty",
      desc: "All data stored in India, fully aligned with MeitY guidelines and DPDP Act requirements.",
      icon: <IconShield />,
    },
    {
      title: "Built for Compliance",
      desc: "Designed for DPDP, GDPR, RBI, IRDAI, and other industry-specific standards from the ground up.",
      icon: <IconLock />,
    },
    {
      title: "Access Governance",
      desc: "Zero Trust access control and continuous policy enforcement baked into every product.",
      icon: <IconLayers />,
    },
    {
      title: "Secure Development",
      desc: "Internal secure development lifecycle (SDL) principles ensure security at every stage.",
      icon: <IconCode />,
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h3 className="text-center text-3xl font-semibold text-black">
          Our Commitment to Security & Compliance
        </h3>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((it) => (
            <motion.div
  key={it.title}
  initial={{ opacity: 0, scale: 0.97 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ type: "spring", stiffness: 180, damping: 28 }}
  style={{
    boxShadow:
      "0 0 0 1px rgba(34, 119, 238, 0.35), 0 20px 40px rgba(34, 119, 238, 0.12)",
  }}
  className="
    rounded-xl
    border border-slate-200
    bg-white
    backdrop-blur-xl
    p-8
    transition-all duration-300
  "
>
  {/* Icon */}
  <div className="mb-6">{it.icon}</div>

  {/* Title */}
  <h4 className="text-xl font-semibold text-slate-900">
    {it.title}
  </h4>

  {/* Description */}
  <p className="mt-3 text-base text-slate-600 leading-relaxed">
    {it.desc}
  </p>
</motion.div>

          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Culture & Values ----------------------------- */

const icons: Record<string, React.ReactNode> = {

  Innovation: <Code2 className="w-6 h-6 text-sky-500" />,
  Integrity: <ShieldCheck className="w-6 h-6 text-sky-500" />,
  Agility: <Zap className="w-6 h-6 text-sky-500" />,
  Partnership: <Users className="w-6 h-6 text-sky-500" />,
};

function CultureValues() {
  const values = [
    { title: "Innovation", desc: "Pushing the boundaries of secure access technology." },
    { title: "Integrity", desc: "Transparent, honest partnerships with every client." },
    { title: "Agility", desc: "Rapid adaptation to emerging threats and technologies." },
    { title: "Partnership", desc: "Long-term commitment to our clients’ success." },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-2xl font-bold">Our Culture & Values</h2>
      <p className="mt-2 text-lg text-slate-600">The principles that guide how we build, partner, and grow.</p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((v) => (
          <motion.div
  key={v.title}
  initial={{ opacity: 0, scale: 0.97 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ type: "spring", stiffness: 180, damping: 28 }}
  style={{
    boxShadow:
      "0 0 0 1px rgba(34, 34, 238, 0.35), 0 20px 40px rgba(34, 44, 238, 0.12)",
  }}
  className="
    rounded-xl
    border border-slate-200
    bg-white
    p-6
    transition-all duration-300
  "
>

            <div className="mb-4 flex items-center justify-center">
  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
    {icons[v.title]}
  </div>
</div>

<h4 className="text-lg font-semibold text-slate-800">{v.title}</h4>
<p className="mt-2 text-sm text-slate-600">{v.desc}</p>

          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------- JoinTeam ----------------------------- */

function JoinTeam() {
  return (
    <div className="text-center">
      {/* Icon above the heading */}
      <Users className="mx-auto mb-4 w-12 h-12 text-sky-600" />

      <h3 className="text-2xl font-bold">Join Our Team</h3>
      <p className="mt-2 text-lg text-slate-600 max-w-xl mx-auto">
        We're building a future-ready team for modern cybersecurity and cloud innovation.
      </p>

      <motion.button
        whileHover={{ scale: 1.03 }}
        className="mt-6 inline-flex items-center px-6 py-2 rounded-md bg-sky-600 text-white text-lg font-medium hover:bg-sky-700"
      >
        View Open Roles
      </motion.button>
    </div>
  );
}



/* ----------------------------- Final CTA ----------------------------- */

function FinalCTA() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6 relative">
        {/* Decorative background blobs */}
        <div
          aria-hidden={true}
          className="pointer-events-none absolute inset-x-0 top-0 -translate-y-1/3 -z-10 flex justify-center"
          style={{ height: 260 }}
        >
          <div
            className="w-full max-w-3xl rounded-3xl blur-3xl opacity-20"
            style={{
              height: 260,
              background:
                "radial-gradient(400px 120px at 20% 20%, rgba(14,165,233,0.08), transparent 15%), radial-gradient(420px 120px at 80% 80%, rgba(59,130,246,0.06), transparent 18%)",
            }}
          />
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="rounded-xl border border-white/10 p-10 text-center bg-gradient-to-b from-slate-900/80 to-slate-900/95 shadow-xl backdrop-blur-md"
            role="region"
            aria-labelledby="enterprise-cta-title"
          >
            <h2 id="enterprise-cta-title" className="text-2xl font-semibold">
              Ready to strengthen your enterprise security?
            </h2>

            <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto">
              Partner with MSPL to design and deploy a comprehensive Zero Trust
              security architecture — built for scale, observability and
              compliance.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <a
                href="/contact"
                role="button"
                aria-label="Book consultation"
                className="inline-flex items-center gap-3 px-6 py-2 rounded-md bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-sm font-medium shadow-md transform-gpu transition duration-200 hover:scale-[1.02] focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-400/30"
              >
                <ShieldCheck className="h-4 w-4" />
                Book Consultation
              </a>

              <a
                href="/platform"
                role="button"
                aria-label="Explore secure access platform"
                className="inline-flex items-center gap-3 px-6 py-2 rounded-md border border-white/20 text-sm font-medium hover:bg-white/6 transition focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-700/40"
              >
                Explore Secure Access Platform
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Trust list + badges */}
            <div className="mt-6 flex justify-center gap-6 text-xs text-slate-300 flex-wrap items-center">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-sky-400" />
                <span>Engineering-first approach</span>
              </div>

              <div className="hidden sm:block h-0.5 w-px bg-white/8 mx-2" aria-hidden={true} />

              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-sky-400" />
                <span>Compliance-ready solutions</span>
              </div>

              <div className="hidden sm:block h-0.5 w-px bg-white/8 mx-2" aria-hidden={true} />

              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-sky-400" />
                <span>Proven track record</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}




/* ----------------------------- Small icons (same as your original file) ----------------------------- */
function IconWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-none">
      {/* small gradient ring around a white circular icon for a premium look */}
      <div className="rounded-full p-[1.5px] bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600">
        <div className="rounded-full bg-white p-2 shadow-sm">
          {children}
        </div>
      </div>
    </div>
  );
}





function DotIcon() {
  return (
    <IconWrapper>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </IconWrapper>
  );
}



function LockIcon() {
  return (
    <IconWrapper>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="11" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 11V8a5 5 0 0110 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </IconWrapper>
  );
}


function getBg(accent = "sky") {
  const map: Record<string, string> = {
    sky: "#0ea5e9",
    teal: "#14b8a6",
    purple: "#8b5cf6",
    amber: "#f59e0b",
    emerald: "#10b981",
    rose: "#f43f5e",
  };
  return map[accent] ?? "#0ea5e9";
}
