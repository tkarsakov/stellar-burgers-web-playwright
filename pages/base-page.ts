import { Page } from "@playwright/test";
import { NavbarComponent } from "../components/navbar-component";

export class BasePage {
  readonly page: Page;
  protected readonly navBar: NavbarComponent;

  constructor(page: Page) {
    this.page = page;
    this.navBar = new NavbarComponent(page);
  }
}
