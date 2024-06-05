import { test as base } from "@playwright/test";
import { MainPage } from "../../pages/main-page";

type ExampleFixtures = {
  mainPage: MainPage;
};

export const test = base.extend<ExampleFixtures>({
  mainPage: async ({ page }, use) => {
    await use(new MainPage(page));
  },
});
