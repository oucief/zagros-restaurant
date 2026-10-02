import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import MenuShowcase from './components/MenuShowcase';
import HearthStory from './components/HearthStory';
import ReviewsSection from './components/ReviewsSection';
import LocationHours from './components/LocationHours';
import Footer from './components/Footer';
import StickyBottomBar from './components/StickyBottomBar';
import TakeoutOrderDrawer from './components/TakeoutOrderDrawer';
import { CheckCircle2, ShoppingBag } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('zagros_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Persist cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('zagros_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  const handleAddToCart = (dish) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...dish, quantity: 1 }];
    });

    setToastMessage(`Added "${dish.name}" to Takeout Tray`);
    setTimeout(() => {
      setToastMessage('');
    }, 2800);
  };

  const handleUpdateQty = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-orange-600 selection:text-white">
      {/* Header with quick indicators & brand */}
      <Header cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* 100% Halal, Dine-In & Takeout, Charcoal Mangal Badges */}
        <TrustBadges />

        {/* Filterable Menu Showcase with Real Pricing and Dishes */}
        <MenuShowcase onAddToCart={handleAddToCart} cartItems={cartItems} />

        {/* Zagros Charcoal Hearth & Tandoor Tradition */}
        <HearthStory />

        {/* 5.0-Star Google Customer Reviews */}
        <ReviewsSection />

        {/* Location, Opening Hours & Radford Map */}
        <LocationHours />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Bottom Bar (Call for Takeout & Find Us on Maps) */}
      <StickyBottomBar
        cartCount={cartCount}
        cartTotal={cartTotal}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Takeout Order Drawer / Cart Modal */}
      <TakeoutOrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Temporary Toast notification when dish is added */}
      {toastMessage && (
        <aside
          aria-label="Notifications"
          className="fixed top-20 right-4 z-50 p-3.5 px-4 rounded-2xl bg-zinc-900 border border-emerald-500/40 text-white shadow-2xl flex items-center gap-2.5 animate-in slide-in-from-top-3 fade-in duration-200"
        >
          <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div className="text-xs font-semibold">{toastMessage}</div>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-2 text-xs font-bold text-amber-400 hover:underline flex items-center gap-1"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>View Tray</span>
          </button>
        </aside>
      )}
    </div>
  );
}
