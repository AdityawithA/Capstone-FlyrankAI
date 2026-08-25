# Week 09 — Break Your Own Site

## Purpose

This document records the hardening work performed for Week 09.

The assignment focuses on deliberately trying to break the site rather than only testing the happy path. The goal is to identify edge cases, improve basic findability and speed, separate **fix-now** issues from **known limitations**, and document the changes honestly.

---

## 1. Break-Test Plan

### Empty input

**Test:** Interact with the site without entering any form data.

**Expected behavior:** The current hardened portfolio does not depend on a submission form. Contact is handled through direct email and professional-profile links, so there is no empty form submission path to fail.

**Status:** PASS / no form submission path.

### Garbage input

**Test:** Attempt unusual text in any interactive field.

**Expected behavior:** No arbitrary user input is executed as HTML or JavaScript because the portfolio contains no user-generated content renderer.

**Status:** PASS / no user-input rendering surface.

### Rapid repeated interaction

**Test:** Click the mobile navigation toggle repeatedly.

**Expected behavior:** The menu should remain in a valid open/closed state and `aria-expanded` should stay synchronized.

**Status:** PASS.

### Keyboard-only navigation

**Test:** Use Tab, Shift+Tab, Enter/Space, and Escape without a mouse.

**Expected behavior:** All navigation controls and links are reachable and visible focus is maintained.

**Status:** PASS.

### External links

**Test:** Open GitHub, LinkedIn, live demo, and repository links.

**Expected behavior:** Links should resolve to their intended destinations. External links opened in a new tab use `rel="noopener noreferrer"`.

**Status:** Verify live URLs before final submission.

### Small mobile viewport

**Test:** Open the page on a narrow phone-sized viewport.

**Expected behavior:** Navigation collapses, content becomes single-column, text remains readable, and horizontal overflow is avoided.

**Status:** PASS in responsive CSS; verify on a real device.

### Reduced motion

**Test:** Enable `prefers-reduced-motion: reduce`.

**Expected behavior:** Smooth scrolling and CSS motion are reduced.

**Status:** PASS.

---

## 2. SEO / Findability

The page now includes:

- A descriptive `<title>`
- A meaningful meta description
- Author metadata
- `robots` metadata
- Canonical URL
- Open Graph title
- Open Graph description
- Open Graph URL
- Open Graph site name
- Twitter card metadata
- Semantic headings
- A single primary `<main>` landmark
- Descriptive page content

The canonical URL currently points to:

`https://aditya-kumar-flyrankai.netlify.app/`

If the site is moved to another production URL, the canonical and social metadata should be updated.

---

## 3. Performance / Speed Check

A real speed score must be recorded from the deployed URL rather than invented in source code.

### Baseline

| Metric | Before | After |
|---|---:|---:|
| Lighthouse Mobile Performance | Run audit | Run audit |
| Lighthouse Mobile Accessibility | Run audit | Run audit |
| Lighthouse Mobile Best Practices | Run audit | Run audit |
| Lighthouse Mobile SEO | Run audit | Run audit |

### Recommended checks

1. Open the deployed URL in Chrome.
2. Open DevTools → Lighthouse.
3. Select **Mobile**.
4. Run Performance + Accessibility + Best Practices + SEO.
5. Save a screenshot of the baseline/final result.
6. If a metric is weak, record the cause and change in this document.

No score is claimed here until the real deployed page is audited.

---

## 4. Fix-Now vs Known Limitations

### Fix-now

- Mobile navigation must remain usable at narrow widths.
- Focus states must remain visible.
- Navigation must be keyboard reachable.
- External links must use safe `rel` attributes when opened in a new tab.
- Basic metadata must be present.
- The layout must not intentionally create horizontal overflow.
- The page must remain readable without JavaScript for the core content.

### Known limitations

- The social preview image is not included yet. Open Graph title/description metadata is present, but a custom `og:image` should be added if a dedicated preview image is available.
- Search-engine indexing is not instantaneous; adding metadata does not guarantee immediate search visibility.
- Lighthouse scores vary by device, network, browser version, and deployment conditions.
- A real-device mobile test should still be performed before final submission.
- Third-party destination availability is outside the portfolio's control.

---

## 5. Hardening Changes

### Navigation

The mobile navigation has:

- `aria-expanded`
- `aria-controls`
- Escape-to-close behavior
- Outside-click closing
- Visible focus styles
- A semantic `<nav>` landmark

### Accessibility

The page includes:

- Skip link
- Semantic landmarks
- Proper heading hierarchy
- Keyboard-visible focus
- Accessible button naming
- Reduced-motion support
- Descriptive link text

### SEO

The page includes the basic metadata needed for a professional portfolio:

- Title
- Description
- Canonical URL
- Open Graph metadata
- Twitter card metadata

### Security

External links that open in a new tab use:

`rel="noopener noreferrer"`

This prevents the newly opened page from receiving an unnecessary `window.opener` reference.

---

## 6. Final Review

Before submission:

- [ ] Test on a real phone.
- [ ] Test keyboard-only navigation.
- [ ] Click every visible link.
- [ ] Test the deployed URL in a private/incognito window.
- [ ] Run Lighthouse Mobile.
- [ ] Run WAVE on the deployed page.
- [ ] Record actual before/after scores.
- [ ] Capture evidence screenshots.
- [ ] Update this report with measured results.
- [ ] Submit the hardening review.

---

## Honest conclusion

The purpose of this assignment is not to claim that a site is perfect. The useful outcome is a documented list of what was tested, what was fixed, and what remains outside the project's current scope.

The remaining checks that require a real deployed environment—especially Lighthouse, WAVE, real-device testing, and external-link verification—should be completed before the final submission.
