import { test, expect } from '@playwright/test';

test('navigates from Services to Client Work', async ({ page }) => {
  await page.goto('https://www.epam.com/');
  await page.locator('.hamburger-menu-ui').click();
  await page.getByRole('button', { name: 'Services' }).click();
  await page.getByRole('link', { name: 'Services', exact: true }).click();
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();
  await expect(page.getByRole('heading', { name: 'Client Work' })).toBeVisible();
  await page.close();
});
