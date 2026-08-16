'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { pillars } from '@/lib/content';
import { Reveal } from './primitives';

/**
 * Three claims, one sticky image that changes as each claim takes over.
 * A card grid would flatten these into equal weight; here each gets the full
 * frame while it is being read.
 */
export function Pillars() {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            setActive(idx);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-forest text-paper">
      <div className="mx-auto max-w-[1440px] px-4 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="eyebrow text-mint">Why a vasectomy here</p>
          <h2 className="mt-5 max-w-[16ch] font-display" style={{ fontSize: 'var(--text-display)' }}>
            Small procedure. Serious standards.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Sticky image */}
          <div className="hidden lg:col-span-6 lg:block">
            <div className="sticky top-28 aspect-[4/5] overflow-hidden rounded-[28px]">
              <AnimatePresence mode="sync">
                <motion.div
                  key={pillars[active].key}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={pillars[active].image}
                    alt=""
                    fill
                    sizes="50vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-forest-deep/85 to-transparent p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={pillars[active].key}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.45 }}
                  >
                    <p className="font-display text-5xl leading-none">{pillars[active].figure}</p>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-mint">
                      {pillars[active].figureLabel}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Scrolling text */}
          <div className="lg:col-span-6">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.key}
                data-index={i}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className="border-t border-paper/15 py-10 first:border-t-0 first:pt-0 lg:py-20"
              >
                <div className="relative mb-6 aspect-[3/2] overflow-hidden rounded-[18px] lg:hidden">
                  <Image src={pillar.image} alt="" fill sizes="100vw" className="object-cover" />
                </div>

                <motion.div
                  animate={{ opacity: active === i ? 1 : 0.55 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-baseline gap-5">
                    <h3 className="font-display text-4xl md:text-5xl">{pillar.title}</h3>
                    <span className="font-mono text-xs tracking-wider text-mint lg:hidden">
                      {pillar.figure}
                    </span>
                  </div>
                  <p className="measure mt-5 text-[1.02rem] leading-relaxed text-paper/75">{pillar.body}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
