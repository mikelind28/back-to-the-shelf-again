import { test, expect } from "@playwright/test";

test.beforeEach("Open Events Page", async ({ page }) => {
  await page.goto("events");
});

test.describe("Events page", () => {
  test("has correct title", async ({ page }) => {
    await expect(page).toHaveTitle("Events | Back to the Shelf Again");
  });
});
