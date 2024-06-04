import { faker } from "@faker-js/faker";
import { APIRequestContext, request } from "@playwright/test";

export async function registerUser() {
  const body = {
    email: faker.internet.email(),
    name: faker.internet.userName(),
    password: faker.internet.password(),
  };
  const apiRequest: APIRequestContext = await request.newContext();
  return await apiRequest.post("/api/auth/register", {
    data: body,
    failOnStatusCode: true,
  });
}

export async function deleteUser(accessToken: string) {
  const apiRequest: APIRequestContext = await request.newContext();
  return await apiRequest.delete("/api/auth/user", {
    failOnStatusCode: true,
    headers: { Authorization: accessToken },
  });
}
