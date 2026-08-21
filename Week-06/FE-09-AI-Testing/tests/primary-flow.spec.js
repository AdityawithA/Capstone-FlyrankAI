import { test, expect } from "@playwright/test";

test("primary AI flow completes from request to result", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "AI Testing Lab" })).toBeVisible();

  await page.getByRole("button", { name: "Run mocked AI" }).click();

  await expect(page.getByRole("status", { name: "AI response pending" })).toBeVisible();
  await expect(page.getByText(/Aditya builds full-stack/i)).toBeVisible({ timeout: 3000 });

  await expect(page.getByRole("heading", { name: "Tool result" })).toBeVisible();
  await expect(page.getByLabel("Score 92")).toBeVisible();
});