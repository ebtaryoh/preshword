import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 animate-slide-down pointer-events-none px-4 w-full max-w-md">
      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white text-[#141312] border border-[#E8E6E1] shadow-xl text-xs sm:text-sm font-semibold">
        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-3.5 h-3.5" />
        </div>
        <span className="flex-1 truncate">{message}</span>
      </div>
    </div>
  );
}
