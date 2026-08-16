'use client';

import { reviews, reviewsMeta } from '@/lib/content';
import { Reveal } from './primitives';

function Stars() {
  return (
    <span className="flex gap-0.5" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 20 20" fill="currentColor" className="text-gold">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </span>
  );
}

function Track({ items, reverse = false }: { items: typeof reviews; reverse?: boolean }) {
  const doubled = [...items, ...items];

  return (
    <div className="group relative flex overflow-hidden">
      <div
        className={`flex shrink-0 gap-5 pr-5 ${
          reverse ? 'animate-[marquee-reverse_58s_linear_infinite]' : 'animate-[marquee_52s_linear_infinite]'
        } group-hover:[animation-play-state:paused] motion-reduce:animate-none`}
      >
        {doubled.map((review, i) => (
          <figure
            key={`${review.name}-${i}`}
            className="flex w-[300px] shrink-0 flex-col justify-between rounded-[18px] border border-paper/15 bg-forest p-6 md:w-[360px]"
          >
            <div>
              <Stars />
              <blockquote className="mt-4 text-[0.95rem] leading-relaxed text-paper/80">
                {review.body}
              </blockquote>
            </div>
            <figcaption className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-mint">
              {review.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="overflow-hidden bg-forest-deep py-20 text-paper md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <p className="eyebrow text-mint">Reviews</p>
              <h2 className="mt-5 max-w-[16ch] font-display" style={{ fontSize: 'var(--text-display)' }}>
                {reviewsMeta.rating}, and said out loud
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <Stars />
              <p className="font-mono text-xs tracking-wide text-paper/60">
                Based on {reviewsMeta.count} {reviewsMeta.source} reviews
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-14 flex flex-col gap-5">
        <Track items={reviews.slice(0, 5)} />
        <Track items={reviews.slice(4)} reverse />
      </div>

      <style jsx global>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-reverse {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
