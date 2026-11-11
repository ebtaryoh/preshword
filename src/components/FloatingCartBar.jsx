import React from 'react';
import { ShoppingBag, ArrowRight, MessageCircle } from 'lucide-react';
import { formatPrice } from '../utils/format';

export default function FloatingCartBar({
  cartCount,
  cartTotal,
  onOpenCart,
  isVisible = true
}) {
  if (!isVisible || cartCount === 0) return null;

  return (
    <aside
      aria-label="Floating shopping bag summary"
      className="fixed z-40 transition-all duration-300 animate-slide-up
                 bottom-[76px] left-3 right-3 sm:bottom-6 sm:right-6 sm:left-auto sm:max-w-md"
    >
      <div
        onClick={onOpenCart}
        className="w-full bg-[#141312] text-white p-3 sm:p-3.5 rounded-2xl sm:rounded-3xl border border-white/15 shadow-2xl backdrop-blur-xl flex items-center justify-between gap-3 cursor-pointer hover:border-[#E04F16]/50 transition-all group"
      >
        {/* Left: Bag Icon with badge + Count + Live Subtotal */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#E04F16] transition-colors">
            <ShoppingBag className="w-5 h-5 text-white" />
            <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.2 rounded-full bg-[#E04F16] text-white font-mono font-extrabold text-[10px] border border-[#141312] shadow-sm animate-pulse">
              {cartCount}
            </span>
          </div>

          <div className="truncate">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-zinc-300">
                {cartCount} {cartCount === 1 ? 'item selected' : 'items selected'}
              </span>
              <span className="w-1 h-1 rounded-full bg-zinc-500" />
              <span className="text-xs font-mono font-black text-emerald-400">
                {formatPrice(cartTotal)}
              </span>
            </div>
            <p className="text-[10px] text-zinc-400 truncate">
              Tap to review & complete WhatsApp order
            </p>
          </div>
        </div>

        {/* Right: Quick Action Pill */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenCart();
            }}
            className="px-3.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-md active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-black stroke-black hidden sm:inline" />
            <span>Order</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
