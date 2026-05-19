import { expect, test } from './_shared/app-fixtures';

test('home page loads and shows header', async ({ page, supawright }) => {
  await supawright.create('categories', {
    name: 'Bebidas',
    path: 'bebidas',
    position: 1
  });

  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await expect(page.getByText('Surtido')).toBeVisible();
});
