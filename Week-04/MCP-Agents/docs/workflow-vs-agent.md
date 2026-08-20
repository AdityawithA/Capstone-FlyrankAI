# Workflow vs Agent

## FL-04 Classification

**FL-04 is a workflow.**

Its stages and handoffs are predefined:

```text
Gather → Synthesize → Draft → Review + Format
```

The system does not independently choose a new plan or decide which external capability to use.

## Concrete Agent Upgrade

Turn the pipeline into an MCP-enabled research agent. Give it a goal such as:

> Produce this week's AI and web-development industry brief.

The agent could decide which sources it needs, choose an available MCP tool, inspect results, decide whether another lookup is necessary, then draft and verify the report.

The important upgrade is a goal-driven decision loop rather than simply adding a connector.
