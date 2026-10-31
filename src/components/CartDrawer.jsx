import React, { useState } from 'react';
import { ArrowLeft, Trash2, ArrowRight, ShieldCheck, Tag, ShoppingBag, Truck, Check, MessageCircle } from 'lucide-react';
import { formatPrice } from '../utils/format';
import { products } from '../data/products';
import { buildWhatsAppOrderUrl } from '../utils/whatsapp';

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQty,
  onRemoveItem,
  onProceedCheckout,
  onClearCart,
  showToast
}) {
  const [promoInput, setPromoInput] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);

  if (!isOpen) return null;

  // Calculate items and pricing
  const cartItems = cart.map((item) => {
    const product = products.find((p) => p.id === item.id);
    return {
      ...item,
      product
    };
  }).filter((item) => item.product);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.product ? item.product.price * item.qty : 0),
    0
  );

  const FREE_SHIPPING_THRESHOLD = 50000;
  const deliveryFee = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 2500;
  const progressToFree = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
  const amountNeededForFree = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  // Promo discount
  let discountAmount = 0;
  if (appliedPromo === 'PRESH15' || appliedPromo === 'GENZ15') {
    discountAmount = Math.round(subtotal * 0.15);
  } else if (appliedPromo === 'SUNDAY20') {
    discountAmount = Math.round(subtotal * 0.20);
  }

  const finalTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    const code = promoInput.trim().toUpperCase();
    if (code === 'PRESH15' || code === 'GENZ15' || code === 'SUNDAY20') {
      setAppliedPromo(code);
      if (showToast) showToast(`Promo '${code}' applied (-15%)!`);
    } else {
      if (showToast) showToast('Invalid promo code. Try "PRESH15"');
    }
    setPromoInput('');
  };

  const handleInstantWhatsApp = () => {
    const whatsappUrl = buildWhatsAppOrderUrl({
      cartItems,
      total: finalTotal,
      subtotal,
      deliveryFee,
      discountAmount,
      customerName: 'Customer',
      address: 'Lagos'
    });
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-white border-l border-[#E8E6E1] shadow-2xl flex flex-col justify-between animate-slide-up">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-zinc-100 bg-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-[#F5F3EF] hover:bg-zinc-200 text-[#141312] flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Back"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <div>
                  <h3 className="font-extrabold text-lg sm:text-xl text-[#141312] tracking-tight">
                    Your cart
                  </h3>
                  <span className="text-xs text-zinc-500 font-medium">
                    {cartItems.reduce((acc, i) => acc + i.qty, 0)} {cartItems.length === 1 ? 'item' : 'items'}
                  </span>
                </div>
              </div>

              {/* Lagos hub tag */}
              <span className="px-2.5 py-1 rounded-full bg-[#25D366]/15 text-[#128C7E] text-[11px] font-mono font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                WHATSAPP READY
              </span>
            </div>

            {/* Free shipping progress indicator */}
            <div className="mt-3.5 p-3 rounded-2xl bg-[#F5F3EF] border border-black/5">
              <div className="flex items-center justify-between text-xs font-bold mb-1">
                <span className="flex items-center gap-1.5 text-zinc-700">
                  <Truck className="w-3.5 h-3.5 text-emerald-600" />
                  {amountNeededForFree === 0
                    ? '🎉 FREE NATIONWIDE DISPATCH UNLOCKED!'
                    : `Add ${formatPrice(amountNeededForFree)} for FREE Delivery`}
                </span>
                <span className="font-mono text-zinc-400">{progressToFree}%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-zinc-200 overflow-hidden">
                <div
                  className="h-full bg-emerald-500 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progressToFree}%` }}
                />
              </div>
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 divide-y divide-zinc-100">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.id} className="py-4 first:pt-0 last:pb-0 flex gap-3.5">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover bg-[#F5F3EF] border border-[#E8E6E1] shrink-0"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-extrabold text-xs sm:text-sm text-[#141312] truncate">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-zinc-400 hover:text-rose-500 transition-colors p-1 cursor-pointer shrink-0"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="font-mono text-[10px] text-zinc-400 uppercase">
                        {item.product.category}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      {/* Direct inline stepper */}
                      <div className="flex items-center bg-[#F5F3EF] rounded-xl border border-[#E8E6E1] p-0.5">
                        <button
                          onClick={() => onUpdateQty(item.id, -1)}
                          className="w-6 h-6 rounded-lg hover:bg-white flex items-center justify-center font-bold text-xs text-zinc-700 transition-colors cursor-pointer"
                        >
                          −
                        </button>
                        <span className="w-7 text-center font-bold text-xs text-[#141312]">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => onUpdateQty(item.id, 1)}
                          className="w-6 h-6 rounded-lg hover:bg-white flex items-center justify-center font-bold text-xs text-zinc-700 transition-colors cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      {/* Line total */}
                      <span className="font-extrabold text-sm text-[#141312]">
                        {formatPrice(item.product.price * item.qty)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-24 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#F5F3EF] flex items-center justify-center mb-3 text-2xl">
                  🛒
                </div>
                <h4 className="font-extrabold text-lg text-[#141312]">
                  Your cart is empty
                </h4>
                <p className="text-xs text-zinc-500 mt-1 max-w-xs leading-relaxed">
                  Explore our non-toxic cookware and tableware.
                </p>
                <button
                  onClick={onClose}
                  className="mt-5 px-6 py-2.5 rounded-full bg-[#141312] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#E04F16] transition-all cursor-pointer"
                >
                  Start Shopping
                </button>
              </div>
            )}
          </div>

          {/* Footer Order Summary & WhatsApp Action */}
          {cartItems.length > 0 && (
            <div className="p-4 sm:p-5 bg-white border-t border-zinc-100 shadow-xl">
              {/* Promo input */}
              <form onSubmit={handleApplyPromo} className="flex gap-2 mb-3">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder="Promo code (PRESH15)"
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#F5F3EF] border border-[#E8E6E1] font-mono text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#25D366] uppercase"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#141312] text-white hover:bg-[#25D366] font-mono font-bold text-xs transition-all uppercase cursor-pointer"
                >
                  APPLY
                </button>
              </form>

              {appliedPromo && (
                <div className="mb-3 px-3 py-1.5 rounded-xl bg-[#FFF7ED] text-[#E04F16] flex items-center justify-between text-xs font-mono font-bold border border-[#E04F16]/20">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" />
                    PROMO {appliedPromo} (-15%)
                  </span>
                  <button onClick={() => setAppliedPromo(null)} className="text-zinc-500 hover:text-black cursor-pointer">
                    ✕
                  </button>
                </div>
              )}

              {/* Order Summary Box */}
              <div className="space-y-1.5 text-xs font-medium text-zinc-600 mb-3 bg-[#F5F3EF] p-3 rounded-2xl border border-black/5">
                <div className="flex justify-between">
                  <span>Items total</span>
                  <span className="font-extrabold text-[#141312]">{formatPrice(subtotal)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-bold">
                    <span>VIP Discount</span>
                    <span className="font-mono">−{formatPrice(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span className="font-bold text-[#141312]">
                    {deliveryFee === 0 ? (
                      <span className="text-emerald-600">FREE within Lagos</span>
                    ) : (
                      formatPrice(deliveryFee)
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-[#141312] pt-1.5 border-t border-zinc-200">
                  <span>Total</span>
                  <span className="text-lg font-black text-[#141312]">
                    {formatPrice(finalTotal)}
                  </span>
                </div>
              </div>

              {/* Main Primary Action: Send Order to WhatsApp */}
              <button
                onClick={() => {
                  onClose();
                  onProceedCheckout(finalTotal, cartItems, discountAmount);
                }}
                className="w-full py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-extrabold text-sm tracking-wide transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Send to WhatsApp ({formatPrice(finalTotal)})</span>
              </button>

              {/* Quick 1-tap WhatsApp without modal */}
              <div className="mt-2.5 flex items-center justify-between text-xs text-zinc-400">
                <button
                  onClick={handleInstantWhatsApp}
                  className="text-zinc-500 hover:text-[#25D366] font-medium transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>Direct WhatsApp Link →</span>
                </button>
                <button
                  onClick={() => {
                    onClearCart();
                    if (showToast) showToast('Bag cleared');
                  }}
                  className="hover:text-zinc-700 transition-colors cursor-pointer"
                >
                  Clear cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
