import React, { useState } from 'react';
import { Star, CheckCircle2, ThumbsUp, Sparkles, Filter, PackageCheck } from 'lucide-react';

const housewaresReviews = [
  {
    id: 1,
    name: "Dr. Nkem Ekwueme",
    role: "Pediatrician & Mother",
    city: "Ikoyi, Lagos",
    purchasedItem: "5-Piece BPA-Free Silicone Kids Tableware",
    rating: 5,
    text: "The suction on this children's plate is practically unbreakable on our dining table high chair. My 2-year-old cannot fling food across the room anymore. Dishwasher-safe and completely odor-free.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    verified: true,
    helpfulCount: 48,
    date: "2 days ago"
  },
  {
    id: 2,
    name: "Tunde Balogun",
    role: "Culinary Enthusiast",
    city: "Victoria Island, Lagos",
    purchasedItem: "1500W Commercial Vortex Blender & Smart Toaster",
    rating: 5,
    text: "The 1500W blender pulverized soaked peeled beans for akara into silk in under 30 seconds. No burning motor smell, no smoke. The toaster's LED countdown and even golden browning are perfection.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
    verified: true,
    helpfulCount: 52,
    date: "5 days ago"
  },
  {
    id: 3,
    name: "Chidinma Okafor",
    role: "Interior Stylist & Host",
    city: "Lekki Phase 1, Lagos",
    purchasedItem: "4-Piece Sol-Gel Ceramic Cookware Set",
    rating: 5,
    text: "I was skeptical about non-stick ceramic on Nigerian high heat, but this Sol-Gel set is unbelievable. Cooked smokeless party jollof and fried plantains with zero sticking and wiped clean with just paper towels.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    verified: true,
    helpfulCount: 64,
    date: "1 week ago"
  },
  {
    id: 4,
    name: "Barrister Amina Bello",
    role: "Corporate Attorney",
    city: "Maitama, Abuja",
    purchasedItem: "24-Piece Satin Gold & Black Cutlery Set",
    rating: 5,
    text: "Substantial 18/10 stainless steel weight in hand — not flimsy at all. The satin gold plating does not peel or scratch, and the presentation case makes it feel like royalty. Worth every naira.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
    verified: true,
    helpfulCount: 39,
    date: "2 weeks ago"
  },
  {
    id: 5,
    name: "Engr. Femi Adeleke",
    role: "Project Manager",
    city: "Ikeja GRA, Lagos",
    purchasedItem: "3-Tier 304 Stainless Steamer Pot",
    rating: 5,
    text: "Steamed three full tiers of moimoi pouches simultaneously. Even steam circulation throughout all racks, sturdy heat-resistant handles, and zero steam leakage from the tempered glass lid.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    verified: true,
    helpfulCount: 31,
    date: "3 weeks ago"
  },
  {
    id: 6,
    name: "Mrs. Ngozi Eze",
    role: "Home Baker & Restaurateur",
    city: "Enugu & Lagos",
    purchasedItem: "Cast Iron Enameled Dutch Oven Pot",
    rating: 5,
    text: "Heat retention is monstrous. Made slow-cooked beef stew and artisanal sourdough bread. The heavy enamel lid seals all moisture inside. Arrived in Lagos within 3 hours via rider dispatch.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
    verified: true,
    helpfulCount: 44,
    date: "1 month ago"
  }
];

export default function ReviewsSection() {
  const [filterCity, setFilterCity] = useState('all');
  const [helpfulClicked, setHelpfulClicked] = useState({});

  const filteredReviews = filterCity === 'all'
    ? housewaresReviews
    : housewaresReviews.filter((r) => r.city?.toLowerCase().includes(filterCity.toLowerCase()));

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
              VERIFIED OWNER EXPERIENCES
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#141312] tracking-tight leading-[1.1]">
            Loved by Nigeria’s most <br />
            <span className="text-[#E04F16]">discerning households.</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-xl">
            From modern Lekki and VI penthouses to family homes in Abuja and Ikeja. Read authentic, unedited feedback from verified buyers.
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
              3,480+ Verified Deliveries
            </p>
            <p className="text-[11px] text-zinc-400">
              Same-day rider dispatch across Lagos
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

                {/* Purchased Housewares Item Tag */}
                <div className="mb-3.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F5F3EF] text-zinc-700 text-xs font-medium">
                  <PackageCheck className="w-3.5 h-3.5 text-[#E04F16] shrink-0" />
                  <span className="truncate">{rev.purchasedItem}</span>
                </div>

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
                      {rev.role} • {rev.city}
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
