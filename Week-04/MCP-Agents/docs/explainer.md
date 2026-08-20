# Agents, Workflows, and MCP

A workflow is a predefined sequence of steps. The developer decides the order, the handoffs, and the purpose of each stage. My FL-04 weekly industry brief is an example: Gather sources, Synthesize findings, Draft the brief, and Review and Format it. Each stage has a defined purpose and output, so the process is predictable.

An agent is different because it has more autonomy over how it reaches a goal. Instead of always following one fixed sequence, an agent can reason about the current task, choose an appropriate action or tool, inspect the result, and decide what to do next. The important distinction is not simply that an agent uses AI. The distinction is that the system can make decisions about the process needed to accomplish its goal.

My FL-04 pipeline is therefore a **workflow**, not an agent. Its order and handoffs are designed before execution. It can generate a useful report, but it does not independently choose tools, create new research steps, or adapt its plan based on intermediate results.

## What MCP Is

MCP stands for **Model Context Protocol**. It provides a standard way for AI applications to connect models with external capabilities and context.

Three important MCP primitives are **tools, resources, and prompts**.

**Tools** are actions an AI application can call. A tool can perform an operation outside the model itself, such as querying a service, reading information, or carrying out another supported action.

**Resources** provide contextual information to an AI application. They can expose information from an external system so the model can use that information as context.

**Prompts** are reusable prompt templates or instructions exposed through an MCP server. They help standardize how a capability is used.

MCP is useful because an AI application can discover and use capabilities exposed by an MCP server instead of having every external integration hard-coded into the model.

## MCP and My Workflow

My original FL-04 workflow is limited to the information and capabilities available inside its predefined process. An MCP connection can give it access to external tools or resources.

For example, an MCP connection could allow an AI application to read a local file, query a live service, retrieve structured external information, or perform another action exposed by a tool. This is different from simply asking a chatbot to answer from the information already available in the conversation.

## Turning FL-04 Into an Agent

The next step would be to replace the completely fixed sequence with a goal-driven controller.

Instead of always doing:

**Gather → Synthesize → Draft → Review**

the system could receive the goal:

> Produce this week's AI and web-development industry brief using reliable current sources.

It could then decide which sources or tools are needed, determine whether more information is required, compare sources, perform another lookup when necessary, and decide when the research is sufficient. It could then draft the report, run a review, and decide whether the final result is ready.

A concrete agent upgrade for FL-04 would therefore be an **MCP-enabled research agent** that can choose between source-search, document-reading, and verification tools instead of always following the same fixed four stages.

## Human Oversight

MCP and agent behavior do not remove the need for human review. External tools can return incomplete, outdated, conflicting, or incorrectly interpreted information. A human should still verify important claims, dates, numbers, source quality, and final conclusions before publishing.

## Conclusion

A workflow is primarily a designed process, while an agent is goal-directed and has greater autonomy over the process it uses. MCP does not automatically turn a workflow into an agent. Instead, MCP provides a standard interface through which an AI application can access tools, resources, and prompts.

For my FL-04 pipeline, the next step toward agent behavior is to introduce a goal-driven decision layer and connect it to useful external tools through MCP. That would allow the system to decide what information it needs, select appropriate tools, inspect results, and adapt its next action instead of simply executing a fixed sequence.
