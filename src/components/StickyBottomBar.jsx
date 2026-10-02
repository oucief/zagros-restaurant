import React from 'react';
import { Phone, MapPin, ShoppingBag } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function StickyBottomBar({ cartCount, cartTotal, onOpenCart }) {
  return (
    <aside aria-label="Quick Actions" className="fixed bottom-0 left-0 right-0 z-40 bg-zinc-950/95 backdrop-blur-lg border-t border-zinc-800 shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.8)] py-2.5 px-3 sm:px-6">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-2">
        {/* Primary Action 1: Call for Takeout */}
        <a
          href={`tel:${RESTAURANT_INFO.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gradient-to-r from-orange-600 via-amber-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-600/30 border border-amber-300/30 active:scale-95 transition"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <Phone className="relative w-3.5 h-3.5 text-white" />
          </span>
          <span className="truncate">Call for Takeout</span>
        </a>

        {/* Primary Action 2: Find Us on Maps */}
        <a
          href={RESTAURANT_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-100 border border-zinc-700 hover:border-zinc-500 font-semibold text-xs sm:text-sm shadow-md active:scale-95 transition"
        >
          <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
          <span className="truncate">Find Us on Maps</span>
        </a>

        {/* Order Tray Pill (appears or highlights when items added) */}
        {cartCount > 0 && (
          <button
            onClick={onOpenCart}
            className="flex items-center gap-2 py-3 px-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-900/40 border border-emerald-400/40 active:scale-95 transition animate-in zoom-in duration-200"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Tray ({cartCount})</span>
            <span className="text-[11px] bg-emerald-700/80 px-1.5 py-0.5 rounded-md">
              £{cartTotal.toFixed(2)}
            </span>
          </button>
        )}
      </div>
    </aside>
  );
}
