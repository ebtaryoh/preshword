import React, { useState } from 'react';
import { Sparkles, Check, ShoppingBag, Flame, MessageCircle } from 'lucide-react';
import { products } from '../data/products';
import { formatPrice } from '../utils/format';
import { buildWhatsAppBundleUrl } from '../utils/whatsapp';
import confetti from 'canvas-confetti';

export default function BundleBuilder({ onAddBundle, showToast }) {
  const cookwareOptions = products.filter(p => [1, 3, 11].includes(p.id));
  const prepOptions = products.filter(p => [4, 5, 2].includes(p.id));
  const diningOptions = products.filter(p => [6, 7, 9].includes(p.id));

  const [selectedCookware, setSelectedCookware] = useState(cookwareOptions[0]);
  const [selectedPrep, setSelectedPrep] = useState(prepOptions[0]);
  const [selectedDining, setSelectedDining] = useState(diningOptions[0]);

  const rawTotal = (selectedCookware?.price || 0) + (selectedPrep?.price || 0) + (selectedDining?.price || 0);
  const bundleDiscountRate = 0.15;
  const savings = Math.round(rawTotal * bundleDiscountRate);
  const bundlePrice = rawTotal - savings;

  const handleAddBundle = () => {
    const items = [selectedCookware, selectedPrep, selectedDining].filter(Boolean);
    onAddBundle(items, bundlePrice);

    try {
      confetti({
        particleCount: 45,
        spread: 65,
        origin: { y: 0.6 },
        colors: ['#E04F16', '#141312', '#FFFFFF']
      });
    } catch {}

    if (showToast) showToast(`Custom 3-Piece Kit added with 15% savings (-${formatPrice(savings)})!`);
  };

  return (
    <section id="bundle-builder" className="py-16 sm:py-24 bg-[#141312] text-white relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#E04F16]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E04F16] text-white font-mono text-[10px] font-black uppercase mb-3">
            <Flame className="w-3.5 h-3.5" />
            <span>THE CHEF'S TRIAD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.03em] text-white">
            Build Your Custom Set.
          </h2>
          <p className="mt-2 text-zinc-400 text-sm">
            Select 1 Cookware + 1 Prep Tool + 1 Dining Set. Instantly receive an automatic <strong className="text-[#E04F16]">15% bundle discount</strong> + free express Lagos shipping.
          </p>
        </div>

        {/* 3 Step Selectors */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {/* Step 1: Cookware */}
          <div className="bg-[#1C1A19] p-4 sm:p-5 rounded-3xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#E04F16]">
                  STEP 01 // VESSEL
                </span>
                <span className="text-xs text-zinc-400">1 Piece</span>
              </div>
              <h3 className="font-bold text-lg text-white mb-3">
                Select Your Cookware
              </h3>

              <div className="space-y-2.5">
                {cookwareOptions.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedCookware(item)}
                    className={`p-3 rounded-2xl flex items-center gap-3 cursor-pointer transition-all border ${
                      selectedCookware?.id === item.id
                        ? 'bg-white/10 border-[#E04F16] text-white'
                        : 'bg-white/5 border-transparent text-zinc-400 hover:bg-white/8 hover:text-zinc-200'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-xl object-cover bg-black/40 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-xs truncate text-white">{item.name}</p>
                      <p className="text-[11px] font-mono text-[#E04F16]">{formatPrice(item.price)}</p>
                    </div>
                    {selectedCookware?.id === item.id && (
                      <div className="w-5 h-5 rounded-full bg-[#E04F16] text-white flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Step 2: Appliances & Cutlery */}
          <div className="bg-[#1C1A19] p-4 sm:p-5 rounded-3xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#E04F16]">
                  STEP 02 // APPLIANCE & CUTLERY
                </span>
                <span className="text-xs text-zinc-400">1 Piece</span>
              </div>
              <h3 className="font-bold text-lg text-white mb-3">
                Select Appliance or Cutlery
              </h3>

              <div className="space-y-2.5">
                {prepOptions.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedPrep(item)}
                    className={`p-3 rounded-2xl flex items-center gap-3 cursor-pointer transition-all border ${
                      selectedPrep?.id === item.id
                        ? 'bg-white/10 border-[#E04F16] text-white'
                        : 'bg-white/5 border-transparent text-zinc-400 hover:bg-white/8 hover:text-zinc-200'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-xl object-cover bg-black/40 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-xs truncate text-white">{item.name}</p>
                      <p className="text-[11px] font-mono text-[#E04F16]">{formatPrice(item.price)}</p>
                    </div>
                    {selectedPrep?.id === item.id && (
                      <div className="w-5 h-5 rounded-full bg-[#E04F16] text-white flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Step 3: Housewares & Children Wares */}
          <div className="bg-[#1C1A19] p-4 sm:p-5 rounded-3xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#E04F16]">
                  STEP 03 // HOUSE & CHILDREN WARE
                </span>
                <span className="text-xs text-zinc-400">1 Piece</span>
              </div>
              <h3 className="font-bold text-lg text-white mb-3">
                Select House or Children Ware
              </h3>

              <div className="space-y-2.5">
                {diningOptions.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedDining(item)}
                    className={`p-3 rounded-2xl flex items-center gap-3 cursor-pointer transition-all border ${
                      selectedDining?.id === item.id
                        ? 'bg-white/10 border-[#E04F16] text-white'
                        : 'bg-white/5 border-transparent text-zinc-400 hover:bg-white/8 hover:text-zinc-200'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-xl object-cover bg-black/40 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-xs truncate text-white">{item.name}</p>
                      <p className="text-[11px] font-mono text-[#E04F16]">{formatPrice(item.price)}</p>
                    </div>
                    {selectedDining?.id === item.id && (
                      <div className="w-5 h-5 rounded-full bg-[#E04F16] text-white flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Live Calculation Bar */}
        <div className="mt-8 p-5 sm:p-7 rounded-3xl bg-[#1C1A19] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#E04F16] text-white flex items-center justify-center shrink-0">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-base text-white">Your Custom 3-Piece Kit</p>
              <p className="text-xs text-zinc-400 mt-0.5">
                Original {formatPrice(rawTotal)} · Save {formatPrice(savings)} with code AUTO-TRIAD
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <div className="text-center sm:text-right w-full sm:w-auto">
              <span className="text-xs text-zinc-500 font-mono line-through block">
                {formatPrice(rawTotal)}
              </span>
              <span className="font-black text-2xl text-white">
                {formatPrice(bundlePrice)}
              </span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleAddBundle}
                className="flex-1 sm:flex-none py-3.5 px-5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs uppercase tracking-wider transition-all border border-white/15 active:scale-95 cursor-pointer"
              >
                Add to Bag (-15%)
              </button>

              <a
                href={buildWhatsAppBundleUrl({
                  items: [selectedCookware, selectedPrep, selectedDining].filter(Boolean),
                  bundlePrice,
                  rawTotal,
                  savings
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 py-3.5 px-5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-[#141312] font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#25D366]/20 active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Order on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
