import React, { useState, useEffect } from 'react';
import { products } from './data/products';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import CategoryGrid from './components/CategoryGrid';
import ProductGrid from './components/ProductGrid';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import SearchModal from './components/SearchModal';
import ProductModal from './components/ProductModal';
import CheckoutModal from './components/CheckoutModal';
import Toast from './components/Toast';
import LiveSalesNotification from './components/LiveSalesNotification';
import BottomNav from './components/BottomNav';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  // Local storage state
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('preshworld_cart_v2') || localStorage.getItem('preshword_cart_v2');
      return saved ? JSON.parse(saved) : [{ id: 1, qty: 1 }];
    } catch {
      return [{ id: 1, qty: 1 }];
    }
  });

  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('preshworld_wishlist_v2') || localStorage.getItem('preshword_wishlist_v2');
      return saved ? JSON.parse(saved) : [2, 11];
    } catch {
      return [2, 11];
    }
  });

  // UI States
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('home');
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutData, setCheckoutData] = useState({ total: 0, items: [], discount: 0 });
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem('preshworld_cart_v2', JSON.stringify(cart));
    } catch { }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('preshworld_wishlist_v2', JSON.stringify(wishlist));
    } catch { }
  }, [wishlist]);

  // Toast helper
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 2800);
  };

  // Cart operations
  const handleAddToCart = (productId, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === productId);
      if (existing) {
        return prev.map((item) =>
          item.id === productId ? { ...item, qty: item.qty + qty } : item
        );
      }
      return [...prev, { id: productId, qty }];
    });

    const p = products.find((pr) => pr.id === productId);
    showToast(`${qty} × ${p ? p.name : 'item'} added to cart`);
  };

  const handleUpdateQty = (productId, delta) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.id === productId) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
    showToast('Item removed from cart');
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Wishlist operations
  const handleToggleWishlist = (productId) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        showToast('Removed from saved items');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Saved to wishlist');
        return [...prev, productId];
      }
    });
  };

  const handleAddAllWishedToCart = (itemIds) => {
    itemIds.forEach((id) => handleAddToCart(id, 1));
    showToast(`Moved ${itemIds.length} items to bag!`);
  };

  // Checkout trigger
  const handleProceedCheckout = (total, items, discount) => {
    setCheckoutData({ total, items, discount });
    setCheckoutOpen(true);
  };

  // Cart metrics
  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const cartTotal = cart.reduce((sum, item) => {
    const p = products.find((prod) => prod.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);

  const handleSelectCategory = (catId) => {
    setActiveCategory(catId);
    setActiveTab(catId === 'cookware' ? 'cookware' : 'all');
    const shopEl = document.getElementById('shop-catalog');
    if (shopEl) {
      shopEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#141312] flex flex-col font-sans selection:bg-[#E04F16] selection:text-white">
      {/* 1. Global Interactive Announcement Ticker */}
      <AnnouncementBar
        onOpenPromo={() => setCartOpen(true)}
        showToast={showToast}
      />

      {/* 2. Glassmorphic Navigation Bar */}
      <Navbar
        cartCount={cartCount}
        cartTotal={cartTotal}
        wishlistCount={wishlist.length}
        onOpenCart={() => setCartOpen(true)}
        onOpenWishlist={() => setWishlistOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        onSelectCategory={handleSelectCategory}
        activeCategory={activeCategory}
      />

      <main className="flex-1">
        {/* 3. Hero Section (matching the video's dark rounded card with warm terracotta glow) */}
        <Hero
          onExplore={() => handleSelectCategory('all')}
          onQuickAdd={(id) => handleAddToCart(id, 1)}
          onSelectCategory={handleSelectCategory}
        />

        {/* 4. Infinite Marquee Ticker */}
        <MarqueeTicker />

        {/* 5. Bento Category Showcase & Value Prop Badges */}
        <CategoryGrid
          onSelectCategory={handleSelectCategory}
          activeCategory={activeCategory}
        />

        {/* 6. Curated Product Catalog with Filters & Circular Plus Buttons */}
        <ProductGrid
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onAddToCart={handleAddToCart}
          onQuickView={(p) => setQuickViewProduct(p)}
        />

        {/* 7. Verified Customer Reviews */}
        <ReviewsSection />
      </main>

      {/* 8. Giant Typographic Dark Footer */}
      <Footer
        onSelectCategory={handleSelectCategory}
      />

      {/* Slide-over Cart Drawer (matching video layout) */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveFromCart}
        onProceedCheckout={handleProceedCheckout}
        onClearCart={handleClearCart}
        showToast={showToast}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        wishlist={wishlist}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
        onAddAllToCart={handleAddAllWishedToCart}
      />

      {/* Command-K Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectProduct={(p) => setQuickViewProduct(p)}
        onSelectCategory={handleSelectCategory}
      />

      {/* Quick View Product Modal (matching video's stepper, dynamic add button & WhatsApp inquiry) */}
      {quickViewProduct && (
        <ProductModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          isWished={wishlist.includes(quickViewProduct.id)}
          onToggleWishlist={handleToggleWishlist}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* 3-Step Checkout Wizard Modal */}
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        total={checkoutData.total}
        cartItems={checkoutData.items}
        discount={checkoutData.discount}
        onClearCart={handleClearCart}
      />

      {/* Floating Micro-Notifications & WhatsApp Concierge */}
      <Toast message={toastMessage} />
      <LiveSalesNotification
        onQuickView={(p) => setQuickViewProduct(p)}
      />
      <FloatingWhatsApp />

      {/* Mobile App Bottom Navigation Bar (exact match to video!) */}
      <BottomNav
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          if (tab === 'cookware' || tab === 'all') {
            handleSelectCategory(tab);
          }
        }}
        cartCount={cartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setCartOpen(true)}
        onOpenWishlist={() => setWishlistOpen(true)}
      />
    </div>
  );
}
