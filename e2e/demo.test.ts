import { expect, test } from './_shared/app-fixtures';

test('home page has expected h1', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('text=Stockea')).toBeVisible();
});
