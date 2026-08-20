import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ask Aditya | Personal AI Assistant",
  description:
    "A streaming AI assistant for Aditya Kumar's portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}