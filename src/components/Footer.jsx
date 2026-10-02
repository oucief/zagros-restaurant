import { Flame, MapPin, Phone, Clock, ShieldCheck, ArrowUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/80 text-zinc-400 pt-16 pb-28 sm:pb-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-600/30 border border-amber-400/30">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black text-white font-serif-display">
                ZAGROS
              </span>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed">
              Authentic Middle Eastern & Kurdish charcoal mangal grill, fragrant saffron rice platters, and fresh clay oven tandoor bread in Radford, Nottingham.
            </p>

            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Halal Certified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#menu" className="hover:text-amber-400 transition">Food Menu & Takeout</a>
              </li>
              <li>
                <a href="#hearth" className="hover:text-amber-400 transition">Charcoal Mangal Hearth</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition">5.0 Star Google Reviews</a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-400 transition">Hours & Location Map</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Contact & Orders
            </h4>
            <div className="space-y-2.5 text-xs text-zinc-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="hover:text-amber-400 transition font-bold text-white">
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{RESTAURANT_INFO.openingHours}</span>
              </div>
            </div>
          </div>

          {/* Dine-In & Takeout Notice */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Takeout Collection
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Order by phone for swift collection. Typical prep time: 15–20 mins. Freshly baked tandoor naan included with main platters.
            </p>
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-md transition"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: 0115 942 0088</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {CURRENT_YEAR} Zagros Restaurant Nottingham. All rights reserved. 100% Halal.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-amber-400 transition"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
