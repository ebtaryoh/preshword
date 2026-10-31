import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Flame } from 'lucide-react';
import { products } from '../data/products';
import { formatPrice } from '../utils/format';

export default function SearchModal({ isOpen, onClose, onSelectProduct, onSelectCategory }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const popularSearches = ['Ceramic Pan', 'Cast Iron Dutch Oven', 'Chef Knife', 'Blender', 'Cutlery Set', 'Wok', 'Tableware'];

  const results = query.trim()
    ? products.filter(
      (p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 8)
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Palette */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden border border-[#E8E6E1] shadow-2xl z-10 animate-scale-in">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-zinc-100 flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-zinc-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search cookware, knives, appliances, tableware..."
            className="w-full text-base sm:text-lg font-medium text-[#141312] placeholder:text-zinc-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-zinc-400 hover:text-black hover:bg-zinc-100 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2.5 py-1 text-[11px] font-mono font-bold bg-[#F5F3EF] text-zinc-500 rounded-lg border border-zinc-200">
            ESC
          </kbd>
        </div>

        {/* Popular Tags */}
        {!query && (
          <div className="p-5 sm:p-6 bg-[#FBF9F5]">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-[#E04F16]" /> POPULAR SEARCHES
            </span>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="px-3.5 py-1.5 rounded-full bg-white border border-[#E8E6E1] hover:border-zinc-400 text-xs font-semibold text-zinc-700 hover:text-[#141312] transition-all shadow-2xs cursor-pointer"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        {query && (
          <div className="p-3 sm:p-4 divide-y divide-zinc-100 max-h-[60vh] overflow-y-auto">
            {results.length > 0 ? (
              results.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectProduct(item);
                    onClose();
                  }}
                  className="py-3 px-3 rounded-2xl hover:bg-[#F5F3EF] cursor-pointer flex items-center justify-between gap-4 transition-colors group"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-xl object-cover bg-zinc-100 border border-black/5 shrink-0"
                    />
                    <div className="min-w-0">
                      <h4 className="font-extrabold text-sm text-[#141312] truncate group-hover:text-[#E04F16] transition-colors">
                        {item.name}
                      </h4>
                      <span className="font-mono text-[10px] text-zinc-400 uppercase">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="font-bold text-sm text-[#141312]">
                      {formatPrice(item.price)}
                    </span>
                    <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 group-hover:text-[#E04F16] transition-all" />
                  </div>
                </div>
              ))
            ) : (
              <div className="py-16 text-center text-zinc-400 text-sm">
                No products found matching "<strong className="text-[#141312]">{query}</strong>". Try searching for "pan", "knife", or "blender".
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
