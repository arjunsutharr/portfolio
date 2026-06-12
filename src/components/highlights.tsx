import {
  Brain,
  Radio,
  Server,
  Database,
  Cog,
  CreditCard,
} from "lucide-react";
import { highlights } from "@/lib/data";
import { FadeIn } from "./fade-in";

const icons = [Brain, Radio, Server, Database, Cog, CreditCard];

export function Highlights() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-[var(--max-width-content)] px-6">
        <FadeIn>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            Strengths
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Engineering highlights
          </h2>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, i) => {
            const Icon = icons[i];
            return (
              <FadeIn key={item.title} delay={i * 0.06}>
                <div className="glow-card group p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/8 text-accent/70 transition-colors group-hover:bg-accent/15 group-hover:text-accent">
                    <Icon size={19} />
                  </div>
                  <h3 className="mb-2 text-sm font-semibold tracking-tight text-text-primary">
                    {item.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-text-muted">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
