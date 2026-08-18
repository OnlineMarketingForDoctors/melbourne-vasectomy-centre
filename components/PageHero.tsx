'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef, type ReactNode } from 'react';
import { MaskedLines } from './primitives';

/**
 * Shared page opener. Same editorial frame as the homepage hero so inner pages
 * read as part of the same publication, at a calmer scale.
 */
export function PageHero({
  eyebrow,
  titleLines,
  lede,
  image,
  imageAlt,
  imageMobile,
  mirror = false,
  children,
}: {
  eyebrow: string;
  titleLines: string[];
  lede?: string;
  image: string;
  imageAlt: string;
  imageMobile?: string;
  mirror?: boolean;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '14%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.09]);

  return (
    <section ref={ref} className="relative bg-forest-deep pb-14 pt-24 md:pb-16 md:pt-28">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="relative overflow-hidden rounded-[22px] md:rounded-[34px]">
          <div className="relative min-h-[440px] w-full sm:min-h-[460px] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[560px]">
            <motion.div style={{ y, scale }} className="absolute inset-0">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                sizes="(max-width: 640px) 200vw, (max-width: 1024px) 130vw, 100vw"
                className={`${imageMobile ? 'hidden sm:block' : ''} object-cover ${mirror ? '-scale-x-100' : ''}`}
              />
              {imageMobile && (
                <Image
                  src={imageMobile}
                  alt={imageAlt}
                  fill
                  priority
                  sizes="(max-width: 640px) 120vw, 100vw"
                  className={`object-cover sm:hidden ${mirror ? '-scale-x-100' : ''}`}
                />
              )}
            </motion.div>

            <div className="absolute inset-0 bg-forest-deep/45 lg:hidden" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/92 via-forest-deep/45 to-forest-deep/30 lg:bg-gradient-to-r lg:from-forest-deep/90 lg:via-forest-deep/45 lg:to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 lg:justify-center lg:p-14">
              <motion.p
                className="eyebrow mb-5 text-mint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                {eyebrow}
              </motion.p>

              <h1 className="max-w-[16ch] font-display text-paper" style={{ fontSize: 'var(--text-display)' }}>
                <MaskedLines lines={titleLines} delay={0.2} />
              </h1>

              {lede && (
                <motion.p
                  className="measure mt-6 max-w-[48ch] text-paper/80"
                  style={{ fontSize: 'var(--text-lede)' }}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.6 }}
                >
                  {lede}
                </motion.p>
              )}

              {children && (
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.75 }}
                >
                  {children}
                </motion.div>
              )}
            </div>
          </div>
        </div>

        <motion.nav
          aria-label="Breadcrumb"
          className="mt-5 font-mono text-xs tracking-wide text-paper/45"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.9 }}
        >
          <Link href="/" className="transition-colors hover:text-mint">
            Home
          </Link>
          <span className="px-2 text-paper/25">/</span>
          <span className="text-mint">{eyebrow}</span>
        </motion.nav>
      </div>
    </section>
  );
}
