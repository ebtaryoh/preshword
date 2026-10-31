import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2, Sparkles, Shield, Gift } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Newsletter({ showToast }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setSubscribed(true);
    if (showToast) {
      showToast("Welcome to the Drop List! Code 'PRESH15' unlocked.");
    }

    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#E04F16', '#FFFFFF', '#141312']
      });
    } catch {}

    setEmail('');
  };

  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-[32px] bg-[#141312] text-white p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl border border-white/10">
        {/* Soft Ambient Radial Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E04F16]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[90px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl">
          {/* Subtle VIP Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-5">
            <span className="w-2 h-2 rounded-full bg-[#E04F16] animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              PRIVATE CONCIERGE & DROP LIST
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
            Elevate your kitchen space. <br />
            <span className="text-[#E04F16]">
              Join our private collective.
            </span>
          </h2>

          <p className="mt-4 text-zinc-300 text-sm sm:text-base leading-relaxed max-w-xl">
            Be first to access limited glaze drops, warehouse sales in Lagos, and seasonal recipes crafted by Nigeria's leading culinary creators.
          </p>

          {/* Perks Row */}
          <div className="mt-6 flex flex-wrap gap-4 text-xs font-mono text-zinc-300">
            <div className="flex items-center gap-2">
              <Gift className="w-3.5 h-3.5 text-[#E04F16]" />
              <span>15% Welcome Discount</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#E04F16]" />
              <span>48h Early Drop Access</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-[#E04F16]" />
              <span>Zero Spam Guarantee</span>
            </div>
          </div>

          {!subscribed ? (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your personal email"
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-zinc-500 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#E04F16] transition-all"
                />
              </div>
              <button
                type="submit"
                className="px-7 py-3.5 rounded-2xl bg-[#E04F16] hover:bg-[#C83E0A] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 shrink-0 cursor-pointer"
              >
                <span>CLAIM 15% OFF</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="mt-8 p-5 rounded-2xl bg-white/10 border border-[#E04F16]/40 text-white flex items-center gap-3.5 max-w-md">
              <div className="w-8 h-8 rounded-full bg-[#E04F16] text-white flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <p className="font-mono text-xs font-bold text-[#E04F16]">
                  YOU'RE ON THE LIST!
                </p>
                <p className="text-xs text-zinc-300 mt-0.5">
                  Use exclusive promo code <strong className="text-white font-mono font-black">PRESH15</strong> at checkout for 15% off.
                </p>
              </div>
            </div>
          )}

          <p className="mt-4 text-[11px] font-mono text-zinc-500">
            Unsubscribe with 1 click at any time. We respect your inbox.
          </p>
        </div>
      </div>
    </section>
  );
}
