import { expect, test } from './_shared/app-fixtures';

test('home page loads and shows header', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  await expect(page.getByText('Surtido')).toBeVisible({ timeout: 10_000 });
});
