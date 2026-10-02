import React from 'react';
import { Star, MapPin, Phone, Clock, ShieldCheck, Flame, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[88vh] flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background Image with Deep Ember Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1920&q=80"
          alt="Charcoal grill kebabs sizzling over glowing embers"
          className="w-full h-full object-cover object-center filter brightness-[0.32] contrast-[1.15] scale-105 animate-pulse duration-[10000ms]"
        />
        {/* Radial ember glow & gradient vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/75 to-zinc-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-600/15 via-orange-950/20 to-transparent" />
        {/* Subtle grid texture overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center flex flex-col items-center">
        {/* Top Badges Row: 5.0 Star Google Rating + Open Status */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-6">
          {/* Google Review Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-amber-500/40 backdrop-blur-md shadow-lg shadow-amber-500/10">
            <div className="flex items-center gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-white tracking-wide">
              {RESTAURANT_INFO.rating} Stars
            </span>
            <span className="text-[11px] text-zinc-400">
              ({RESTAURANT_INFO.reviewCount} Google Reviews)
            </span>
          </div>

          {/* Open Daily Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs font-semibold backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span>Open Daily (11:00 AM – 10:00 PM)</span>
          </div>

          {/* 100% Halal Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-700/80 text-zinc-200 text-xs font-medium backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>100% Halal</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 text-amber-400 text-xs sm:text-sm uppercase tracking-widest font-bold">
            <Flame className="w-4 h-4 text-orange-500 animate-pulse" />
            <span>Traditional Charcoal Mangal & Tandoor Hearth</span>
            <Flame className="w-4 h-4 text-orange-500 animate-pulse" />
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-serif-display leading-tight">
            The Soul of the <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-200 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              Zagros Charcoal Grill
            </span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Sizzling minced lamb Kobeda, fire-glazed chops, slow-simmered lamb shank Qozi, and blistered clay-oven naan baked fresh to your order in Radford, Nottingham.
          </p>
        </div>

        {/* Location Ribbon */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm text-zinc-300 bg-zinc-900/80 border border-zinc-800 px-4 py-2 rounded-xl backdrop-blur-md max-w-lg">
          <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
          <span className="font-medium text-white">{RESTAURANT_INFO.address}</span>
        </div>

        {/* Hero Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          {/* Primary CTA: Call for Takeout */}
          <a
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 via-amber-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-orange-600/30 border border-amber-300/30 transition transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Phone className="w-4 h-4 animate-bounce" />
            <span>Call for Takeout ({RESTAURANT_INFO.displayPhone})</span>
          </a>

          {/* Secondary CTA: View Menu */}
          <a
            href="#menu"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-100 border border-zinc-700/80 hover:border-amber-500/50 font-semibold text-sm sm:text-base backdrop-blur-md transition transform hover:-translate-y-0.5"
          >
            <UtensilsCrossed className="w-4 h-4 text-amber-400" />
            <span>Explore Menu & Prices</span>
          </a>

          {/* Tertiary CTA: Maps */}
          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-zinc-950/70 hover:bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800 text-sm font-medium transition"
          >
            <MapPin className="w-4 h-4 text-orange-400" />
            <span>Find on Maps</span>
          </a>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl text-left">
          <div className="p-3 sm:p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm">
            <div className="text-orange-400 font-bold text-sm sm:text-base flex items-center gap-1.5">
              <Flame className="w-4 h-4" /> Real Charcoal
            </div>
            <div className="text-xs text-zinc-400 mt-1">
              Natural wood embers for genuine smoky aroma.
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm">
            <div className="text-amber-400 font-bold text-sm sm:text-base flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Halal
            </div>
            <div className="text-xs text-zinc-400 mt-1">
              Ethically sourced & certified halal meats.
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm">
            <div className="text-orange-400 font-bold text-sm sm:text-base flex items-center gap-1.5">
              <UtensilsCrossed className="w-4 h-4" /> Clay Tandoor
            </div>
            <div className="text-xs text-zinc-400 mt-1">
              Kurdish naan slapped fresh to order at 400°C.
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm">
            <div className="text-amber-400 font-bold text-sm sm:text-base flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> Rapid Takeout
            </div>
            <div className="text-xs text-zinc-400 mt-1">
              Call ahead for hot collection in 15–20 mins.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
