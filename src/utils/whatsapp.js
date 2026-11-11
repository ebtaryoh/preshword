import { formatPrice } from './format';

export const WHATSAPP_NUMBER = '2347016984248';
export const WHATSAPP_DISPLAY = '+234 701 698 4248';

/**
 * Gets the current store base URL for live WhatsApp product links.
 */
function getStoreOrigin() {
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin;
  }
  return 'https://preshword.vercel.app';
}

/**
 * Builds encoded WhatsApp URL for an entire cart order.
 * Follows industry best-practice for WhatsApp commerce:
 * - Structured receipt with Order Reference ID
 * - Line-item quantities and price calculation
 * - Direct clickable item links for vendor and buyer verification
 * - Breakdown of Subtotal, Discount, Delivery, and Grand Total
 * - Delivery details (Name, Phone, Address, State)
 * - Clear Direct Bank Transfer prompt (no pay-on-delivery)
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
  paymentMethod = 'Direct Bank Transfer',
  orderRef = ''
}) {
  const ref = orderRef || `PSW-${Math.floor(100000 + Math.random() * 900000)}`;
  const origin = getStoreOrigin();

  const itemsList = cartItems
    .map((item, idx) => {
      const p = item.product || {};
      const linePrice = (p.price || 0) * item.qty;
      const productLink = p.id ? `${origin}/#item-${p.id}` : '';
      return `${idx + 1}. *${p.name || 'Household Essential'}*\n   • Qty: ${item.qty} × ${formatPrice(p.price || 0)} = *${formatPrice(linePrice)}*${productLink ? `\n   • View Item: ${productLink}` : ''}`;
    })
    .join('\n\n');

  const text = `🛍️ *NEW ORDER — PRESHWORLD HOUSEHOLD ESSENTIAL*
📋 *ORDER REF:* #${ref}
──────────────────────────────
${itemsList}
──────────────────────────────
• Items Subtotal: *${formatPrice(subtotal)}*
${discountAmount > 0 ? `• VIP Discount: *-${formatPrice(discountAmount)}*\n` : ''}• Lagos Hub Dispatch: *${formatPrice(deliveryFee)}*
💰 *TOTAL PAYABLE: ${formatPrice(total)}*

📍 *DELIVERY DETAILS:*
• Name: ${customerName.trim() || 'Valued Customer'}
• Phone: ${phone.trim() || 'Provided on chat'}
• Delivery Address: ${address.trim() || 'Lagos'}
• State: ${state}

💳 *PAYMENT METHOD:*
• Direct Bank Transfer (Please send store account details)

Please confirm item availability and send your official account details for payment transfer. Thank you!`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/**
 * Builds encoded WhatsApp URL for a single instant item inquiry/order with direct product link.
 */
export function buildWhatsAppSingleItemUrl(product, qty = 1) {
  const lineTotal = (product?.price || 0) * qty;
  const origin = getStoreOrigin();
  const productLink = product?.id ? `${origin}/#item-${product.id}` : '';

  const text = `Hello Preshworld Household Essential! 👋
I would like to order this item:

🍳 *${product?.name || 'Cookware Item'}*
• Quantity: ${qty}
• Price: *${formatPrice(lineTotal)}*
• Category: ${product?.category || 'Cookware'}${productLink ? `\n• View Item: ${productLink}` : ''}

💳 *Payment:* Direct Bank Transfer
📍 *Delivery:* Lagos Dispatch

Please confirm availability and send your official bank details for payment. Thank you!`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/**
 * Builds encoded WhatsApp URL for a custom bundle set order.
 */
export function buildWhatsAppBundleUrl({ items = [], bundlePrice = 0, rawTotal = 0, savings = 0 }) {
  const origin = getStoreOrigin();
  const itemsText = items
    .map((it, idx) => `${idx + 1}. *${it?.name}* (${formatPrice(it?.price)})\n   • Link: ${origin}/#item-${it?.id}`)
    .join('\n');

  const text = `Hello Preshworld Household Essential! 👋
I would like to order the *Custom 3-Piece Bundle Set* (-15% OFF):

${itemsText}

• Original Price: ${formatPrice(rawTotal)}
• Bundle Discount: -${formatPrice(savings)}
💰 *SPECIAL BUNDLE PRICE: ${formatPrice(bundlePrice)}*

💳 *Payment:* Direct Bank Transfer
📍 *Delivery:* Lagos Dispatch

Please confirm availability and send your bank details for payment transfer. Thank you!`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
