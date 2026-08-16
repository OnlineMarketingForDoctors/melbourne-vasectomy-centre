'use client';

import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { clinic } from '@/lib/site';
import { ArrowCta, Reveal } from './primitives';

export function CtaBand({
  title = 'Ready when you are',
  body = 'Book online in under two minutes, or call and speak to us first. Consultation and procedure can usually happen within 48 hours.',
  image = '/images/gen-melbourne.jpg',
}: {
  title?: string;
  body?: string;
  image?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-8%', '8%']);

  return (
    <section ref={ref} className="relative overflow-hidden bg-forest-deep">
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image src={image} alt="" fill sizes="100vw" className="object-cover opacity-35" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/80 via-forest-deep/70 to-forest-deep" />

      <div className="relative mx-auto max-w-[1440px] px-4 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="eyebrow text-mint">Melbourne</p>
          <h2 className="mt-6 max-w-[13ch] font-display text-paper" style={{ fontSize: 'var(--text-display)' }}>
            {title}
          </h2>
          <p className="measure mt-7 text-lg text-paper/75">{body}</p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ArrowCta href={clinic.bookingHref}>Book online</ArrowCta>
            <a
              href={clinic.phoneHref}
              className="rounded-full border border-paper/30 px-7 py-4 text-sm font-medium text-paper transition-colors duration-300 hover:border-mint hover:text-mint"
            >
              Call {clinic.phoneLabel}
            </a>
          </div>

          <p className="mt-10 font-mono text-xs tracking-wide text-paper/50">
            Free phone consultations available before you book
          </p>
        </Reveal>
      </div>
    </section>
  );
}
