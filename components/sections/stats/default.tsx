"use client";

import React, { useEffect, useState } from "react";
import { Section } from "../../ui/section"; // Ensure this exists
import { motion } from "framer-motion";

interface StatItemProps {
  label?: string;
  value: number | string;
  suffix?: string;
  description?: string;
}

interface StatsProps {
  items?: StatItemProps[] | false;
  className?: string;
}

// lightweight count-up hook
function useCount(target: number, duration = 1100) {
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    let raf = 0;
    let start: number | null = null;
    const startVal = 0;
    const diff = target - startVal;
    if (!Number.isFinite(target)) {
      setValue(target);
      return;
    }
    function step(ts: number) {
      if (!start) start = ts;
      const elapsed = ts - start;
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setValue(
        Number(
          (startVal + diff * eased).toFixed(
            Math.abs(diff) < 1 && Math.abs(diff) !== 0 ? 2 : 0
          )
        )
      );
      if (t < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return value;
}

// Separate component to properly use the hook
function StatItem({
  item,
  index,
}: {
  item: StatItemProps;
  index: number;
}) {
  const isNumber =
    typeof item.value === "number" && !Number.isNaN(item.value);
  const animated = isNumber
    ? useCount(Number(item.value), 1200 + index * 120)
    : null;

  const formatNumber = (n: number) => {
    const decimals = n % 1 !== 0 ? 2 : 0;
    return n.toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  };

  return (
    <motion.div
      className="flex flex-col items-start gap-3 text-left"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 8 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      role="listitem"
      aria-label={item.label ?? `stat-${index}`}
    >
      {item.label && (
        <div className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wide">
          {item.label}
        </div>
      )}

      <div className="flex items-baseline gap-3">
        <div
          className="stat-value bg-clip-text text-transparent font-semibold leading-none"
          style={{
            backgroundImage: "linear-gradient(90deg,#0ea5e9,#3b82f6)",
          }}
        >
          <span className="text-3xl sm:text-4xl md:text-5xl">
            {isNumber
              ? formatNumber(Number(animated ?? item.value))
              : item.value}
          </span>
        </div>

        {item.suffix && (
          <div className="text-sky-600 dark:text-sky-400 font-semibold text-lg sm:text-xl">
            {item.suffix}
          </div>
        )}
      </div>

      {item.description && (
        <div className="text-slate-500 dark:text-slate-400 text-sm">
          {item.description}
        </div>
      )}
    </motion.div>
  );
}

export default function Stats({
  items = [
    {
      label: "Enterprise clients",
      value: 320,
      description: "Global enterprises across finance, healthcare & retail",
    },
    {
      label: "Projects delivered",
      value: 1250,
      description: "End-to-end cloud, security and infra projects",
    },
    {
      label: "Average SLA uptime",
      value: 99.99,
      suffix: "%",
      description: "Weighted uptime across managed services",
    },
    {
      label: "R&D engineers",
      value: 180,
      suffix: "+",
      description: "Security, backend, data and SRE engineers",
    },
  ],
  className,
}: StatsProps) {
  return (
    <Section className={className}>
      <div className="container mx-auto max-w-[980px] px-4">
        {items !== false && items.length > 0 && (
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-10 md:gap-14 items-start"
            role="list"
            aria-label="Company statistics"
          >
            {items.map((item, index) => (
              <StatItem key={index} item={item} index={index} />
            ))}
          </div>
        )}
      </div>

      <style>{`
        .stat-value {
          -webkit-background-clip: text;
          background-clip: text;
        }
        .stat-value span {
          text-shadow: 0 6px 20px rgba(59,130,246,0.08);
        }
        @media (prefers-reduced-motion: reduce) {
          .stat-value, .container, .grid {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </Section>
  );
}
