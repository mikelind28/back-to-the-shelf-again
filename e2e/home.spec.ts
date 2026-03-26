import { test, expect } from "@playwright/test";

test("homepage loads and shows header", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Back to the Shelf Again/);
  await expect(
    page.getByRole("heading", { level: 1, name: "Back to the Shelf Again" }),
  ).toBeVisible();
});
