import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Toast({ toast, onOpenCart }) {
  if (!toast) return null;

  const isObject = typeof toast === 'object' && toast !== null;
  const message = isObject ? toast.message : toast;
  const showBagAction = isObject ? toast.showBagAction : true;

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 animate-slide-down px-4 w-full max-w-md pointer-events-none">
      <div className="pointer-events-auto flex items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-[#141312] text-white border border-white/10 shadow-2xl text-xs sm:text-sm font-semibold">
        <div className="flex items-center gap-2.5 truncate">
          <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-3.5 h-3.5" />
          </div>
          <span className="truncate">{message}</span>
        </div>

        {showBagAction && onOpenCart && (
          <button
            onClick={onOpenCart}
            className="px-2.5 py-1 rounded-xl bg-white/15 hover:bg-[#E04F16] text-white text-[11px] font-bold uppercase tracking-wider transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
          >
            <span>View Bag</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        )}
      </div>
    </div>
  );
}
