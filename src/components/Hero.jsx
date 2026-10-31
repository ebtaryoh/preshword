import React, { useState } from 'react';
import {
  Utensils,
  Star,
  ShieldCheck,
  ArrowRight,
  Flame,
  Truck,
  Check,
  MessageCircle,
  Sparkles,
  Layers,
  Leaf,
  RotateCcw,
  Clock,
  Zap,
  ShoppingBag,
  BadgeCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { WHATSAPP_NUMBER, buildWhatsAppSingleItemUrl } from '../utils/whatsapp';
import { formatPrice } from '../utils/format';
import { products } from '../data/products';

export default function Hero({ onExplore, onQuickAdd, onSelectCategory }) {
  const [added, setAdded] = useState(false);

  // Flagship featured product (ID 1: Luxury Sol-Gel Ceramic Cookware Set)
  const flagshipProduct = products.find((p) => p.id === 1) || products[0];

  const handleHeroQuickAdd = () => {
    onQuickAdd(flagshipProduct.id);
    setAdded(true);

    try {
      confetti({
        particleCount: 45,
        spread: 65,
        origin: { y: 0.65 },
        colors: ['#E04F16', '#25D366', '#FFFFFF', '#FFAB7A']
      });
    } catch {}

    setTimeout(() => setAdded(false), 2200);
  };

  const whatsappInquiryUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hello Preshword Living! 👋 I am browsing your kitchen wares, appliances, utensils, and house wares collection. Please confirm availability and how soon you can dispatch to my address in Lagos.'
  )}`;

  const scrollToCatalog = () => {
    onExplore();
    const el = document.getElementById('shop-catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-2 pb-6 sm:pt-4 sm:pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Full-Bleed Cinematic Hero Canvas */}
      <div className="relative rounded-[32px] sm:rounded-[44px] overflow-hidden min-h-[580px] sm:min-h-[660px] lg:min-h-[700px] flex items-center border border-white/10 shadow-2xl bg-[#0D0C0B]">
        {/* Full-Bleed High-Definition Editorial Background Image */}
        <img
          src="/images/hero-housewares-collection.jpg"
          alt="Preshword Living Editorial Kitchen & House Wares"
          className="absolute inset-0 w-full h-full object-cover object-center lg:object-right transition-transform duration-1000 ease-out hover:scale-102"
          loading="eager"
        />

        {/* Cinematic Multi-Stop Contrast Gradients */}
        {/* Horizontal contrast gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0B0A]/95 via-[#0C0B0A]/85 sm:via-[#0C0B0A]/70 to-[#0C0B0A]/40 lg:to-transparent pointer-events-none" />
        
        {/* Vertical vignette gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0B0A] via-transparent to-[#0C0B0A]/60 pointer-events-none" />

        {/* Ambient Warm Studio Glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#E04F16]/20 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-24 right-1/4 w-96 h-96 rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />

        {/* Content Container Layer */}
        <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Glassmorphic Value Card */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Top Operational Dispatch Pill */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/15 backdrop-blur-xl w-fit mb-4 sm:mb-5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-widest text-zinc-300 uppercase">
                  LAGOS HUB DISPATCHING • SAME-DAY LEKKI & VI
                </span>
              </div>

              {/* Tagline Badge */}
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full font-mono text-[11px] font-black uppercase tracking-wider bg-[#E04F16]/25 border border-[#E04F16]/60 text-[#FF7A45] backdrop-blur-md">
                  2026 HOUSE WARES COLLECTION
                </span>
                <span className="text-xs text-zinc-300 font-medium hidden sm:inline drop-shadow">
                  Curated for Nigerian Homes
                </span>
              </div>

              {/* Master Headline */}
              <h1 className="font-extrabold text-3xl sm:text-5xl lg:text-[3.6rem] tracking-[-0.035em] text-white leading-[1.08] drop-shadow-md">
                Modern kitchen wares, <br className="hidden sm:inline" />
                utensils &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A45] via-[#E04F16] to-[#FFAB7A]">
                  house essentials.
                </span>
              </h1>

              {/* Clear, focused store description */}
              <p className="mt-4 sm:mt-5 text-sm sm:text-base text-zinc-200 max-w-xl font-normal leading-relaxed drop-shadow">
                Everything for modern Nigerian living. From commercial 1500W blenders and smart toasters to 24-piece luxury cutlery, non-toxic Sol-Gel cookware, and safe children tableware.
              </p>

              {/* 4 Clean Department Jump Pills */}
              <div className="mt-5 flex flex-wrap gap-2">
                <button
                  onClick={() => {
                    onSelectCategory('cookware');
                    scrollToCatalog();
                  }}
                  className="px-3 py-1.5 rounded-full bg-black/50 hover:bg-white/20 text-white border border-white/20 text-xs font-semibold backdrop-blur-md transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E04F16]" />
                  <span>Sol-Gel Cookware</span>
                </button>
                <button
                  onClick={() => {
                    onSelectCategory('appliances');
                    scrollToCatalog();
                  }}
                  className="px-3 py-1.5 rounded-full bg-black/50 hover:bg-white/20 text-white border border-white/20 text-xs font-semibold backdrop-blur-md transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                  <span>Blenders & Toasters</span>
                </button>
                <button
                  onClick={() => {
                    onSelectCategory('utensils');
                    scrollToCatalog();
                  }}
                  className="px-3 py-1.5 rounded-full bg-black/50 hover:bg-white/20 text-white border border-white/20 text-xs font-semibold backdrop-blur-md transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                  <span>Luxury Cutlery</span>
                </button>
                <button
                  onClick={() => {
                    onSelectCategory('kids');
                    scrollToCatalog();
                  }}
                  className="px-3 py-1.5 rounded-full bg-black/50 hover:bg-white/20 text-white border border-white/20 text-xs font-semibold backdrop-blur-md transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  <span>Children Wares</span>
                </button>
              </div>

              {/* Dual Primary Action Buttons */}
              <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {/* 1. Direct WhatsApp Conversion Button */}
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-sm uppercase tracking-wider transition-all shadow-xl hover:shadow-[#25D366]/30 hover:scale-[1.02] active:scale-98"
                >
                  <MessageCircle className="w-5 h-5 fill-black stroke-black" />
                  <span>Order on WhatsApp</span>
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-black/15 text-[10px] font-mono font-black">
                    LIVE
                  </span>
                </a>

                {/* 2. Smooth Scroll to Catalog */}
                <button
                  onClick={scrollToCatalog}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-black/60 hover:bg-white/20 text-white border border-white/25 hover:border-white/40 backdrop-blur-md font-extrabold text-sm uppercase tracking-wider transition-all cursor-pointer shadow-lg"
                >
                  <span>Explore Catalog (14 Items)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Social Proof & Customer Trust */}
              <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-5 sm:gap-8">
                <div className="flex items-center gap-2.5">
                  <div className="flex -space-x-2">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80"
                      alt="Verified Customer"
                      className="w-8 h-8 rounded-full border-2 border-black object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80"
                      alt="Verified Customer"
                      className="w-8 h-8 rounded-full border-2 border-black object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&auto=format&fit=crop&q=80"
                      alt="Verified Customer"
                      className="w-8 h-8 rounded-full border-2 border-black object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span className="font-extrabold text-xs text-white">4.9 / 5.0</span>
                    </div>
                    <p className="text-[11px] text-zinc-300">
                      Loved by 500+ Lagos homes
                    </p>
                  </div>
                </div>

                <div className="hidden sm:block h-6 w-px bg-white/20" />

                <div className="flex items-center gap-2 text-xs text-zinc-200">
                  <Truck className="w-4 h-4 text-[#FF7A45]" />
                  <span>Express Lekki & VI Dispatch (2–4 hrs)</span>
                </div>
              </div>
            </div>

            {/* Right Column: Floating Luxury Spotlight Card */}
            <div className="lg:col-span-5 flex justify-end">
              <div className="w-full max-w-sm rounded-3xl bg-black/75 backdrop-blur-2xl border border-white/20 p-5 sm:p-6 shadow-2xl text-white">
                <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E04F16]" />
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-300">
                      FLAGSHIP HOME ESSENTIAL
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono text-[9px] font-bold uppercase">
                    IN STOCK
                  </span>
                </div>

                {/* Product Teaser Details */}
                <h3 className="font-extrabold text-base sm:text-lg text-white leading-snug">
                  {flagshipProduct.name}
                </h3>
                <p className="text-xs text-zinc-300 mt-1 line-clamp-2 leading-relaxed">
                  Sol-Gel mineral ceramic non-stick surface, stay-cool satin gold handles, and universal induction base.
                </p>

                {/* Specs Pill Strip */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded-md bg-white/10 text-zinc-300 text-[10px] font-mono">
                    100% Non-Toxic
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-white/10 text-zinc-300 text-[10px] font-mono">
                    Zero PTFE
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-white/10 text-zinc-300 text-[10px] font-mono">
                    2-Yr Warranty
                  </span>
                </div>

                {/* Price and 1-Tap Action */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                  <div>
                    <span className="font-mono text-[11px] text-zinc-400 line-through block leading-none">
                      {formatPrice(flagshipProduct.originalPrice || 72000)}
                    </span>
                    <span className="font-extrabold text-lg text-[#25D366] leading-tight block">
                      {formatPrice(flagshipProduct.price)}
                    </span>
                  </div>

                  <button
                    onClick={handleHeroQuickAdd}
                    className={`px-4 py-2 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 shadow-md ${
                      added
                        ? 'bg-emerald-500 text-white'
                        : 'bg-[#E04F16] hover:bg-[#C83E0A] text-white'
                    }`}
                  >
                    {added ? (
                      <>
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        <span>Added!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Add to Bag</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Subtext info */}
                <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <span>Pay on Delivery in Lagos</span>
                  <span>Dispatch in 2-4 hrs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
