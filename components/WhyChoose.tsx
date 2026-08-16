'use client';

import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { whyChoose } from '@/lib/content';
import { LedgerFill, Reveal } from './primitives';

export function WhyChoose() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-5%', '5%']);

  return (
    <section ref={ref} className="relative overflow-hidden bg-forest-deep text-paper">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-4 py-20 md:px-8 md:py-28 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow text-mint">The clinic</p>
            <h2 className="mt-5 font-display" style={{ fontSize: 'var(--text-display)' }}>
              {whyChoose.title}
            </h2>
            <p className="measure mt-6 text-lg text-paper/70">{whyChoose.lede}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-10">
              {whyChoose.points.map((point, i) => (
                <li
                  key={point}
                  className="group flex items-baseline gap-5 border-t border-paper/15 py-4 last:border-b"
                >
                  <span className="font-mono text-[11px] tabular-nums text-mint/70">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[1.02rem] text-paper/85 transition-colors duration-300 group-hover:text-mint">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <div className="relative">
            <motion.div
              style={{ y }}
              className="relative aspect-[3/4] overflow-hidden rounded-[24px] md:aspect-[4/3]"
            >
              <Image
                src="/images/gen-reception.jpg"
                alt="The waiting area at the Melbourne Vasectomy Centre"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
            </motion.div>

            <Reveal delay={0.18}>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[18px]">
                  <Image src="/images/gen-drape.jpg" alt="" fill sizes="30vw" className="object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-display text-3xl leading-tight text-paper md:text-4xl">
                    In, done, and home the same morning.
                  </p>
                  <LedgerFill className="mt-6 h-2.5 text-mint/40" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
