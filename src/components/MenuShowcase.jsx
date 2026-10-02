import React, { useState, useMemo } from 'react';
import { Search, Flame, Plus, Check, Info, Sparkles, X, AlertCircle, ShoppingBag } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/restaurantData';

export default function MenuShowcase({ onAddToCart, cartItems }) {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');
  const [selectedDish, setSelectedDish] = useState(null);

  // Available tags
  const tags = ['all', 'Chef\'s Signature', 'Best Seller', 'Vegetarian'];

  // Filtered items based on category, search, and tag
  const filteredDishes = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeTab === 'all' || item.category === activeTab;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.nativeName.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag =
        selectedTag === 'all' ||
        (selectedTag === 'Vegetarian' && (item.tag === 'Vegetarian' || item.category === 'appetizers' && !item.name.includes('Meat') && !item.name.includes('Lamb'))) ||
        item.tag.toLowerCase().includes(selectedTag.toLowerCase());

      return matchesCategory && matchesSearch && matchesTag;
    });
  }, [activeTab, searchQuery, selectedTag]);

  // Check how many of a specific dish are already in cart
  const getItemQtyInCart = (id) => {
    const found = cartItems.find((item) => item.id === id);
    return found ? found.quantity : 0;
  };

  return (
    <section id="menu" className="py-16 sm:py-24 bg-zinc-950 text-white relative">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/70 border border-orange-500/40 text-orange-400 text-xs font-bold tracking-wider uppercase mb-3">
            <Flame className="w-3.5 h-3.5 text-orange-500" />
            The Authentic Food Menu
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif-display tracking-tight">
            Charcoal Kebabs, Hearth Rice & Fresh Naan
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">
            Every dish is cooked over glowing natural hardwood coals or baked in our clay tandoor. 100% Halal certified, seasoned with authentic Zagros herbs.
          </p>
        </div>

        {/* Search & Tag Filter Bar */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative w-full sm:flex-1">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search dishes (e.g. Kobeda, Qozi, Hummus, Lamb Chops, Naan)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-10 pr-10 py-3 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Tag Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
              {tags.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTag(t)}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition border ${
                    selectedTag === t
                      ? 'bg-amber-500 text-zinc-950 border-amber-400 shadow-md shadow-amber-500/20'
                      : 'bg-zinc-900/80 text-zinc-300 border-zinc-800 hover:border-zinc-700 hover:text-white'
                  }`}
                >
                  {t === 'all' ? 'All Tags' : t}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs (Horizontal Scroll on Mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-zinc-800/80">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex flex-col text-left px-5 py-3 rounded-2xl transition border shrink-0 ${
                    isActive
                      ? 'bg-gradient-to-r from-orange-600 via-amber-600 to-amber-700 text-white border-amber-400/50 shadow-lg shadow-orange-600/20 scale-[1.02]'
                      : 'bg-zinc-900/70 text-zinc-400 border-zinc-800 hover:bg-zinc-900 hover:text-zinc-200'
                  }`}
                >
                  <span className="font-bold text-sm leading-tight flex items-center gap-1.5">
                    {cat.id === 'grill' && <Flame className="w-3.5 h-3.5" />}
                    {cat.label}
                  </span>
                  {cat.subtitle && (
                    <span className={`text-[10px] ${isActive ? 'text-amber-100' : 'text-zinc-500'}`}>
                      {cat.subtitle}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between text-xs text-zinc-400 mb-6">
          <span>Showing {filteredDishes.length} freshly prepared items</span>
          <span className="text-amber-400 font-medium flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" /> All dishes 100% Halal
          </span>
        </div>

        {/* Dishes Grid */}
        {filteredDishes.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-3xl bg-zinc-900/50 border border-zinc-800 max-w-lg mx-auto">
            <AlertCircle className="w-12 h-12 text-zinc-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">No dishes found</h3>
            <p className="text-sm text-zinc-400 mb-4">
              Try searching with another keyword or resetting the category filter.
            </p>
            <button
              onClick={() => {
                setActiveTab('all');
                setSearchQuery('');
                setSelectedTag('all');
              }}
              className="px-4 py-2 rounded-xl bg-orange-600 text-white font-semibold text-xs hover:bg-orange-500 transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDishes.map((dish) => {
              const qtyInCart = getItemQtyInCart(dish.id);

              return (
                <div
                  key={dish.id}
                  className="group flex flex-col justify-between bg-zinc-900/80 rounded-2xl border border-zinc-800/90 overflow-hidden hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-950/20 transition-all duration-300"
                >
                  {/* Image Container with Badges */}
                  <div className="relative h-52 w-full overflow-hidden bg-zinc-950">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />

                    {/* Tag Badge */}
                    {dish.tag && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[11px] font-bold tracking-wide uppercase bg-zinc-950/80 backdrop-blur-md border border-amber-500/40 text-amber-300 shadow-md">
                        {dish.tag}
                      </span>
                    )}

                    {/* Price Pill */}
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-white font-extrabold text-sm shadow-lg shadow-black/50 border border-amber-300/30">
                      £{dish.price.toFixed(2)}
                    </div>

                    {/* Transliterated Native Script */}
                    <div className="absolute bottom-2.5 left-3 text-right">
                      <span className="text-xs font-serif text-amber-200/90 font-medium tracking-wide drop-shadow-md">
                        {dish.nativeName}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition leading-snug">
                          {dish.name}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-zinc-400 line-clamp-3 leading-relaxed mb-4">
                        {dish.description}
                      </p>

                      {/* Details Highlights */}
                      {dish.details && dish.details.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {dish.details.map((detail, i) => (
                            <span
                              key={i}
                              className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/60"
                            >
                              • {detail}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Card Actions Footer */}
                    <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-2">
                      <button
                        onClick={() => setSelectedDish(dish)}
                        className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-amber-400 font-medium transition"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>Allergens & Info</span>
                      </button>

                      {/* Add to Takeout Order */}
                      <button
                        onClick={() => onAddToCart(dish)}
                        className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition shadow-md ${
                          qtyInCart > 0
                            ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-900/30'
                            : 'bg-zinc-800 hover:bg-orange-600 text-zinc-100 hover:text-white border border-zinc-700 hover:border-orange-500'
                        }`}
                      >
                        {qtyInCart > 0 ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-white" />
                            <span>Added ({qtyInCart})</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add to Takeout</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Takeout Notice Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-950 border border-orange-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <ShoppingBag className="w-4 h-4 text-orange-500" />
              Direct Phone Ordering
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-serif-display">
              Prefer to order your collection right over the phone?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
              Give our kitchen in Radford a quick ring. Freshly grilled kebabs and hot clay tandoor naan will be packed and ready for your arrival in 15–20 minutes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="tel:+441159420088"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-sm shadow-xl shadow-orange-600/30 transition transform hover:-translate-y-0.5"
            >
              <Flame className="w-4 h-4" />
              <span>Call 0115 942 0088</span>
            </a>
          </div>
        </div>
      </div>

      {/* Dish Detail Modal */}
      {selectedDish && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            {/* Modal Image */}
            <div className="relative h-60 w-full bg-zinc-950">
              <img
                src={selectedDish.image}
                alt={selectedDish.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-zinc-950/80 border border-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center backdrop-blur-md"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 left-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-black text-base px-3.5 py-1 rounded-xl shadow-lg">
                £{selectedDish.price.toFixed(2)}
              </div>
            </div>

            {/* Modal Info */}
            <div className="p-6 space-y-4">
              <div>
                <div className="text-xs text-amber-400 font-serif mb-1">
                  {selectedDish.nativeName}
                </div>
                <h3 className="text-2xl font-bold text-white font-serif-display">
                  {selectedDish.name}
                </h3>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed">
                {selectedDish.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Preparation & Inclusions:
                </span>
                <ul className="text-xs text-zinc-300 space-y-1">
                  {selectedDish.details?.map((d, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      {d}
                    </li>
                  ))}
                  <li className="flex items-center gap-2 text-emerald-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    100% Certified Halal Meat
                  </li>
                </ul>
              </div>

              {/* Allergens info */}
              <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800 text-xs text-zinc-400">
                <span className="font-semibold text-zinc-200">Allergen Notice: </span>
                {selectedDish.allergens && selectedDish.allergens.length > 0 ? (
                  <span>Contains {selectedDish.allergens.join(', ')}. If you have serious allergies, please notify our staff when calling.</span>
                ) : (
                  <span>No major declared common allergens (may contain traces due to hearth environment).</span>
                )}
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => {
                    onAddToCart(selectedDish);
                    setSelectedDish(null);
                  }}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-sm shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add to Takeout Order</span>
                </button>
                <button
                  onClick={() => setSelectedDish(null)}
                  className="px-5 py-3 rounded-xl bg-zinc-800 text-zinc-300 hover:text-white text-sm font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
