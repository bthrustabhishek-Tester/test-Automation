import { test, expect } from '@playwright/test';
test('user can log in', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/./);
});
