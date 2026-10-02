import React from 'react';
import { ShieldCheck, Flame, Utensils, HeartHandshake, Sparkles } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: ShieldCheck,
      iconColor: "text-emerald-400",
      bgGradient: "from-emerald-950/40 via-zinc-900 to-zinc-950",
      borderColor: "border-emerald-500/30",
      title: "100% Halal Certified",
      subtitle: "HMC & Halal Compliant",
      description: "Every cut of lamb, chicken, and beef is certified Halal, humanely raised, and prepared with uncompromising devotion to purity."
    },
    {
      icon: Utensils,
      iconColor: "text-amber-400",
      bgGradient: "from-amber-950/40 via-zinc-900 to-zinc-950",
      borderColor: "border-amber-500/30",
      title: "Dine-In & Fast Takeout",
      subtitle: "Warm Seating & Quick Collection",
      description: "Enjoy a relaxed family dinner in our warm Middle Eastern dining room or call +44 115 942 0088 for rapid hot takeout pickup."
    },
    {
      icon: Flame,
      iconColor: "text-orange-400",
      bgGradient: "from-orange-950/40 via-zinc-900 to-zinc-950",
      borderColor: "border-orange-500/30",
      title: "Natural Charcoal Mangal",
      subtitle: "Wood Embers, Zero Gas Griddles",
      description: "Our kebabs and chops are sizzled over open hardwood charcoal embers for authentic caramelization, crisp edges, and succulent tenderness."
    },
    {
      icon: Sparkles,
      iconColor: "text-yellow-400",
      bgGradient: "from-yellow-950/40 via-zinc-900 to-zinc-950",
      borderColor: "border-yellow-500/30",
      title: "Clay Oven Tandoor Naan",
      subtitle: "Hand-Stretched & Baked to Order",
      description: "No frozen or reheated flatbreads. Our dough is rolled by hand and slapped against the hot clay walls moments before hitting your plate."
    }
  ];

  return (
    <section className="py-12 bg-zinc-900/60 border-y border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/60 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <HeartHandshake className="w-3.5 h-3.5" />
            Our Quality Guarantee
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-serif-display">
            Crafted with Tradition, Served with Pride
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto mt-2">
            From our 100% Halal assurance to the intense heat of our charcoal hearth, every dish reflects authentic hospitality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {badges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-gradient-to-b ${badge.bgGradient} border ${badge.borderColor} shadow-lg hover:border-orange-500/60 transition duration-300 group`}
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-950/80 border border-zinc-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-inner">
                  <Icon className={`w-6 h-6 ${badge.iconColor}`} />
                </div>
                <div className="text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-1">
                  {badge.subtitle}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition">
                  {badge.title}
                </h3>
                <p className="text-zinc-300 text-xs leading-relaxed">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
