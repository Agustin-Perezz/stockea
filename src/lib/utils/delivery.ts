const DAY_NAMES = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado'
];

export function getDeliveryMessage(deliveryDay: number | null): string | null {
  if (deliveryDay == null) return null;
  const today = new Date().getDay(); // 0 = Sunday
  const diff = (deliveryDay - today + 7) % 7;

  if (diff === 1) return 'Llega mañana';
  if (diff >= 2 && diff <= 6) return `Llega el ${DAY_NAMES[deliveryDay]}`;
  return null; // Today or passed — don't show label
}
