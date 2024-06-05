import { type Page, type Locator } from "@playwright/test";
import { BasePage } from "./base-page";

export enum Section {
  BUNS = "Булки",
  SAUCES = "Соусы",
  FILLINGS = "Начинки",
}

export class MainPage extends BasePage {
  readonly page: Page;

  constructor(page: Page) {
    super(page);
  }

  getConstructorSectionHeader(section: Section) {
    return this.page.locator(`xpath=//h2[text()="${section}"]`);
  }

  async goto() {
    await this.page.goto("/");
  }

  async clickConstructorSectionByText(section: Section) {
    await this.page
      .locator(`xpath=//span[text()="${section}"]/parent::div`)
      .click();
    await this.page.waitForTimeout(1500);
  }
}
