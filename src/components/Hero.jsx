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
  ChevronRight,
  Eye,
  Zap,
  Smile,
  Coffee,
  Package
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { WHATSAPP_NUMBER, buildWhatsAppSingleItemUrl } from '../utils/whatsapp';
import { formatPrice } from '../utils/format';
import { products } from '../data/products';

const heroItems = [
  {
    id: 'collection',
    productId: 1,
    tabLabel: 'House Wares',
    shortDish: 'Blenders, Toasters & Pots',
    headline: 'Modern Kitchen & House Wares Collection',
    tagline: 'Curated Home Essentials',
    badge: '2026 Home Drop',
    accentColor: '#E04F16',
    image: '/images/hero-housewares-collection.jpg',
    dishImage: '/images/product-cookware-set.jpg',
    viewLabel: 'Full House Wares Island',
    altViewLabel: 'Pristine Cookware Set',
    description:
      'Curated for modern living. From high-torque 1500W blenders and smart toasters to 24-piece luxury dining cutlery, non-toxic ceramic cookware, and safe children tableware.',
    quote: 'The collection looks like it came straight out of Architectural Digest. Exceptional quality.',
    author: 'Chidinma O. • Lekki Phase 1, Lagos',
    rating: 5.0,
    reviews: 320,
    specs: ['Commercial 1500W', 'Digital Smart Toaster', '18/10 Luxury Cutlery', '100% Non-Toxic']
  },
  {
    id: 'appliances',
    productId: 5,
    tabLabel: 'Blenders & Toasters',
    shortDish: 'Smart House Appliances',
    headline: '1500W Commercial Blender & Smart Toaster',
    tagline: 'House Wares & Smart Small Appliances',
    badge: 'High-Power Quartz',
    accentColor: '#0284C7',
    image: '/images/product-blender-puree.jpg',
    dishImage: '/images/product-smart-toaster.jpg',
    viewLabel: '1500W Vortex Blender',
    altViewLabel: 'Smart Digital Toaster',
    description:
      'Commercial 1500W blender with 6 Japanese steel blades alongside a digital 2-slice toaster with LED timer and 6 shade levels. Fast, durable, and whisper-smooth.',
    quote: 'Pulverizes tough beans, peppers and frozen fruits in 30 seconds flat. Essential kitchen powerhouse.',
    author: 'Tunde B. • Victoria Island, Lagos',
    rating: 5.0,
    reviews: 312,
    specs: ['1500W Peak Power', 'Digital Countdown LED', '6-Blade Japanese Steel', '2-Year Warranty']
  },
  {
    id: 'cutlery',
    productId: 4,
    tabLabel: 'Luxury Cutlery',
    shortDish: '24pc Gold & Black Flatware',
    headline: '24-Piece Satin Gold & Black Cutlery Set',
    tagline: 'Utensils & Luxury Dining Flatware',
    badge: '18/10 Stainless Steel',
    accentColor: '#D97706',
    image: '/images/product-luxury-cutlery.jpg',
    dishImage: '/images/product-knife-plantain-prep.jpg',
    viewLabel: '24pc Cutlery Flatware',
    altViewLabel: '6pc Kitchen Prep Knives',
    description:
      'Complete 24-piece luxury 18/10 stainless steel flatware set with electroplated satin gold heads and matte black handles. 6 dinner knives, 6 forks, 6 soup spoons, and 6 dessert spoons.',
    quote: 'Elevated our family dining table completely. Heavy, balanced, and stunning finish.',
    author: 'Chidinma O. • Lekki Phase 1, Lagos',
    rating: 5.0,
    reviews: 198,
    specs: ['24 Dining Pieces', '18/10 Stainless Steel', 'Corrosion Resistant', 'Luxury Presentation Box']
  },
  {
    id: 'kids',
    productId: 7,
    tabLabel: 'Children Wares',
    shortDish: 'BPA-Free Kids Feeding Sets',
    headline: '5-Piece Eco Silicone & Bamboo Kids Set',
    tagline: 'Children Wares & Family Essentials',
    badge: '100% Food-Grade Silicone',
    accentColor: '#10B981',
    image: '/images/product-children-tableware.jpg',
    dishImage: '/images/product-pantry-jars.jpg',
    viewLabel: 'Children Tableware Set',
    altViewLabel: 'Airtight Glass Canisters',
    description:
      'Aesthetic, BPA-free platinum silicone and organic bamboo children tableware set. Includes powerful suction divided plate, toddler straw cup, baby fork and spoon, and waterproof catch-all bib.',
    quote: 'Safe, durable, and mess-free. The suction plate stays firmly fixed to the high chair!',
    author: 'Dr. Fatima • Pediatrician & Mom, Abuja',
    rating: 5.0,
    reviews: 184,
    specs: ['BPA & Phthalate Free', 'Strong Suction Base', 'Microwave & Dishwasher Safe', 'Soft Ergonomic Grip']
  }
];

