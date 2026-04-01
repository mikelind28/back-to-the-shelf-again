import { test, expect } from "@playwright/test";

test.beforeEach("Open Contact Page", async ({ page }) => {
  await page.goto("/contact");
});

test.describe("Mobile contact page", () => {
  test("GlobalNav opens and closes", async ({ page }) => {
    await page.getByRole("button", { name: "nav menu button" }).click();
    await expect(
      page
        .getByRole("navigation")
        .filter({ hasText: "HomeAbout UsEventsContact" }),
    ).toBeInViewport();
    await page.getByRole("button", { name: 'close global nav' }).click();
    await expect(page.getByRole("button", { name: 'close global nav' })).not.toBeInViewport();
  });

  test("GlobalNav Home link navigates", async ({ page }) => {
    await page.getByRole("button", { name: "nav menu button" }).click();
    await page.getByRole('link', { name: 'Home' }).first().click();
    await expect(page).toHaveTitle('Back to the Shelf Again');
  });

  test("GlobalNav About Us link navigates", async ({ page }) => {
    await page.getByRole("button", { name: "nav menu button" }).click();
    await page.getByRole('link', { name: 'About Us' }).first().click();
    await expect(page).toHaveURL(/about/);
  });

  test("GlobalNav Events link navigates", async ({ page }) => {
    await page.getByRole("button", { name: "nav menu button" }).click();
    await page.getByRole('link', { name: 'Events' }).first().click();
    await expect(page).toHaveURL(/events/);
  });

  test("GlobalNav Contact link navigates", async ({ page }) => {
    await page.getByRole("button", { name: "nav menu button" }).click();
    await page.getByRole('link', { name: 'Contact' }).first().click();
    await expect(page).toHaveURL(/contact/);
  });
});
