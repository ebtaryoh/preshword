import React, { useState, useEffect } from 'react';
import { Sparkles, Copy, Check, ArrowRight } from 'lucide-react';

const messages = [
  { text: "USE CODE 'PRESH15' FOR 15% OFF YOUR FIRST ORDER", code: "PRESH15" },
  { text: "SAME-DAY LAGOS DISPATCH • FREE DELIVERY OVER ₦50,000", code: null },
  { text: "100% NON-TOXIC SOL-GEL MINERAL CERAMIC // ZERO PTFE", code: null },
  { text: "PAY ON DELIVERY AVAILABLE ACROSS LAGOS STATE", code: null }
];

export default function AnnouncementBar({ onOpenPromo, showToast }) {
  const [index, setIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
      setCopied(false);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const current = messages[index];

  const handleCopy = (code) => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopied(true);
    if (showToast) showToast(`Promo code '${code}' copied!`);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#141312] text-white text-[11px] font-mono tracking-wider py-2 px-4 border-b border-white/10 relative z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Status */}
        <div className="hidden sm:flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E04F16] animate-pulse" />
          <span className="text-zinc-400 uppercase tracking-widest text-[10px]">
            LAGOS HUB • LIVE
          </span>
        </div>

        {/* Center Rotating Message */}
        <div className="flex-1 flex items-center justify-center gap-2 text-center overflow-hidden">
          <span className="truncate text-zinc-200 font-medium text-xs font-sans">
            {current.text}
          </span>
          {current.code && (
            <button
              onClick={() => handleCopy(current.code)}
              className="ml-1 px-2 py-0.5 rounded-md bg-[#E04F16] hover:bg-[#C83E0A] text-white font-mono font-bold text-[10px] transition-colors shrink-0 flex items-center gap-1 active:scale-95 cursor-pointer"
            >
              {copied ? <Check className="w-3 h-3 stroke-[3]" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'COPIED' : 'COPY'}</span>
            </button>
          )}
        </div>

        {/* Right Help / Direct Catalog Link */}
        <div className="hidden md:flex items-center gap-3 text-[10px] text-zinc-400 font-mono">
          <span>2-YEAR WARRANTY</span>
          <span className="text-zinc-700">•</span>
          <a
            href="#shop-catalog"
            className="text-white hover:text-[#E04F16] font-semibold transition-colors flex items-center gap-1"
          >
            EXPLORE CATALOG <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
