import { tool } from "ai";
import { z } from "zod";
import { projects } from "@/lib/portfolio";

export const analyzeProject = tool({
  description:
    "Analyze one of Aditya's portfolio projects and return structured project data for a visual Project Analysis Card. Use this whenever the user asks to analyze, score, evaluate, or review a specific project.",
  inputSchema: z.object({
    project: z
      .string()
      .min(2)
      .describe(
        "The portfolio project name, such as InterviewAce AI, CampusSync, TypeRush, SMS Spam Detection, or Breast Cancer Detection."
      ),
    simulateFailure: z
      .boolean()
      .optional()
      .default(false)
      .describe(
        "Set true only when the user explicitly asks to demonstrate the tool error state."
      ),
  }),
  execute: async ({ project, simulateFailure }) => {
    await new Promise((resolve) => setTimeout(resolve, 900));

    if (simulateFailure) {
      throw new Error("Demo failure requested by the user.");
    }

    const normalized = project.trim().toLowerCase();
    const match = Object.entries(projects).find(
      ([name]) => name.toLowerCase() === normalized
    );

    if (!match) {
      throw new Error(
        `No portfolio project named "${project}" was found in the project catalog.`
      );
    }

    const [, data] = match;

    return {
      ...data,
      analyzedAt: new Date().toISOString(),
    };
  },
});

export const tools = {
  analyzeProject,
};
