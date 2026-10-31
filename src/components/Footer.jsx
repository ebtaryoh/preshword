import React from 'react';
import { ArrowUp, ShieldCheck, Truck, RefreshCw, Sparkles, MapPin } from 'lucide-react';

export default function Footer({ onSelectCategory }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
              <h5 className="font-extrabold text-sm text-white">Same-Day Dispatch</h5>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Direct from our Lekki Phase 1 hub across Lagos & 48h express nationwide.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-[#E04F16] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-extrabold text-sm text-white">Non-Toxic Guarantee</h5>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                100% free from PTFE, PFOA, lead, cadmium, and forever chemicals.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-[#E04F16] shrink-0">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-extrabold text-sm text-white">30-Day Kitchen Trial</h5>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Cook in your home with confidence. Effortless returns and exchanges.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-[#E04F16] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-extrabold text-sm text-white">Lifetime Support</h5>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Dedicated culinary care concierge via WhatsApp and direct hotline.
              </p>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-14 border-b border-white/10">
          {/* Brand Col */}
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-2xl sm:text-3xl tracking-tight text-white">
                PRESH<span className="text-[#E04F16]">WORD</span>
              </span>
            </div>
            <p className="mt-3 text-sm text-zinc-400 max-w-sm leading-relaxed">
              Curated, non-toxic cookware and aesthetic tableware designed for modern Nigerian homes. Crafted for performance, styled for living.
            </p>
            
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-[#E04F16] animate-ping" />
                LAGOS HUB ONLINE
              </span>
              <span className="text-xs text-zinc-400 font-mono flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#E04F16]" /> Lekki Phase 1, Lagos
              </span>
            </div>
          </div>

          {/* Col 1: Shop */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#E04F16] mb-4">
              COLLECTIONS
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400 font-medium">
              <li>
                <button onClick={() => onSelectCategory('cookware')} className="hover:text-white transition-colors cursor-pointer">
                  Mineral Cookware
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('appliances')} className="hover:text-white transition-colors cursor-pointer">
                  Smart Appliances
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('tableware')} className="hover:text-white transition-colors cursor-pointer">
                  Tableware & Dining
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('bakeware')} className="hover:text-white transition-colors cursor-pointer">
                  Bakeware & Roasters
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('cutlery')} className="hover:text-white transition-colors cursor-pointer">
                  German Steel Knives
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Support */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#E04F16] mb-4">
              CLIENT CARE
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Lagos Same-Day Delivery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nationwide Shipping Rates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ceramic Care & Longevity</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Warranty & 30-Day Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Track Your Order</a></li>
            </ul>
          </div>

          {/* Col 3: Brand */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#E04F16] mb-4">
              THE HOUSE
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">The Sol-Gel Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Material Testing Reports</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hospitality & Wholesale</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Creator Collaborations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">WhatsApp Concierge</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div>
            © {new Date().getFullYear()} PRESHWORD LIVING LTD. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF DISPATCH</a>
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
