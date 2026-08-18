import Link from "next/link";

const screens = [
  {
    title: "Home",
    description: "Root route with the project overview and navigation.",
    href: "/",
  },
  {
    title: "Health Check",
    description: "Server-rendered route that fetches and displays live repository data.",
    href: "/health",
  },
];

export default function HomePage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-indigo-300">
          Phase 3 • Foundations
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Ship the foundation on day one.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          A production-ready Next.js foundation with App Router, Tailwind CSS,
          routed screens, server-side data fetching, and deployment-ready configuration.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/health"
            className="rounded-full bg-indigo-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-indigo-300"
          >
            Open health check
          </Link>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noreferrer"
            className="glass rounded-full px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Next.js docs
          </a>
        </div>
      </div>

      <div className="mt-16 grid gap-5 sm:grid-cols-2">
        {screens.map((screen) => (
          <Link
            key={screen.title}
            href={screen.href}
            className="glass rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-300/30"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
              Routed screen
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">{screen.title}</h2>
            <p className="mt-3 leading-7 text-slate-400">{screen.description}</p>
          </Link>
        ))}
      </div>

      <div className="glass mt-5 rounded-3xl p-6">
        <h2 className="text-xl font-semibold text-white">Stack</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Next.js 16", "App Router", "Server Components", "Tailwind CSS", "Vercel-ready"].map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
