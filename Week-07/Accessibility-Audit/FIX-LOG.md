# Week 08 — Accessibility & Performance Fix Log

## Purpose

This log records the practical fixes made during the Week 07 mobile-first portfolio audit.

| Area | Before / Problem | Fix | Result |
|---|---|---|---|
| Mobile navigation | Navigation can become crowded on narrow screens | Added a compact menu toggle below 800px | Links remain reachable on phones |
| Typography | Large hero text can overflow small screens | Added responsive `clamp()` sizing and a 430px breakpoint | Heading scales without horizontal overflow |
| Project layout | Two-column project cards can become cramped | Changed project grid to one column below 800px | Cards remain readable |
| Buttons | Side-by-side actions can become too narrow | Stacked actions below 430px | Larger touch targets |
| Contact section | Dense desktop layout is unsuitable for phones | Contact card switches to block layout | Easier scanning and tapping |
| Navigation accessibility | Menu state was not communicated to assistive technology | Added `aria-expanded` and `aria-controls` | Clearer interaction state |
| Motion | Reduced-motion preference was not explicitly handled | Added `prefers-reduced-motion` media rule | Motion is reduced without removing functionality |
| External links | External project/social links should not keep the opener page exposed | Added `noopener noreferrer` | Safer external navigation |
| Readability | Muted text needs enough separation from dark background | Adjusted text colors and spacing | Better visual hierarchy |

## Mobile checks

- Checked the layout logic at narrow viewport widths.
- Added a dedicated 430px breakpoint for very small phones.
- Ensured primary actions remain full-width and easy to tap.
- Ensured project cards do not create horizontal overflow.
- Ensured the navigation can be opened and closed without relying on desktop hover behavior.

## Accessibility checks

- Semantic sections and headings are used.
- Navigation has an accessible label.
- The mobile menu exposes its open/closed state with `aria-expanded`.
- The menu button has an accessible screen-reader label.
- Focusable links remain visible and usable.
- Reduced-motion preferences are respected.

## Link audit

The following important links are included and should be manually tested after deployment:

- GitHub: https://github.com/AdityawithA
- LinkedIn: https://www.linkedin.com/in/aditya-kumar-892099293/
- Email: mailto:adityakumar2655@gmail.com
- InterviewAce AI repository
- CampusSync repository
- SMS Spam Detection repository
- Breast Cancer Detection repository

## Before / after evidence

Take a screenshot on a real phone before and after the audit and attach it to the Week 08 submission. The code in this folder represents the post-audit version.
