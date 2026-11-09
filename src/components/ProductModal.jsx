import React, { useState, useEffect } from 'react';
import { X, ArrowLeft, Heart, ShoppingBag, MessageCircle, Star, Phone, Check } from 'lucide-react';
import { formatPrice, calculateDiscount } from '../utils/format';
import { buildWhatsAppSingleItemUrl, WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from '../utils/whatsapp';
import confetti from 'canvas-confetti';

export default function ProductModal({
  product,
  onClose,
  isWished,
  onToggleWishlist,
  onAddToCart
}) {
  const [selectedImg, setSelectedImg] = useState(product?.image);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setSelectedImg(product?.image);
    setQty(1);
    setAdded(false);
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const gallery = product.gallery && product.gallery.length ? product.gallery : [product.image];
  const discount = calculateDiscount(product.price, product.originalPrice);
  const totalPrice = product.price * qty;

  const handleAdd = () => {
    onAddToCart(product.id, qty);
    setAdded(true);

    try {
      confetti({
        particleCount: 22,
        spread: 45,
        origin: { y: 0.7 },
        colors: ['#E04F16', '#25D366', '#141312']
      });
    } catch {}

    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1100);
  };

  const handleWhatsAppOrder = () => {
    const url = buildWhatsAppSingleItemUrl(product, qty);
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden border border-[#E8E6E1] shadow-2xl z-10 animate-scale-in">
        {/* Top Header Bar with Back Button */}
        <div className="p-4 sm:p-5 border-b border-zinc-100 flex items-center justify-between bg-white">
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#F5F3EF] hover:bg-zinc-200 text-[#141312] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Back"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <span className="font-mono text-xs font-bold text-[#E04F16] uppercase tracking-wider">
            {product.category}
          </span>

          <button
            onClick={() => onToggleWishlist(product.id)}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              isWished
                ? 'bg-[#E04F16] text-white shadow-2xs'
                : 'bg-[#F5F3EF] text-zinc-500 hover:text-[#141312]'
            }`}
          >
            <Heart className={`w-4 h-4 ${isWished ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Product Content Body */}
        <div className="p-5 sm:p-6 max-h-[75vh] overflow-y-auto">
          {/* Main Product Image Container */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#F5F3EF] border border-[#E8E6E1] mb-4">
            <img
              src={selectedImg}
              alt={product.name}
              className="w-full h-full object-cover transition-all duration-300"
            />
            {discount && (
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#E04F16] text-white font-mono font-bold text-xs">
                −{discount}% OFF
              </span>
            )}
          </div>

          {/* Gallery Thumbnails */}
          {gallery.length > 1 && (
            <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
              {gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImg(img)}
                  className={`w-14 h-14 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    selectedImg === img
                      ? 'border-[#E04F16] scale-95 shadow-sm'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Title & Price */}
          <h2 className="font-extrabold text-xl sm:text-2xl text-[#141312] tracking-tight">
            {product.name}
          </h2>

          <div className="mt-2 flex items-baseline gap-2.5">
            <span className="font-extrabold text-2xl text-[#E04F16] tracking-tight">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="font-mono text-sm text-zinc-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="mt-2.5 text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
            {product.description}
          </p>

          {/* Quantity Stepper Row */}
          <div className="mt-5 p-3 rounded-2xl bg-[#F5F3EF] border border-[#E8E6E1] flex items-center justify-between">
            <span className="text-xs font-bold text-zinc-600">Quantity</span>
            <div className="flex items-center bg-white rounded-xl border border-[#E8E6E1] p-0.5">
              <button
                onClick={() => setQty((prev) => Math.max(1, prev - 1))}
                className="w-8 h-8 rounded-lg hover:bg-zinc-100 text-[#141312] font-bold text-base flex items-center justify-center transition-colors cursor-pointer"
              >
                −
              </button>
              <span className="w-8 text-center font-bold text-sm text-[#141312]">
                {qty}
              </span>
              <button
                onClick={() => setQty((prev) => prev + 1)}
                className="w-8 h-8 rounded-lg hover:bg-zinc-100 text-[#141312] font-bold text-base flex items-center justify-center transition-colors cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          {/* Dual Action Buttons: Send to WhatsApp + Add to Bag */}
          <div className="mt-4 space-y-2.5">
            {/* Primary: Direct WhatsApp Order */}
            <button
              onClick={handleWhatsAppOrder}
              className="w-full py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-extrabold text-sm tracking-wide transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Order on WhatsApp ({formatPrice(totalPrice)})</span>
            </button>

            {/* Secondary: Add to Bag */}
            <button
              onClick={handleAdd}
              className={`w-full py-3 px-6 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all border border-[#E8E6E1] flex items-center justify-center gap-2 cursor-pointer ${
                added
                  ? 'bg-emerald-600 text-white border-transparent'
                  : 'bg-white hover:bg-[#F5F3EF] text-[#141312]'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Added to Bag!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Concierge Support */}
          <div className="mt-6 pt-4 border-t border-zinc-100 text-center">
            <span className="text-[11px] font-mono text-zinc-400 block mb-2">
              NEED HELP WITH SIZING OR CARE?
            </span>
            <div className="flex items-center justify-center gap-4 text-xs font-bold text-zinc-600">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Preshword,%20I%20have%20a%20question%20about%20${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#25D366] flex items-center gap-1 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
