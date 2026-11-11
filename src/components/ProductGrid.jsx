import React, { useState, useMemo } from 'react';
import { Search, Sparkles, X, ArrowUpDown, Tag, CheckCircle2, SlidersHorizontal } from 'lucide-react';
import { categories, products } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductGrid({
  activeCategory,
  onSelectCategory,
  wishlist,
  cart = [],
  onToggleWishlist,
  onAddToCart,
  onQuickView
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [onlySale, setOnlySale] = useState(false);
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [sortBy, setSortBy] = useState('recommended');

  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (activeCategory && activeCategory !== 'all') {
      list = list.filter((p) => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    if (onlySale) list = list.filter((p) => p.onSale);
    if (onlyInStock) list = list.filter((p) => p.inStock);

    switch (sortBy) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'newest':
        list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        break;
    }

    return list;
  }, [activeCategory, searchQuery, onlySale, onlyInStock, sortBy]);

  const activeCategoryObj = categories.find((c) => c.id === activeCategory);

  return (
    <section id="shop-catalog" className="py-8 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-[#E04F16] mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ESTHETIC HOUSE WARES CATALOG</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-[-0.03em] text-[#141312]">
            {activeCategoryObj ? activeCategoryObj.name : "Today's Curated Essentials"}
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-zinc-500 font-medium">
            {activeCategoryObj
              ? `Curated essentials for your ${activeCategoryObj.name.toLowerCase()}.`
              : 'Commercial blenders, smart toasters, non-toxic cookware, cutlery & children wares.'}
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto">
          <span className="font-mono text-xs font-bold uppercase px-3.5 py-1.5 rounded-full bg-[#F5F3EF] border border-[#E8E6E1] text-zinc-600">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'Product Ready' : 'Products Ready'}
          </span>
        </div>
      </div>

      {/* Large Rounded Search Input */}
      <div className="mb-4">
        <div className="relative w-full max-w-2xl">
          <Search className="w-5 h-5 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search blenders, toasters, cookware, cutlery, children wares..."
            className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white border border-[#E8E6E1] text-sm font-medium text-[#141312] placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#E04F16] focus:border-transparent shadow-2xs transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-zinc-400 hover:text-black cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Pill Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none mb-6">
        <button
          onClick={() => onSelectCategory('all')}
          className={`px-4 py-2 rounded-full font-bold text-xs tracking-tight shrink-0 transition-all cursor-pointer ${
            activeCategory === 'all'
              ? 'bg-[#141312] text-white shadow-sm'
              : 'bg-white border border-[#E8E6E1] text-zinc-700 hover:border-zinc-400 shadow-2xs'
          }`}
        >
          All Pieces ({products.length})
        </button>

        {categories.map((cat) => {
          const isSelected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 py-2 rounded-full font-bold text-xs tracking-tight shrink-0 transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#141312] text-white shadow-sm'
                  : 'bg-white border border-[#E8E6E1] text-zinc-700 hover:border-zinc-400 shadow-2xs'
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          );
        })}
      </div>

      {/* Filter Toggles & Sorting Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-zinc-200/70 text-xs">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setOnlySale((prev) => !prev)}
            className={`px-3 py-1.5 rounded-full font-medium transition-all cursor-pointer border ${
              onlySale
                ? 'bg-[#E04F16] text-white border-[#E04F16]'
                : 'bg-white text-zinc-600 border-[#E8E6E1] hover:border-zinc-400'
            }`}
          >
            Special Offers
          </button>
          <button
            onClick={() => setOnlyInStock((prev) => !prev)}
            className={`px-3 py-1.5 rounded-full font-medium transition-all cursor-pointer border ${
              onlyInStock
                ? 'bg-emerald-600 text-white border-emerald-600'
                : 'bg-white text-zinc-600 border-[#E8E6E1] hover:border-zinc-400'
            }`}
          >
            In Stock (Lekki Hub)
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-zinc-500 font-medium hidden sm:inline">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-1.5 rounded-xl bg-white border border-[#E8E6E1] text-xs font-bold text-[#141312] focus:outline-none focus:ring-1 focus:ring-[#E04F16] cursor-pointer"
          >
            <option value="recommended">Featured Picks</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
            <option value="newest">Latest 2026 Drops</option>
          </select>
        </div>
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 px-4 bg-white rounded-3xl border border-[#E8E6E1] my-4">
          <p className="text-base font-bold text-[#141312]">No items matched your search.</p>
          <p className="text-xs text-zinc-500 mt-1 max-w-sm mx-auto">
            Try adjusting your search terms or clearing your department filter.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              onSelectCategory('all');
              setOnlySale(false);
              setOnlyInStock(false);
            }}
            className="mt-4 px-4 py-2 rounded-full bg-[#141312] text-white text-xs font-bold hover:bg-[#E04F16] transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        /* The Responsive Product Grid */
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {filteredProducts.map((product) => {
            const inCart = cart.find((c) => c.id === product.id);
            return (
              <ProductCard
                key={product.id}
                product={product}
                isWished={wishlist.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
                cartQty={inCart ? inCart.qty : 0}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}
