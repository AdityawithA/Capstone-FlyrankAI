# Week 08 — Make It Do Something: Plain-Words Explainer

## What is a backend?

A backend is the part of a website that works behind the screen. The user sees the form and presses **Send**, but something still has to receive the information, process it, and store or deliver it.

For this assignment, I used **Netlify Forms** as the backend-style service instead of building a separate server. Netlify detects the form because it has `data-netlify="true"` and the `form-name` field. When the deployed site receives a POST request, Netlify processes the submission for the site.

## What does my feature do?

I chose exactly one dynamic feature: a **contact form**.

The form collects:
- Name
- Email
- Message

The user fills it out and presses **Send message**. JavaScript prevents a full-page refresh, sends the form data to the deployed Netlify site, and shows a success or error message.

## How does the data flow?

The flow is:

**User → HTML form → JavaScript → POST request → Netlify Forms → submission**

1. The user enters their name, email, and message.
2. The browser validates the required fields.
3. `script.js` listens for the submit event.
4. JavaScript creates a `FormData` object containing the entered values.
5. The data is converted to URL-encoded form data.
6. A POST request is sent to `/`.
7. Netlify receives the request and recognizes the form using `form-name="contact"`.
8. If the request succeeds, the UI displays a success message and clears the form.
9. If it fails, the UI displays an error message so the user knows the submission did not complete.

## Why this counts as a real dynamic feature

The page is static HTML/CSS/JavaScript, but the contact submission is not just a fake button. On a Netlify deployment, the form submission reaches Netlify's form handling service and can be viewed in the site's form submissions area.

For the assignment, the important evidence is a real test submission from the live deployed URL.

## Free-tier deployment

Deploy the contents of this folder to a Netlify site. Netlify provides the hosting and HTTPS URL, while its Forms feature handles the form submission without requiring me to maintain a separate backend server.

After deployment, submit a test message from the public URL and verify that the submission appears in the Netlify dashboard.

## What I understand

The important lesson is that the browser is not the whole application. A frontend can collect information, but a real feature needs a destination for that information. In this project, Netlify provides that destination and handles the server-side form processing.

The frontend is responsible for collecting and sending the data and communicating the result to the user. Netlify is responsible for receiving and processing the form submission.

This is the complete data flow I need to understand and be able to explain.
