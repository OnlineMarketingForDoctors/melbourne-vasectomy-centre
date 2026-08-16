'use client';

import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { doctors } from '@/lib/content';
import { LedgerFill, Reveal } from './primitives';

function DoctorPanel({ doctor, index }: { doctor: (typeof doctors)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['6%', '-6%']);
  const flip = index % 2 === 1;

  return (
    <div ref={ref} className="relative py-14 md:py-24">
      <div
        className={`grid items-center gap-10 lg:grid-cols-12 lg:gap-16 ${
          flip ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        {/* Image cluster */}
        <div className="relative lg:col-span-6">
          <motion.div
            style={{ y }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] md:rounded-[28px]"
          >
            <Image
              src={doctor.environmental}
              alt={`${doctor.name} at the Melbourne Vasectomy Centre`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

          <Reveal
            delay={0.15}
            className={`absolute -bottom-8 w-[38%] max-w-[210px] overflow-hidden rounded-[14px] shadow-2xl shadow-forest-deep/25 md:rounded-[18px] ${
              flip ? 'left-4 md:left-8' : 'right-4 md:right-8'
            }`}
          >
            <div className="relative aspect-[3/4]">
              <Image
                src={doctor.portrait}
                alt={doctor.name}
                fill
                sizes="220px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* Text */}
        <div className="lg:col-span-6">
          <Reveal>
            <p className="eyebrow text-teal">{doctor.role}</p>
            <h3 className="mt-4 font-display text-ink" style={{ fontSize: 'var(--text-title)' }}>
              {doctor.name}
            </h3>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-7 flex items-baseline gap-3 border-y border-ink/12 py-5">
              <span className="font-display text-[clamp(2.6rem,4.6vw,4rem)] leading-none text-forest">
                {doctor.stat.value}
              </span>
              <span className="font-mono text-xs tracking-wider text-ink/55">{doctor.stat.unit}</span>
            </div>
            <p className="mt-5 text-lg leading-snug text-ink/85">{doctor.claim}</p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="measure mt-6 space-y-4 text-[0.98rem] leading-relaxed text-ink/70">
              {doctor.bio.map((p) => (
                <p key={p.slice(0, 28)}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-8 space-y-0">
              {doctor.facts.map((fact) => (
                <li key={fact} className="flex gap-4 border-t border-ink/12 py-3.5 text-sm text-ink/75">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" />
                  {fact}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export function Doctors() {
  return (
    <section id="doctors" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <Reveal>
          <p className="eyebrow text-teal">The vasectomists</p>
          <h2
            className="mt-5 max-w-[19ch] font-display text-ink"
            style={{ fontSize: 'var(--text-display)' }}
          >
            Two doctors who do this all day, every day
          </h2>
          <p className="measure mt-6 text-lg text-ink/70">
            A vasectomy is a small procedure, but experience is what keeps it small. Between them, Dr Cashion and
            Dr Valentine perform more than 5,000 a year.
          </p>
          <LedgerFill className="mt-10 h-3 text-ink/20" dense />
        </Reveal>

        {doctors.map((doctor, i) => (
          <DoctorPanel key={doctor.id} doctor={doctor} index={i} />
        ))}
      </div>
    </section>
  );
}
