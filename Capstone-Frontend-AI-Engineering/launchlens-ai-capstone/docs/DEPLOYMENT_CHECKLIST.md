# Deployment Checklist

Project: **LaunchLens AI**

| Check | Status | Evidence / Notes |
|---|---|---|
| Repository pushed to GitHub | ☐ | Add repository URL |
| Production environment created | ☐ | Vercel / chosen host |
| `GEMINI_API_KEY` configured server-side | ☐ | Never expose in client |
| `GEMINI_MODEL` reviewed | ☐ | Optional |
| Production build passes | ☐ | `npm run build` |
| Tests pass | ☐ | `npm test` |
| Production URL loads | ☐ | Add URL |
| Main AI flow works | ☐ | Submit an idea and verify structured output |
| Validation state works | ☐ | Try <20 characters |
| Error state works | ☐ | Temporarily simulate failed request |
| Mobile layout checked | ☐ | Browser responsive mode |
| Keyboard navigation checked | ☐ | Tab through controls |
| Lighthouse mobile ≥85 | ☐ | Add final score |
| Lighthouse desktop ≥85 | ☐ | Add final score |
| axe/WAVE audit has no WCAG AA violations | ☐ | Add final result |
| Audit-driven improvement recorded | ☐ | See ACCESSIBILITY_AUDIT.md |
| Rollback plan reviewed | ☐ | Redeploy previous known-good deployment |
| README reviewed by another person | ☐ | Optional but recommended |

## Smoke test

1. Load the production URL in a private browser window.
2. Confirm the page renders without console errors.
3. Click each example chip.
4. Submit an example.
5. Confirm loading state appears.
6. Confirm the brief contains all six decision areas.
7. Refresh the page.
8. Test the mobile viewport.
9. Tab through the page without a mouse.
10. Submit a very short idea and confirm a clear validation error.
11. If possible, temporarily test the API failure path in a preview deployment.

## Rollback

The deployment is stateless, so rollback is intentionally simple:

1. Identify the last known-good deployment in the hosting dashboard.
2. Promote/redeploy that deployment.
3. Verify the production smoke test above.
4. Inspect server logs for the failed deployment.
5. Fix on a branch, run `npm test`, `npm run typecheck`, and `npm run build`.
6. Deploy a new preview before production.
