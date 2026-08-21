import portfolio from "@/data/portfolio.json";

export const portfolioTool = {
  type: "function" as const,
  function: {
    name: "get_portfolio",
    description:
      "Read Aditya Kumar's current portfolio profile, skills, projects, education and experience. Use this tool whenever the user asks for evidence about Aditya or wants a role-fit review.",
    parameters: {
      type: "object",
      properties: {},
      additionalProperties: false
    }
  }
};

export function executeTool(name: string) {
  if (name === "get_portfolio") {
    return JSON.stringify(portfolio);
  }
  throw new Error(`Unknown tool: ${name}`);
}