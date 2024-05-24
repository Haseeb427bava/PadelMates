import { Page ,expect } from '@playwright/test';
import paths from '../fixtures/paths.json';


export class LoginPage {
  constructor(private page: Page) {}

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async login(username: string, password: string) {
    await this.page.locator(paths.locators.languageSelect).click();
    await this.page.fill(paths.locators.email, username);
    await this.page.fill(paths.locators.password, password);
    await this.page.locator(paths.button.path).click();
    await this.page.waitForTimeout(5000);
    await expect (this.page.locator(paths.locators.pedalmatesimg)).toBeVisible();
    await this.page.locator('#openDatePickerBtn').click();
    await this.page.getByLabel('Next Month').click();
    await this.page.getByLabel('Choose Friday, June 21st,').click();
    await this.page.locator('tr').filter({ hasText: /^11:00$/ }).locator('td').nth(1).click();
    await this.page.locator('#selectActivityTypeDropdown').selectOption('Book Court');
    await this.page.waitForTimeout(5000);
    await this.page.getByRole('spinbutton').click();
    await this.page.getByRole('spinbutton').fill('01000');
    await this.page.locator('select[name="discount"]').selectOption('5');
    await this.page.getByLabel('Information').click();
    await this.page.getByLabel('Information').fill('test');
    await this.page.waitForTimeout(5000);
    await this.page.getByRole('button', { name: 'Book Court' }).click();
    await expect(this.page.getByText('The court has been booked')).toBeVisible();
    await this.page.getByRole('button', { name: 'Close' }).click();
    await this.page.locator('a').filter({ hasText: ':00 - 11:30By CLUB:' }).click();
    await this.page.getByRole('tab', { name: 'Settings' }).click();
    await this.page.getByRole('button', { name: 'Delete Activity' }).click();
    await this.page.locator('input[name="allBookings"]').check();
    await this.page.getByRole('button', { name: 'Confirm' }).click();
    await expect(this.page.getByText('Activity deleted successfully!')).toBeVisible();


    //await this.this.page.locator("xpath=//span[normalize-space()='Dashboard']").waitFor();
        
  }

  async addPlayer(username: string, password: string) {
    await this.page.locator(paths.locators.languageSelect).click();
    await this.page.fill(paths.locators.email, username);
    await this.page.fill(paths.locators.password, password);
    await this.page.locator(paths.button.path).click();
    await expect (this.page.locator(paths.locators.pedalmatesimg)).toBeVisible();
    await this.page.locator('div').filter({ hasText: /^Fri, May 24th 24$/ }).getByRole('button').nth(1).click();
    await this.page.locator('tr').filter({ hasText: /^11:00$/ }).locator('td').nth(1).click();
    await this.page.waitForTimeout(5000);
    await this.page.locator('#selectActivityTypeDropdown').selectOption('Book Court');
    await this.page.getByRole('spinbutton').click();
    await this.page.getByRole('spinbutton').fill('01000');
    
    await this.page.getByLabel('Information').click();
    await this.page.getByLabel('Information').fill('testets');
    await this.page.waitForTimeout(5000);
    await this.page.getByRole('button', { name: 'Book Court' }).click();
    await expect(this.page.getByText('The court has been booked')).toBeVisible();
    await this.page.getByRole('button', { name: 'Close' }).click();
    await this.page.getByRole('gridcell', { name: ':00 - 09:30 By CLUB:' }).locator('a').click();
    await this.page.getByRole('button', { name: 'Add Player' }).click();
    await this.page.locator('div').filter({ hasText: /^maroof AhmedAdd$/ }).getByRole('button').click();
    await this.page.locator('input[name="thisBooking"]').check();
    await this.page.getByRole('button', { name: 'Confirm' }).click();
    await expect(this.page.getByText('maroof Ahmed', { exact: true })).toBeVisible();
    await this.page.locator('[id="headlessui-menu-button-\\:rr\\:"]').click();
    await this.page.getByText('Set Payment Info').click();
    await this.page.getByRole('button', { name: 'Add Another Payment Method' }).click();
    await this.page.locator('div').filter({ hasText: /^Select Payment MethodSelect$/ }).locator('svg').click();
    await this.page.getByRole('option', { name: 'Cash' }).click();
    await this.page.getByPlaceholder('199').click();
    await this.page.getByPlaceholder('199').fill('10');
    await this.page.getByRole('checkbox').check();
    await this.page.getByRole('button', { name: 'Save' }).click();
    await expect(this.page.getByText('Updated Successfully')).toBeVisible(); 
  }

  // Other methods for interacting with the login page
}
