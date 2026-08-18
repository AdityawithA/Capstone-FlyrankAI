# FlyRank Next.js Foundations

A deployment-ready Next.js foundation created for the FlyRank AI internship assignment.

## Requirements covered

- Next.js App Router
- Server Components by default
- Tailwind CSS
- Responsive root layout and navigation
- Routed Home and Health Check screens
- Server-side fetched data on `/health`
- Git/Vercel-ready project structure
- No secrets committed to the repository

## Routes

| Route | Purpose |
|---|---|
| `/` | Project landing page |
| `/health` | Fetches live GitHub repository data and renders it |

## Local setup

Requires Node.js 20.9+.

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Production build

```bash
npm run build
npm start
```

## Deployment

The project is configured for Git-connected Vercel deployment.

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Keep the default Next.js build settings.
4. Deploy.
5. Confirm `/` and `/health` on the preview URL.

No environment variables are required for this starter.

## Health check

`/health` uses a server-side `fetch()` request to GitHub's public API and renders repository data. This demonstrates actual data fetching rather than hard-coded health text.

## Project structure

```text
app/
├── health/
│   └── page.js
├── globals.css
├── layout.js
└── page.js

next.config.mjs
postcss.config.mjs
package.json
```

## Author

Aditya Kumar
