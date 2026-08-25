# Accessibility & Performance Audit

## Source-level accessibility decisions

- One descriptive page heading (`h1`).
- Form textarea has an explicit accessible label.
- Helper text is linked with `aria-describedby`.
- Validation/network failures use `role="alert"`.
- Loading state uses `role="status"` and `aria-busy`.
- Interactive controls have visible `:focus-visible` outlines.
- Keyboard interaction does not depend on hover.
- `prefers-reduced-motion: reduce` disables non-essential animation.
- Layout adapts below 900px and 600px.
- Essential information is text, not color-only.
- Buttons have readable names.

## Required production audit

Run Lighthouse in Chrome DevTools against the deployed URL:

- Mobile
- Desktop

Target: **90+ where practical; capstone minimum is 85.**

Run axe DevTools or WAVE and confirm **zero WCAG AA violations**.

Record results here:

| Audit | Before | After | Evidence |
|---|---:|---:|---|
| Lighthouse Performance | ☐ | ☐ | Add screenshot/link |
| Lighthouse Accessibility | ☐ | ☐ | Add screenshot/link |
| Lighthouse Best Practices | ☐ | ☐ | Add screenshot/link |
| Lighthouse SEO | ☐ | ☐ | Add screenshot/link |
| axe/WAVE violations | ☐ | ☐ | Add screenshot/link |

## Concrete improvement to document

During the audit, identify one actual issue and fix it. Examples:
- Improve focus visibility.
- Fix a contrast ratio.
- Add a missing accessible name.
- Reduce layout shift.
- Reduce unnecessary client-side work.

Do not claim a score that has not been measured.
