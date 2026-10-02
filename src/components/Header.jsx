import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Flame, ShoppingBag, Menu, X, Star, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Header({ cartCount, onOpenCart }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-gradient-to-r from-zinc-950 via-neutral-900 to-zinc-950 border-b border-zinc-800/80 text-xs py-2 px-4 text-zinc-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Open Daily: 11:00 AM – 10:00 PM
            </span>
            <span className="hidden sm:inline-block text-zinc-600">|</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-orange-500" />
              {RESTAURANT_INFO.shortAddress} ({RESTAURANT_INFO.postcode})
            </span>
            <span className="hidden md:inline-block text-zinc-600">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              100% Halal Certified
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded-full text-amber-300 text-[11px] font-semibold">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{RESTAURANT_INFO.rating}</span>
              <span className="text-zinc-400">({RESTAURANT_INFO.reviewCount} Reviews)</span>
            </div>
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 font-medium transition"
            >
              <Phone className="w-3 h-3" />
              <span className="hidden sm:inline">{RESTAURANT_INFO.displayPhone}</span>
              <span className="sm:hidden">Call</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-zinc-950/95 backdrop-blur-md shadow-2xl shadow-black/80 border-b border-orange-500/20 py-3'
            : 'bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-800 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-600 via-orange-600 to-red-700 flex items-center justify-center shadow-lg shadow-orange-600/30 group-hover:scale-105 transition-transform duration-200 border border-amber-400/30">
              <Flame className="w-6 h-6 text-amber-100" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-extrabold tracking-wider text-white font-serif-display group-hover:text-amber-400 transition">
                  ZAGROS
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-orange-950 text-orange-400 border border-orange-700/50">
                  Grill
                </span>
              </div>
              <p className="text-[10px] tracking-wider text-zinc-400 uppercase font-medium">
                Middle Eastern Charcoal Hearth
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-300">
            <a href="#menu" className="hover:text-amber-400 transition flex items-center gap-1.5">
              <span>Menu</span>
            </a>
            <a href="#hearth" className="hover:text-amber-400 transition">
              Charcoal Tradition
            </a>
            <a href="#reviews" className="hover:text-amber-400 transition flex items-center gap-1.5">
              <span>Reviews</span>
              <span className="px-1.5 py-0.2 text-[10px] bg-amber-500/20 text-amber-300 rounded-full font-bold">5.0 ★</span>
            </a>
            <a href="#location" className="hover:text-amber-400 transition">
              Hours & Location
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Takeout Order Tray Trigger */}
            <button
              onClick={onOpenCart}
              aria-label="View Order Tray"
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-100 border border-zinc-700 hover:border-amber-500/50 transition shadow-md active:scale-95"
            >
              <ShoppingBag className="w-4 h-4 text-orange-400" />
              <span className="hidden sm:inline text-xs font-semibold">Takeout Tray</span>
              {cartCount > 0 ? (
                <span className="flex items-center justify-center w-5 h-5 text-[11px] font-bold text-white bg-gradient-to-r from-orange-600 to-amber-600 rounded-full shadow-sm animate-pulse">
                  {cartCount}
                </span>
              ) : (
                <span className="text-zinc-500 text-xs hidden sm:inline">0</span>
              )}
            </button>

            {/* Direct Phone CTA */}
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 hover:from-amber-500 hover:to-red-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-orange-600/25 border border-amber-300/30 transition hover:shadow-orange-600/40 active:scale-95"
            >
              <Phone className="w-4 h-4 animate-bounce" />
              <span>Call 0115 942 0088</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-4 pb-6 bg-zinc-950 border-b border-zinc-800 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-2 text-base font-medium text-zinc-200">
              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-zinc-900 hover:text-amber-400 transition"
              >
                Food Menu & Prices
              </a>
              <a
                href="#hearth"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-zinc-900 hover:text-amber-400 transition"
              >
                Charcoal Hearth & Tandoor
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-zinc-900 hover:text-amber-400 transition flex items-center justify-between"
              >
                <span>Google Customer Reviews</span>
                <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full font-bold">5.0 ★</span>
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-zinc-900 hover:text-amber-400 transition"
              >
                Location & Opening Hours
              </a>
            </div>

            <div className="pt-3 border-t border-zinc-800 space-y-2">
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold text-sm shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call to Order: 0115 942 0088</span>
              </a>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-semibold"
              >
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>5-7 Bentinck Rd, Radford (Open in Maps)</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
