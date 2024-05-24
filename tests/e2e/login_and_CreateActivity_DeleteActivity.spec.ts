import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import testData from '../../utils/testData.json';

test('should login with valid credentials and then create booking and delete booking', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.pause();
  await loginPage.navigate(testData.baseURL.link);
  await loginPage.login(testData.validUser.username, testData.validUser.password);
  await loginPage.addPlayer(testData.validUser.username, testData.validUser.password);
  // Add assertions
  //await expect(page.locator("xpath=//span[normalize-space()='Dashboard']")).toContainText('Dashboard');
  await page.pause();
});
