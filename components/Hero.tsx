'use client';

import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { clinic, hero } from '@/lib/content';
import { ArrowCta, MaskedLines } from './primitives';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '10%']);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.24, reduce ? 1.24 : 1.32]);

  return (
    <section ref={ref} id="top" className="relative bg-forest-deep pb-14 pt-20 md:pb-20 md:pt-28">
      <div className="mx-auto max-w-[1440px] md:px-8">
        <div className="relative overflow-hidden md:rounded-[34px]">
          {/* Image. Full bleed on phones, inset and rounded from tablet up. */}
          <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10] lg:aspect-auto lg:min-h-[760px]">
            <motion.div
              /* The source is wider than the frame, so it fills on height and
                 object-position has no vertical effect. The crop comes from this
                 transform, and the origin sits below the heads so scaling lifts
                 them towards the top of the frame. */
              style={{ y: imgY, scale: imgScale, transformOrigin: 'center 55%' }}
              className="absolute inset-0"
            >
              <Image
                src="/images/gen-duo.jpg"
                alt="Dr Geoff Cashion and Dr Matt Valentine at the Melbourne Vasectomy Centre"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>

            {/* Scrim only where the copy sits over the image. */}
            <div className="absolute inset-0 hidden bg-forest-deep/38 lg:block" />
            <div className="absolute inset-0 hidden bg-gradient-to-t from-forest-deep/85 via-forest-deep/20 to-forest-deep/45 lg:block" />
          </div>

          {/* Copy. Below the image on phones and tablets, over it from lg up. */}
          <div className="flex flex-col items-center px-5 pt-10 text-center md:px-10 lg:absolute lg:inset-0 lg:justify-end lg:px-14 lg:pb-16 lg:pt-0">
            <motion.p
              className="eyebrow mb-5 text-mint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              {hero.eyebrow}
            </motion.p>

            <h1 className="font-display text-paper" style={{ fontSize: 'var(--text-display)' }}>
              <MaskedLines lines={hero.titleLines} delay={0.25} />
            </h1>

            <motion.p
              className="measure mx-auto mt-6 max-w-[48ch] text-paper/80 lg:mt-8"
              style={{ fontSize: 'var(--text-lede)' }}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.75 }}
            >
              {hero.lede}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:mt-10"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.9 }}
            >
              <ArrowCta href={clinic.bookingHref}>{hero.primaryCta}</ArrowCta>
              <a
                href="#doctors"
                className="rounded-full border border-paper/30 px-7 py-4 text-sm font-medium text-paper transition-colors duration-300 hover:border-mint hover:text-mint"
              >
                {hero.secondaryCta}
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-8 flex flex-wrap items-center justify-between gap-4 px-5 md:mt-6 md:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.05 }}
        >
          <p className="font-mono text-xs tracking-wide text-mint">{hero.priceNote}</p>
          <a
            href={clinic.phoneHref}
            className="font-mono text-xs tracking-wide text-paper/55 transition-colors hover:text-mint"
          >
            Free phone consult: {clinic.phoneLabel}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
