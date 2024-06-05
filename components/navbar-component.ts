import { Page, Locator } from "@playwright/test";

export class NavbarComponent {
  readonly page: Page;
  readonly constructorButton: Locator;
  readonly personalPageButton: Locator;
  readonly logo: Locator;

  constructor(page: Page) {
    this.page = page;
    this.constructorButton = page.getByRole("link", { name: "Конструктор" });
    this.personalPageButton = page.getByRole("link", {
      name: "Личный Кабинет",
    });
    this.logo = page.getByRole("navigation").locator("div").getByRole("link");
  }

  async clickConstructorButton() {
    await this.constructorButton.click();
  }

  async clickPersonalPageButton() {
    await this.personalPageButton.click();
  }

  async clickLogo() {
    await this.logo.click();
  }
}
