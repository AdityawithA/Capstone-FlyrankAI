import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditya AI — Week 05 Tool Calling",
  description: "Streaming AI tool calling with generative UI.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
