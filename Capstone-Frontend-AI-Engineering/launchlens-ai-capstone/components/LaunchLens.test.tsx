import React from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LaunchLens from "./LaunchLens";

describe("LaunchLens", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renders an accessible idea form", () => {
    render(<LaunchLens />);
    expect(screen.getByRole("heading", { name: /turn a rough idea/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/describe your product idea/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /build my brief/i })).toBeDisabled();
  });

  it("loads an example into the textarea", async () => {
    const user = userEvent.setup();
    render(<LaunchLens />);
    await user.click(screen.getByRole("button", { name: /study planner/i }));
    expect(screen.getByRole("textbox")).toHaveValue(
      "A study planner that turns a student's syllabus and exam dates into a realistic weekly plan."
    );
  });

  it("shows structured AI output after a successful request", async () => {
    const user = userEvent.setup();
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        demoMode: false,
        brief: {
          title: "StudyFlow",
          summary: "A planning tool for students.",
          targetUsers: ["Students"],
          problem: "Students struggle to turn syllabi into weekly plans.",
          mvp: ["Import syllabus", "Generate weekly plan"],
          acceptanceCriteria: ["Plan can be edited", "Dates are visible"],
          risks: ["Plans may be unrealistic"],
          nextStep: "Test with five students."
        }
      })
    }));

    render(<LaunchLens />);
    await user.type(screen.getByRole("textbox"), "A study planner for students with busy exam schedules.");
    await user.click(screen.getByRole("button", { name: /build my brief/i }));

    expect(await screen.findByRole("heading", { name: "StudyFlow" })).toBeInTheDocument();
    expect(screen.getByText("Test with five students.")).toBeInTheDocument();
  });

  it("shows a useful error when the request fails", async () => {
    const user = userEvent.setup();
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("Network unavailable")));

    render(<LaunchLens />);
    await user.type(screen.getByRole("textbox"), "A useful product idea that is long enough for validation.");
    await user.click(screen.getByRole("button", { name: /build my brief/i }));

    expect(await screen.findByRole("alert")).toHaveTextContent("Network unavailable");
  });
});
