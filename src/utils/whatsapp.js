import { formatPrice } from './format';

export const WHATSAPP_NUMBER = '2349137421838';
export const WHATSAPP_DISPLAY = '+234 913 742 1838';

/**
 * Builds encoded WhatsApp URL for an entire cart order.
 */
export function buildWhatsAppOrderUrl({
  cartItems = [],
  total = 0,
  subtotal = 0,
  deliveryFee = 0,
  discountAmount = 0,
  customerName = '',
  phone = '',
  address = '',
  state = 'Lagos',
  paymentMethod = 'Pay on Delivery',
  orderRef = ''
}) {
  const ref = orderRef || `PSW-${Math.floor(100000 + Math.random() * 900000)}`;

  const itemsList = cartItems
    .map(
      (item, idx) =>
        `${idx + 1}. *${item.product?.name || 'Cookware'}* x${item.qty}\n   ${formatPrice(
          (item.product?.price || 0) * item.qty
        )}`
    )
    .join('\n\n');

  const text = `Hello Preshword Living! 👋
I would like to place an order:

📋 *ORDER #${ref}*
────────────────────
${itemsList}
────────────────────
• Items Subtotal: *${formatPrice(subtotal)}*
${discountAmount > 0 ? `• VIP Discount: *-${formatPrice(discountAmount)}*\n` : ''}• Delivery: *${formatPrice(deliveryFee)} (Lagos Dispatch)*
💰 *TOTAL PAYABLE: ${formatPrice(total)}*

📍 *DELIVERY DETAILS:*
• Name: ${customerName.trim() || 'Valued Customer'}
• Phone: ${phone.trim() || 'Provided on chat'}
• Address: ${address.trim() || 'Lagos'}
• State: ${state}
• Payment Preference: ${paymentMethod}

Please confirm availability and dispatch schedule. Thank you!`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/**
 * Builds encoded WhatsApp URL for a single instant item inquiry/order.
 */
export function buildWhatsAppSingleItemUrl(product, qty = 1) {
  const lineTotal = (product?.price || 0) * qty;

  const text = `Hello Preshword Living! 👋
I would like to order:

🍳 *${product?.name || 'Cookware Item'}*
• Quantity: ${qty}
• Price: *${formatPrice(lineTotal)}*
• Category: ${product?.category || 'Cookware'}

Please confirm availability and how soon you can dispatch to my address. Thank you!`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/**
 * Builds encoded WhatsApp URL for a custom bundle set order.
 */
export function buildWhatsAppBundleUrl({ items = [], bundlePrice = 0, rawTotal = 0, savings = 0 }) {
  const itemsText = items.map((it, idx) => `${idx + 1}. *${it?.name}* (${formatPrice(it?.price)})`).join('\n');
  const text = `Hello Preshword Living! 👋
I would like to order the *Custom 3-Piece Bundle Set* (-15% OFF):

${itemsText}

• Original Price: ${formatPrice(rawTotal)}
• Bundle Discount: -${formatPrice(savings)}
💰 *SPECIAL BUNDLE PRICE: ${formatPrice(bundlePrice)}*

Please confirm availability and how soon you can dispatch to my address in Lagos. Thank you!`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
