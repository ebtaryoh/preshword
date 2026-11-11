import React from 'react';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Truck,
  RotateCcw,
  MessageCircle,
  CheckCircle2,
  Layers,
  HeartHandshake
} from 'lucide-react';
import { WHATSAPP_NUMBER } from '../utils/whatsapp';

export default function CategoryGrid({ onSelectCategory, activeCategory }) {
  const departments = [
    {
      id: 'cookware',
      name: 'Kitchen Wares',
      tagline: 'Cookware, Pots & Steamers',
      countLabel: '6 Pieces Ready',
      description:
        'Sol-gel non-stick frying pans, enameled cast iron Dutch ovens, deep woks & 3-tier steamers.',
      image: '/images/product-cookware-set.jpg',
      badge: 'Sol-Gel Non-Toxic',
      features: ['Zero PTFE/PFOA', 'Induction Ready', 'Stay-Cool Handles'],
      accent: '#E04F16'
    },
    {
      id: 'appliances',
      name: 'House Wares & Appliances',
      tagline: 'Blenders, Toasters & Air Fryers',
      countLabel: '5 Pieces Ready',
      description:
        '1500W commercial vortex blenders, digital smart toasters, 6.5L air fryers & electric kettles.',
      image: '/images/product-smart-toaster.jpg',
      badge: 'Commercial 1500W',
      features: ['Japanese Blades', 'LED Countdown', '2-Year Warranty'],
      accent: '#0284C7'
    },
    {
      id: 'utensils',
      name: 'Utensils & Cutlery',
      tagline: 'Luxury Dining Flatware & Prep',
      countLabel: '4 Pieces Ready',
      description:
        '24-piece satin gold cutlery sets, 10-piece acacia wood utensil sets & German steel chef knives.',
      image: '/images/product-luxury-cutlery.jpg',
      badge: '18/10 Stainless Steel',
      features: ['Satin Gold Finish', 'Gift Presentation Box', 'Rust Proof'],
      accent: '#D97706'
    },
    {
      id: 'kids',
      name: 'Children Wares',
      tagline: 'Eco Feeding & Tableware',
      countLabel: '2 Pieces Ready',
      description:
        '100% BPA-free food-grade silicone suction plates, toddler straw cups & gentle ergonomic cutlery.',
      image: '/images/product-children-tableware.jpg',
      badge: 'BPA-Free Food Grade',
      features: ['Strong Suction Base', 'Drop-Proof Silicone', 'Dishwasher Safe'],
      accent: '#10B981'
    }
  ];

  const handleCardClick = (deptId) => {
    onSelectCategory(deptId);
    const catalogElement = document.getElementById('shop-catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-8 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Editorial Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF7ED] border border-[#E04F16]/20 mb-2.5">
            <Layers className="w-3.5 h-3.5 text-[#E04F16]" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#E04F16]">
              CURATED DEPARTMENTS
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#141312] tracking-tight">
            Explore by Department
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1 max-w-lg">
            High-grade kitchen essentials, commercial house wares, dining flatware, and safe children wares curated for your home.
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
          <span>VIEW FULL CATALOG (20 PIECES)</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* 4 Full-Bleed Visual Department Bento Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {departments.map((dept) => {
          const isSelected = activeCategory === dept.id;
          return (
            <div
              key={dept.id}
              onClick={() => handleCardClick(dept.id)}
              className={`group relative rounded-3xl p-4 sm:p-5 bg-white border cursor-pointer transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-xl hover:-translate-y-1 ${isSelected
                  ? 'border-[#E04F16] ring-2 ring-[#E04F16]/25 shadow-md'
                  : 'border-[#E8E6E1] hover:border-zinc-400'
                }`}
            >
              <div>
                {/* Full-Bleed Visual Image Container */}
                <div className="relative aspect-[16/11] sm:aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#F5F3EF] mb-4">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                    loading="lazy"
                  />

                  {/* Gradient Depth Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Top Quality Badge */}
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span
                      className="px-2.5 py-1 rounded-full text-white font-mono font-bold text-[10px] tracking-wider uppercase shadow-md backdrop-blur-md"
                      style={{ backgroundColor: `${dept.accent}EE` }}
                    >
                      {dept.badge}
                    </span>
                  </div>

                  {/* Bottom Item Count Pill */}
                  <div className="absolute bottom-2.5 left-2.5 z-10">
                    <span className="px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-white font-mono text-[10px] font-bold">
                      {dept.countLabel}
                    </span>
                  </div>
                </div>

                {/* Card Title & Description */}
                <h3 className="font-extrabold text-lg text-[#141312] tracking-tight group-hover:text-[#E04F16] transition-colors leading-snug">
                  {dept.name}
                </h3>
                <p className="text-xs text-zinc-500 font-normal mt-1.5 leading-relaxed line-clamp-2">
                  {dept.description}
                </p>

                {/* Feature Chips */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {dept.features.map((feat, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-2 py-0.5 rounded-md bg-[#F5F3EF] text-[10px] font-mono font-medium text-zinc-600"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action Footer */}
              <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-zinc-400 flex items-center gap-1.5">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: dept.accent }}
                  />
                  <span>In Stock • Lekki</span>
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

      {/* Trust & Delivery Assurance Strip (4 Luxury Feature Tiles) */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
        {/* Tile 1: Lagos Same-Day Dispatch */}
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

        {/* Tile 2: Direct WhatsApp Ordering */}
        <div className="p-4 rounded-2xl bg-white border border-[#E8E6E1] shadow-2xs hover:shadow-sm hover:border-zinc-300 transition-all flex items-start gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-[#F0FDF4] text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-500/15">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="font-extrabold text-sm text-[#141312]">Direct WhatsApp Order</span>
              <span className="px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 text-[9px] font-mono font-bold uppercase">
                Instant
              </span>
            </div>
            <p className="text-xs text-zinc-500 leading-snug">
              Order directly to our WhatsApp concierge with instant verification & prompt dispatch.
            </p>
          </div>
        </div>

        {/* Tile 3: 100% Non-Toxic Quality */}
        <div className="p-4 rounded-2xl bg-white border border-[#E8E6E1] shadow-2xs hover:shadow-sm hover:border-zinc-300 transition-all flex items-start gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-[#FEF3C7] text-amber-600 flex items-center justify-center shrink-0 border border-amber-500/15">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="font-extrabold text-sm text-[#141312]">100% Food-Grade</span>
              <span className="px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 text-[9px] font-mono font-bold uppercase">
                Certified
              </span>
            </div>
            <p className="text-xs text-zinc-500 leading-snug">
              Sol-Gel ceramic, BPA-free silicone, and 18/10 surgical steel.
            </p>
          </div>
        </div>

        {/* Tile 4: WhatsApp Live Concierge */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            'Hello Preshworld Household Essential! 👋 I have a question about your kitchen wares and house essentials. Can you assist me?'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-2xl bg-white border border-[#E8E6E1] hover:border-[#25D366] shadow-2xs hover:shadow-md transition-all flex items-start gap-3.5 group"
        >
          <div className="w-11 h-11 rounded-2xl bg-[#DCFCE7] text-[#25D366] flex items-center justify-center shrink-0 border border-[#25D366]/25 group-hover:scale-105 transition-transform">
            <MessageCircle className="w-5 h-5 fill-[#25D366] text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="font-extrabold text-sm text-[#141312] group-hover:text-[#25D366] transition-colors">
                WhatsApp Concierge
              </span>
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            </div>
            <p className="text-xs text-zinc-500 leading-snug">
              Order assistance, custom sets & real-time dispatch tracking.
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
