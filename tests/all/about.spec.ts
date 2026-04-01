import { test, expect } from "@playwright/test";

test.beforeEach("Open About Page", async ({ page }) => {
  await page.goto("/about");
});

test.describe("About page", () => {
  test("has correct title", async ({ page }) => {
    await expect(page).toHaveTitle("About | Back to the Shelf Again");
  });
});
