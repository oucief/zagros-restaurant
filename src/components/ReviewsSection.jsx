import React from 'react';
import { Star, CheckCircle2, ExternalLink, ThumbsUp } from 'lucide-react';
import { RESTAURANT_INFO, GOOGLE_REVIEWS } from '../data/restaurantData';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-zinc-900/50 border-t border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wider uppercase mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            Verified Google Reviews
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif-display">
            Loved Across Nottingham
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            A flawless 5.0-star track record from our diners enjoying charcoal-grilled feasts in Radford.
          </p>

          {/* Rating Summary Card */}
          <div className="mt-8 inline-flex items-center gap-6 p-4 px-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 shadow-xl">
            <div className="text-left">
              <div className="text-3xl sm:text-4xl font-black text-white font-serif-display flex items-baseline gap-1">
                <span>{RESTAURANT_INFO.rating.toFixed(1)}</span>
                <span className="text-sm font-normal text-zinc-500">/ 5.0</span>
              </div>
              <div className="flex items-center gap-1 text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            <div className="h-10 w-px bg-zinc-800" />

            <div className="text-left">
              <div className="text-sm font-bold text-white flex items-center gap-1.5">
                <span>18 Verified Reviews</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">
                Google Business Profile
              </div>
            </div>

            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 font-semibold ml-2"
            >
              <span>View on Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GOOGLE_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/90 shadow-lg flex flex-col justify-between hover:border-amber-500/40 transition duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center font-bold text-white text-sm shadow-md">
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{rev.author}</h4>
                      <span className="text-[11px] text-zinc-500">{rev.time}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {rev.highlight && (
                  <div className="text-xs font-semibold text-amber-300/90 bg-amber-950/30 border border-amber-500/20 px-3 py-1.5 rounded-lg mb-3 inline-block">
                    “{rev.highlight}”
                  </div>
                )}

                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed italic">
                  "{rev.content}"
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500">
                <span className="flex items-center gap-1 text-emerald-400/90">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Verified Google Local Guide
                </span>
                <span className="flex items-center gap-1 text-zinc-400">
                  <ThumbsUp className="w-3 h-3 text-zinc-500" /> Helpful
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Leave Review Prompt */}
        <div className="mt-10 text-center">
          <p className="text-xs text-zinc-400">
            Dined with us at Bentinck Road? We'd love your feedback!{' '}
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 underline font-semibold ml-1 inline-flex items-center gap-1"
            >
              Leave a Google Review <ExternalLink className="w-3 h-3" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
