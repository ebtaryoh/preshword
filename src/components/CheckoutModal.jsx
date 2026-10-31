import React, { useState } from 'react';
import { X, MessageCircle, CheckCircle2, ShieldCheck, ArrowRight, Building2, Banknote, CreditCard, Copy, Check, ExternalLink } from 'lucide-react';
import { formatPrice } from '../utils/format';
import { buildWhatsAppOrderUrl, WHATSAPP_DISPLAY } from '../utils/whatsapp';
import confetti from 'canvas-confetti';

export default function CheckoutModal({
  isOpen,
  onClose,
  total,
  cartItems,
  discount,
  onClearCart
}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('Lagos');
  const [paymentMethod, setPaymentMethod] = useState('Pay on Delivery (Lagos)');
  const [confirmedOrder, setConfirmedOrder] = useState(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.product ? item.product.price * item.qty : 0),
    0
  );
  const deliveryFee = total > subtotal - discount ? total - (subtotal - discount) : 0;

  const handleSendToWhatsApp = (e) => {
    e.preventDefault();

    const orderRef = `PSW-${Math.floor(100000 + Math.random() * 900000)}`;
    const whatsappUrl = buildWhatsAppOrderUrl({
      cartItems,
      total,
      subtotal,
      deliveryFee,
      discountAmount: discount,
      customerName: name,
      phone,
      address,
      state,
      paymentMethod,
      orderRef
    });

    setConfirmedOrder({
      orderRef,
      whatsappUrl,
      name: name || 'Valued Customer',
      total
    });

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');

    onClearCart();

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.5 },
        colors: ['#25D366', '#E04F16', '#141312']
      });
    } catch {}
  };

  const handleCopyRef = () => {
    if (!confirmedOrder) return;
    navigator.clipboard.writeText(confirmedOrder.orderRef);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/65 backdrop-blur-sm transition-opacity"
        onClick={confirmedOrder ? onClose : undefined}
      />

      <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden border border-[#E8E6E1] shadow-2xl z-10 animate-scale-in">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-zinc-100 bg-[#FBF9F5] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center">
              <MessageCircle className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg text-[#141312] leading-tight">
                {confirmedOrder ? 'Order Sent to WhatsApp' : 'Quick WhatsApp Order'}
              </h3>
              <span className="text-[11px] text-zinc-500 font-medium">
                {confirmedOrder ? 'Chat directly with our Lagos team' : 'Instant dispatch confirmation'}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-zinc-200 text-zinc-500 hover:text-[#141312] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {!confirmedOrder ? (
          /* Simple 1-Screen Form */
          <form onSubmit={handleSendToWhatsApp} className="p-5 sm:p-6">
            {/* Quick Order Capsule */}
            <div className="mb-4 p-3.5 rounded-2xl bg-[#F5F3EF] border border-black/5 flex items-center justify-between">
              <div>
                <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase block">
                  ORDER SUMMARY ({cartItems.length} {cartItems.length === 1 ? 'ITEM' : 'ITEMS'})
                </span>
                <span className="font-extrabold text-lg text-[#141312]">
                  {formatPrice(total)}
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#25D366]/15 text-[#128C7E] font-bold text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                WhatsApp Live
              </span>
            </div>

            {/* Fields */}
            <div className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-mono font-bold uppercase text-zinc-500 mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Tunde Balogun"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F3EF] border border-[#E8E6E1] font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#25D366]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase text-zinc-500 mb-1">
                    WhatsApp Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0802 345 6789"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F3EF] border border-[#E8E6E1] font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#25D366]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase text-zinc-500 mb-1">
                    State / Region
                  </label>
                  <select
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F3EF] border border-[#E8E6E1] font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#25D366] cursor-pointer"
                  >
                    <option value="Lagos">Lagos (Same-Day Hub Dispatch)</option>
                    <option value="Abuja">Abuja FCT (48h Express)</option>
                    <option value="Rivers">Rivers / Port Harcourt (48h)</option>
                    <option value="Oyo">Oyo / Ibadan (24-48h)</option>
                    <option value="Nationwide">Other States Nationwide</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold uppercase text-zinc-500 mb-1">
                  Delivery Address & Landmark
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. 14 Admiralty Way, Lekki Phase 1"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F3EF] border border-[#E8E6E1] font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#25D366]"
                />
              </div>

              {/* Payment Preference */}
              <div>
                <label className="block text-[11px] font-mono font-bold uppercase text-zinc-500 mb-1.5">
                  How do you prefer to pay?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <label
                    onClick={() => setPaymentMethod('Pay on Delivery (Lagos)')}
                    className={`p-2.5 rounded-xl border text-xs font-bold flex items-center gap-2 cursor-pointer transition-all ${
                      paymentMethod.includes('Delivery')
                        ? 'bg-[#25D366]/10 border-[#25D366] text-[#141312]'
                        : 'border-[#E8E6E1] text-zinc-600 hover:bg-zinc-50'
                    }`}
                  >
                    <Banknote className="w-4 h-4 text-[#25D366]" />
                    <span>Pay on Delivery</span>
                  </label>

                  <label
                    onClick={() => setPaymentMethod('Bank Transfer')}
                    className={`p-2.5 rounded-xl border text-xs font-bold flex items-center gap-2 cursor-pointer transition-all ${
                      paymentMethod.includes('Transfer')
                        ? 'bg-[#25D366]/10 border-[#25D366] text-[#141312]'
                        : 'border-[#E8E6E1] text-zinc-600 hover:bg-zinc-50'
                    }`}
                  >
                    <Building2 className="w-4 h-4 text-[#25D366]" />
                    <span>Bank Transfer</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Big Send on WhatsApp CTA Button */}
            <div className="mt-6 pt-4 border-t border-zinc-100">
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-extrabold text-sm tracking-wide transition-all shadow-md active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Send Order to WhatsApp ({formatPrice(total)})</span>
              </button>

              <p className="mt-2 text-center text-[11px] text-zinc-400 font-mono">
                Opens directly in WhatsApp with your prefilled order details.
              </p>
            </div>
          </form>
        ) : (
          /* Confirmation Screen */
          <div className="p-6 text-center">
            <div className="w-14 h-14 rounded-full bg-[#25D366]/15 text-[#25D366] mx-auto flex items-center justify-center mb-3">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-extrabold text-xl text-[#141312]">
              Order Sent to WhatsApp!
            </h3>
            <p className="mt-1 text-xs text-zinc-500">
              Our dispatch team has received your order draft.
            </p>

            <div className="my-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#F5F3EF] border border-[#E8E6E1]">
              <span className="font-mono font-bold text-sm text-[#141312]">{confirmedOrder.orderRef}</span>
              <button
                onClick={handleCopyRef}
                className="p-1 rounded text-zinc-400 hover:text-black transition-colors cursor-pointer"
                title="Copy reference"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            <div className="space-y-2.5 my-4">
              <a
                href={confirmedOrder.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Open WhatsApp Chat Again</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onClose}
                className="w-full py-2.5 px-4 rounded-xl bg-[#F5F3EF] hover:bg-zinc-200 text-[#141312] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                Done / Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
