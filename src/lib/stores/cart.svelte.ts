import type { Product } from '$lib/mocks/data';

export interface CartItem {
  product: Product;
  qty: number;
}

function createCart() {
  let items = $state<CartItem[]>([]);

  function setQty(product: Product, qty: number) {
    const existing = items.find((i) => i.product.id === product.id);
    if (qty <= 0) {
      items = items.filter((i) => i.product.id !== product.id);
    } else if (existing) {
      existing.qty = qty;
    } else {
      items = [...items, { product, qty }];
    }
  }

  function getQty(productId: string): number {
    return items.find((i) => i.product.id === productId)?.qty ?? 0;
  }

  function removeItem(productId: string) {
    items = items.filter((i) => i.product.id !== productId);
  }

  function clear() {
    items = [];
  }

  const total = $derived(
    items.reduce((sum, i) => sum + i.product.pricePerUnit * i.qty, 0)
  );
  const count = $derived(items.reduce((sum, i) => sum + i.qty, 0));

  return {
    get items() {
      return items;
    },
    get total() {
      return total;
    },
    get count() {
      return count;
    },
    setQty,
    getQty,
    removeItem,
    clear
  };
}

export const cart = createCart();
