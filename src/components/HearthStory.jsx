import React from 'react';
import { Flame, UtensilsCrossed, Sparkles, ShieldCheck } from 'lucide-react';

export default function HearthStory() {
  return (
    <section id="hearth" className="py-20 sm:py-28 bg-zinc-950 relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-950/70 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <Flame className="w-4 h-4 text-orange-500" />
              The Charcoal Tradition
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif-display leading-tight">
              Rooted in the Ancient <br />
              <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                Zagros Mountain Hearth
              </span>
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Named after the majestic Zagros mountain range that weaves across the heart of the Middle East, our kitchen brings centuries-old culinary heritage to Radford, Nottingham.
            </p>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              At Zagros, we refuse to cut corners. There are no gas salamanders or electric contact grills here. Every skewer of our hand-kneaded lamb Kobeda and saffron chicken shish is sizzled directly over glowing natural hardwood charcoal, imparting that signature crackling sear and tender, juicy interior.
            </p>

            {/* 3 Pillars */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
                <div className="w-10 h-10 rounded-xl bg-orange-600/20 text-orange-400 border border-orange-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">Open Mangal Charcoal Flame</h4>
                  <p className="text-xs text-zinc-400">
                    Seared at high heat to lock in natural juices and natural meat richness without dryness.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
                <div className="w-10 h-10 rounded-xl bg-amber-600/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">400°C Clay Tandoor Naan</h4>
                  <p className="text-xs text-zinc-400">
                    Fresh dough hand-stretched and slapped against roaring clay walls to arrive at your table blistered and steaming hot.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">5-Hour Braised Lamb Qozi</h4>
                  <p className="text-xs text-zinc-400">
                    Slow-simmered lamb shank with cardamom and dried lime until the bone pulls free effortlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Image 1: Charcoal Skewers */}
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl relative group">
                  <img
                    src="https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=700&q=80"
                    alt="Authentic charcoal grill kebabs"
                    className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-70" />
                  <span className="absolute bottom-3 left-3 text-xs font-bold text-white bg-zinc-950/80 px-2.5 py-1 rounded-lg backdrop-blur-sm border border-zinc-700">
                    Charcoal Mangal
                  </span>
                </div>

                <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl relative group">
                  <img
                    src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80"
                    alt="Fresh clay oven naan"
                    className="w-full h-44 object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-70" />
                  <span className="absolute bottom-3 left-3 text-xs font-bold text-white bg-zinc-950/80 px-2.5 py-1 rounded-lg backdrop-blur-sm border border-zinc-700">
                    Fresh Tandoor Bread
                  </span>
                </div>
              </div>

              {/* Image 2: Saffron Rice & Lamb Shank */}
              <div className="space-y-4 pt-6">
                <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl relative group">
                  <img
                    src="https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=700&q=80"
                    alt="Slow cooked lamb shank with saffron rice"
                    className="w-full h-44 object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-70" />
                  <span className="absolute bottom-3 left-3 text-xs font-bold text-white bg-zinc-950/80 px-2.5 py-1 rounded-lg backdrop-blur-sm border border-zinc-700">
                    Tender Qozi
                  </span>
                </div>

                <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl relative group">
                  <img
                    src="https://images.unsplash.com/photo-1577906096429-f73c2c312435?auto=format&fit=crop&w=700&q=80"
                    alt="Creamy artisanal hummus"
                    className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-70" />
                  <span className="absolute bottom-3 left-3 text-xs font-bold text-white bg-zinc-950/80 px-2.5 py-1 rounded-lg backdrop-blur-sm border border-zinc-700">
                    Artisanal Mezze
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Award Badge */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white p-4 rounded-2xl shadow-2xl border border-amber-300/40 hidden sm:flex items-center gap-3">
              <div className="p-2 rounded-xl bg-black/30 backdrop-blur-sm">
                <Sparkles className="w-6 h-6 text-amber-200" />
              </div>
              <div>
                <div className="text-xs uppercase font-extrabold tracking-wider">Uncompromising Taste</div>
                <div className="text-sm font-bold">100% Charcoal Grilled Everyday</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
