import React, { useState, useEffect } from 'react';
import { ShoppingBag, X } from 'lucide-react';
import { products } from '../data/products';

const sampleSales = [
  { name: 'Kemi from Lekki Phase 1', itemIndex: 0, time: '2 mins ago' },
  { name: 'Emeka from Victoria Island', itemIndex: 10, time: '4 mins ago' },
  { name: 'Dr. Fatima from Maitama, Abuja', itemIndex: 2, time: '6 mins ago' },
  { name: 'Babatunde from Ikeja GRA', itemIndex: 5, time: '8 mins ago' },
  { name: 'Ngozi from Old GRA, Port Harcourt', itemIndex: 4, time: '11 mins ago' }
];

export default function LiveSalesNotification({ onQuickView }) {
  const [currentSale, setCurrentSale] = useState(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    let timeoutId;
    let index = 0;

    const showNext = () => {
      const sale = sampleSales[index % sampleSales.length];
      const product = products[sale.itemIndex] || products[0];
      setCurrentSale({ ...sale, product });
      index++;

      // Hide after 5 seconds
      timeoutId = setTimeout(() => {
        setCurrentSale(null);
        // Next after 20 seconds
        timeoutId = setTimeout(showNext, 20000);
      }, 5000);
    };

    // First appearance after 6 seconds
    timeoutId = setTimeout(showNext, 6000);

    return () => clearTimeout(timeoutId);
  }, [dismissed]);

  if (!currentSale || dismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-3 p-3 rounded-2xl bg-white/95 backdrop-blur-xl border border-black/[0.08] shadow-2xl max-w-sm animate-slide-up">
      <img
        src={currentSale.product.image}
        alt=""
        className="w-12 h-12 rounded-xl object-cover bg-[#F4F4F6] border border-black/[0.04] shrink-0"
      />
      <div className="min-w-0 flex-1 cursor-pointer" onClick={() => onQuickView(currentSale.product)}>
        <p className="text-[11px] text-zinc-500 font-mono flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          <span className="font-medium text-zinc-600">{currentSale.name}</span>
          <span className="text-zinc-300">•</span>
          <span>{currentSale.time}</span>
        </p>
        <p className="font-display font-bold text-xs text-[#09090B] truncate mt-0.5">
          Purchased {currentSale.product.name}
        </p>
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="p-1 rounded-full text-zinc-400 hover:text-black hover:bg-zinc-100 shrink-0 cursor-pointer"
        title="Dismiss"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
