import { FadeIn } from "./fade-in";

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-[var(--max-width-content)] px-6">
        <FadeIn>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            About
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            I design, build, and ship
            <br />
            <span className="text-text-muted">production software.</span>
          </h2>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2">
          <FadeIn delay={0.2}>
            <p className="text-base leading-relaxed text-text-secondary">
              I&apos;m a self-taught software engineer who cares about building
              products that solve real problems. Over the past 3 years, I&apos;ve
              architected and shipped production platforms from empty repos to
              live users — handling everything from database schema design to
              deployment infrastructure.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-base leading-relaxed text-text-secondary">
              I enjoy working at the intersection of product and engineering —
              where technical decisions directly impact user outcomes. Whether
              it&apos;s designing an AI pipeline that handles real customer
              conversations or building a communication platform used daily by
              teams, I focus on shipping systems that work reliably at scale.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
