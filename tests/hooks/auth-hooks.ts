import { test } from "@playwright/test";
import { registerUser, deleteUser } from "../../api/steps";

var accessToken: string;

test.describe("Create user", () => {
  test.beforeEach(async ({ page }) => {
    accessToken = (await registerUser()).body()["accessToken"];
  });
});

test.describe("Delete created user", () => {
  test.afterEach(async ({ page }) => {
    await deleteUser(accessToken);
  });
});
