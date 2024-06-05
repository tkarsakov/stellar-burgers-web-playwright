import { type Page, type Locator } from "@playwright/test";

export type RegistrationCredetials = {
  name: string;
  email: string;
  password: string;
};

export class RegistrationPage {
  readonly page: Page;
  readonly emailField: Locator;
  readonly nameField: Locator;
  readonly passwordField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailField = page.getByPlaceholder("Email");
    this.nameField = page.getByPlaceholder("Имя");
    this.passwordField = page.getByPlaceholder("Пароль");
  }

  async typeEmail(email: string) {
    await this.emailField.fill(email);
  }

  async typeName(name: string) {
    await this.nameField.fill(name);
  }

  async typePassword(password: string) {
    await this.passwordField.fill(password);
  }

  async typeCredentials(credentials: RegistrationCredetials) {
    await this.typeName(credentials.name);
    await this.typeEmail(credentials.email);
    await this.typePassword(credentials.password);
  }
}
