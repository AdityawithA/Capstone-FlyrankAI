# Week 10 — Launch Your Flag

This is the launch-hygiene package for Aditya Kumar's portfolio.

## Assignment goals

1. Point a custom domain at the portfolio, or use a clean free subdomain if budget is zero.
2. Add free analytics and confirm HTTPS on the final address.
3. Verify the social-share preview, favicon, page title, and mobile presentation.
4. Install the official FlyRank graduate badge in the footer and link it to the supplied verification page.

## Included

```text
Week-10-Launch-Hygiene/
├── index.html
├── style.css
├── script.js
├── analytics.js
├── favicon.svg
├── robots.txt
├── sitemap.xml
└── README.md
```

## Current portfolio URL

https://aditya-kumar-flyrankai.netlify.app/

## Analytics

The project contains a safe Google Analytics 4 integration.

Open `index.html` and replace:

```js
window.GA_MEASUREMENT_ID = "G-XXXXXXXXXX";
```

with the real GA4 Measurement ID from the Analytics property.

Then deploy again and verify that a visit appears in the GA4 realtime report.

No private API key belongs in this file.

## Custom domain

The assignment requires a custom domain if possible.

Recommended flow:

1. Buy a personal domain from a registrar.
2. Add the domain in the hosting provider's domain settings.
3. Follow the DNS records provided by the host.
4. Wait for DNS propagation.
5. Confirm the final URL opens over HTTPS.
6. Update the canonical URL, Open Graph URL, sitemap, and robots file to the final address.

If a custom domain is not available, the current Netlify subdomain can be used as the clean free fallback.

## Launch hygiene checklist

- [ ] Final URL opens over HTTPS.
- [ ] Mobile layout checked on a real phone.
- [ ] Page title is correct.
- [ ] Meta description is correct.
- [ ] Favicon appears in the browser tab.
- [ ] Social-share preview is checked on the real address.
- [ ] Analytics is installed and receiving visits.
- [ ] All important links work.
- [ ] Official FlyRank graduate badge asset is added.
- [ ] Official FlyRank verification URL is connected to the badge.
- [ ] Final screenshot evidence is captured.

## Important badge note

The official FlyRank graduate badge and its verification URL are supplied after the capstone is approved. This package includes a clearly marked footer placeholder so the official asset is not fabricated.

When the official asset and verification URL are supplied, replace the placeholder in `index.html`. Do not claim an unofficial graphic is the official badge.

## Links

- Portfolio: https://aditya-kumar-flyrankai.netlify.app/
- GitHub: https://github.com/AdityawithA
- LinkedIn: https://www.linkedin.com/in/aditya-kumar-892099293/
