import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

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
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
