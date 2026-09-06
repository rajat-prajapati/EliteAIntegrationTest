import { test, expect } from '@playwright/test';

test('verify EPAM client work page', async ({ page }) => {
  await page.goto('https://www.epam.com/');
});
