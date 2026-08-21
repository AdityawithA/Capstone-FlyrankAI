import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditya AI — Failure Hardening",
  description: "Week 05 checkpoint: reliable AI interaction"
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