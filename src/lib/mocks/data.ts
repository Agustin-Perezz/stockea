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

export const CATEGORY_IMAGES: Partial<
  Record<Exclude<Category, 'Todos'>, string>
> = {
  Bebidas:
    'https://http2.mlstatic.com/D_NQ_NP_942567-MLA86616475145_062025-F.jpg',
  Lácteos:
    'https://http2.mlstatic.com/D_NQ_NP_869117-MLA86618229583_062025-F.jpg',
  Almacén:
    'https://http2.mlstatic.com/D_NQ_NP_946159-MLA86604058025_062025-F.jpg',
  Limpieza:
    'https://http2.mlstatic.com/D_NQ_NP_728588-MLA86286298630_062025-F.jpg'
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
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_765146-MLA99335351178_112025-AB.webp'
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
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_766967-MLA99926456969_112025-AB.webp'
  },
  {
    id: 'p3',
    name: 'Jugo de Naranja 1L',
    category: 'Bebidas',
    pricePerUnit: 720,
    originalPrice: 950,
    packSize: 12,
    deliveryLabel: 'Llega mañana',
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_686311-MLA75762949862_042024-AB.webp'
  },
  {
    id: 'p22',
    name: 'Agua con Gas 500ml',
    category: 'Bebidas',
    pricePerUnit: 380,
    originalPrice: 560,
    packSize: 24,
    deliveryLabel: 'Llega mañana',
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_650104-MLA99440386844_112025-AB.webp'
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
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_756077-MLA85703289377_062025-AB.webp'
  },
  {
    id: 'p24',
    name: 'Vino Tinto 750ml',
    category: 'Bebidas',
    pricePerUnit: 1800,
    originalPrice: 2400,
    packSize: 6,
    deliveryLabel: 'Llega mañana',
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_829403-MLA110274426449_042026-AB.webp'
  },
  {
    id: 'p25',
    name: 'Té Verde x20 saquitos',
    category: 'Bebidas',
    pricePerUnit: 430,
    originalPrice: 600,
    packSize: 12,
    deliveryLabel: 'Llega mañana',
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_636652-MLA108046680480_032026-AB.webp'
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
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_651342-MLA99438442816_112025-AB.webp'
  },
  {
    id: 'p5',
    name: 'Yogur Natural 200g',
    category: 'Lácteos',
    pricePerUnit: 480,
    originalPrice: 680,
    packSize: 6,
    deliveryLabel: 'Llega mañana',
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_710142-MLA99833640677_112025-AB.webp'
  },
  {
    id: 'p6',
    name: 'Queso Cremoso 500g',
    category: 'Lácteos',
    pricePerUnit: 2100,
    originalPrice: 2800,
    packSize: 4,
    deliveryLabel: 'Llega mañana',
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_785406-MLA99922580789_112025-AB.webp'
  },
  {
    id: 'p26',
    name: 'Manteca 200g',
    category: 'Lácteos',
    pricePerUnit: 980,
    originalPrice: 1300,
    packSize: 12,
    deliveryLabel: 'Llega mañana',
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_931181-MLA99916524439_112025-AB.webp'
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
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_802963-MLA99885300993_112025-AB.webp'
  },
  {
    id: 'p28',
    name: 'Yogur con Frutas 125g',
    category: 'Lácteos',
    pricePerUnit: 350,
    originalPrice: 480,
    packSize: 24,
    deliveryLabel: 'Llega mañana',
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_646765-MLA101083851970_122025-AB.webp'
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
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_629456-MLA99904759427_112025-AB.webp'
  },
  {
    id: 'p8',
    name: 'Fideos Spaghetti 500g',
    category: 'Almacén',
    pricePerUnit: 540,
    originalPrice: 750,
    packSize: 20,
    deliveryLabel: 'Llega mañana',
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_707043-MLA99360091762_112025-AB.webp'
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
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_654028-MLA101584124757_122025-AB.webp'
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
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_763837-MLA99441358514_112025-AB.webp'
  },
  {
    id: 'p30',
    name: 'Azúcar 1kg',
    category: 'Almacén',
    pricePerUnit: 740,
    originalPrice: 1000,
    packSize: 10,
    deliveryLabel: 'Llega mañana',
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_610051-MLA99934426521_112025-AB.webp'
  },
  {
    id: 'p31',
    name: 'Lentejas 500g',
    category: 'Almacén',
    pricePerUnit: 490,
    originalPrice: 670,
    packSize: 20,
    deliveryLabel: 'Llega mañana',
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_635283-MLA83776659918_042025-AB.webp'
  },
  {
    id: 'p32',
    name: 'Sal Fina 1kg',
    category: 'Almacén',
    pricePerUnit: 280,
    originalPrice: 390,
    packSize: 20,
    deliveryLabel: 'Llega mañana',
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_945789-MLA108644392432_032026-AB.webp'
  },
  {
    id: 'p10',
    name: 'Detergente 750ml',
    category: 'Limpieza',
    pricePerUnit: 870,
    originalPrice: 1200,
    packSize: 12,
    deliveryLabel: 'Llega mañana',
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_950707-MLA99439703546_112025-AB.webp'
  },
  {
    id: 'p11',
    name: 'Lavandina 1L',
    category: 'Limpieza',
    pricePerUnit: 390,
    originalPrice: 580,
    packSize: 12,
    deliveryLabel: 'Llega mañana',
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_723438-MLA99936067163_112025-AB.webp'
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
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_619790-MLA99451159466_112025-AB.webp'
  },
  {
    id: 'p34',
    name: 'Suavizante 500ml',
    category: 'Limpieza',
    pricePerUnit: 760,
    originalPrice: 1050,
    packSize: 12,
    deliveryLabel: 'Llega mañana',
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_844625-MLA107686680272_032026-AB.webp'
  },
  {
    id: 'p35',
    name: 'Esponja de Cocina x3',
    category: 'Limpieza',
    pricePerUnit: 310,
    originalPrice: 440,
    packSize: 24,
    deliveryLabel: 'Llega mañana',
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_789238-MLA46763408043_072021-AB.webp'
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
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_936743-MLA101582883899_122025-AB.webp'
  },
  {
    id: 'p36',
    name: 'Galletitas Dulces 150g',
    category: 'Snacks',
    pricePerUnit: 520,
    originalPrice: 720,
    packSize: 12,
    deliveryLabel: 'Llega mañana',
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_817896-MLA102399405608_122025-AB.webp'
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
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_654861-MLA99388381008_112025-AB.webp'
  },
  {
    id: 'p38',
    name: 'Alfajor Triple x3',
    category: 'Snacks',
    pricePerUnit: 890,
    originalPrice: 1200,
    packSize: 16,
    deliveryLabel: 'Llega mañana',
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_680707-MLA99843119907_112025-AB.webp'
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
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_768501-MLA96758613099_102025-AB.webp'
  },
  {
    id: 'p14',
    name: 'Pechuga de Pollo 1kg',
    category: 'Carnes',
    pricePerUnit: 2800,
    originalPrice: 3600,
    packSize: 6,
    deliveryLabel: 'Llega mañana',
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_939731-MLA95367222947_102025-AB.webp'
  },
  {
    id: 'p15',
    name: 'Carne Molida 500g',
    category: 'Carnes',
    pricePerUnit: 1900,
    originalPrice: 2500,
    packSize: 8,
    deliveryLabel: 'Llega mañana',
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_694176-MLA99910761153_112025-AB.webp'
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
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_872038-MLA99922584283_112025-AB.webp'
  },
  {
    id: 'p40',
    name: 'Salchicha Tipo Viena x6',
    category: 'Carnes',
    pricePerUnit: 1200,
    originalPrice: 1600,
    packSize: 12,
    deliveryLabel: 'Llega mañana',
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_633902-MLA99447182198_112025-AB.webp'
  },
  {
    id: 'p41',
    name: 'Jamón Cocido 200g',
    category: 'Carnes',
    pricePerUnit: 1500,
    originalPrice: 2000,
    packSize: 8,
    deliveryLabel: 'Llega mañana',
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_780489-MLA99819247215_112025-AB.webp'
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
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_736531-MLA93539722026_102025-AB.webp'
  },
  {
    id: 'p17',
    name: 'Lechuga Crespa x unidad',
    category: 'Verduras',
    pricePerUnit: 320,
    originalPrice: 450,
    packSize: 12,
    deliveryLabel: 'Llega mañana',
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_644298-MLA99418711406_112025-AB.webp'
  },
  {
    id: 'p18',
    name: 'Cebolla 1kg',
    category: 'Verduras',
    pricePerUnit: 390,
    originalPrice: 520,
    packSize: 10,
    deliveryLabel: 'Llega mañana',
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_652800-MLA95923497265_102025-AB.webp'
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
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_603808-MLA99339432494_112025-AB.webp'
  },
  {
    id: 'p43',
    name: 'Zanahoria 1kg',
    category: 'Verduras',
    pricePerUnit: 350,
    originalPrice: 490,
    packSize: 10,
    deliveryLabel: 'Llega mañana',
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_892699-MLA99936572587_112025-AB.webp'
  },
  {
    id: 'p44',
    name: 'Pimiento Rojo x3',
    category: 'Verduras',
    pricePerUnit: 480,
    originalPrice: 650,
    packSize: 12,
    deliveryLabel: 'Llega mañana',
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_745438-MLA99441538458_112025-AB.webp'
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
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_680916-MLA99423559236_112025-AB.webp'
  },
  {
    id: 'p20',
    name: 'Medialunas x6',
    category: 'Panadería',
    pricePerUnit: 650,
    originalPrice: 900,
    packSize: 20,
    deliveryLabel: 'Llega mañana',
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_974732-MLA93320807320_092025-AB.webp'
  },
  {
    id: 'p21',
    name: 'Facturas x6',
    category: 'Panadería',
    pricePerUnit: 720,
    originalPrice: 950,
    packSize: 16,
    deliveryLabel: 'Llega mañana',
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_892599-MLA99932689701_112025-AB.webp'
  },
  {
    id: 'p45',
    name: 'Bizcochos x6',
    category: 'Panadería',
    pricePerUnit: 580,
    originalPrice: 780,
    packSize: 20,
    deliveryLabel: 'Llega mañana',
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_600786-MLA80423329170_112024-AB.webp'
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
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_721273-MLA106345706015_022026-AB.webp'
  }
];

export type OrderStatus =
  | 'Pendiente'
  | 'En Preparación'
  | 'En Camino'
  | 'Entregado';

export const STATUS_CLASSES: Record<OrderStatus, string> = {
  Pendiente: 'bg-[#FEF9C3] text-[#854D0E]',
  'En Preparación': 'bg-[#DBEAFE] text-[#1E40AF]',
  'En Camino': 'bg-[#DCFCE7] text-[#166534]',
  Entregado: 'bg-[#F1F5F9] text-[#64748B]'
};

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
