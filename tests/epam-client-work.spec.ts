import { test, expect } from '@playwright/test';

test('verify EPAM client work page', async ({ page, browser }) => {
  await page.goto('https://www.epam.com/');
  await page.getByRole('link', { name: 'Services' }).click();
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();
  await expect(page.getByText('Client Work', { exact: true })).toBeVisible();
  await browser.close();
});
