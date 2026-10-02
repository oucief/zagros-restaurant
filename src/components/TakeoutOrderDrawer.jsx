import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Phone, Copy, Check, ShoppingBag, Clock, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function TakeoutOrderDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
}) {
  const [copied, setCopied] = useState(false);
  const [specialNote, setSpecialNote] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Formatted order summary for clipboard or phone reading
  const orderSummaryText = `Zagros Restaurant Takeout Order:
${cartItems.map((item) => `- ${item.quantity}x ${item.name} (£${(item.price * item.quantity).toFixed(2)})`).join('\n')}
Total: £${subtotal.toFixed(2)}
${specialNote ? `Special Request: ${specialNote}\n` : ''}
Pickup Location: 5-7 Bentinck Rd, Radford, Nottingham NG7 4AA
Phone: ${RESTAURANT_INFO.phone}`;

  const handleCopyOrder = () => {
    navigator.clipboard.writeText(orderSummaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-zinc-900 border-l border-zinc-800 shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-950/70">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-orange-600/20 text-orange-400 border border-orange-500/30">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white font-serif-display">Your Takeout Tray</h2>
                <p className="text-xs text-zinc-400">
                  {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="p-5 flex-1 overflow-y-auto space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 px-4">
                <div className="w-16 h-16 rounded-full bg-zinc-800/80 flex items-center justify-center mx-auto mb-4 text-zinc-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">Your tray is currently empty</h3>
                <p className="text-xs text-zinc-400 max-w-xs mx-auto mb-6">
                  Browse our charcoal grill, slow-braised lamb shanks, or fresh tandoor naan to build your takeout order.
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-md transition"
                >
                  View Food Menu
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-2xl bg-zinc-950/60 border border-zinc-800 flex items-center justify-between gap-3"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 rounded-xl object-cover shrink-0 border border-zinc-700/60"
                      />

                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-white truncate">{item.name}</h4>
                        <div className="text-xs font-extrabold text-amber-400 mt-0.5">
                          £{(item.price * item.quantity).toFixed(2)}
                          <span className="text-[10px] text-zinc-500 font-normal ml-1">
                            (£{item.price.toFixed(2)} ea)
                          </span>
                        </div>
                      </div>

                      {/* Quantity Modifier */}
                      <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-700 rounded-lg p-1">
                        <button
                          onClick={() => onUpdateQty(item.id, item.quantity - 1)}
                          className="w-6 h-6 rounded flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-800"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-white px-1 w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                          className="w-6 h-6 rounded flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-800"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-zinc-500 hover:text-red-400 p-1 transition"
                        title="Remove dish"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Special Requests textarea */}
                <div className="mt-4 pt-3 border-t border-zinc-800/80">
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Special Preparation Notes:
                  </label>
                  <textarea
                    rows={2}
                    value={specialNote}
                    onChange={(e) => setSpecialNote(e.target.value)}
                    placeholder="e.g. Extra garlic toum, mild spice on Kobeda, well-done lamb chops..."
                    className="w-full text-xs bg-zinc-950 border border-zinc-800 rounded-xl p-2.5 text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                {/* Clear cart trigger */}
                <div className="flex justify-end pt-1">
                  <button
                    onClick={onClearCart}
                    className="text-[11px] text-zinc-500 hover:text-red-400 transition"
                  >
                    Clear entire tray
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Footer & Checkout Call-to-Action */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-zinc-800 bg-zinc-950/90 space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-zinc-400">
                  <span>Subtotal</span>
                  <span>£{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Takeout Packaging & Fresh Naan</span>
                  <span className="text-emerald-400 font-medium">Included</span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-white pt-2 border-t border-zinc-800">
                  <span>Estimated Total</span>
                  <span className="text-amber-400">£{subtotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Notice pill */}
              <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/30 text-[11px] text-amber-200/90 flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Orders are prepared freshly to order. Usual collection time is <strong>15–20 minutes</strong> from phone confirmation.
                </span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-orange-600 via-amber-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold text-sm shadow-xl shadow-orange-600/30 flex items-center justify-center gap-2 border border-amber-300/30 active:scale-95 transition"
                >
                  <Phone className="w-4 h-4 animate-bounce" />
                  <span>Call Kitchen to Place Order ({RESTAURANT_INFO.displayPhone})</span>
                </a>

                <button
                  onClick={handleCopyOrder}
                  className="w-full py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold flex items-center justify-center gap-2 transition"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Order Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-zinc-400" />
                      <span>Copy Order List (Ready to read on phone)</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] text-center text-zinc-500 flex items-center justify-center gap-1">
                <MapPin className="w-3 h-3 text-orange-400" />
                <span>Collection at {RESTAURANT_INFO.shortAddress}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
