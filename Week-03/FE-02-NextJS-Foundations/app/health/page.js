async function getHealthData() {
  const response = await fetch(
    "https://api.github.com/repos/vercel/next.js",
    {
      headers: {
        Accept: "application/vnd.github+json",
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Health data request failed.");
  }

  return response.json();
}

export default async function HealthPage() {
  let data;

  try {
    data = await getHealthData();
  } catch {
    data = null;
  }

  return (
    <section className="mx-auto max-w-4xl px-5 py-20 sm:py-28">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-300">
        Server data check
      </p>

      <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Health Check
      </h1>

      <p className="mt-5 max-w-2xl leading-8 text-slate-400">
        This page performs a server-side fetch and renders the returned data.
        It is intentionally simple so deployment failures are easy to diagnose.
      </p>

      <div className="glass mt-10 rounded-3xl p-6 sm:p-8">
        {data ? (
          <>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm text-slate-400">Status</p>
                <p className="mt-1 text-2xl font-semibold text-emerald-300">Healthy</p>
              </div>

              <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-200">
                Data fetched successfully
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-500">Repository</p>
                <p className="mt-2 font-semibold text-white">{data.full_name}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-500">Stars</p>
                <p className="mt-2 font-semibold text-white">{data.stargazers_count.toLocaleString()}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-500">Open Issues</p>
                <p className="mt-2 font-semibold text-white">{data.open_issues_count.toLocaleString()}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-500">Default Branch</p>
                <p className="mt-2 font-semibold text-white">{data.default_branch}</p>
              </div>
            </div>
          </>
        ) : (
          <div>
            <p className="text-lg font-semibold text-rose-300">Degraded</p>
            <p className="mt-2 text-slate-400">
              The external health-data request could not be completed.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
