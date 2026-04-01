// @ts-check
import { expect } from '@playwright/test';
import { urls } from '../test-data/credentials';

export class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#submit');
    this.successMessage = page.locator('h1');
  }

  async navigate() {
    await this.page.goto(urls.loginPage);
  }

  /**
   * @param {string} username
   */
  async fillUsername(username) {
    await this.usernameInput.fill(username);
  }

  /**
   * @param {string} password
   */
  async fillPassword(password) {
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async waitForSuccessfulLogin() {
    await this.page.waitForURL(/.*logged-in-successfully/);
  }

  async verifySuccessMessage() {
    await expect(this.successMessage).toContainText('Logged In Successfully');
  }

  async verifySuccessURL() {
    await expect(this.page).toHaveURL(/.*logged-in-successfully/);
  }

  async verifyFormElementsVisible() {
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }

  async verifyPasswordMasked() {
    await expect(this.passwordInput).toHaveAttribute('type', 'password');
  }

  /**
   * @param {string} expectedMessage
   */
  async verifyErrorMessage(expectedMessage) {
    const errorMessage = this.page.locator('#error');
    await expect(errorMessage).toContainText(expectedMessage);
  }
}
