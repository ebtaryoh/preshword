import React, { useState, useMemo } from 'react';
import { Search, Sparkles, X, ArrowUpDown, Tag, CheckCircle2, SlidersHorizontal } from 'lucide-react';
import { categories, products } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductGrid({
  activeCategory,
  onSelectCategory,
  wishlist,
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
      {/* Section Header (matching the video's 'Today's kitchen picks' & subtitle) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-[#E04F16] mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ESTHETIC KITCHEN CATALOG</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-[-0.03em] text-[#141312]">
            {activeCategoryObj ? activeCategoryObj.name : "Today's kitchen picks"}
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-zinc-500 font-medium">
            {activeCategoryObj
              ? `Curated essentials for your ${activeCategoryObj.name.toLowerCase()} station.`
              : 'Non-toxic cookware, cutlery, and tableware — prepared to dispatch.'}
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto">
          <span className="font-mono text-xs font-bold uppercase px-3 py-1.5 rounded-full bg-[#F5F3EF] border border-[#E8E6E1] text-zinc-600">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'}
          </span>
        </div>
      </div>

      {/* Large Rounded Search Input (exact match to video: '🔍 Search meals...' / 'Search groceries...') */}
      <div className="mb-4">
        <div className="relative w-full max-w-2xl">
          <Search className="w-5 h-5 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search cookware, knives, pans, tableware..."
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

      {/* Pill Filter Tabs (exact match to video: [All], [Rice Dishes], [Swallow], etc.) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none mb-6">
        <button
          onClick={() => onSelectCategory('all')}
          className={`px-4 py-2 rounded-full font-bold text-xs tracking-tight shrink-0 transition-all ${
            activeCategory === 'all'
              ? 'bg-[#141312] text-white shadow-sm'
              : 'bg-white border border-[#E8E6E1] text-zinc-700 hover:border-zinc-400 shadow-2xs'
          }`}
        >
          All Pieces ({products.length})
        </button>
        {categories.map((cat) => {
          const count = products.filter((p) => p.category === cat.id).length;
          const isSelected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 py-2 rounded-full font-bold text-xs tracking-tight shrink-0 transition-all ${
                isSelected
                  ? 'bg-[#141312] text-white shadow-sm'
                  : 'bg-white border border-[#E8E6E1] text-zinc-700 hover:border-zinc-400 shadow-2xs'
                }`}
            >
              {cat.name} ({count})
            </button>
          );
        })}
      </div>

      {/* Secondary Controls: On Sale, In Stock & Sort */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setOnlySale(!onlySale)}
            className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold flex items-center gap-1.5 transition-all ${
              onlySale
                ? 'bg-[#E04F16] text-white shadow-sm'
                : 'bg-white border border-[#E8E6E1] text-zinc-700 hover:bg-zinc-50'
            }`}
          >
            <Tag className="w-3.5 h-3.5" />
            <span>DISCOUNTED</span>
          </button>

          <button
            onClick={() => setOnlyInStock(!onlyInStock)}
            className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold flex items-center gap-1.5 transition-all ${
              onlyInStock
                ? 'bg-emerald-600 text-white'
                : 'bg-white border border-[#E8E6E1] text-zinc-700 hover:bg-zinc-50'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>SAME-DAY DISPATCH</span>
          </button>

          {(searchQuery || onlySale || onlyInStock || activeCategory !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setOnlySale(false);
                setOnlyInStock(false);
                onSelectCategory('all');
              }}
              className="px-3 py-1.5 rounded-xl font-mono text-xs font-bold text-zinc-500 hover:text-black hover:bg-black/5 transition-all flex items-center gap-1"
            >
              <X className="w-3.5 h-3.5" />
              <span>RESET</span>
            </button>
          )}
        </div>

        {/* Sort Select */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] text-zinc-400 uppercase hidden sm:inline">
            SORT:
          </span>
          <div className="relative inline-block">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-[#E8E6E1] hover:border-zinc-400 rounded-xl px-3.5 py-1.5 pr-8 text-xs font-bold text-[#141312] focus:outline-none focus:ring-2 focus:ring-[#141312] cursor-pointer shadow-2xs"
            >
              <option value="recommended">Featured Picks</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest Drops</option>
            </select>
            <ArrowUpDown className="w-3.5 h-3.5 text-zinc-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* 2-Column Mobile, 3-Column Tablet, 4-Column Desktop Product Grid (exact match to video) */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {filteredProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              isWished={wishlist.includes(p.id)}
              onToggleWishlist={onToggleWishlist}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      ) : (
        <div className="py-20 px-4 text-center rounded-3xl bg-white border border-[#E8E6E1] shadow-2xs">
          <div className="w-14 h-14 mx-auto rounded-full bg-[#F5F3EF] text-zinc-500 flex items-center justify-center font-bold text-xl mb-3">
            🔍
          </div>
          <h3 className="font-extrabold text-lg text-[#141312]">
            No matching cookware found
          </h3>
          <p className="mt-1 text-xs text-zinc-500 max-w-sm mx-auto">
            Try adjusting your search terms or filters to view all 27 curated pieces.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setOnlySale(false);
              setOnlyInStock(false);
              onSelectCategory('all');
            }}
            className="mt-5 px-6 py-2.5 rounded-full bg-[#141312] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#E04F16] transition-all cursor-pointer"
          >
            Show All 27 Pieces
          </button>
        </div>
      )}
    </section>
  );
}
