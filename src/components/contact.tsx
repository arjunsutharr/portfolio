import { Mail, ExternalLink, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { FadeIn } from "./fade-in";

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socials = [
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    Icon: Mail,
    display: siteConfig.email,
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    Icon: LinkedinIcon,
    display: "linkedin.com/in/arjunsutharr",
  },
  {
    label: "GitHub",
    href: siteConfig.github,
    Icon: GithubIcon,
    display: "github.com/arjunsutharr",
  },
  {
    label: "Twitter / X",
    href: siteConfig.twitter,
    Icon: XIcon,
    display: "@arjunsutharr",
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-[var(--max-width-content)] px-6">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
              Contact
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Let&apos;s build something impactful
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mb-12 text-base leading-relaxed text-text-muted">
              Interested in working together? I&apos;m always open to
              discussing product ideas, engineering challenges, or new
              opportunities.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="grid gap-3 sm:grid-cols-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.label === "Email" ? undefined : "_blank"}
                  rel={s.label === "Email" ? undefined : "noopener noreferrer"}
                  className="glow-card group flex items-center gap-4 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-bg-elevated text-text-muted transition-colors group-hover:bg-accent/10 group-hover:text-accent">
                    <s.Icon size={17} />
                  </div>
                  <div className="min-w-0 text-left">
                    <p className="text-[11px] uppercase tracking-wider text-text-muted">
                      {s.label}
                    </p>
                    <p className="truncate text-sm font-medium text-text-secondary transition-colors group-hover:text-text-primary">
                      {s.display}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="ml-auto shrink-0 text-text-muted opacity-0 transition-all group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
