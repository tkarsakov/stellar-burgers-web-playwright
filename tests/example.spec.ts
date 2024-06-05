import { expect } from "@playwright/test";
import { test } from "../tests/fixtures/example-test";
import { Section } from "../pages/main-page";

test("has title", async ({ mainPage }) => {
  await mainPage.goto();

  await mainPage.clickConstructorSectionByText(Section.SAUCES);
  await expect
    .soft(
      mainPage.getConstructorSectionHeader(Section.SAUCES),
      `should see ${Section.SAUCES} header`
    )
    .toBeInViewport();

  await mainPage.clickConstructorSectionByText(Section.FILLINGS);
  await expect
    .soft(mainPage.getConstructorSectionHeader(Section.FILLINGS))
    .toBeInViewport();

  await expect
    .soft(mainPage.getConstructorSectionHeader(Section.BUNS))
    .not.toBeInViewport();
});
