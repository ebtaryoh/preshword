import React, { useState } from 'react';
import { ArrowLeft, Trash2, ArrowRight, ShieldCheck, Tag, ShoppingBag, Truck, Check, MessageCircle, Zap } from 'lucide-react';
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

  // Standard express delivery fee
  const deliveryFee = subtotal > 0 ? 2500 : 0;

  // Promo discount
  let discountAmount = 0;
  if (appliedPromo === 'PRESHWORLD15' || appliedPromo === 'PRESH15' || appliedPromo === 'GENZ15') {
    discountAmount = Math.round(subtotal * 0.15);
  } else if (appliedPromo === 'SUNDAY20') {
    discountAmount = Math.round(subtotal * 0.20);
  }

  const finalTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    const code = promoInput.trim().toUpperCase();
    if (code === 'PRESHWORLD15' || code === 'PRESH15' || code === 'GENZ15' || code === 'SUNDAY20') {
      setAppliedPromo(code);
      if (showToast) showToast(`Promo '${code}' applied (-15%)!`);
    } else {
      if (showToast) showToast('Invalid promo code. Try "PRESHWORLD15"');
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
      phone: '',
      address: '',
      paymentMethod: 'Pay on Delivery (Lagos)'
    });
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-zinc-100 bg-white">
            <div className="flex items-center justify-between">
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-[#F5F3EF] hover:bg-zinc-200 text-[#141312] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Back"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <div className="text-center">
                <h3 className="font-extrabold text-base text-[#141312]">
                  Shopping Bag ({cartItems.reduce((acc, it) => acc + it.qty, 0)})
                </h3>
              </div>

              <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                WHATSAPP READY
              </span>
            </div>

            {/* Express Dispatch Notice Banner */}
            <div className="mt-3.5 p-3 rounded-2xl bg-[#FFF7ED] border border-[#E04F16]/15 flex items-center justify-between text-xs font-bold text-zinc-800">
              <span className="flex items-center gap-1.5 text-[#E04F16]">
                <Zap className="w-3.5 h-3.5 text-[#E04F16]" />
                <span>Express Lagos Dispatch • Lekki, VI & Mainland (2–4 hrs)</span>
              </span>
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
                    className="w-20 h-20 rounded-2xl object-cover bg-[#F5F3EF] shrink-0 border border-zinc-100"
                  />

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-bold text-sm text-[#141312] truncate">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-zinc-400 hover:text-red-500 transition-colors p-1 cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="font-mono text-xs text-zinc-400 uppercase">
                        {item.product.category}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <span className="font-extrabold text-sm text-[#141312]">
                        {formatPrice(item.product.price * item.qty)}
                      </span>

                      {/* Stepper */}
                      <div className="flex items-center bg-[#F5F3EF] rounded-xl border border-zinc-200 p-0.5">
                        <button
                          onClick={() => onUpdateQty(item.id, Math.max(1, item.qty - 1))}
                          className="w-7 h-7 rounded-lg hover:bg-white text-[#141312] font-bold text-sm flex items-center justify-center transition-colors cursor-pointer"
                        >
                          −
                        </button>
                        <span className="w-7 text-center font-bold text-xs text-[#141312]">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => onUpdateQty(item.id, item.qty + 1)}
                          className="w-7 h-7 rounded-lg hover:bg-white text-[#141312] font-bold text-sm flex items-center justify-center transition-colors cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-[#F5F3EF] flex items-center justify-center text-zinc-400 mb-3">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-base text-[#141312]">Your bag is empty</h4>
                <p className="text-xs text-zinc-500 mt-1 max-w-xs">
                  Explore our curated kitchen wares, commercial blenders, cutlery sets, and children wares.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-5 py-2.5 rounded-full bg-[#141312] text-white text-xs font-bold hover:bg-[#E04F16] transition-colors cursor-pointer"
                >
                  Explore Collection
                </button>
              </div>
            )}
          </div>

          {/* Footer Checkout Bar */}
          {cartItems.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-zinc-100 bg-white">
              {/* Promo input */}
              <form onSubmit={handleApplyPromo} className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  placeholder="Promo code (e.g. PRESH15)"
                  className="flex-1 px-3.5 py-2 rounded-xl bg-[#F5F3EF] border border-[#E8E6E1] text-xs font-mono uppercase focus:outline-none focus:ring-1 focus:ring-[#E04F16]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#141312] hover:bg-[#E04F16] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </form>

              {appliedPromo && (
                <div className="mb-2 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-mono flex items-center justify-between">
                  <span>
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
                  <span>Items subtotal</span>
                  <span className="font-extrabold text-[#141312]">{formatPrice(subtotal)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-bold">
                    <span>VIP Discount</span>
                    <span className="font-mono">−{formatPrice(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Lagos Rider Delivery</span>
                  <span className="font-bold text-[#141312]">
                    {formatPrice(deliveryFee)}
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
