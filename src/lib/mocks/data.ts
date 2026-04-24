export type Category =
  | 'Todos'
  | 'Bebidas'
  | 'Lácteos'
  | 'Almacén'
  | 'Limpieza'
  | 'Snacks'
  | 'Carnes'
  | 'Verduras'
  | 'Panadería';

export interface Product {
  id: string;
  name: string;
  category: Exclude<Category, 'Todos'>;
  pricePerUnit: number;
  originalPrice?: number;
  packSize: number;
  isBestSeller?: boolean;
  deliveryLabel?: string;
  imageUrl?: string;
}

export const CATEGORY_LABELS: Record<Exclude<Category, 'Todos'>, string> = {
  Bebidas: 'Bebidas',
  Lácteos: 'Lácteos',
  Almacén: 'Almacén',
  Limpieza: 'Limpieza',
  Snacks: 'Snacks',
  Carnes: 'Carnes',
  Verduras: 'Verduras',
  Panadería: 'Panadería'
};

export const CATEGORY_SLUGS: Record<Exclude<Category, 'Todos'>, string> = {
  Bebidas: 'bebidas',
  Lácteos: 'lacteos',
  Almacén: 'almacen',
  Limpieza: 'limpieza',
  Snacks: 'snacks',
  Carnes: 'carnes',
  Verduras: 'verduras',
  Panadería: 'panaderia'
};

export const SLUG_TO_CATEGORY: Record<string, Exclude<Category, 'Todos'>> = {
  bebidas: 'Bebidas',
  lacteos: 'Lácteos',
  almacen: 'Almacén',
  limpieza: 'Limpieza',
  snacks: 'Snacks',
  carnes: 'Carnes',
  verduras: 'Verduras',
  panaderia: 'Panadería'
};

export const DISPLAY_CATEGORIES: Exclude<Category, 'Todos'>[] = [
  'Bebidas',
  'Lácteos',
  'Almacén',
  'Limpieza',
  'Snacks',
  'Carnes',
  'Verduras',
  'Panadería'
];

export const CATEGORY_EMOJIS: Record<Exclude<Category, 'Todos'>, string> = {
  Bebidas: '🥤',
  Lácteos: '🥛',
  Almacén: '🛒',
  Limpieza: '🧹',
  Snacks: '🍿',
  Carnes: '🥩',
  Verduras: '🥬',
  Panadería: '🍞'
};

