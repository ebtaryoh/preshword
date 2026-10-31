import React from 'react';
import { Sparkles, ShieldCheck, Flame, Zap, Check, Utensils, Smile, Truck, CreditCard } from 'lucide-react';

const marqueeItems = [
  { text: "KITCHEN WARES & SOL-GEL COOKWARE", icon: Utensils, highlight: true, tag: "Flagship" },
  { text: "1500W BLENDERS & SMART TOASTERS", icon: Zap, highlight: true, tag: "Appliances" },
  { text: "24PC LUXURY DINING CUTLERY", icon: Sparkles, highlight: false, tag: "18/10 Steel" },
  { text: "BPA-FREE CHILDREN WARES", icon: Smile, highlight: true, tag: "Kids Wares" },
  { text: "SAME-DAY LAGOS HUB DISPATCH", icon: Truck, highlight: false, tag: "Express 2-4h" },
  { text: "PAY ON DELIVERY (LAGOS & ABUJA)", icon: CreditCard, highlight: false, tag: "Zero Risk" },
  { text: "100% NON-TOXIC & 2-YEAR WARRANTY", icon: ShieldCheck, highlight: true, tag: "Guaranteed" }
];

export default function MarqueeTicker() {
  return (
    <div className="relative py-3.5 bg-[#121110] text-white overflow-hidden border-y border-white/10 select-none marquee-container shadow-inner">
      {/* Subtle edge fade gradient */}
      <div className="absolute left-0 inset-y-0 w-16 bg-gradient-to-r from-[#121110] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-16 bg-gradient-to-l from-[#121110] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee gap-8 hover:[animation-play-state:paused] cursor-pointer">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-3.5 shrink-0 group">
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase transition-all border ${
                  item.highlight
                    ? 'bg-[#E04F16]/15 border-[#E04F16]/30 text-white'
                    : 'bg-white/5 border-white/10 text-zinc-300'
                }`}
              >
                <Icon
                  className={`w-3.5 h-3.5 ${
                    item.highlight ? 'text-[#E04F16]' : 'text-zinc-400'
                  }`}
                />
                <span className={item.highlight ? 'text-white' : 'text-zinc-300'}>
                  {item.text}
                </span>
                <span
                  className={`text-[9px] font-mono px-1.5 py-0.2 rounded font-extrabold uppercase ${
                    item.highlight
                      ? 'bg-[#E04F16] text-white'
                      : 'bg-white/10 text-zinc-400'
                  }`}
                >
                  {item.tag}
                </span>
              </div>
              <span className="text-zinc-600 font-mono text-xs">✦</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
