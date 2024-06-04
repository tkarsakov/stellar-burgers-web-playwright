import { type Page, type Locator } from "@playwright/test";

export class MainPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  getConstructorSectionHeader(text: string) {
    return this.page.locator(`xpath=//h2[text()="${text}"]`);
  }

  async goto() {
    await this.page.goto("/");
  }

  async clickConstructorSectionByText(text: string) {
    await this.page
      .locator(`xpath=//span[text()="${text}"]/parent::div`)
      .click();
    await this.page.waitForTimeout(1500);
  }
}
