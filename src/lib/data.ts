export const siteConfig = {
  name: "Arjun Suthar",
  role: "Software Engineer",
  headline: "Full Stack Developer & AI Product Engineer",
  summary:
    "Building production SaaS, AI, and e-commerce systems with React, Next.js, Node.js, PostgreSQL, Redis, and modern AI technologies.",
  location: "Jodhpur, Rajasthan, India",
  email: "arjunsuthariit@gmail.com",
  github: "https://github.com/arjunsutharr",
  linkedin: "https://linkedin.com/in/arjunsutharr",
  twitter: "https://x.com/arjunsutharr",
} as const;

export const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "4", label: "Production Platforms" },
  { value: "1200+", label: "Production Commits" },
] as const;

export const experience = {
  company: "Bizspice Pvt. Ltd.",
  product: "Siddhify",
  productUrl: "https://siddhify.com",
  role: "Software Engineer",
  period: "2023 – Present",
  description:
    "Enterprise productivity SaaS with 20+ modules — collaboration, AI assistant, video conferencing, analytics, and invoicing.",
  contributions: [
    "Built and launched the team communication platform, enabling real-time messaging, channels, threaded conversations, and video meetings across the product",
    "Designed an AI-powered assistant that lets users manage tasks, goals, and projects through natural language — improving user productivity and engagement",
    "Developed error monitoring infrastructure that reduced alert noise by ~85%, helping the team focus on actionable issues",
    "Automated 20+ recurring business processes — report generation, scoring, streak tracking, and email workflows — eliminating hours of manual operations",
    "Contributed 1,294 commits across frontend and backend, consistently shipping coordinated full-stack releases",
  ],
} as const;

export const projects = [
  {
    title: "WhatsApp AI Agent",
    badge: "AI · Production",
    description:
      "AI-powered customer support system that automates inquiries, appointment booking, and business communication over WhatsApp — reducing manual support workload for a wellness business.",
    challenges: [
      "Circuit breaker resilience with auto-recovery",
      "Knowledge-grounded RAG to prevent hallucinations",
      "Anti-ban engineering for reliable delivery",
      "Natural language booking with Google Calendar",
    ],
    impact:
      "24/7 automated support serving real customers with intelligent human escalation",
    technologies: [
      "Gemini AI",
      "RAG",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    link: "https://github.com/arjunsutharr/whatsapp-ai-agent-case-study",
  },
  {
    title: "Aurae Cosmos",
    badge: "E-Commerce · Production",
    description:
      "Luxury fragrance & skincare e-commerce platform with storefront, admin CMS, inventory management, dual payment processing, shipping integration, and transactional email workflows.",
    challenges: [
      "30+ model database with polymorphic architecture",
      "Dual payment gateway (Razorpay + PhonePe)",
      "Stock reservation preventing checkout race conditions",
      "Full order lifecycle with event sourcing",
    ],
    impact:
      "Complete business operation — client manages everything without developer help",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Razorpay",
      "Vercel",
    ],
    link: "https://auraecosmos.com",
  },
  {
    title: "Spanda Wellness",
    badge: "SaaS · Mobile · Production",
    description:
      "Cross-platform yoga studio management system with web app, native mobile app, attendance tracking with streak rewards, subscription lifecycle management, and competitive leaderboards.",
    challenges: [
      "Cross-platform monorepo (Next.js + React Native)",
      "Streak algorithms with milestone rewards",
      "Automated subscription lifecycle",
      "Shared code between web and mobile",
    ],
    impact:
      "Unified platform managing the entire studio — web and mobile seamlessly",
    technologies: [
      "Next.js",
      "React Native",
      "Expo",
      "Prisma",
      "PostgreSQL",
      "Turborepo",
    ],
    link: "https://spandawellness.com",
  },
] as const;

export const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Prisma ORM",
      "REST APIs",
      "Socket.IO",
      "BullMQ",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "Redis"],
  },
  {
    category: "AI",
    items: ["OpenAI GPT-4", "Google Gemini", "LangChain", "RAG"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Docker", "Vercel", "Fly.io", "AWS", "Turborepo", "PM2"],
  },
] as const;

export const highlights = [
  {
    title: "Production AI Systems",
    description:
      "Built AI pipelines with circuit breakers, RAG, confidence gating, and human escalation — not ChatGPT wrappers.",
  },
  {
    title: "Real-Time Applications",
    description:
      "Slack-like messaging, WebRTC video meetings, live presence tracking, and optimistic UI with rollback.",
  },
  {
    title: "System Design",
    description:
      "Monorepo architectures, modular AI gateways, service registries, and graceful shutdown patterns.",
  },
  {
    title: "Database Architecture",
    description:
      "30+ model schemas with polymorphic extensions, event sourcing, stock reservations, and strategic indexing.",
  },
  {
    title: "Automation & Infra",
    description:
      "20+ cron jobs, error monitoring with deduplication, distributed mutex locks, and email alert systems.",
  },
  {
    title: "Payments & Commerce",
    description:
      "Multi-gateway integration (Stripe, Razorpay, PhonePe), webhook handling, refund tracking, and shipping APIs.",
  },
] as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;
