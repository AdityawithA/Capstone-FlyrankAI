import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "FlyRank Foundations",
  description: "Next.js foundations and deployment assignment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070a12]/75 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
            <Link href="/" className="font-semibold tracking-tight">
              <span className="text-white">FlyRank</span>
              <span className="text-indigo-300"> Foundations</span>
            </Link>

            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Link href="/" className="rounded-full px-4 py-2 hover:bg-white/10">
                Home
              </Link>
              <Link href="/health" className="rounded-full px-4 py-2 hover:bg-white/10">
                Health
              </Link>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="mx-auto max-w-6xl border-t border-white/10 px-5 py-8 text-sm text-slate-500">
          Next.js Foundations • FlyRank AI Internship
        </footer>
      </body>
    </html>
  );
}
