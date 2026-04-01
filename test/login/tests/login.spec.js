// @ts-check
import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { credentials, messages } from '../test-data/credentials';

test.describe('Login Page', () => {
  /** @type {LoginPage} */
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('should login successfully with valid credentials', async () => {
    await loginPage.fillUsername(credentials.valid.username);
    await loginPage.fillPassword(credentials.valid.password);
    await loginPage.clickLogin();
    await loginPage.waitForSuccessfulLogin();
    await loginPage.verifySuccessMessage();
    await loginPage.verifySuccessURL();
  });

  test('should display login form elements', async () => {
    await loginPage.verifyFormElementsVisible();
  });

  test('should have password field masked', async () => {
    await loginPage.verifyPasswordMasked();
  });

  test('should show error for invalid credentials', async () => {
    await loginPage.fillUsername(credentials.invalid.username);
    await loginPage.fillPassword(credentials.invalid.password);
    await loginPage.clickLogin();
    await loginPage.verifyErrorMessage(messages.invalidCredentials);
  });

  test('should show error for empty username', async () => {
    await loginPage.fillUsername(credentials.empty.username);
    await loginPage.fillPassword(credentials.valid.password);
    await loginPage.clickLogin();
    await loginPage.verifyErrorMessage(messages.emptyUsername);
  });

  test('should show error for empty password', async () => {
    await loginPage.fillUsername(credentials.valid.username);
    await loginPage.fillPassword(credentials.empty.password);
    await loginPage.clickLogin();
    await loginPage.verifyErrorMessage(messages.emptyPassword);
  });

  test('should show error for both empty fields', async () => {
    await loginPage.fillUsername(credentials.empty.username);
    await loginPage.fillPassword(credentials.empty.password);
    await loginPage.clickLogin();
    await loginPage.verifyErrorMessage(messages.emptyUsername);
  });
});
