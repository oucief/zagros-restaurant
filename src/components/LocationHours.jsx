import React from 'react';
import { MapPin, Phone, Clock, Navigation, Bus, Car, HelpCircle } from 'lucide-react';
import { RESTAURANT_INFO, FAQS } from '../data/restaurantData';

export default function LocationHours() {
  return (
    <section id="location" className="py-20 sm:py-28 bg-zinc-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/70 border border-orange-500/40 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-orange-500" />
            Visit & Contact
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif-display">
            Hours & Location in Radford
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Conveniently located on Bentinck Road, just minutes from Radford Boulevard and Nottingham City Centre.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact & Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-orange-600/20 text-orange-400 border border-orange-500/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">Our Address</h3>
                  <p className="text-sm text-zinc-300 leading-snug">
                    {RESTAURANT_INFO.address}
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">
                    Radford, Nottingham, United Kingdom
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md transition"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">Telephone & Orders</h3>
                  <a
                    href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                    className="text-lg font-extrabold text-amber-400 hover:text-amber-300 transition"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                  <p className="text-xs text-zinc-400 mt-1">
                    Direct kitchen line for Takeout Orders & Seating inquiries.
                  </p>
                </div>
              </div>

              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="w-full py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-semibold text-xs flex items-center justify-center gap-2 border border-zinc-700 transition"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Call Kitchen Now</span>
              </a>
            </div>

            {/* Opening Hours Schedule */}
            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-lg bg-amber-600/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Opening Hours</h3>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Open Daily 7 Days a Week
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                {RESTAURANT_INFO.hoursDetail.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-1.5 px-3 rounded-lg bg-zinc-950/60 border border-zinc-800/80"
                  >
                    <span className="font-semibold text-zinc-300">{item.day}</span>
                    <span className="font-bold text-amber-400">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Travel & Parking Notes */}
            <div className="grid grid-cols-2 gap-3 text-xs text-zinc-300">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="flex items-center gap-1.5 font-bold text-white mb-1">
                  <Car className="w-4 h-4 text-orange-400" />
                  Parking
                </div>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  Street parking available along Bentinck Rd and neighboring streets.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="flex items-center gap-1.5 font-bold text-white mb-1">
                  <Bus className="w-4 h-4 text-orange-400" />
                  Buses
                </div>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  Direct bus connections via Radford Boulevard and Alfreton Road stops.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed & FAQs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Google Map Box */}
            <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 flex flex-col">
              <div className="p-4 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  <span>5-7 Bentinck Rd, Radford, Nottingham NG7 4AA</span>
                </div>
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-400 hover:text-amber-300 font-semibold"
                >
                  Full View →
                </a>
              </div>

              <div className="relative h-72 sm:h-96 w-full bg-zinc-950">
                <iframe
                  title="Zagros Restaurant Nottingham Map"
                  src="https://maps.google.com/maps?q=5-7%20Bentinck%20Rd%2C%20Radford%2C%20Nottingham%20NG7%204AA&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.05)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Diners FAQs */}
            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-bold text-white">Frequently Asked Questions</h3>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800">
                    <h4 className="text-xs sm:text-sm font-bold text-white mb-1.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                      {faq.q}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed pl-3">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
