'use client';

import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { clinic, closing } from '@/lib/content';
import { ArrowCta, Reveal } from './primitives';

export function Closing() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-8%', '8%']);

  return (
    <section ref={ref} id="book" className="relative overflow-hidden bg-forest-deep">
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image
          src="/images/gen-melbourne.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/80 via-forest-deep/70 to-forest-deep" />

      <div className="relative mx-auto max-w-[1440px] px-4 py-24 md:px-8 md:py-36">
        <Reveal>
          <p className="eyebrow text-mint">Melbourne</p>
          <h2
            className="mt-6 max-w-[13ch] font-display text-paper"
            style={{ fontSize: 'var(--text-display)' }}
          >
            {closing.title}
          </h2>
          <p className="measure mt-7 text-lg text-paper/75">{closing.body}</p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ArrowCta href={clinic.bookingHref}>{closing.primaryCta}</ArrowCta>
            <a
              href={`mailto:${clinic.email}`}
              className="rounded-full border border-paper/30 px-7 py-4 text-sm font-medium text-paper transition-colors duration-300 hover:border-mint hover:text-mint"
            >
              {closing.secondaryCta}
            </a>
          </div>

          <p className="mt-10 font-mono text-xs tracking-wide text-paper/50">
            Or call {clinic.phoneLabel} ({clinic.phoneDigits}) for a free phone consultation
          </p>
        </Reveal>
      </div>
    </section>
  );
}
