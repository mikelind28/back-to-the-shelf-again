import { test, expect } from "@playwright/test";

test("homepage loads and shows header", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Back to the Shelf Again/);
});
