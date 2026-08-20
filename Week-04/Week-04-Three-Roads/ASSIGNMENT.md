# Three Roads — AI Stack Decision

## 1. My Four Constraints

### Constraint 1 — Free Only

The portfolio must be built and deployed using free tools and services. I do not want the project to depend on paid hosting or infrastructure.

The stack should work with free hosting options such as Netlify, Vercel, or GitHub Pages.

### Constraint 2 — My Honest Skill Level

My strongest area is full-stack web development, with practical experience in HTML, CSS, JavaScript, Python, Java, React, Flask, MySQL, SQLite, REST APIs, Git/GitHub, Netlify, Render, and AI/LLM API integration.

I also have experience building AI and machine-learning projects.

I am comfortable building and deploying web applications, but I do not want to choose a technology simply because it is more advanced. I want to choose something I can understand, maintain, debug, and extend myself.

### Constraint 3 — What My Portfolio Needs to Do

My portfolio needs to clearly communicate who I am and demonstrate my actual work.

**Sitemap**

- Home
  - Hero
  - Selected Projects
  - Skills
  - About
  - Contact CTA
- Projects
  - InterviewAce AI
  - CampusSync
  - TypeRush
  - SMS Spam Detection
  - Breast Cancer Detection
  - Dezinova
- About
  - Introduction
  - Education
  - Skills
  - Experience / Interests
- Contact
  - Email
  - GitHub
  - LinkedIn
  - Contact CTA

The main action I want visitors to take is:

> Invite me for an interview

The portfolio does not need a complex backend yet. The main goal is to present my skills and projects clearly and professionally.

### Constraint 4 — How My Work Must Be Displayed

My portfolio needs to showcase real proof of my work, not generic placeholders.

Projects should include real screenshots, live demo links where available, GitHub repository links, project descriptions, technologies used, important features, and relevant outcomes.

For example, InterviewAce AI should be presented using screenshots and links to the actual project rather than AI-generated images representing an imaginary application.

The portfolio should be primarily a visual showcase of my actual work.

**Dynamic functionality is not required yet.** The portfolio can initially be a frontend-focused project, with backend or AI functionality added later if there is a real need.

---

## 2. Three Stack Options

### Option 1 — HTML + CSS + JavaScript

**How I would build it:** HTML, CSS, and JavaScript, with JavaScript handling navigation, animations, filtering, and other interactions.

**Hosting:** Netlify or GitHub Pages.

**Backend:** Not required.

**Advantages**
- Very simple
- Free to host
- Fast
- Easy to understand
- Easy to deploy
- Very little configuration
- No framework dependencies

**Trade-offs**

As the portfolio grows, maintaining reusable components becomes harder. Adding many interactive sections can also make the JavaScript structure more difficult to manage. It would not demonstrate my React skills as strongly.

**Verdict:** Simple and reliable, but not the best match for the direction I want my portfolio to communicate.

---

### Option 2 — React + Vite + TypeScript

**How I would build it:** React, TypeScript, Vite, and CSS.

The interface could be divided into reusable components such as Navbar, Hero, ProjectCard, Projects, Skills, About, Contact, and Footer.

Each project could use the same reusable project-card structure while displaying its own screenshots, links, technologies, and description.

**Hosting:** Netlify or Vercel.

**Backend:** Not required yet. A backend can be introduced later for contact form processing, database storage, authentication, server-side APIs, or AI functionality.

**Advantages**
- Component-based architecture
- Easier to maintain as the portfolio grows
- Matches my current web-development skills
- Good developer experience
- Easy to add interactions and animations
- Good for presenting multiple projects
- Easy to integrate APIs later
- Free deployment options
- Stronger demonstration of frontend/full-stack skills

**Trade-offs**

React introduces more complexity than plain HTML, CSS, and JavaScript. There are also dependencies and project configuration to maintain. However, these are technologies I am already comfortable working with.

**Verdict:** Best balance between simplicity, maintainability, flexibility, and demonstrating my actual skills.

---

### Option 3 — Next.js + TypeScript

**How I would build it:** Next.js, React, and TypeScript.

It could provide static generation, server-side rendering, dynamic pages, API routes, SEO features, and server-side functionality.

**Hosting:** Vercel would be a natural hosting option.

**Backend:** Not required initially. Next.js could provide backend/API functionality later if needed.

**Advantages**
- Very powerful
- Excellent performance possibilities
- Strong SEO capabilities
- Frontend and backend capabilities in one framework
- Easy to create dynamic project pages
- Easy to add AI functionality later
- Strong modern web-development signal

**Trade-offs**

It is more complex than what my current portfolio requires. I would have to maintain additional framework concepts such as server/client boundaries, Next.js routing, server-side functionality, framework-specific conventions, and more deployment considerations.

**Verdict:** Powerful, but currently more than I need.

---

## 3. Pressure-Test the Front-Runner

### What breaks if I choose the simplest option?

If I choose HTML, CSS, and JavaScript, the portfolio will still work. The problem is maintainability as the project grows.

More projects, reusable sections, animations, filtering, and future AI features could make the code harder to organize.

It also would not demonstrate my React skills as effectively.

### What do I have to maintain if I choose the most powerful option?

With Next.js, I would have much more functionality available, but I would also have more framework complexity.

I would be maintaining functionality that I do not currently need. I do not need a complete frontend/backend framework simply to display Projects, Skills, About, and Contact.

The extra power could slow down development rather than help it.

### Can I finish my chosen stack in two weeks?

Yes.

React + Vite + TypeScript is within my current skill level.

I can spend the majority of the two weeks on visual quality, responsive design, accessibility, project presentation, real screenshots, live demos, GitHub links, content, and AI integration where useful rather than spending most of the time learning a new architecture.

### Does the chosen stack show my work well?

Yes.

React allows me to build reusable project components while keeping the portfolio organized.

Each project can clearly show:
- Project screenshot
- Project description
- Technology stack
- Key features
- GitHub repository
- Live demo

This means the technology supports the work instead of competing with it.

---

## 4. Final Decision

### Chosen Stack: React + Vite + TypeScript

After considering all three options, I would choose React + Vite + TypeScript.

I considered:
1. HTML + CSS + JavaScript
2. React + Vite + TypeScript
3. Next.js + TypeScript

I did not choose plain HTML/CSS/JavaScript because, although it is the simplest option, it would become less convenient to maintain as the portfolio grows and would not demonstrate my current React skills as effectively.

I did not choose Next.js because it provides more functionality than the current portfolio requires. I do not need a complete frontend/backend framework just to showcase my projects.

React + Vite + TypeScript gives me the best balance between capability and complexity.

It is:
- Free to deploy
- Within my current skill level
- Easy to maintain
- Component-based
- Flexible
- Suitable for real project screenshots and demos
- Easy to extend with APIs and AI later
- Suitable for a professional portfolio

Most importantly, I can maintain this stack myself.

## Final Rationale

> I chose React + Vite + TypeScript because it gives me enough power to present my real work professionally without adding infrastructure I do not currently need. It matches my current skill level, can be deployed for free, and gives me a maintainable foundation that I can extend later with dynamic and AI features.

The two alternatives were useful to consider: plain HTML/CSS/JavaScript would be simpler but less scalable for my planned portfolio, while Next.js would be more powerful but currently more complex than necessary.

My priority is to build something I can finish, maintain, and use to show my actual work well rather than choosing the most complicated technology available.
