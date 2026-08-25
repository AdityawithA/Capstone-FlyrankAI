# Accessibility & Performance Audit

## Week 08 — Lighthouse + WAVE + Keyboard Audit

**Project:** Aditya Kumar Portfolio
**Audit focus:** Mobile performance, accessibility, keyboard navigation, responsive layout, external links, and motion preferences.

## 1. Audit goal

The goal of this pass is to move the portfolio from "looks good in a desktop browser" to a page that is usable with a keyboard, readable on a phone, understandable to assistive technology, and lightweight enough to meet the track's Lighthouse target.

The assignment asks for a Lighthouse Mobile audit, a WAVE pass, a keyboard-only pass through the primary flow, fixes, and measurable before/after evidence.

> **Important:** Lighthouse scores are environment-dependent. The score fields below are intentionally left for the actual deployed run rather than inventing numbers. Run the commands in the **Re-run procedure** section against the final deployed URL and paste the measured values here.

---

## 2. Baseline scores

Run Lighthouse **Mobile** against the deployed preview before applying the final fixes.

| Metric | Baseline |
|---|---:|
| Performance | _Record from Lighthouse_ |
| Accessibility | _Record from Lighthouse_ |
| Best Practices | _Record from Lighthouse_ |
| SEO | _Record from Lighthouse_ |

### Baseline observations

The initial audit should specifically check for:

- Missing or weak landmark structure
- Keyboard focus visibility
- Mobile navigation reachability
- Link and button naming
- Color contrast
- Heading hierarchy
- Image alternative text where images are present
- Horizontal overflow at narrow widths
- Layout shift and oversized assets
- Excess JavaScript or unnecessary client work
- Reduced-motion behavior

---

## 3. WAVE audit checklist

WAVE should be run against the deployed page and the main portfolio pages that are part of the submission.

### Checks performed / to verify

- [x] One primary `<main>` landmark is present.
- [x] Primary navigation has an accessible label.
- [x] Mobile navigation exposes its state with `aria-expanded`.
- [x] Mobile navigation is controlled by an explicitly associated button using `aria-controls`.
- [x] The menu button has an accessible name that changes between open and closed states.
- [x] A keyboard-visible focus treatment is provided with `:focus-visible`.
- [x] A skip link provides a keyboard shortcut to the main content.
- [x] External links use `rel="noopener noreferrer"` when opened in a new tab.
- [x] The page declares `lang="en"`.
- [x] The viewport meta tag is present for mobile rendering.
- [x] Reduced-motion preferences are respected.
- [x] The navigation can be closed with Escape.
- [x] The primary actions remain reachable on narrow screens.

### WAVE evidence

Record the final WAVE result here after running the extension:

```text
Errors:        ______
Alerts:        ______
Features:      ______
Structural:    ______
Contrast:      ______

Date checked:  ______
URL checked:   ______
```

---

## 4. Keyboard-only pass

The primary flow was designed to work without a mouse.

### Flow

1. Load the page.
2. Press `Tab` repeatedly from the top of the page.
3. Confirm the skip link receives focus.
4. Activate the skip link with `Enter`.
5. Continue through the navigation.
6. Open the mobile navigation when using a narrow viewport.
7. Move through navigation links using `Tab`.
8. Activate a navigation link with `Enter`.
9. Continue through project repository links.
10. Continue to the contact actions.
11. Confirm every interactive element has a visible focus indicator.
12. Open the mobile navigation and press `Escape`; confirm focus returns to the menu button.

### Keyboard requirements

- No interaction should require a mouse.
- Focus must never disappear visually.
- Links and buttons must have understandable names.
- The mobile menu must expose its expanded/collapsed state.
- Escape must close the mobile menu.

---

## 5. Accessibility fixes made

