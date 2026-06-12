"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { projects } from "@/lib/data";
import { FadeIn } from "./fade-in";

const accentGradients = [
  "from-blue-500/20 to-cyan-500/20",
  "from-violet-500/20 to-pink-500/20",
  "from-emerald-500/20 to-teal-500/20",
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <FadeIn delay={index * 0.12}>
      <motion.a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="glow-card group flex h-full flex-col overflow-hidden p-0 block"
      >
        {/* Gradient accent bar */}
        <div
          className={`h-1 w-full bg-gradient-to-r ${accentGradients[index]} opacity-60 transition-opacity group-hover:opacity-100`}
        />

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          {/* Badge & arrow */}
          <div className="mb-5 flex items-center justify-between">
            <span className="rounded-full bg-accent/10 px-3 py-1 text-[11px] font-medium tracking-wide text-accent">
              {project.badge}
            </span>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg text-text-muted transition-all group-hover:bg-accent/10 group-hover:text-accent">
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </div>

          {/* Title */}
          <h3 className="mb-3 text-lg font-semibold text-text-primary">
            {project.title}
          </h3>

          {/* Description */}
          <p className="mb-5 text-sm leading-relaxed text-text-secondary">
            {project.description}
          </p>

          {/* Challenges */}
          <div className="mb-5">
            <p className="mb-2.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-text-muted">
              <Sparkles size={11} />
              Challenges Solved
            </p>
            <ul className="space-y-1.5">
              {project.challenges.map((c, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-text-secondary">
                  <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent/50" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Impact */}
          <div className="mb-6 rounded-xl border border-accent/10 bg-accent/[0.03] px-4 py-3">
            <p className="text-sm leading-relaxed text-accent/90">
              ✦ {project.impact}
            </p>
          </div>

          {/* Tech stack */}
          <div className="mt-auto flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-bg-elevated/50 px-2 py-1 text-[11px] text-text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.a>
    </FadeIn>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-[var(--max-width-content)] px-6">
        <FadeIn>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            Projects
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Built & shipped independently
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="mb-12 max-w-xl text-base leading-relaxed text-text-muted">
            Production systems I designed and deployed as sole engineer — from
            architecture to deployment.
          </p>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
