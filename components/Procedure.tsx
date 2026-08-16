'use client';

import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { procedure } from '@/lib/content';
import { Reveal } from './primitives';

/**
 * The seven steps are a genuine sequence, so they are numbered. The sticky rail
 * shows where you are in the operation while the detail scrolls past.
 */
export function Procedure() {
  const ref = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 60%', 'end 85%'] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });
  const scaleY = useTransform(progress, [0, 1], [0, 1]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
        });
      },
      { rootMargin: '-48% 0px -48% 0px', threshold: 0 },
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <Reveal>
          <p className="eyebrow text-teal">The procedure</p>
          <h2 className="mt-5 max-w-[14ch] font-display text-ink" style={{ fontSize: 'var(--text-display)' }}>
            {procedure.title}
          </h2>
          <p className="measure mt-6 text-lg text-ink/70">{procedure.lede}</p>
        </Reveal>

        <div ref={ref} className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sticky rail */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-[3/2] overflow-hidden rounded-[22px] lg:aspect-[4/5]">
                <Image
                  src="/images/gen-procedure-room.jpg"
                  alt="A procedure room at the Melbourne Vasectomy Centre"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/75 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-7 text-paper">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mint">
                    Step {String(active + 1).padStart(2, '0')} of {String(procedure.steps.length).padStart(2, '0')}
                  </p>
                  <p className="mt-3 font-display text-3xl leading-tight">{procedure.steps[active].title}</p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <div className="relative h-px flex-1 bg-ink/15">
                  <motion.div
                    className="absolute inset-y-0 left-0 w-full origin-left bg-coral"
                    style={{ scaleX: reduce ? 1 : scaleY }}
                  />
                </div>
                <span className="font-mono text-xs text-ink/50">About 15 min</span>
              </div>
            </div>
          </div>

          {/* Steps */}
          <ol className="lg:col-span-7">
            {procedure.steps.map((step, i) => (
              <li
                key={step.title}
                data-index={i}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className="border-t border-ink/12 py-8 first:border-t-0 first:pt-0 md:py-10"
              >
                <motion.div
                  className="flex gap-6 md:gap-10"
                  animate={{ opacity: active === i ? 1 : 0.5 }}
                  transition={{ duration: 0.45 }}
                >
                  <span className="mt-1 font-mono text-sm tabular-nums text-coral">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl text-ink md:text-3xl">{step.title}</h3>
                    <p className="measure mt-3 leading-relaxed text-ink/70">{step.body}</p>
                  </div>
                </motion.div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