export default function Hero({ onExplore, onQuickAdd, onSelectCategory }) {
  const [activeItem, setActiveItem] = useState(heroItems[0]);
  const [useAltImage, setUseAltImage] = useState(false);
  const [added, setAdded] = useState(false);

  // Find corresponding product from catalog
  const currentProduct = products.find((p) => p.id === activeItem.productId) || {
    id: activeItem.productId,
    name: activeItem.headline,
    price: 58000,
    originalPrice: 72000,
    category: 'cookware'
  };

  const handleTabChange = (item) => {
    setActiveItem(item);
    setUseAltImage(false);
  };

  const handleHeroQuickAdd = () => {
    onQuickAdd(activeItem.productId);
    setAdded(true);

    try {
      confetti({
        particleCount: 36,
        spread: 60,
        origin: { y: 0.65 },
        colors: [activeItem.accentColor, '#25D366', '#FFFFFF', '#141312']
      });
    } catch {}

    setTimeout(() => setAdded(false), 2000);
  };

  const activeImageSrc = useAltImage ? activeItem.dishImage : activeItem.image;
  const whatsappUrl = buildWhatsAppSingleItemUrl(currentProduct, 1);

  return (
    <section className="pt-2 pb-8 sm:pt-4 sm:pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Main Luxury Hero Card */}
      <div className="relative rounded-[30px] sm:rounded-[38px] bg-[#141312] text-white overflow-hidden p-5 sm:p-10 lg:p-14 border border-white/10 shadow-2xl">
        {/* Dynamic Warm Ambient Radial Glows */}
        <div
          className="absolute -top-32 -right-32 w-[520px] sm:w-[680px] h-[520px] sm:h-[680px] rounded-full blur-[110px] pointer-events-none transition-all duration-700 opacity-60"
          style={{
            background: `radial-gradient(circle, ${activeItem.accentColor} 0%, rgba(224, 79, 22, 0.15) 50%, transparent 75%)`
          }}
        />
        <div className="absolute -bottom-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/10 rounded-full blur-[90px] pointer-events-none" />

        {/* Top Kicker Bar */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-widest text-zinc-300 uppercase">
              LAGOS HUB DISPATCHING • KITCHEN WARES, UTENSILS & HOUSE WARES
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Official 2-Year Warranty</span>
            </span>
            <span className="text-zinc-600">•</span>
            <span>Free Delivery Over ₦50,000</span>
          </div>
        </div>

        {/* Hero Body Grid */}
        <div className="relative z-10 mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Copy, Category Pillars & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span
                className="px-2.5 py-1 rounded-full font-mono text-[11px] font-black uppercase tracking-wider border"
                style={{
                  backgroundColor: `${activeItem.accentColor}25`,
                  borderColor: `${activeItem.accentColor}60`,
                  color: activeItem.accentColor === '#E04F16' ? '#FF7A45' : activeItem.accentColor
                }}
              >
                {activeItem.badge}
              </span>
              <span className="text-xs text-zinc-400 font-medium">
                {activeItem.tagline}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-extrabold text-3xl sm:text-5xl lg:text-[3.5rem] tracking-[-0.035em] text-white leading-[1.08]">
              Modern kitchen wares, <br className="hidden sm:inline" />
              utensils &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A45] via-[#E04F16] to-[#FFAB7A]">
                house wares.
              </span>
            </h1>

            {/* Subtitle explicitly covering the store scope */}
            <p className="mt-4 text-sm sm:text-base text-zinc-300 max-w-xl font-normal leading-relaxed">
              From commercial 1500W blenders and smart toasters to luxury cutlery sets, non-toxic cookware, and safe children's dining wares. Everything for the modern home in one curated store.
            </p>

            {/* 4 Category Showcase Tabs */}
            <div className="mt-6 pt-5 border-t border-white/10">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-[#E04F16]" />
                  <span>Explore What We Sell:</span>
                </span>
                <span className="text-[11px] font-mono font-bold" style={{ color: activeItem.accentColor }}>
                  {formatPrice(currentProduct.price)}
                </span>
              </div>

              {/* 4 Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {heroItems.map((item) => {
                  const isSelected = activeItem.id === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleTabChange(item)}
                      className={`py-2.5 px-3 rounded-2xl text-left transition-all cursor-pointer border flex flex-col justify-between ${
                        isSelected
                          ? 'bg-white text-[#141312] border-white shadow-md scale-[1.02]'
                          : 'bg-white/5 hover:bg-white/10 text-zinc-300 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-1">
                        <span className="font-mono text-[10px] font-bold uppercase truncate">
                          {item.tabLabel}
                        </span>
                        {isSelected && (
                          <span
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ backgroundColor: item.accentColor }}
                          />
                        )}
                      </div>
                      <span
                        className={`text-[11px] font-bold truncate ${
                          isSelected ? 'text-[#141312]' : 'text-zinc-400'
                        }`}
                      >
                        {item.shortDish}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTA Buttons: Primary WhatsApp + Explore Catalog */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* 1. Direct WhatsApp Order Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20BA5A] text-[#141312] font-black text-sm tracking-wide shadow-lg shadow-[#25D366]/25 transition-all active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <div className="relative">
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white animate-ping" />
                </div>
                <span>Order on WhatsApp ({formatPrice(currentProduct.price)})</span>
              </a>

              {/* 2. Explore Catalog Button */}
              <button
                onClick={() => {
                  onSelectCategory(activeItem.id === 'cutlery' ? 'utensils' : activeItem.id === 'collection' ? 'all' : activeItem.id);
                  const el = document.getElementById('shop-catalog');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="py-4 px-6 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm tracking-wide border border-white/15 transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Utensils className="w-4 h-4 text-[#FF7A45]" />
                <span>Browse {activeItem.tabLabel}</span>
                <ArrowRight className="w-4 h-4 text-zinc-400" />
              </button>
            </div>

            {/* Social Proof & Customer Avatars */}
            <div className="mt-7 flex items-center gap-4 text-left">
              <div className="flex -space-x-2 shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop"
                  alt="Chidinma, Lekki"
                  className="w-10 h-10 rounded-full border-2 border-[#141312] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop"
                  alt="Tunde, VI"
                  className="w-10 h-10 rounded-full border-2 border-[#141312] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop"
                  alt="Fatima, Abuja"
                  className="w-10 h-10 rounded-full border-2 border-[#141312] object-cover"
                />
                <div className="w-10 h-10 rounded-full bg-[#E04F16] border-2 border-[#141312] flex items-center justify-center text-white text-[10px] font-black font-mono">
                  +3.4k
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="font-extrabold text-xs text-white ml-1">
                    {activeItem.rating} / 5.0
                  </span>
                </div>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Trusted by 3,400+ homes across Lagos, Abuja & Port Harcourt.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Stage with Switcher */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[28px] overflow-hidden aspect-[4/4.6] sm:aspect-[4/4.3] bg-zinc-900 border border-white/15 shadow-2xl group">
              {/* Product / Lifestyle Image */}
              <img
                key={activeImageSrc}
                src={activeImageSrc}
                alt={activeItem.headline}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 animate-scale-in"
              />

              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

              {/* Top Floating Badge Row */}
              <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                <span className="px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-mono font-bold text-white flex items-center gap-1.5 shadow-md">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>{activeItem.rating}★ ({activeItem.reviews} Reviews)</span>
                </span>

                {/* Perspective View Switcher */}
                <button
                  onClick={() => setUseAltImage((prev) => !prev)}
                  className="px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/25 text-[11px] font-mono font-bold flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer shadow-md"
                  title="Switch image view"
                >
                  <Eye className="w-3.5 h-3.5 text-[#FF7A45]" />
                  <span>{useAltImage ? activeItem.viewLabel : activeItem.altViewLabel}</span>
                </button>
              </div>

              {/* Bottom In-Image Product Dispatch Card */}
              <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/20 z-10 shadow-xl">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="min-w-0 flex-1">
                    <span className="font-mono text-[9px] font-bold text-[#FF7A45] uppercase tracking-wider block">
                      {activeItem.tagline}
                    </span>
                    <h3 className="font-extrabold text-sm sm:text-base text-white truncate leading-snug">
                      {activeItem.headline}
                    </h3>
                    <p className="text-xs text-zinc-300 line-clamp-1 italic mt-0.5">
                      "{activeItem.quote}"
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="font-mono text-[11px] text-zinc-400 line-through block leading-none">
                      {formatPrice(currentProduct.originalPrice || currentProduct.price * 1.25)}
                    </span>
                    <span className="font-extrabold text-base sm:text-lg text-[#25D366] leading-tight block">
                      {formatPrice(currentProduct.price)}
                    </span>
                  </div>
                </div>

                {/* Card Action Row: 1-Tap Add to Bag */}
                <div className="pt-2.5 border-t border-white/10 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-zinc-400">
                    <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                    <span className="truncate">In Stock • Lekki Hub</span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
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

        {/* Bottom Bento Value Proposition Strip */}
        <div className="relative z-10 mt-8 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#E04F16]">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <p className="font-extrabold text-xs sm:text-sm text-white">Kitchen & House Wares</p>
              <p className="text-[11px] text-zinc-400">Pots, pans, blenders, toasters & cutlery</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#10B981]">
              <Smile className="w-5 h-5" />
            </div>
            <div>
              <p className="font-extrabold text-xs sm:text-sm text-white">Children Wares</p>
              <p className="text-[11px] text-zinc-400">BPA-free suction plates & feeding sets</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#25D366]">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-extrabold text-xs sm:text-sm text-white">Lagos Same-Day Dispatch</p>
              <p className="text-[11px] text-zinc-400">Express delivery within 2–4 hours</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-amber-400">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <p className="font-extrabold text-xs sm:text-sm text-white">Pay On Delivery</p>
              <p className="text-[11px] text-zinc-400">Cash or bank transfer on arrival</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
