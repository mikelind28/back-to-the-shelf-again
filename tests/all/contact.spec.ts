import { test, expect } from "@playwright/test";

test.beforeEach("Open Contact Page", async ({ page }) => {
  await page.goto("/contact");
});

test.describe("Contact page", () => {
  test("has correct title", async ({ page }) => {
    await expect(page).toHaveTitle("Contact | Back to the Shelf Again");
  });
});
