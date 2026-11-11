import React, { useState } from 'react';
import { Camera, ArrowUpRight, Heart } from 'lucide-react';

const communityPosts = [
  {
    id: 1,
    handle: "@solape_home",
    city: "Victoria Island, Lagos",
    caption: "Our modern kitchen island setup with the complete housewares collection! The appliances and cookware look stunning ✨",
    image: "/images/hero-housewares-collection.jpg",
    product: "House Wares Collection",
    likes: 2840,
    comments: 172
  },
  {
    id: 2,
    handle: "@lagosfoodstylist",
    city: "Ikoyi, Lagos",
    caption: "Sunday tablescape with the 24-piece satin gold and matte black cutlery set. Restaurant-grade dining flatware at home 🍴",
    image: "/images/product-luxury-cutlery.jpg",
    product: "24pc Luxury Cutlery",
    likes: 3150,
    comments: 194
  },
  {
    id: 3,
    handle: "@abuja_moms",
    city: "Maitama, Abuja",
    caption: "Mealtime is finally tear-free with this 5-piece eco silicone suction dining set for our toddler 👶🤍 Stays glued to the high chair!",
    image: "/images/product-children-tableware.jpg",
    product: "Children Dining Set",
    likes: 2790,
    comments: 185
  },
  {
    id: 4,
    handle: "@chef_osaro",
    city: "Asokoro, Abuja",
    caption: "Morning breakfast routine with the smart digital toaster and fresh juice from the 1500W vortex blender ⚡ Clean aesthetics.",
    image: "/images/product-smart-toaster.jpg",
    product: "Smart Digital Toaster",
    likes: 2410,
    comments: 114
  }
];

export default function CommunityFeed({ onExplore }) {
  const [likes, setLikes] = useState({});

  const toggleLike = (id, defaultLikes) => {
    setLikes((prev) => ({
      ...prev,
      [id]: prev[id] ? undefined : defaultLikes + 1
    }));
  };

  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#E8E6E1]">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF7ED] border border-[#E04F16]/20 mb-3">
            <Camera className="w-3.5 h-3.5 text-[#E04F16]" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#E04F16]">
              @PRESHWORLD.ESSENTIALS ON INSTAGRAM
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#141312] tracking-tight leading-[1.1]">
            Seen on Nigerian <br />
            <span className="text-[#E04F16]">curated tables.</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-lg">
            Tag <strong className="font-mono font-bold text-[#141312]">#PreshworldEssential</strong> or <strong className="font-mono font-bold text-[#141312]">@preshworld</strong> on Instagram to be featured in our lookbook.
          </p>
        </div>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#E8E6E1] hover:border-zinc-400 shadow-2xs font-mono text-xs font-bold uppercase text-[#141312] transition-all hover:bg-[#141312] hover:text-white group self-start sm:self-auto cursor-pointer"
        >
          <span>JOIN 42K+ FOODIES</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {communityPosts.map((post) => {
          const currentLikes = likes[post.id] || post.likes;
          const isLiked = !!likes[post.id];

          return (
            <div
              key={post.id}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-[#F5F3EF] border border-[#E8E6E1] shadow-2xs hover:shadow-lg transition-all duration-500 cursor-pointer flex flex-col justify-end"
            >
              {/* Background Image */}
              <img
                src={post.image}
                alt={post.caption}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Top Handle Capsule */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="font-mono text-xs font-bold text-white bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  {post.handle}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(post.id, post.likes);
                  }}
                  className={`p-2 rounded-full backdrop-blur-md transition-all active:scale-90 cursor-pointer ${isLiked
                      ? 'bg-rose-500 text-white'
                      : 'bg-black/40 text-white hover:bg-white hover:text-rose-500'
                    }`}
                  aria-label="Like post"
                >
                  <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Bottom Details Content */}
              <div className="relative z-10 p-5 text-white flex flex-col justify-end">
                <span className="text-[11px] font-mono text-zinc-300 block mb-1">
                  {post.city}
                </span>

                <p className="text-xs text-zinc-200 line-clamp-2 leading-relaxed">
                  "{post.caption}"
                </p>

                {/* Footer Micro-Pill */}
                <div className="mt-3 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] font-mono">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#E04F16] text-white font-bold text-[10px] uppercase truncate max-w-[160px]">
                    {post.product}
                  </span>

                  <span className="text-zinc-300 flex items-center gap-1">
                    <Heart className="w-3 h-3 fill-current text-rose-400" />
                    {currentLikes.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
