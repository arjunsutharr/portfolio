import { Briefcase, ExternalLink } from "lucide-react";
import { experience } from "@/lib/data";
import { FadeIn } from "./fade-in";

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="mx-auto max-w-[var(--max-width-content)] px-6">
        <FadeIn>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            Experience
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Where I&apos;ve worked
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="glow-card overflow-hidden">
            {/* Accent top bar */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {experience.role}
                    </h3>
                    <p className="mt-0.5 flex items-center gap-1.5 text-sm text-text-secondary">
                      {experience.company} ·{" "}
                      <a
                        href={experience.productUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-accent transition-colors hover:text-accent-hover"
                      >
                        {experience.product}
                        <ExternalLink size={12} />
                      </a>
                    </p>
                  </div>
                </div>
                <span className="shrink-0 rounded-full border border-border bg-bg-elevated/50 px-3 py-1 text-xs font-medium text-text-muted">
                  {experience.period}
                </span>
              </div>

              {/* Description */}
              <p className="mb-6 text-sm leading-relaxed text-text-muted">
                {experience.description}
              </p>

              {/* Contributions */}
              <ul className="space-y-3">
                {experience.contributions.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm leading-relaxed text-text-secondary"
                  >
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
