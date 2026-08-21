# Week 07 — Open It on Your Phone

Responsive portfolio audit and polish exercise for the FlyRank AI Fluency track.

## What this assignment does

The goal of Week 07 is not to redesign a portfolio for the sake of visual decoration. It is to make an existing portfolio feel trustworthy when somebody opens it on a real phone.

This version focuses on:

- Mobile-first layout behavior
- Responsive typography
- Readability and spacing
- Touch-friendly buttons
- Responsive project cards
- Mobile navigation
- Accessibility basics
- Reduced-motion support
- Working GitHub, LinkedIn, email, and project links
- A short, honest fix log

## Files

| File | Purpose |
|---|---|
| `index.html` | Main portfolio page and semantic structure |
| `style.css` | Responsive styling, layout, typography, breakpoints, accessibility states |
| `script.js` | Mobile navigation behavior and footer year |
| `FIX-LOG.md` | Week 07 audit notes and before/after fix log |

## Responsive strategy

The page is designed desktop-first in terms of the visual system but uses explicit responsive breakpoints to make the content work on phones.

At widths below 800px:

- Two-column layouts become one column.
- Project cards stack vertically.
- The desktop navigation becomes a compact menu.
- The contact card becomes a vertical layout.

At widths below 430px:

- Hero typography becomes smaller.
- Action buttons become full width.
- Statistics stack vertically.
- The page keeps comfortable side padding.

## Accessibility

The portfolio uses semantic HTML, labelled navigation, keyboard-accessible controls, visible interactive elements, and `aria-expanded` on the mobile navigation button.

The stylesheet also respects:

```css
@media (prefers-reduced-motion: reduce)
```

so users who request reduced motion still receive the same information and functionality without unnecessary animation.

## Important links

- Portfolio: https://aditya-kumar-flyrankai.netlify.app/
- GitHub: https://github.com/AdityawithA
- LinkedIn: https://www.linkedin.com/in/aditya-kumar-892099293/
- Email: adityakumar2655@gmail.com

## Deployment

This is a static site and can be deployed on Netlify, GitHub Pages, Cloudflare Pages, or another static hosting provider.

For Netlify:

1. Create or select a site.
2. Connect the repository or deploy the project folder.
3. Use the folder containing `index.html` as the publish directory.
4. Wait for the deployment to finish.
5. Open the public URL on a real phone.
6. Test navigation, buttons, project links, and text wrapping.

## Week 07 submission evidence

The assignment asks for:

1. Updated live URL.
2. A short fix log describing what was broken and what was changed.
3. Ideally, a before/after phone screenshot.

The `FIX-LOG.md` file is included for the second deliverable.

## Final checklist

- [ ] Open the deployed site on a real phone.
- [ ] Check every navigation link.
- [ ] Check every project repository link.
- [ ] Check LinkedIn.
- [ ] Check email.
- [ ] Check that no content causes horizontal scrolling.
- [ ] Check heading and body text readability.
- [ ] Check buttons are easy to tap.
- [ ] Check the mobile menu opens and closes.
- [ ] Check the desktop version after mobile fixes.
- [ ] Record any additional real problems in `FIX-LOG.md`.
- [ ] Capture before/after phone evidence.