export function discountPct(p: Product): number | null {
  if (!p.originalPrice || p.originalPrice <= p.pricePerUnit) return null;
  return Math.round((1 - p.pricePerUnit / p.originalPrice) * 100);
}

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Agua Mineral 500ml',
    category: 'Bebidas',
    pricePerUnit: 350,
    originalPrice: 550,
    packSize: 24,
    isBestSeller: true,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/water,bottle?lock=1'
  },
  {
    id: 'p2',
    name: 'Gaseosa Cola 1.5L',
    category: 'Bebidas',
    pricePerUnit: 890,
    originalPrice: 1400,
    packSize: 12,
    isBestSeller: true,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/soda,cola?lock=2'
  },
  {
    id: 'p3',
    name: 'Jugo de Naranja 1L',
    category: 'Bebidas',
    pricePerUnit: 720,
    originalPrice: 950,
    packSize: 12,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/orange,juice?lock=3'
  },
  {
    id: 'p22',
    name: 'Agua con Gas 500ml',
    category: 'Bebidas',
    pricePerUnit: 380,
    originalPrice: 560,
    packSize: 24,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/sparkling,water?lock=22'
  },
  {
    id: 'p23',
    name: 'Cerveza Rubia 473ml',
    category: 'Bebidas',
    pricePerUnit: 650,
    originalPrice: 900,
    packSize: 24,
    isBestSeller: true,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/beer?lock=23'
  },
  {
    id: 'p24',
    name: 'Vino Tinto 750ml',
    category: 'Bebidas',
    pricePerUnit: 1800,
    originalPrice: 2400,
    packSize: 6,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/wine,red?lock=24'
  },
  {
    id: 'p25',
    name: 'Té Verde x20 saquitos',
    category: 'Bebidas',
    pricePerUnit: 430,
    originalPrice: 600,
    packSize: 12,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/tea,green?lock=25'
  },
  {
    id: 'p4',
    name: 'Leche Entera 1L',
    category: 'Lácteos',
    pricePerUnit: 620,
    originalPrice: 850,
    packSize: 12,
    isBestSeller: true,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/milk?lock=4'
  },
  {
    id: 'p5',
    name: 'Yogur Natural 200g',
    category: 'Lácteos',
    pricePerUnit: 480,
    originalPrice: 680,
    packSize: 6,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/yogurt?lock=5'
  },
  {
    id: 'p6',
    name: 'Queso Cremoso 500g',
    category: 'Lácteos',
    pricePerUnit: 2100,
    originalPrice: 2800,
    packSize: 4,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/cheese?lock=6'
  },
  {
    id: 'p26',
    name: 'Manteca 200g',
    category: 'Lácteos',
    pricePerUnit: 980,
    originalPrice: 1300,
    packSize: 12,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/butter?lock=26'
  },
  {
    id: 'p27',
    name: 'Crema de Leche 200ml',
    category: 'Lácteos',
    pricePerUnit: 560,
    originalPrice: 780,
    packSize: 12,
    isBestSeller: true,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/cream,dairy?lock=27'
  },
  {
    id: 'p28',
    name: 'Yogur con Frutas 125g',
    category: 'Lácteos',
    pricePerUnit: 350,
    originalPrice: 480,
    packSize: 24,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/yogurt,fruit?lock=28'
  },
  {
    id: 'p7',
    name: 'Arroz Largo Fino 1kg',
    category: 'Almacén',
    pricePerUnit: 980,
    originalPrice: 1300,
    packSize: 10,
    isBestSeller: true,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/rice?lock=7'
  },
  {
    id: 'p8',
    name: 'Fideos Spaghetti 500g',
    category: 'Almacén',
    pricePerUnit: 540,
    originalPrice: 750,
    packSize: 20,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/pasta,spaghetti?lock=8'
  },
  {
    id: 'p9',
    name: 'Aceite de Girasol 1L',
    category: 'Almacén',
    pricePerUnit: 1450,
    originalPrice: 2100,
    packSize: 6,
    isBestSeller: true,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/oil,cooking?lock=9'
  },
  {
    id: 'p29',
    name: 'Harina 000 1kg',
    category: 'Almacén',
    pricePerUnit: 620,
    originalPrice: 850,
    packSize: 10,
    isBestSeller: true,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/flour,baking?lock=29'
  },
  {
    id: 'p30',
    name: 'Azúcar 1kg',
    category: 'Almacén',
    pricePerUnit: 740,
    originalPrice: 1000,
    packSize: 10,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/sugar?lock=30'
  },
  {
    id: 'p31',
    name: 'Lentejas 500g',
    category: 'Almacén',
    pricePerUnit: 490,
    originalPrice: 670,
    packSize: 20,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/lentils,legumes?lock=31'
  },
  {
    id: 'p32',
    name: 'Sal Fina 1kg',
    category: 'Almacén',
    pricePerUnit: 280,
    originalPrice: 390,
    packSize: 20,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/salt,seasoning?lock=32'
  },
  {
    id: 'p10',
    name: 'Detergente 750ml',
    category: 'Limpieza',
    pricePerUnit: 870,
    originalPrice: 1200,
    packSize: 12,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/detergent,soap?lock=10'
  },
  {
    id: 'p11',
    name: 'Lavandina 1L',
    category: 'Limpieza',
    pricePerUnit: 390,
    originalPrice: 580,
    packSize: 12,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/cleaning,bleach?lock=11'
  },
  {
    id: 'p33',
    name: 'Jabón en Polvo 1kg',
    category: 'Limpieza',
    pricePerUnit: 1100,
    originalPrice: 1500,
    packSize: 8,
    isBestSeller: true,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/laundry,washing?lock=33'
  },
  {
    id: 'p34',
    name: 'Suavizante 500ml',
    category: 'Limpieza',
    pricePerUnit: 760,
    originalPrice: 1050,
    packSize: 12,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/laundry,fabric?lock=34'
  },
  {
    id: 'p35',
    name: 'Esponja de Cocina x3',
    category: 'Limpieza',
    pricePerUnit: 310,
    originalPrice: 440,
    packSize: 24,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/sponge,cleaning?lock=35'
  },
  {
    id: 'p12',
    name: 'Papas Fritas 150g',
    category: 'Snacks',
    pricePerUnit: 760,
    originalPrice: 1050,
    packSize: 12,
    isBestSeller: true,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/chips,snack?lock=12'
  },
  {
    id: 'p36',
    name: 'Galletitas Dulces 150g',
    category: 'Snacks',
    pricePerUnit: 520,
    originalPrice: 720,
    packSize: 12,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/cookies?lock=36'
  },
  {
    id: 'p37',
    name: 'Maní Salado 200g',
    category: 'Snacks',
    pricePerUnit: 680,
    originalPrice: 920,
    packSize: 12,
    isBestSeller: true,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/peanuts?lock=37'
  },
  {
    id: 'p38',
    name: 'Alfajor Triple x3',
    category: 'Snacks',
    pricePerUnit: 890,
    originalPrice: 1200,
    packSize: 16,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/chocolate,candy?lock=38'
  },
  {
    id: 'p13',
    name: 'Milanesa de Ternera 1kg',
    category: 'Carnes',
    pricePerUnit: 4200,
    originalPrice: 5500,
    packSize: 4,
    isBestSeller: true,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/beef,steak?lock=13'
  },
  {
    id: 'p14',
    name: 'Pechuga de Pollo 1kg',
    category: 'Carnes',
    pricePerUnit: 2800,
    originalPrice: 3600,
    packSize: 6,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/chicken?lock=14'
  },
  {
    id: 'p15',
    name: 'Carne Molida 500g',
    category: 'Carnes',
    pricePerUnit: 1900,
    originalPrice: 2500,
    packSize: 8,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/ground,meat?lock=15'
  },
  {
    id: 'p39',
    name: 'Asado 1kg',
    category: 'Carnes',
    pricePerUnit: 3800,
    originalPrice: 5000,
    packSize: 4,
    isBestSeller: true,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/bbq,ribs?lock=39'
  },
  {
    id: 'p40',
    name: 'Salchicha Tipo Viena x6',
    category: 'Carnes',
    pricePerUnit: 1200,
    originalPrice: 1600,
    packSize: 12,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/sausage?lock=40'
  },
  {
    id: 'p41',
    name: 'Jamón Cocido 200g',
    category: 'Carnes',
    pricePerUnit: 1500,
    originalPrice: 2000,
    packSize: 8,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/ham,deli?lock=41'
  },
  {
    id: 'p16',
    name: 'Tomate Redondo 1kg',
    category: 'Verduras',
    pricePerUnit: 550,
    originalPrice: 780,
    packSize: 10,
    isBestSeller: true,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/tomato?lock=16'
  },
  {
    id: 'p17',
    name: 'Lechuga Crespa x unidad',
    category: 'Verduras',
    pricePerUnit: 320,
    originalPrice: 450,
    packSize: 12,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/lettuce,salad?lock=17'
  },
  {
    id: 'p18',
    name: 'Cebolla 1kg',
    category: 'Verduras',
    pricePerUnit: 390,
    originalPrice: 520,
    packSize: 10,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/onion?lock=18'
  },
  {
    id: 'p42',
    name: 'Papa 1kg',
    category: 'Verduras',
    pricePerUnit: 420,
    originalPrice: 580,
    packSize: 10,
    isBestSeller: true,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/potato?lock=42'
  },
  {
    id: 'p43',
    name: 'Zanahoria 1kg',
    category: 'Verduras',
    pricePerUnit: 350,
    originalPrice: 490,
    packSize: 10,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/carrot?lock=43'
  },
  {
    id: 'p44',
    name: 'Pimiento Rojo x3',
    category: 'Verduras',
    pricePerUnit: 480,
    originalPrice: 650,
    packSize: 12,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/pepper,vegetable?lock=44'
  },
  {
    id: 'p19',
    name: 'Pan Lactal 500g',
    category: 'Panadería',
    pricePerUnit: 870,
    originalPrice: 1100,
    packSize: 12,
    isBestSeller: true,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/bread?lock=19'
  },
  {
    id: 'p20',
    name: 'Medialunas x6',
    category: 'Panadería',
    pricePerUnit: 650,
    originalPrice: 900,
    packSize: 20,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/croissant?lock=20'
  },
  {
    id: 'p21',
    name: 'Facturas x6',
    category: 'Panadería',
    pricePerUnit: 720,
    originalPrice: 950,
    packSize: 16,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/pastry?lock=21'
  },
  {
    id: 'p45',
    name: 'Bizcochos x6',
    category: 'Panadería',
    pricePerUnit: 580,
    originalPrice: 780,
    packSize: 20,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/biscuit,bakery?lock=45'
  },
  {
    id: 'p46',
    name: 'Tostadas x8',
    category: 'Panadería',
    pricePerUnit: 490,
    originalPrice: 680,
    packSize: 16,
    isBestSeller: true,
    deliveryLabel: 'Llega mañana',
    imageUrl: 'https://loremflickr.com/300/300/toast?lock=46'
  }
];

