import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arjun Suthar — Software Engineer",
  description:
    "Full Stack Developer & AI Product Engineer with 3 years of experience building production SaaS, AI, and e-commerce systems. React, Next.js, Node.js, PostgreSQL, Redis.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "Next.js Developer",
    "AI Engineer",
    "Product Engineer",
    "React Developer",
    "Node.js Developer",
    "Arjun Suthar",
  ],
  authors: [{ name: "Arjun Suthar" }],
  creator: "Arjun Suthar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arjunsutharr.dev",
    title: "Arjun Suthar — Software Engineer",
    description:
      "Full Stack Developer & AI Product Engineer building production SaaS, AI, and e-commerce systems.",
    siteName: "Arjun Suthar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arjun Suthar — Software Engineer",
    description:
      "Full Stack Developer & AI Product Engineer building production SaaS, AI, and e-commerce systems.",
    creator: "@arjunsutharr",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans noise-bg antialiased">{children}</body>
    </html>
  );
}
