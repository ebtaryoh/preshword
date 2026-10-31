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
  Eye,
  Zap,
  Smile,
  ChevronDown
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { WHATSAPP_NUMBER, buildWhatsAppSingleItemUrl } from '../utils/whatsapp';
import { formatPrice } from '../utils/format';
import { products } from '../data/products';

export default function Hero({ onExplore, onQuickAdd, onSelectCategory }) {
  const [useAltImage, setUseAltImage] = useState(false);
  const [added, setAdded] = useState(false);

  // Flagship featured product (ID 1: Luxury Sol-Gel Ceramic Cookware Set)
  const flagshipProduct = products.find((p) => p.id === 1) || products[0];

  const handleHeroQuickAdd = () => {
    onQuickAdd(flagshipProduct.id);
    setAdded(true);

    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#E04F16', '#25D366', '#FFFFFF', '#FFAB7A']
      });
    } catch {}

    setTimeout(() => setAdded(false), 2200);
  };

  const whatsappInquiryUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hello Preshword Living! 👋 I am interested in your Kitchen & House Wares collection (blenders, toasters, cookware, cutlery, and children tableware). Please share current availability and dispatch details for Lagos delivery.'
  )}`;

  const heroImageSrc = useAltImage
    ? '/images/product-cookware-set.jpg'
    : '/images/hero-housewares-collection.jpg';

  const scrollToCatalog = () => {
    onExplore();
    const el = document.getElementById('shop-catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-2 pb-6 sm:pt-4 sm:pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Flagship Luxury Hero Canvas */}
      <div className="relative rounded-[32px] sm:rounded-[40px] bg-[#121110] text-white overflow-hidden p-6 sm:p-10 lg:p-14 border border-white/10 shadow-2xl">
        {/* Ambient Warm Studio Glows */}
        <div
          className="absolute -top-32 -right-32 w-[540px] sm:w-[680px] h-[540px] sm:h-[680px] rounded-full blur-[120px] pointer-events-none opacity-60"
          style={{
            background:
              'radial-gradient(circle, rgba(224, 79, 22, 0.5) 0%, rgba(245, 158, 11, 0.15) 50%, transparent 75%)'
          }}
        />
        <div className="absolute -bottom-28 -left-28 w-80 sm:w-96 h-80 sm:h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Top Operational Status Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/8 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-widest text-zinc-300 uppercase">
              LAGOS HUB DISPATCHING • SAMEDAY LEKKI, VI & MAINLAND
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Official 2-Year Warranty</span>
            </span>
            <span className="hidden sm:inline text-zinc-600">•</span>
            <span className="hidden sm:inline">Pay On Delivery in Lagos</span>
          </div>
        </div>

        {/* Main Editorial Hero Grid */}
        <div className="relative z-10 mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Clear Value Proposition & Conversion */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full font-mono text-[11px] font-black uppercase tracking-wider bg-[#E04F16]/20 border border-[#E04F16]/50 text-[#FF7A45]">
                2026 CURATED HOME DROP
              </span>
              <span className="text-xs text-zinc-400 font-medium">
                Kitchen Wares • Appliances • Utensils • Kids
              </span>
            </div>

            {/* Master Headline */}
            <h1 className="font-extrabold text-3xl sm:text-5xl lg:text-[3.6rem] tracking-[-0.035em] text-white leading-[1.08]">
              Modern kitchen wares, <br className="hidden sm:inline" />
              utensils &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A45] via-[#E04F16] to-[#FFAB7A]">
                house essentials.
              </span>
            </h1>

            {/* Clear, focused store description */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-zinc-300 max-w-xl font-normal leading-relaxed">
              Curated for Nigerian families who value durability and aesthetic living. From high-torque 1500W blenders and smart toasters to 24-piece luxury cutlery, non-toxic Sol-Gel cookware, and BPA-free children tableware.
            </p>

            {/* 4 Core Department Pills */}
            <div className="mt-5 flex flex-wrap gap-2">
              <button
                onClick={() => {
                  onSelectCategory('cookware');
                  const el = document.getElementById('shop-catalog');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/12 border border-white/10 hover:border-white/25 text-xs text-zinc-300 hover:text-white transition-all cursor-pointer"
              >
                <span className="text-sm">🍳</span>
                <span className="font-medium">Sol-Gel Cookware</span>
              </button>
              <button
                onClick={() => {
                  onSelectCategory('appliances');
                  const el = document.getElementById('shop-catalog');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/12 border border-white/10 hover:border-white/25 text-xs text-zinc-300 hover:text-white transition-all cursor-pointer"
              >
                <span className="text-sm">⚡</span>
                <span className="font-medium">Blenders & Toasters</span>
              </button>
              <button
                onClick={() => {
                  onSelectCategory('utensils');
                  const el = document.getElementById('shop-catalog');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/12 border border-white/10 hover:border-white/25 text-xs text-zinc-300 hover:text-white transition-all cursor-pointer"
              >
                <span className="text-sm">🍴</span>
                <span className="font-medium">Luxury Cutlery</span>
              </button>
              <button
                onClick={() => {
                  onSelectCategory('kids');
                  const el = document.getElementById('shop-catalog');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/12 border border-white/10 hover:border-white/25 text-xs text-zinc-300 hover:text-white transition-all cursor-pointer"
              >
                <span className="text-sm">👶</span>
                <span className="font-medium">Children Wares</span>
              </button>
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* WhatsApp Conversion Button */}
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-[#25D366]/25 hover:scale-[1.02] active:scale-98"
              >
                <MessageCircle className="w-5 h-5 fill-black stroke-black" />
                <span>Order on WhatsApp</span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-black/15 text-[10px] font-mono font-black">
                  LIVE
                </span>
              </a>

              {/* Smooth Scroll to Catalog */}
              <button
                onClick={scrollToCatalog}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/18 text-white border border-white/15 hover:border-white/30 font-extrabold text-sm uppercase tracking-wider transition-all cursor-pointer"
              >
                <span>Explore Catalog (14 Items)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Social Proof & Customer Trust */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-5 sm:gap-8">
              <div className="flex items-center gap-2.5">
                <div className="flex -space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80"
                    alt="Customer"
                    className="w-8 h-8 rounded-full border-2 border-[#121110] object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80"
                    alt="Customer"
                    className="w-8 h-8 rounded-full border-2 border-[#121110] object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&auto=format&fit=crop&q=80"
                    alt="Customer"
                    className="w-8 h-8 rounded-full border-2 border-[#121110] object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span className="font-extrabold text-xs text-white">4.9 / 5.0</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">
                    Trusted by 500+ Lagos homes
                  </p>
                </div>
              </div>

              <div className="hidden sm:block h-6 w-px bg-white/10" />

              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <Truck className="w-4 h-4 text-[#FF7A45]" />
                <span>Express Lekki & VI Dispatch (2–4 hrs)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Heroic Editorial Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[4/3] lg:aspect-[5/4] bg-[#1E1C1A] border border-white/15 shadow-2xl group">
              <img
                src={heroImageSrc}
                alt="Preshword Living House Wares Collection"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                loading="eager"
              />

              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              {/* Top Floating Badge Row */}
              <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-mono font-bold text-white flex items-center gap-1.5 shadow-md">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>Curated Collection</span>
                </span>

                {/* Perspective View Switcher */}
                <button
                  onClick={() => setUseAltImage((prev) => !prev)}
                  className="px-3 py-1 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/25 text-[11px] font-mono font-bold flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer shadow-md"
                  title="Switch preview view"
                >
                  <Eye className="w-3.5 h-3.5 text-[#FF7A45]" />
                  <span>{useAltImage ? 'Full Island View' : 'Cookware View'}</span>
                </button>
              </div>

              {/* Floating Flagship Product Card */}
              <div className="absolute bottom-3.5 inset-x-3.5 p-3.5 sm:p-4 rounded-2xl bg-black/85 backdrop-blur-xl border border-white/20 z-10 shadow-xl">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="min-w-0 flex-1">
                    <span className="font-mono text-[9px] font-bold text-[#FF7A45] uppercase tracking-wider block">
                      FEATURED ESSENTIAL
                    </span>
                    <h3 className="font-extrabold text-sm text-white truncate">
                      {flagshipProduct.name}
                    </h3>
                    <p className="text-[11px] text-zinc-300 truncate mt-0.5">
                      Non-toxic Sol-Gel ceramic with stay-cool gold handles
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="font-mono text-[10px] text-zinc-400 line-through block leading-none">
                      {formatPrice(flagshipProduct.originalPrice || 72000)}
                    </span>
                    <span className="font-extrabold text-base text-[#25D366] leading-tight block">
                      {formatPrice(flagshipProduct.price)}
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-zinc-400">
                    <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                    <span>In Stock • Lekki Hub</span>
                  </div>

                  <button
                    onClick={handleHeroQuickAdd}
                    className={`px-3.5 py-1.5 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 shadow-md ${
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
                        <span>Add to Bag</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
