import React from 'react';
import { Home, UtensilsCrossed, ShoppingBag, ShoppingCart, Heart } from 'lucide-react';

export default function BottomNav({
  activeTab,
  onTabChange,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist
}) {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 sm:hidden glass-bottom-nav safe-bottom shadow-lg">
      <div className="grid grid-cols-5 h-16 max-w-md mx-auto px-2">
        {/* 1. Home */}
        <button
          onClick={() => {
            onTabChange('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center gap-1 transition-colors cursor-pointer ${
            activeTab === 'home' ? 'text-[#E04F16]' : 'text-zinc-500 hover:text-[#141312]'
          }`}
        >
          <Home className="w-5 h-5 stroke-[2.2]" />
          <span className="text-[10px] font-bold tracking-tight">Home</span>
        </button>

        {/* 2. Kitchen Wares */}
        <button
          onClick={() => {
            onTabChange('cookware');
            const el = document.getElementById('shop-catalog');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center gap-1 transition-colors cursor-pointer ${
            activeTab === 'cookware' ? 'text-[#E04F16]' : 'text-zinc-500 hover:text-[#141312]'
          }`}
        >
          <UtensilsCrossed className="w-5 h-5 stroke-[2.2]" />
          <span className="text-[10px] font-bold tracking-tight">Kitchen</span>
        </button>

        {/* 3. Catalog / All */}
        <button
          onClick={() => {
            onTabChange('all');
            const el = document.getElementById('shop-catalog');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center gap-1 transition-colors cursor-pointer ${
            activeTab === 'all' ? 'text-[#E04F16]' : 'text-zinc-500 hover:text-[#141312]'
          }`}
        >
          <ShoppingBag className="w-5 h-5 stroke-[2.2]" />
          <span className="text-[10px] font-bold tracking-tight">Catalog</span>
        </button>

        {/* 4. Cart */}
        <button
          onClick={onOpenCart}
          className="relative flex flex-col items-center justify-center gap-1 text-zinc-500 hover:text-[#E04F16] transition-colors cursor-pointer"
        >
          <div className="relative">
            <ShoppingCart className="w-5 h-5 stroke-[2.2]" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 min-w-4 h-4 px-1 rounded-full bg-[#E04F16] text-white text-[9px] font-black flex items-center justify-center leading-none animate-scale-in">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-bold tracking-tight">Cart</span>
        </button>

        {/* 5. Wishlist */}
        <button
          onClick={onOpenWishlist}
          className="relative flex flex-col items-center justify-center gap-1 text-zinc-500 hover:text-[#E04F16] transition-colors cursor-pointer"
        >
          <div className="relative">
            <Heart className="w-5 h-5 stroke-[2.2]" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1.5 -right-2 min-w-4 h-4 px-1 rounded-full bg-[#141312] text-white text-[9px] font-black flex items-center justify-center leading-none">
                {wishlistCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-bold tracking-tight">Saved</span>
        </button>
      </div>
    </nav>
  );
}
