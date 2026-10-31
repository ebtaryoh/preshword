import React from 'react';
import { Search, ShoppingBag, Heart, Sparkles, UtensilsCrossed, ArrowRight } from 'lucide-react';
import { formatPrice } from '../utils/format';

export default function Navbar({
  cartCount,
  cartTotal,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onSelectCategory,
  activeCategory
}) {
  return (
    <header className="sticky top-0 z-30 glass-nav transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Left: Brand Logo & Kicker */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                onSelectCategory('all');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left group flex items-center gap-2.5"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#141312] text-white flex items-center justify-center font-black text-lg shadow-sm group-hover:scale-105 group-hover:bg-[#E04F16] transition-all">
                <UtensilsCrossed className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-extrabold text-xl sm:text-2xl tracking-[-0.03em] text-[#141312] block leading-none">
                  PRESH<span className="text-[#E04F16]">WORD</span>
                </span>
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest hidden sm:block mt-0.5">
                  KITCHEN & HOUSE WARES • LAGOS
                </span>
              </div>
            </button>

            {/* Desktop Navigation Category Links */}
            <nav className="hidden lg:flex items-center gap-1.5 ml-4 p-1 rounded-full bg-[#F4F2EE] border border-[#E8E6E1]">
              <button
                onClick={() => onSelectCategory('all')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${activeCategory === 'all'
                    ? 'bg-white text-[#141312] shadow-2xs'
                    : 'text-zinc-600 hover:text-[#141312]'
                  }`}
              >
                All
              </button>
              <button
                onClick={() => onSelectCategory('cookware')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${activeCategory === 'cookware'
                    ? 'bg-white text-[#141312] shadow-2xs'
                    : 'text-zinc-600 hover:text-[#141312]'
                  }`}
              >
                🍳 Kitchen Wares
              </button>
              <button
                onClick={() => onSelectCategory('appliances')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${activeCategory === 'appliances'
                    ? 'bg-white text-[#141312] shadow-2xs'
                    : 'text-zinc-600 hover:text-[#141312]'
                  }`}
              >
                ⚡ Appliances
              </button>
              <button
                onClick={() => onSelectCategory('utensils')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${activeCategory === 'utensils'
                    ? 'bg-white text-[#141312] shadow-2xs'
                    : 'text-zinc-600 hover:text-[#141312]'
                  }`}
              >
                🍴 Cutlery & Utensils
              </button>
              <button
                onClick={() => onSelectCategory('kids')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${activeCategory === 'kids'
                    ? 'bg-white text-[#141312] shadow-2xs'
                    : 'text-zinc-600 hover:text-[#141312]'
                  }`}
              >
                👶 Children Wares
              </button>
              <button
                onClick={() => onSelectCategory('tableware')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${activeCategory === 'tableware'
                    ? 'bg-white text-[#141312] shadow-2xs'
                    : 'text-zinc-600 hover:text-[#141312]'
                  }`}
              >
                🍽️ Tableware
              </button>
            </nav>
          </div>

          {/* Right Action Island */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Quick Search Button / Capsule */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white border border-[#E8E6E1] hover:border-zinc-400 text-xs font-medium text-zinc-500 hover:text-[#141312] shadow-2xs transition-all cursor-pointer"
            >
              <Search className="w-4 h-4 text-zinc-400" />
              <span className="hidden sm:inline">Search kitchenware...</span>
              <kbd className="hidden md:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono font-bold bg-[#F5F3EF] text-zinc-500 rounded border border-zinc-200">
                ⌘K
              </kbd>
            </button>

            {/* Wishlist Button */}
            <button
              onClick={onOpenWishlist}
              className="relative p-2.5 rounded-full bg-white border border-[#E8E6E1] hover:border-zinc-400 text-zinc-600 hover:text-[#141312] transition-all shadow-2xs cursor-pointer"
              aria-label="Wishlist"
            >
              <Heart className="w-4 h-4" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#141312] text-white text-[9px] font-black flex items-center justify-center leading-none">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* View Cart Pill Button (Matching the video's top right 'View cart' button!) */}
            <button
              onClick={onOpenCart}
              className="flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-full bg-white hover:bg-[#141312] text-[#141312] hover:text-white border border-[#141312] transition-all shadow-2xs active:scale-95 group cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-[#E04F16] group-hover:text-white transition-colors" />
              <span className="text-xs font-bold font-sans">
                {cartCount > 0 ? (
                  <span className="flex items-center gap-1.5">
                    <span>View cart</span>
                    <span className="px-1.5 py-0.5 rounded-full bg-[#E04F16] text-white text-[10px] font-mono font-bold">
                      {cartCount}
                    </span>
                  </span>
                ) : (
                  'View cart'
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
