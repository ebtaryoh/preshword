import React, { useState, useEffect } from 'react';
import {
  Search,
  ShoppingBag,
  Heart,
  UtensilsCrossed,
  Menu,
  X,
  MessageCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Truck,
  Zap,
  ChevronRight
} from 'lucide-react';
import { formatPrice } from '../utils/format';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from '../utils/whatsapp';

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll detection for dynamic glassmorphic height and shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navCategories = [
    { id: 'all', label: 'All Items', count: 20 },
    { id: 'cookware', label: 'Kitchen Wares', count: 6 },
    { id: 'appliances', label: 'Appliances', count: 5 },
    { id: 'utensils', label: 'Cutlery & Utensils', count: 4 },
    { id: 'kids', label: 'Children Wares', count: 2 },
    { id: 'tableware', label: 'Tableware', count: 2 }
  ];

  const handleCategoryClick = (catId) => {
    onSelectCategory(catId);
    setMobileMenuOpen(false);
    const catalogElement = document.getElementById('shop-catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappInquiryUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hello Preshword Living! 👋 I am browsing your kitchen and house wares collection and would like to ask a question or place an order.'
  )}`;

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FBF9F5]/95 backdrop-blur-2xl border-b border-[#E8E6E1] shadow-xs py-2.5'
            : 'bg-[#FBF9F5]/85 backdrop-blur-md border-b border-[#E8E6E1]/60 py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Mobile Hamburger & Brand Identity */}
            <div className="flex items-center gap-3 sm:gap-6">
              {/* Mobile Menu Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="lg:hidden p-2 rounded-2xl bg-white border border-[#E8E6E1] text-[#141312] hover:bg-[#F5F3EF] transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

              {/* Brand Logo & Editorial Kicker */}
              <button
                onClick={() => {
                  onSelectCategory('all');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left group flex items-center gap-2.5 cursor-pointer select-none"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#141312] text-white flex items-center justify-center font-black text-lg shadow-xs group-hover:scale-105 group-hover:bg-[#E04F16] transition-all">
                  <UtensilsCrossed className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="font-extrabold text-xl sm:text-2xl tracking-[-0.035em] text-[#141312] block leading-none">
                    PRESH<span className="text-[#E04F16]">WORD</span>
                  </span>
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest hidden sm:block mt-0.5">
                    KITCHEN & HOUSE WARES • LAGOS
                  </span>
                </div>
              </button>

              {/* Desktop Category Navigation Bar */}
              <nav className="hidden lg:flex items-center gap-1 ml-2 p-1 rounded-full bg-[#F2EFE9] border border-[#E8E6E1]/80 shadow-2xs">
                {navCategories.map((cat) => {
                  const isSelected = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryClick(cat.id)}
                      className={`relative px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                        isSelected
                          ? 'bg-white text-[#141312] shadow-xs'
                          : 'text-zinc-600 hover:text-[#141312] hover:bg-white/50'
                      }`}
                    >
                      <span>{cat.label}</span>
                      {isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E04F16]" />
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Right Action Island */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* WhatsApp VIP Concierge Pill (Desktop & Tablet) */}
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366]/12 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#141312] text-xs font-bold transition-all"
                title="Chat with Lagos Dispatch Concierge on WhatsApp"
              >
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
                <span className="text-[11px] font-mono font-bold tracking-tight text-[#141312]">
                  WhatsApp VIP
                </span>
              </a>

              {/* Quick Search Button / Capsule */}
              <button
                onClick={onOpenSearch}
                className="flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-full bg-white border border-[#E8E6E1] hover:border-zinc-400 text-xs font-medium text-zinc-500 hover:text-[#141312] shadow-2xs transition-all cursor-pointer"
                aria-label="Search housewares"
              >
                <Search className="w-4 h-4 text-zinc-400" />
                <span className="hidden sm:inline">Search...</span>
                <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 text-[9px] font-mono font-bold bg-[#F5F3EF] text-zinc-500 rounded border border-zinc-200">
                  ⌘K
                </kbd>
              </button>

              {/* Wishlist Button */}
              <button
                onClick={onOpenWishlist}
                className="relative p-2 rounded-full bg-white border border-[#E8E6E1] hover:border-zinc-400 text-zinc-600 hover:text-[#141312] transition-all shadow-2xs cursor-pointer"
                aria-label="Saved Wishlist"
              >
                <Heart className="w-4 h-4" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#E04F16] text-white text-[9px] font-black flex items-center justify-center leading-none shadow-xs">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Shopping Bag Button with Live Naira Total */}
              <button
                onClick={onOpenCart}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-[#141312] hover:bg-[#E04F16] text-white transition-all shadow-xs active:scale-95 group cursor-pointer"
                aria-label="View Shopping Cart"
              >
                <ShoppingBag className="w-4 h-4 text-white transition-colors" />
                <span className="text-xs font-bold font-sans">
                  {cartCount > 0 ? (
                    <span className="flex items-center gap-1.5">
                      <span>Bag ({cartCount})</span>
                      {cartTotal > 0 && (
                        <span className="hidden sm:inline font-mono text-[11px] font-normal text-zinc-300 group-hover:text-white">
                          • {formatPrice(cartTotal)}
                        </span>
                      )}
                    </span>
                  ) : (
                    <span>Bag</span>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay & Slide-Over Panel */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide-out Menu Panel */}
          <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-white shadow-2xl flex flex-col justify-between p-5 animate-slide-up border-r border-[#E8E6E1]">
            <div>
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[#141312] text-white flex items-center justify-center">
                    <UtensilsCrossed className="w-4 h-4" />
                  </div>
                  <span className="font-extrabold text-lg text-[#141312]">
                    PRESH<span className="text-[#E04F16]">WORD</span>
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full bg-[#F5F3EF] hover:bg-zinc-200 text-zinc-600 transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Search Shortcut in Mobile Drawer */}
              <div className="mt-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSearch();
                  }}
                  className="w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-[#F5F3EF] border border-[#E8E6E1] text-xs font-medium text-zinc-500 text-left"
                >
                  <Search className="w-4 h-4 text-zinc-400" />
                  <span>Search blenders, pots, cutlery...</span>
                </button>
              </div>

              {/* Department Directory */}
              <div className="mt-5">
                <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-2 px-1">
                  BROWSE BY DEPARTMENT
                </span>
                <div className="space-y-1">
                  {navCategories.map((cat) => {
                    const isSelected = activeCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => handleCategoryClick(cat.id)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-2xl text-xs font-bold transition-all text-left cursor-pointer ${
                          isSelected
                            ? 'bg-[#141312] text-white shadow-xs'
                            : 'hover:bg-[#F5F3EF] text-zinc-700'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {isSelected && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E04F16]" />
                          )}
                          <span>{cat.label}</span>
                        </div>
                        <span
                          className={`font-mono text-[10px] px-2 py-0.5 rounded-full ${
                            isSelected
                              ? 'bg-white/20 text-white'
                              : 'bg-zinc-100 text-zinc-500'
                          }`}
                        >
                          {cat.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Drawer Bottom Actions & Lagos Trust */}
            <div className="pt-4 border-t border-zinc-100 space-y-3">
              {/* WhatsApp Live Order Button */}
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-black stroke-black" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Lagos Trust Signals */}
              <div className="p-3 rounded-2xl bg-[#F5F3EF] border border-[#E8E6E1] space-y-1.5 text-[11px] text-zinc-600">
                <div className="flex items-center gap-1.5 font-bold text-[#141312]">
                  <Truck className="w-3.5 h-3.5 text-[#E04F16]" />
                  <span>Same-Day Lagos Dispatch (2–4 hrs)</span>
                </div>
                <div className="flex items-center gap-1.5 font-bold text-[#141312]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Pay On Delivery Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
