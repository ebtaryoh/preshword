import React from 'react';
import {
  ArrowRight,
  UtensilsCrossed,
  Sparkles,
  Flame,
  ShieldCheck,
  Zap,
  Clock,
  Shield,
  Truck,
  CreditCard,
  MessageCircle,
  Smile,
  CheckCircle2,
  Layers
} from 'lucide-react';
import { categories, products } from '../data/products';

export default function CategoryGrid({ onSelectCategory, activeCategory }) {
  const primaryBentoCategories = [
    {
      id: 'cookware',
      name: 'Kitchen Wares',
      tagline: 'Cookware & Pots',
      subtitle: '5 Pieces Ready',
      description: 'Sol-gel non-stick frying pans, enameled Dutch ovens & multi-tier steamer pots.',
      image: '/images/product-cookware-set.jpg',
      badge: 'Sol-Gel Cookware',
      accent: '#E04F16',
      icon: '🍳'
    },
    {
      id: 'appliances',
      name: 'House Wares & Appliances',
      tagline: 'Blenders & Toasters',
      subtitle: '3 Pieces Ready',
      description: '1500W commercial vortex blenders, digital smart toasters & electric yam pounders.',
      image: '/images/product-smart-toaster.jpg',
      badge: 'Smart Appliances',
      accent: '#0284C7',
      icon: '⚡'
    },
    {
      id: 'utensils',
      name: 'Utensils & Cutlery',
      tagline: 'Luxury Dining Flatware',
      subtitle: '3 Pieces Ready',
      description: '24-piece satin gold & matte black cutlery sets, German steel knives & beechwood tools.',
      image: '/images/product-luxury-cutlery.jpg',
      badge: '18/10 Cutlery',
      accent: '#D97706',
      icon: '🍴'
    },
    {
      id: 'kids',
      name: 'Children Wares',
      tagline: 'Kids Feeding Essentials',
      subtitle: '2 Pieces Ready',
      description: '100% BPA-free food-grade silicone suction plates, toddler straw cups & safe cutlery.',
      image: '/images/product-children-tableware.jpg',
      badge: 'BPA-Free Kids',
      accent: '#10B981',
      icon: '👶'
    }
  ];

  return (
    <section className="py-8 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Editorial Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF7ED] border border-[#E04F16]/20 mb-2.5">
            <Layers className="w-3.5 h-3.5 text-[#E04F16]" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#E04F16]">
              CURATED CATEGORIES
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#141312] tracking-tight">
            Explore by Department
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1 max-w-md">
            Everything your home needs — from stovetop cookware and small appliances to luxury cutlery and children wares.
          </p>
        </div>

        <button
          onClick={() => {
            onSelectCategory('all');
            const el = document.getElementById('shop-catalog');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#E8E6E1] hover:border-zinc-400 font-mono text-xs font-bold text-[#141312] hover:bg-[#141312] hover:text-white transition-all shadow-2xs group self-start sm:self-auto cursor-pointer"
        >
          <span>VIEW FULL CATALOG (14 PIECES)</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* 4-Bento Grid with High-Impact Imagery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {primaryBentoCategories.map((item) => {
          const isSelected = activeCategory === item.id;
          return (
            <div
              key={item.id}
              onClick={() => {
                onSelectCategory(item.id);
                const el = document.getElementById('shop-catalog');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`group relative rounded-3xl p-4 sm:p-5 bg-white border cursor-pointer transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-xl ${
                isSelected
                  ? 'border-[#E04F16] ring-2 ring-[#E04F16]/20 shadow-md'
                  : 'border-[#E8E6E1] hover:border-zinc-400'
              }`}
            >
              <div>
                {/* Large High-Impact Image Showcase */}
                <div className="relative aspect-[16/11] sm:aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#F5F3EF] mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />

                  {/* Gradient Depth Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Top Badge: Department Badge */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 z-10">
                    <span
                      className="px-2.5 py-1 rounded-full text-white font-mono font-bold text-[10px] tracking-wider uppercase shadow-md backdrop-blur-md"
                      style={{ backgroundColor: `${item.accent}EE` }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Bottom Image Micro-Pill: Piece Count */}
                  <div className="absolute bottom-2.5 left-2.5 z-10">
                    <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-white font-mono text-[10px] font-bold">
                      {item.subtitle}
                    </span>
                  </div>
                </div>

                {/* Card Title & Description */}
                <h3 className="font-extrabold text-lg text-[#141312] tracking-tight group-hover:text-[#E04F16] transition-colors leading-snug">
                  {item.name}
                </h3>
                <p className="text-xs text-zinc-500 font-normal mt-1.5 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Bottom Action Footer */}
              <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-zinc-400 flex items-center gap-1">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: item.accent }}
                  />
                  <span>In Stock</span>
                </span>

                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#E04F16] group-hover:translate-x-1 transition-transform">
                  <span>Browse</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Trust & Experience Badges Strip (Redesigned as 4 Luxury Feature Tiles) */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
        {/* Tile 1: Lagos Dispatch */}
        <div className="p-4 rounded-2xl bg-white border border-[#E8E6E1] shadow-2xs hover:shadow-sm hover:border-zinc-300 transition-all flex items-start gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-[#FFF7ED] text-[#E04F16] flex items-center justify-center shrink-0 border border-[#E04F16]/15">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="font-extrabold text-sm text-[#141312]">Lagos Same-Day</span>
              <span className="px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 text-[9px] font-mono font-bold uppercase">
                2-4 Hours
              </span>
            </div>
            <p className="text-xs text-zinc-500 leading-snug">
              Direct hub rider dispatch across Lekki, VI, Ikeja & Mainland.
            </p>
          </div>
        </div>

        {/* Tile 2: Pay on Delivery */}
        <div className="p-4 rounded-2xl bg-white border border-[#E8E6E1] shadow-2xs hover:shadow-sm hover:border-zinc-300 transition-all flex items-start gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-[#F0FDF4] text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-500/15">
            <CreditCard className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="font-extrabold text-sm text-[#141312]">Pay On Delivery</span>
              <span className="px-1.5 py-0.2 rounded bg-blue-100 text-blue-800 text-[9px] font-mono font-bold uppercase">
                Zero Risk
              </span>
            </div>
            <p className="text-xs text-zinc-500 leading-snug">
              Inspect your wares at your door, then pay by card, transfer or cash.
            </p>
          </div>
        </div>

        {/* Tile 3: 100% Non-Toxic */}
        <div className="p-4 rounded-2xl bg-white border border-[#E8E6E1] shadow-2xs hover:shadow-sm hover:border-zinc-300 transition-all flex items-start gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-[#FFFBEB] text-amber-600 flex items-center justify-center shrink-0 border border-amber-500/15">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="font-extrabold text-sm text-[#141312]">Non-Toxic & Safe</span>
              <span className="px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 text-[9px] font-mono font-bold uppercase">
                Certified
              </span>
            </div>
            <p className="text-xs text-zinc-500 leading-snug">
              Sol-Gel mineral ceramic, 18/10 steel & 100% BPA-free silicone.
            </p>
          </div>
        </div>

        {/* Tile 4: WhatsApp Support */}
        <div className="p-4 rounded-2xl bg-white border border-[#E8E6E1] shadow-2xs hover:shadow-sm hover:border-zinc-300 transition-all flex items-start gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-[#F0FDF4] text-[#25D366] flex items-center justify-center shrink-0 border border-[#25D366]/20">
            <MessageCircle className="w-5 h-5 fill-current" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="font-extrabold text-sm text-[#141312]">WhatsApp Live</span>
              <span className="px-1.5 py-0.2 rounded bg-[#25D366]/15 text-[#128C7E] text-[9px] font-mono font-bold uppercase">
                Active Hub
              </span>
            </div>
            <p className="text-xs text-zinc-500 leading-snug">
              Instant order confirmation & tracking on +234 913 742 1838.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
