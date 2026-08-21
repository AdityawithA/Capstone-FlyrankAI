# FL-08 — Dynamic Portfolio Feature

A small Week 08 portfolio exercise demonstrating **one real dynamic feature**: a working contact form.

## Feature

**Contact form — exactly one dynamic feature**

The form collects a name, email address, and message and submits the data to **Netlify Forms**.

### Stack
- HTML5
- CSS3
- Vanilla JavaScript
- Netlify Forms
- Netlify free hosting tier

## Project structure

```text
FL-08-Dynamic-Portfolio-Feature/
├── index.html
├── styles.css
├── script.js
├── EXPLAINER.md
└── README.md
```

## Run locally

```bash
python -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

The form's real Netlify processing is intended for the deployed Netlify site.

## Deploy

Deploy this folder as a static site on Netlify. Because the form contains:

```html
data-netlify="true"
```

and:

```html
<input type="hidden" name="form-name" value="contact" />
```

Netlify can detect and process the form after deployment.

After deployment:

1. Open the public HTTPS URL.
2. Submit a real test message.
3. Open the Netlify dashboard.
4. Go to the site's **Forms** area.
5. Confirm that the test submission arrived.

## Assignment evidence

Keep a screenshot showing:
- the live portfolio/contact form;
- the successful submission message;
- the corresponding submission in Netlify Forms.

See `EXPLAINER.md` for the required plain-words explanation of backend, feature behavior, and data flow.

## Important

This project intentionally contains **one** dynamic feature only, matching the assignment requirement. It does not pretend that a local static server is a backend. The real submission handling happens after deployment on Netlify.
