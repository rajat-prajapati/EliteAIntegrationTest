import { test, expect } from '@playwright/test';

test('should open EPAM client work from Services', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  await page.locator('a[href="/services"]').first().click({ force: true });
  await page.waitForURL('**/services');
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  await expect(page.getByText('Client Work', { exact: true })).toBeVisible();
});
