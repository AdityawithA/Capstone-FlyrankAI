import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditya AI — Portfolio Career Agent",
  description:
    "A tool-using AI career agent that reviews Aditya Kumar's portfolio against a target software role.",
  applicationName: "Aditya AI Agent",
  authors: [{ name: "Aditya Kumar" }],
  creator: "Aditya Kumar",
  keywords: [
    "Aditya Kumar",
    "AI agent",
    "portfolio review",
    "career agent",
    "Next.js",
    "Groq"
  ],
  openGraph: {
    title: "Aditya AI — Portfolio Career Agent",
    description:
      "Compare a software role with Aditya Kumar's portfolio using a server-side tool-using AI agent.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya AI — Portfolio Career Agent",
    description:
      "A practical AI agent for evidence-based portfolio and career review."
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070b16"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
