import React, { useState } from 'react';
import { Heart, Plus, Check, MessageCircle } from 'lucide-react';
import { formatPrice, calculateDiscount } from '../utils/format';
import { buildWhatsAppSingleItemUrl } from '../utils/whatsapp';
import confetti from 'canvas-confetti';

export default function ProductCard({
  product,
  isWished,
  onToggleWishlist,
  onAddToCart,
  onQuickView,
  cartQty = 0
}) {
  const [justAdded, setJustAdded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const discount = calculateDiscount(product.price, product.originalPrice);

  const handleAdd = (e) => {
    e.stopPropagation();
    onAddToCart(product.id, 1);
    setJustAdded(true);

    try {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;
      confetti({
        particleCount: 16,
        spread: 40,
        origin: { x, y },
        colors: ['#E04F16', '#25D366', '#141312']
      });
    } catch { }

    setTimeout(() => setJustAdded(false), 1400);
  };

  const handleWhatsAppQuickOrder = (e) => {
    e.stopPropagation();
    const url = buildWhatsAppSingleItemUrl(product, 1);
    window.open(url, '_blank');
  };

  return (
    <div
      id={`item-${product.id}`}
      onClick={() => onQuickView(product)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col justify-between bg-white rounded-3xl p-3 sm:p-4 border border-[#E8E6E1] hover:border-zinc-400 shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer app-card scroll-mt-28"
    >
      <div>
        {/* Product Image Container */}
        <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#F5F3EF]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
          />

          {/* Badges: Discount or Drop Status */}
          <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
            {discount && (
              <span className="px-2 py-0.5 rounded-full bg-[#E04F16] text-white font-mono font-bold text-[9px] tracking-wider shadow-2xs">
                −{discount}%
              </span>
            )}
            {product.badge && (
              <span className="px-2 py-0.5 rounded-full bg-[#141312] text-white font-mono font-bold text-[9px] uppercase tracking-wider shadow-2xs">
                {product.badge}
              </span>
            )}
          </div>

          {/* Persistent In-Bag Indicator */}
          {cartQty > 0 && (
            <div className="absolute bottom-2 left-2 z-10 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-600/95 backdrop-blur-md text-white font-mono font-black text-[10px] tracking-wider shadow-md animate-scale-in">
              <Check className="w-3 h-3 stroke-[3]" />
              <span>{cartQty} IN BAG</span>
            </div>
          )}

          {/* Wishlist Heart Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product.id);
            }}
            className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all active:scale-90 z-10 ${isWished
                ? 'bg-[#E04F16] text-white shadow-2xs'
                : 'bg-white/85 text-zinc-500 hover:bg-white hover:text-[#141312] shadow-2xs'
              }`}
            aria-label="Wishlist"
          >
            <Heart className={`w-3.5 h-3.5 ${isWished ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Content Details */}
        <div className="mt-3 px-0.5">
          {/* Category Tag */}
          <span className="font-mono text-[10px] font-bold text-[#E04F16] uppercase tracking-wider block mb-1">
            {product.category}
          </span>

          {/* Title */}
          <h3 className="font-extrabold text-sm sm:text-base text-[#141312] tracking-tight leading-snug line-clamp-1 group-hover:text-[#E04F16] transition-colors">
            {product.name}
          </h3>

          {/* Description */}
          <p className="mt-1 text-xs text-zinc-500 line-clamp-2 leading-relaxed font-normal">
            {product.description}
          </p>
        </div>
      </div>

      {/* Bottom Row: Price & Action Buttons (WhatsApp 1-Tap & Add to Cart Plus) */}
      <div className="mt-3.5 pt-2.5 border-t border-zinc-100 flex items-center justify-between px-0.5">
        <div>
          <span className="font-extrabold text-sm sm:text-base text-[#141312] tracking-tight block">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="font-mono text-[11px] text-zinc-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Action Pair: WhatsApp Order + Add to Bag */}
        <div className="flex items-center gap-1.5">
          {/* Direct WhatsApp Order Icon Button */}
          <button
            onClick={handleWhatsAppQuickOrder}
            className="w-9 h-9 rounded-full bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-white flex items-center justify-center transition-all active:scale-90 cursor-pointer"
            aria-label={`Order ${product.name} on WhatsApp`}
            title="Order this item on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
          </button>

          {/* Add to Cart Plus Button */}
          <button
            onClick={handleAdd}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all active:scale-90 cursor-pointer shadow-sm shrink-0 ${
              justAdded
                ? 'bg-emerald-600 text-white scale-105'
                : cartQty > 0
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white ring-2 ring-emerald-500/30'
                : 'bg-[#141312] hover:bg-[#E04F16] text-white'
            }`}
            aria-label={`Add ${product.name} to cart`}
            title={cartQty > 0 ? `In bag (${cartQty}). Tap to add another.` : "Add to bag"}
          >
            {justAdded ? (
              <Check className="w-4 h-4 stroke-[3] animate-scale-in" />
            ) : (
              <Plus className="w-4 h-4 stroke-[2.5]" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
