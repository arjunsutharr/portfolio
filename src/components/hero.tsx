"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { siteConfig, stats } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden">
      {/* Grid background */}
      <div className="grid-bg" />

      {/* Gradient orbs */}
      <div className="hero-glow -top-40 -left-40 h-[500px] w-[500px] bg-blue-500" />
      <div className="hero-glow -right-20 top-1/3 h-[400px] w-[400px] bg-violet-500" />
      <div className="hero-glow bottom-0 left-1/3 h-[300px] w-[300px] bg-cyan-500 opacity-[0.06]" />

      <div className="relative z-10 mx-auto w-full max-w-[var(--max-width-content)] px-6 pt-28 pb-20">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-card/60 px-4 py-1.5 text-xs font-medium text-text-secondary backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-5 max-w-4xl text-[2.75rem] font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl"
        >
          <span className="gradient-text">{siteConfig.name}</span>
        </motion.h1>

        {/* Headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-4 text-lg font-medium text-text-secondary sm:text-xl"
        >
          {siteConfig.headline}
        </motion.p>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12 max-w-xl text-base leading-relaxed text-text-muted"
        >
          {siteConfig.summary}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20 flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25 active:scale-[0.98]"
          >
            View Projects
            <ArrowDown size={15} className="transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-bg-card/60 px-6 py-3 text-sm font-medium text-text-primary backdrop-blur-sm transition-all hover:border-text-muted/40 hover:bg-bg-card-hover active:scale-[0.98]"
          >
            <Mail size={15} />
            Get in touch
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap gap-10 sm:gap-16"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="group">
              <div className="stat-value text-3xl font-bold sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="scroll-indicator flex flex-col items-center gap-1 text-text-muted">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ArrowDown size={14} />
        </div>
      </motion.div>
    </section>
  );
}