export type OrderStatus =
  | 'Pendiente'
  | 'En Preparación'
  | 'En Camino'
  | 'Entregado';

export const KANBAN_COLUMNS: { label: string; status: OrderStatus }[] = [
  { label: 'Nuevas', status: 'Pendiente' },
  { label: 'En Preparación', status: 'En Preparación' },
  { label: 'En Camino', status: 'En Camino' }
];

export interface OrderItem {
  productId: string;
  name: string;
  requestedQty: number;
  fulfilledQty: number;
  pricePerUnit: number;
}

export interface Order {
  id: string;
  clientName: string;
  clientAddress: string;
  status: OrderStatus;
  createdAt: Date;
  items: OrderItem[];
}

export const ORDERS: Order[] = [
  {
    id: 'ORD-0042',
    clientName: 'Almacén Don Pedro',
    clientAddress: 'Av. Rivadavia 4520, CABA',
    status: 'Pendiente',
    createdAt: new Date(Date.now() - 1000 * 60 * 14),
    items: [
      {
        productId: 'p1',
        name: 'Agua Mineral 500ml',
        requestedQty: 48,
        fulfilledQty: 48,
        pricePerUnit: 350
      },
      {
        productId: 'p4',
        name: 'Leche Entera 1L',
        requestedQty: 24,
        fulfilledQty: 24,
        pricePerUnit: 620
      },
      {
        productId: 'p7',
        name: 'Arroz Largo Fino 1kg',
        requestedQty: 20,
        fulfilledQty: 20,
        pricePerUnit: 980
      },
      {
        productId: 'p8',
        name: 'Fideos Spaghetti 500g',
        requestedQty: 40,
        fulfilledQty: 40,
        pricePerUnit: 540
      },
      {
        productId: 'p10',
        name: 'Detergente 750ml',
        requestedQty: 12,
        fulfilledQty: 12,
        pricePerUnit: 870
      }
    ]
  },
  {
    id: 'ORD-0041',
    clientName: 'Kiosco La Esquina',
    clientAddress: 'Corrientes 1200, CABA',
    status: 'Pendiente',
    createdAt: new Date(Date.now() - 1000 * 60 * 32),
    items: [
      {
        productId: 'p2',
        name: 'Gaseosa Cola 1.5L',
        requestedQty: 24,
        fulfilledQty: 24,
        pricePerUnit: 890
      },
      {
        productId: 'p12',
        name: 'Papas Fritas 150g',
        requestedQty: 36,
        fulfilledQty: 36,
        pricePerUnit: 760
      }
    ]
  },
  {
    id: 'ORD-0040',
    clientName: 'Super Vecino',
    clientAddress: 'Scalabrini Ortiz 880, CABA',
    status: 'En Preparación',
    createdAt: new Date(Date.now() - 1000 * 60 * 65),
    items: [
      {
        productId: 'p9',
        name: 'Aceite de Girasol 1L',
        requestedQty: 12,
        fulfilledQty: 12,
        pricePerUnit: 1450
      },
      {
        productId: 'p5',
        name: 'Yogur Natural 200g',
        requestedQty: 18,
        fulfilledQty: 18,
        pricePerUnit: 480
      }
    ]
  },
  {
    id: 'ORD-0039',
    clientName: 'Minimercado Sol',
    clientAddress: 'Medrano 340, CABA',
    status: 'En Preparación',
    createdAt: new Date(Date.now() - 1000 * 60 * 90),
    items: [
      {
        productId: 'p3',
        name: 'Jugo de Naranja 1L',
        requestedQty: 24,
        fulfilledQty: 24,
        pricePerUnit: 720
      }
    ]
  },
  {
    id: 'ORD-0038',
    clientName: 'Despensa Belgrano',
    clientAddress: 'Cabildo 2100, CABA',
    status: 'En Camino',
    createdAt: new Date(Date.now() - 1000 * 60 * 140),
    items: [
      {
        productId: 'p6',
        name: 'Queso Cremoso 500g',
        requestedQty: 8,
        fulfilledQty: 8,
        pricePerUnit: 2100
      },
      {
        productId: 'p11',
        name: 'Lavandina 1L',
        requestedQty: 24,
        fulfilledQty: 24,
        pricePerUnit: 390
      }
    ]
  },
  {
    id: 'ORD-0037',
    clientName: 'Almacén Central',
    clientAddress: 'Thames 700, CABA',
    status: 'En Camino',
    createdAt: new Date(Date.now() - 1000 * 60 * 200),
    items: [
      {
        productId: 'p1',
        name: 'Agua Mineral 500ml',
        requestedQty: 96,
        fulfilledQty: 96,
        pricePerUnit: 350
      }
    ]
  },
  {
    id: 'ORD-0036',
    clientName: 'Kiosco Norte',
    clientAddress: 'Maipú 450, CABA',
    status: 'En Camino',
    createdAt: new Date(Date.now() - 1000 * 60 * 230),
    items: [
      {
        productId: 'p2',
        name: 'Gaseosa Cola 1.5L',
        requestedQty: 12,
        fulfilledQty: 12,
        pricePerUnit: 890
      }
    ]
  }
];

export function getOrderById(id: string): Order | undefined {
  return ORDERS.find((o) => o.id === id);
}

export function formatARS(amount: number): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0
  }).format(amount);
}

export function elapsedTime(date: Date): string {
  const mins = Math.floor((Date.now() - date.getTime()) / 60000);
  if (mins < 60) return `hace ${mins}m`;
  const hrs = Math.floor(mins / 60);
  return `hace ${hrs}h`;
}

export function orderTotal(items: OrderItem[]): number {
  return items.reduce((sum, i) => sum + i.fulfilledQty * i.pricePerUnit, 0);
}
