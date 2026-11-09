import React from 'react';
import { ArrowUp, ShieldCheck, Truck, RefreshCw, Sparkles, MapPin, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from '../utils/whatsapp';

export default function Footer({ onSelectCategory }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappInquiryUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hello Preshworld Household Essential! 👋 I am interested in inquiring about placing an order or tracking my delivery.'
  )}`;

  return (
    <footer className="bg-[#141312] text-white pt-16 pb-24 sm:pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Value Prop Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-14 border-b border-white/10">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-[#E04F16] shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-extrabold text-sm text-white">Same-Day Lagos Dispatch</h5>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Direct rider dispatch from our Lekki Phase 1 hub across Lagos in 2–4 hours.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-[#E04F16] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-extrabold text-sm text-white">100% Non-Toxic & Safe</h5>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Sol-Gel ceramic zero PTFE/PFOA, and BPA-free food-grade silicone for children.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-[#E04F16] shrink-0">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-extrabold text-sm text-white">Pay On Delivery (Lagos)</h5>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Inspect your items first at your doorstep, then pay via bank transfer or cash.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-[#E04F16] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-extrabold text-sm text-white">Official 2-Year Warranty</h5>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Complete warranty coverage on all commercial blenders, toasters, and cookware.
              </p>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-14 border-b border-white/10">
          {/* Brand Col */}
          <div className="col-span-2">
            <div className="flex flex-col gap-1">
              <span className="font-extrabold text-2xl sm:text-3xl tracking-tight text-white leading-none">
                PRESH<span className="text-[#E04F16]">WORLD</span>
              </span>
              <span className="text-[11px] font-mono font-bold text-[#E04F16] uppercase tracking-wider">
                HOUSEHOLD ESSENTIAL
              </span>
            </div>
            <p className="mt-3 text-sm text-zinc-400 max-w-sm leading-relaxed">
              Curated kitchen wares, small home appliances, luxury dining flatware, and safe children tableware for modern Nigerian households.
            </p>
            
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
                LEKKI DISPATCH HUB LIVE
              </span>
              <span className="text-xs text-zinc-400 font-mono flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#E04F16]" /> Lekki Phase 1, Lagos
              </span>
            </div>
          </div>

          {/* Col 1: Departments */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#E04F16] mb-4">
              DEPARTMENTS
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400 font-medium">
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('cookware');
                    const el = document.getElementById('shop-catalog');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Kitchen Wares & Pots
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('appliances');
                    const el = document.getElementById('shop-catalog');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Blenders & Smart Toasters
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('utensils');
                    const el = document.getElementById('shop-catalog');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  24pc Luxury Cutlery
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('kids');
                    const el = document.getElementById('shop-catalog');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Children Wares & Feeding
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('tableware');
                    const el = document.getElementById('shop-catalog');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Stoneware Tableware
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Client Care */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#E04F16] mb-4">
              CLIENT CARE
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400 font-medium">
              <li>
                <a href={whatsappInquiryUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Lagos Same-Day Delivery
                </a>
              </li>
              <li>
                <a href={whatsappInquiryUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Pay On Delivery Terms
                </a>
              </li>
              <li>
                <a href={whatsappInquiryUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Sol-Gel Care Instructions
                </a>
              </li>
              <li>
                <a href={whatsappInquiryUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  2-Year Appliance Warranty
                </a>
              </li>
              <li>
                <a href={whatsappInquiryUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5 text-[#25D366]">
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Safe Quality */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#E04F16] mb-4">
              QUALITY PROMISE
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400 font-medium">
              <li><span>Zero PTFE, PFOA, Lead</span></li>
              <li><span>BPA-Free Food-Grade Silicone</span></li>
              <li><span>18/10 Surgical Stainless Steel</span></li>
              <li><span>Commercial Copper Cores</span></li>
              <li><span>Lekki Hub Quality Inspected</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div>
            © {new Date().getFullYear()} PRESHWORLD HOUSEHOLD ESSENTIAL LTD. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <span>LAGOS, NIGERIA</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white text-zinc-400 hover:text-[#141312] transition-all cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
