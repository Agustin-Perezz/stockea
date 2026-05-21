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

export function elapsedTime(date: Date): string {
  const mins = Math.floor((Date.now() - date.getTime()) / 60000);
  if (mins < 60) return `hace ${mins}m`;
  const hrs = Math.floor(mins / 60);
  return `hace ${hrs}h`;
}

export function orderTotal(items: OrderItem[]): number {
  return items.reduce((sum, i) => sum + i.fulfilledQty * i.pricePerUnit, 0);
}
