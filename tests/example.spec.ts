import { test, expect } from "@playwright/test";
import { MainPage } from "../pages/main-page";

test("has title", async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goto();

  await mainPage.clickConstructorSectionByText("Соусы");
  await expect(mainPage.getConstructorSectionHeader("Соусы")).toBeInViewport();
  await mainPage.clickConstructorSectionByText("Начинки");
  await expect(
    mainPage.getConstructorSectionHeader("Начинки")
  ).toBeInViewport();
});
