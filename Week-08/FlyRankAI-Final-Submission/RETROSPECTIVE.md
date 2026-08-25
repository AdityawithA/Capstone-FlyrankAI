# FlyRank AI — Final Retrospective

## Written for the person I was in Week 1

When I started the FlyRank AI track, my main goal was to become more confident at building and shipping software with AI as a development partner. I already understood that generating code was not the difficult part. The harder skill was knowing what to build, checking whether it actually worked, understanding the infrastructure around it, and being able to explain the decisions afterward.

The biggest change during the track was moving from thinking mainly about individual features to thinking about the complete lifecycle of a product. I worked through portfolio infrastructure, deployment, DNS concepts, interactive UI, testing, accessibility, hardening, production deployment, and finally an AI agent. Each stage added another layer of responsibility.

One important shift was learning to treat deployment and infrastructure as part of development rather than as an afterthought. Getting a project onto a public HTTPS URL forced me to understand hosting, environment variables, DNS, production configuration, and the difference between local behavior and deployed behavior.

Another major change was becoming more deliberate about verification. A feature that looks correct in the browser is not necessarily finished. The track pushed me to test edge cases, inspect browser errors, run builds, check accessibility, and fix problems discovered during real testing. That mindset became especially important for the AI agent because a successful UI request does not automatically mean the server-side model call, tool execution, environment configuration, and production deployment are all correct.

The final AI agent also changed how I think about AI-assisted development. Instead of treating an LLM as a magic answer generator, I used it as a development and reasoning partner while keeping verification on my side. When something failed, I inspected the actual error, changed the implementation, ran it again, and only then considered the issue resolved. That process was more valuable than simply receiving a working-looking code sample.

If I continued the project, I would improve the evaluation and observability layer first. I would add a larger set of repeatable evaluation cases, track response quality and failure modes, and make the production system easier to monitor. I would also spend more time improving the agent's portfolio-grounding behavior and documenting measurable evaluation results rather than relying mainly on qualitative impressions.

The three most transferable lessons I am taking forward are:

1. **Ship the complete loop.** A feature is not finished when the code compiles; it is finished when the real user flow works in the environment where people will use it.
2. **Verify AI-generated work.** AI can accelerate implementation dramatically, but understanding, testing, debugging, and security review remain engineering responsibilities.
3. **Make limitations visible.** Honest documentation of what works, what does not, and what I would improve next makes a project more credible and easier for another engineer to evaluate.

The most valuable outcome of the track is therefore not one particular project. It is a stronger development process: plan, build, test, deploy, inspect, document, and improve.
