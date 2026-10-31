export function formatPrice(amount) {
  if (typeof amount !== 'number') return '₦0';
  return '₦' + amount.toLocaleString('en-NG');
}

export function calculateDiscount(price, originalPrice) {
  if (!originalPrice || originalPrice <= price) return null;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}

