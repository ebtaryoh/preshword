import React from 'react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';

export default function EditorialSection({ onExplore }) {
  return (
    <section className="py-16 sm:py-24 bg-[#F5F3EF] border-t border-[#E8E6E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Copy & Philosophy */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-[#E04F16] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE PRESHWORLD STANDARD</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.035em] text-[#141312] leading-[1.1]">
              House wares & kitchen tools <br />
              <span className="text-[#E04F16]">crafted to be loved.</span>
            </h2>

            <p className="mt-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
              From commercial 1500W blenders and smart toasters to luxury dining cutlery, non-toxic cookware, and safe children's tableware — Preshworld Household Essential equips your home with durable, functional, and aesthetic wares.
            </p>

            {/* Quality Standard Badges */}
            <div className="mt-8 grid grid-cols-2 gap-3.5">
              <div className="p-4 rounded-2xl bg-white border border-[#E8E6E1] shadow-2xs">
                <span className="font-mono text-[10px] font-bold text-emerald-600 uppercase tracking-wider block mb-1">
                  PREMIUM QUALITY
                </span>
                <span className="font-bold text-sm text-[#141312] block">
                  18/10 Stainless & Non-Toxic Ceramic.
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E8E6E1] shadow-2xs">
                <span className="font-mono text-[10px] font-bold text-[#E04F16] uppercase tracking-wider block mb-1">
                  NATIONWIDE DISPATCH
                </span>
                <span className="font-bold text-sm text-[#141312] block">
                  Same-day Lagos, 48h to Abuja & PH.
                </span>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={onExplore}
                className="px-7 py-3.5 rounded-2xl bg-[#141312] text-white hover:bg-[#E04F16] font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <span>EXPLORE ALL HOUSE WARES</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right: Architectural Imagery Stage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white shadow-2xs border border-[#E8E6E1]">
                <img
                  src="/images/product-luxury-cutlery.jpg"
                  alt="24-piece luxury cutlery"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#E8E6E1] shadow-2xs">
                <p className="font-mono text-xs font-bold text-[#141312]">18/10 CUTLERY</p>
                <p className="text-[11px] text-zinc-500 mt-0.5">Satin gold & matte black flatware</p>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="p-4 rounded-2xl bg-white border border-[#E8E6E1] shadow-2xs">
                <p className="font-mono text-xs font-bold text-[#141312]">SMART TOASTER</p>
                <p className="text-[11px] text-zinc-500 mt-0.5">Digital LED shade & defrost control</p>
              </div>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white shadow-2xs border border-[#E8E6E1]">
                <img
                  src="/images/product-smart-toaster.jpg"
                  alt="Smart digital toaster"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
