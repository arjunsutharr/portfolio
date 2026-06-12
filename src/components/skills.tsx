import { skills } from "@/lib/data";
import { FadeIn } from "./fade-in";

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-[var(--max-width-content)] px-6">
        <FadeIn>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            Skills
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Technologies I work with
          </h2>
        </FadeIn>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.08}>
              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-text-muted">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-border bg-bg-card px-3 py-1.5 text-[13px] text-text-secondary transition-all hover:border-accent/30 hover:text-text-primary hover:shadow-sm hover:shadow-accent/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