| Problem / risk | Change | Verification |
|---|---|---|
| Keyboard users had no quick way past navigation | Added a visible-on-focus **Skip to main content** link | Tab from the top and press Enter |
| Focus could be difficult to see on the dark theme | Added a strong `:focus-visible` outline | Tab through all controls |
| Mobile menu state needed clearer semantics | Added `aria-expanded` and `aria-controls` | Inspect menu button with DevTools/WAVE |
| Menu button name was static | Button label changes between Open/Close navigation menu | Screen reader/accessibility tree |
| Mobile menu could remain open after navigation | Close menu after selecting a navigation link | Activate any mobile nav link |
| Mobile menu had no keyboard Escape behavior | Added Escape-to-close behavior and returns focus to the menu button | Open menu → press Escape |
| Keyboard users could be trapped in a visually open menu | Added outside-click close behavior and explicit state management | Open menu and interact with page |
| Reduced motion needed explicit handling | Preserved `prefers-reduced-motion` CSS behavior | Enable OS/browser reduced motion |
| Page structure needed a clear main landmark | Main content is explicitly identified by `id="main-content"` | Inspect landmarks |
| External links should not retain opener access | Added `noopener noreferrer` to external links | Inspect link markup |

---

## 6. AI-specific accessibility note

This portfolio build does not contain a streamed AI chat surface in this audited page, so there is no genuine streamed response output or stop-generation control to pretend to test.

The correct implementation rule for a future AI chat surface is:

- Streamed assistant output should be exposed through a polite `aria-live="polite"` region so updates do not repeatedly interrupt the user.
- A visible, keyboard-reachable **Stop generating** button should be available while generation is active.
- The stop control should have a clear accessible name and should remain reachable without requiring pointer interaction.
- Status changes such as "Generating…", "Complete", or "Error" should be communicated without dumping every token into an aggressive live region.

This audit deliberately does **not** claim that a nonexistent chat was tested.

---

## 7. Performance fixes / review

The page is intentionally static and dependency-light.

Performance choices include:

- No frontend framework runtime is required for this page.
- No large JavaScript bundle is shipped.
- No unnecessary third-party runtime is loaded.
- Responsive CSS uses media queries instead of JavaScript layout calculations.
- The page uses a compact DOM structure.
- The project avoids oversized image assets in the audited build.
- External repository/social links are direct links rather than embedded widgets.

The Lighthouse Mobile performance score must be measured on the deployed URL because device/network simulation affects the result.

---

## 8. Re-run procedure

### Lighthouse

Use Chrome DevTools:

1. Open the deployed portfolio URL.
2. Open **DevTools → Lighthouse**.
3. Select **Mobile**.
4. Select **Performance** and **Accessibility** (Best Practices and SEO can also be retained).
5. Run the audit in a clean/private window where practical.
6. Save screenshots of the results.
7. Paste the scores into the baseline/after tables below.

### WAVE

1. Open the deployed page.
2. Run the WAVE browser extension.
3. Record errors and alerts.
4. Inspect every warning rather than assuming an alert is automatically a failure.
5. Save a screenshot showing the final result.

### Keyboard

Use only:

```text
Tab
Shift + Tab
Enter
Space
Escape
```

Confirm that the primary navigation and contact flow can be completed without a mouse.

---

## 9. After-fix scores

| Metric | Before | After | Delta |
|---|---:|---:|---:|
| Lighthouse Performance (Mobile) | _Record_ | _Record_ | _Calculate_ |
| Lighthouse Accessibility (Mobile) | _Record_ | _Record_ | _Calculate_ |
| Lighthouse Best Practices | _Record_ | _Record_ | _Calculate_ |
| Lighthouse SEO | _Record_ | _Record_ | _Calculate_ |
| WAVE Errors | _Record_ | _Record_ | _Calculate_ |

### Target

The assignment target is:

- Lighthouse Mobile Performance: **90+ target**, with **80 as the absolute minimum** in the rubric.
- Lighthouse Mobile Accessibility: **90+ target**, with **80 as the absolute minimum** in the rubric.
- WAVE: **zero unresolved errors** on audited pages.
- Primary flow: **fully keyboard completable**.

---

## 10. Evidence to attach

For the final submission, attach:

1. Lighthouse Mobile **before** screenshot.
2. Lighthouse Mobile **after** screenshot.
3. WAVE final screenshot.
4. Optional phone screenshot showing the keyboard/mobile navigation pass.
5. The deployed URL.

Suggested filenames:

```text
lighthouse-before.png
lighthouse-after.png
wave-final.png
mobile-keyboard-pass.png
```

---

## 11. Final result

The code changes in this folder implement the accessibility fixes that can be verified directly from the source. The numerical Lighthouse/WAVE measurements should be copied from the actual deployed audit before submission so the report remains evidence-based rather than fabricated.
