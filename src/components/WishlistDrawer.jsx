import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import { formatPrice } from '../utils/format';

export default function WishlistDrawer({
  isOpen,
  onClose,
  wishlist,
  onToggleWishlist,
  onAddToCart,
  onAddAllToCart
}) {
  if (!isOpen) return null;

  const wishedItems = products.filter((p) => wishlist.includes(p.id));
  const totalWishedValue = wishedItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-8 sm:pl-10">
        <div className="w-screen max-w-md bg-white border-l border-black/[0.08] shadow-2xl flex flex-col justify-between animate-slide-up">
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-black/[0.06] bg-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
              <h3 className="font-display font-extrabold text-xl text-[#09090B] tracking-tight">
                SAVED PIECES
              </h3>
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-full bg-rose-50 text-rose-600">
                {wishedItems.length}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-zinc-100 text-zinc-500 hover:text-[#09090B] transition-colors cursor-pointer"
              aria-label="Close wishlist"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 divide-y divide-zinc-100">
            {wishedItems.length > 0 ? (
              wishedItems.map((item) => (
                <div key={item.id} className="py-4 first:pt-0 last:pb-0 flex gap-4 items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-2xl object-cover bg-[#F4F4F6] border border-black/[0.06] shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-bold text-sm text-[#09090B] truncate">
                      {item.name}
                    </h4>
                    <span className="font-mono text-xs text-[#09090B] font-extrabold block mt-0.5">
                      {formatPrice(item.price)}
                    </span>
                    <div className="flex items-center gap-2 mt-2.5">
                      <button
                        onClick={() => {
                          onAddToCart(item.id, 1);
                          onToggleWishlist(item.id);
                        }}
                        className="px-3 py-1.5 rounded-xl bg-[#09090B] hover:bg-[#D4FF00] text-white hover:text-[#09090B] font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Move to Bag</span>
                      </button>
                      <button
                        onClick={() => onToggleWishlist(item.id)}
                        className="p-1.5 rounded-xl hover:bg-zinc-100 text-zinc-400 hover:text-rose-500 transition-colors cursor-pointer"
                        title="Remove from saved"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-24 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-rose-50 flex items-center justify-center mb-4">
                  <Heart className="w-7 h-7 text-rose-400" />
                </div>
                <h4 className="font-display font-bold text-lg text-[#09090B]">
                  No saved pieces yet
                </h4>
                <p className="text-xs text-zinc-500 mt-1 max-w-xs leading-relaxed">
                  Tap the heart icon on any piece to curate your dream kitchen wish list.
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 px-6 py-2.5 rounded-full bg-[#09090B] text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#D4FF00] hover:text-[#09090B] transition-all cursor-pointer"
                >
                  Explore Collection
                </button>
              </div>
            )}
          </div>

          {/* Footer Action */}
          {wishedItems.length > 0 && (
            <div className="p-5 sm:p-6 bg-white border-t border-black/[0.06] shadow-xl">
              <div className="flex items-center justify-between text-xs font-mono mb-4 text-zinc-600">
                <span>Total Value:</span>
                <span className="font-bold text-sm text-[#09090B]">{formatPrice(totalWishedValue)}</span>
              </div>
              <button
                onClick={() => {
                  onAddAllToCart(wishedItems.map((i) => i.id));
                  onClose();
                }}
                className="w-full py-3.5 rounded-2xl bg-[#09090B] hover:bg-[#D4FF00] text-white hover:text-[#09090B] font-display font-extrabold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>MOVE ALL ({wishedItems.length}) TO BAG</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
