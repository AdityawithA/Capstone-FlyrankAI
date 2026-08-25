# Aditya Kumar — Accessibility & Performance Audit

**FlyRank AI • Accessibility, Lighthouse, WAVE & Keyboard Audit**

This folder contains the post-audit version of Aditya Kumar's portfolio used for the accessibility and performance hardening assignment.

## What this assignment covers

The audit focuses on four practical areas:

- **Mobile Lighthouse:** performance and accessibility targets
- **WAVE:** semantic/accessibility error review
- **Keyboard-only navigation:** completing the primary portfolio flow without a mouse
- **Accessibility hardening:** landmarks, labels, focus states, contrast, responsive layout, reduced motion, and mobile navigation

## Key fixes in this version

- Added a **Skip to main content** link.
- Added a strong, keyboard-visible `:focus-visible` state.
- Added explicit navigation semantics with `aria-label`, `aria-expanded`, and `aria-controls`.
- Added a dynamic accessible name to the mobile menu button.
- Added Escape-to-close behavior for the mobile menu.
- Returns focus to the menu button when Escape closes the menu.
- Closes the mobile menu after navigation.
- Preserves responsive layouts for narrow phone widths.
- Preserves reduced-motion support.
- Uses `noopener noreferrer` for external links opened in new tabs.
- Keeps the page static and dependency-light for better mobile performance.

## Important honesty note

Lighthouse and WAVE scores depend on the actual deployed environment, browser version, device simulation, network conditions, and the exact URL being audited. Therefore, `AUDIT.md` intentionally contains fields for the **real before/after measurements** instead of invented scores.

The source-level accessibility fixes are already implemented. Run the final deployed URL through Lighthouse Mobile and WAVE, then paste the evidence into `AUDIT.md`.

## Files

```text
Week-08-Accessibility-Audit/
├── index.html       # Portfolio page and semantic structure
├── style.css        # Responsive layout, focus states, contrast and motion rules
├── script.js        # Accessible mobile navigation behavior
├── AUDIT.md         # Before/after audit report and evidence checklist
├── FIX-LOG.md       # Human-readable list of fixes
├── README.md        # Project and assignment documentation
└── .gitignore       # Deployment/repository exclusions
```

## Accessibility behavior

### Skip link

Keyboard users can press `Tab` from the top of the document and use the skip link to jump directly to the main content.

### Focus visibility

Interactive elements receive a visible focus ring using `:focus-visible`. This preserves keyboard feedback without adding distracting outlines to every pointer interaction.

### Mobile navigation

The navigation button exposes its state to assistive technology through `aria-expanded` and `aria-controls`. The menu can be opened with the keyboard and closed with `Escape`.

### Reduced motion

The page respects `prefers-reduced-motion: reduce` so users who request less motion are not forced into smooth scrolling behavior.

## Running locally

This is a static website. The simplest option is VS Code Live Server, or any local HTTP server.

For example:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Final audit workflow

1. Deploy the project.
2. Run Lighthouse using the **Mobile** preset.
3. Record Performance and Accessibility scores.
4. Run WAVE on the deployed page.
5. Complete the keyboard-only pass.
6. Capture before/after evidence.
7. Update `AUDIT.md` with the real measurements.
8. Submit the deployed URL and `AUDIT.md`.

## Links

- Portfolio: https://aditya-kumar-flyrankai.netlify.app/
- GitHub: https://github.com/AdityawithA
- LinkedIn: https://www.linkedin.com/in/aditya-kumar-892099293/

## Author

**Aditya Kumar** — Computer Science & Design student, Full-Stack Developer and aspiring AI Engineer.
