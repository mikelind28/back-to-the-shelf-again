import { test, expect } from "@playwright/test";

test.beforeEach("Open Home Page", async ({ page }) => {
  await page.goto("/");
});

test.describe("Home page", () => {
  test("has correct title", async ({ page }) => {
    await expect(page).toHaveTitle(/Back to the Shelf Again/);
  });

  test("about link navigates", async ({ page }) => {
    await page.getByRole("link", { name: "Where our story began..." }).click();
    await expect(page).toHaveURL(/about/);
  });

  test("events link navigates", async ({ page }) => {
    await page.getByRole("link", { name: "See all events" }).click();
    await expect(page).toHaveURL(/events/);
  });
});
