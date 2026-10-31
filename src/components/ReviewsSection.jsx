import React, { useState } from 'react';
import { Star, CheckCircle2, ThumbsUp, Sparkles, Filter } from 'lucide-react';
import { reviews } from '../data/products';

const extendedReviews = [
  ...reviews,
  {
    id: 4,
    name: "Dr. Nkem Ekwueme",
    role: "Culinary Physician, Ikoyi",
    city: "Ikoyi, Lagos",
    dish: "Poached Sea Bass & Steamed Asparagus",
    rating: 5,
    text: "As someone who actively monitors endocrine disruptors, switching to Preshword's sol-gel ceramic was non-negotiable. Zero PTFE or lead leaching, heats up with surgical precision, and wipes clean with a dry cloth.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    verified: true,
    helpfulCount: 42,
    date: "2 days ago"
  },
  {
    id: 5,
    name: "Tariq Danjuma",
    role: "Architect & Weekend Host",
    city: "Maitama, Abuja",
    dish: "Charred Suya Ribeye & Roasted Baby Potatoes",
    rating: 5,
    text: "The aesthetic harmony is unmatched. The Matcha Sage cookware looks like a sculpture on our induction cooktop. Our dinner party guests always ask where we got it before they even taste the food.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
    verified: true,
    helpfulCount: 38,
    date: "1 week ago"
  },
  {
    id: 6,
    name: "Chidinma Okafor",
    role: "Recipe Developer & Stylist",
    city: "Lekki Phase 1, Lagos",
    dish: "Smoky Party Jollof & Plantain Crisps",
    rating: 5,
    text: "Cooked party jollof in the Dutch oven — not a single grain burnt or stuck to the bottom, and the heat retention kept it piping hot for over 2 hours on the dining table. Absolutely sensational.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    verified: true,
    helpfulCount: 56,
    date: "3 weeks ago"
  }
];

export default function ReviewsSection() {
  const [filterCity, setFilterCity] = useState('all');
  const [helpfulClicked, setHelpfulClicked] = useState({});

  const filteredReviews = filterCity === 'all'
    ? extendedReviews
    : extendedReviews.filter((r) => r.city?.toLowerCase().includes(filterCity.toLowerCase()));

  const handleHelpful = (id) => {
    setHelpfulClicked((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#E8E6E1]">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF7ED] border border-[#E04F16]/20 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E04F16]" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#E04F16]">
              VERIFIED OWNER REVIEWS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#141312] tracking-tight leading-[1.1]">
            Loved by Nigeria’s most <br />
            <span className="text-[#E04F16]">discerning home cooks.</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-xl">
            From Sunday brunches in Lekki Phase 1 to celebratory feasts in Abuja.
            Read real, unedited experiences from verified owners.
          </p>
        </div>

        {/* Aggregate Score Card */}
        <div className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-[#E8E6E1] shadow-2xs self-start md:self-auto">
          <div className="w-12 h-12 rounded-xl bg-[#141312] text-white flex flex-col items-center justify-center font-black leading-none shrink-0">
            <span className="text-base text-[#E04F16]">4.9</span>
            <span className="text-[9px] font-mono text-zinc-400">/ 5.0</span>
          </div>
          <div>
            <div className="flex items-center gap-1 text-amber-500 mb-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <p className="font-mono text-xs font-bold text-[#141312]">
              3,480+ 5-Star Reviews
            </p>
            <p className="text-[11px] text-zinc-400">
              100% verified Nigerian deliveries
            </p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-mono">
        <span className="text-zinc-400 uppercase text-[11px] mr-1 hidden sm:inline flex items-center gap-1">
          <Filter className="w-3 h-3" /> Filter by:
        </span>
        {[
          { id: 'all', label: 'All Reviews' },
          { id: 'lagos', label: 'Lagos State (2,100+)' },
          { id: 'abuja', label: 'Abuja FCT (890+)' },
          { id: 'ikoyi', label: 'Ikoyi & Victoria Island' },
          { id: 'lekki', label: 'Lekki Phase 1' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilterCity(tab.id)}
            className={`px-3.5 py-1.5 rounded-full transition-all whitespace-nowrap cursor-pointer ${
              filterCity === tab.id
                ? 'bg-[#141312] text-white font-bold shadow-xs'
                : 'bg-white border border-[#E8E6E1] text-zinc-600 hover:text-black hover:border-zinc-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Reviews Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {filteredReviews.map((rev) => {
          const isLiked = helpfulClicked[rev.id];
          const helpfulCount = (rev.helpfulCount || 24) + (isLiked ? 1 : 0);

          return (
            <div
              key={rev.id}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E8E6E1] shadow-2xs hover:shadow-md hover:border-zinc-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Row: Stars + Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400">
                    {rev.date || 'Verified Purchase'}
                  </span>
                </div>

                {/* Cooked Dish Highlight */}
                {rev.dish && (
                  <div className="mb-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F5F3EF] text-zinc-700 text-xs font-medium">
                    <span className="text-[#141312] font-bold">Cooked:</span>
                    <span className="truncate">{rev.dish}</span>
                  </div>
                )}

                {/* Review Body */}
                <p className="text-sm text-zinc-700 leading-relaxed font-normal">
                  "{rev.text}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-5 border-t border-zinc-100 flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-black/[0.04] shrink-0"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-sm text-[#141312] truncate">
                        {rev.name}
                      </span>
                      {rev.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" title="Verified Buyer" />
                      )}
                    </div>
                    <span className="text-[11px] text-zinc-400 font-mono block truncate">
                      {rev.role}
                    </span>
                  </div>
                </div>

                {/* Helpful Button */}
                <button
                  onClick={() => handleHelpful(rev.id)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono transition-colors shrink-0 cursor-pointer ${
                    isLiked
                      ? 'bg-[#141312] text-white font-bold'
                      : 'bg-zinc-100 text-zinc-500 hover:text-black hover:bg-zinc-200'
                  }`}
                  title="Mark as helpful"
                >
                  <ThumbsUp className="w-3 h-3" />
                  <span>{helpfulCount}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
