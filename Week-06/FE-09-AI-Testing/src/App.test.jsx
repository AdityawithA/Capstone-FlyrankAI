import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import App from "./App";

describe("AI testing lab", () => {
  test("renders the initial assistant message", () => {
    render(<App />);
    expect(screen.getByRole("status", { name: /idle/i })).toBeInTheDocument();
    expect(screen.getByText(/Ask me about Aditya's projects/i)).toBeInTheDocument();
  });

  test("shows a pending skeleton before the mocked response", async () => {
    vi.useFakeTimers();
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(<App />);
    await user.click(screen.getByRole("button", { name: /Run mocked AI/i }));
    expect(screen.getByRole("status", { name: /AI response pending/i })).toBeInTheDocument();
    vi.useRealTimers();
  });

  test("shows streaming content after the pending state", async () => {
    vi.useFakeTimers();
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(<App />);
    await user.click(screen.getByRole("button", { name: /Run mocked AI/i }));
    await vi.advanceTimersByTimeAsync(400);
    expect(screen.getByText(/Aditya builds full-stack/i)).toBeInTheDocument();
    vi.useRealTimers();
  });

  test("renders an error state with retry action", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole("button", { name: /Simulate error/i }));
    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Retry/i })).toBeInTheDocument();
  });

  test("rejects an empty profile form", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole("button", { name: /Save profile/i }));
    expect(screen.queryByText(/Profile saved/i)).not.toBeInTheDocument();
  });

  test("rejects an invalid email", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.type(screen.getByLabelText("Name"), "Aditya");
    await user.type(screen.getByLabelText("Email"), "not-an-email");
    await user.click(screen.getByRole("button", { name: /Save profile/i }));
    expect(screen.queryByText(/Profile saved/i)).not.toBeInTheDocument();
  });

  test("saves a valid profile", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.type(screen.getByLabelText("Name"), "Aditya");
    await user.type(screen.getByLabelText("Email"), "aditya@example.com");
    await user.click(screen.getByRole("button", { name: /Save profile/i }));
    expect(screen.getByRole("status", { name: /Profile saved/i })).toBeInTheDocument();
  });

  test("renders the tool result as structured UI", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: /Tool result/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/Score 92/i)).toBeInTheDocument();
    expect(screen.getByText(/Strong full-stack foundation/i)).toBeInTheDocument();
  });
});