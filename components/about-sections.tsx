'use client';

import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { aboutPage } from '@/lib/pages';
import { LedgerFill, Reveal } from './primitives';

export function AboutIntro() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-teal">The idea</p>
              <h2 className="mt-5 font-display text-ink" style={{ fontSize: 'var(--text-title)' }}>
                {aboutPage.intro.title}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.08}>
              <div className="measure space-y-5 text-lg leading-relaxed text-ink/75">
                {aboutPage.intro.body.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <LedgerFill className="mt-10 h-3 text-ink/20" dense />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

type Doctor = (typeof aboutPage.doctors)[number];

export function DoctorProfile({ doctor, index }: { doctor: Doctor; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['5%', '-5%']);
  const dark = index % 2 === 1;
  const quals = 'qualifications' in doctor ? doctor.qualifications : undefined;

  return (
    <section
      ref={ref}
      id={doctor.id}
      className={dark ? 'bg-forest-deep text-paper' : 'bg-sand text-ink'}
    >
      <div className="mx-auto max-w-[1440px] px-4 py-20 md:px-8 md:py-28">
        {/* Name block */}
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className={`eyebrow ${dark ? 'text-mint' : 'text-teal'}`}>{doctor.role}</p>
              <h2 className="mt-4 font-display" style={{ fontSize: 'var(--text-display)' }}>
                {doctor.name}
              </h2>
            </div>
            <div className="flex gap-10">
              {doctor.stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-[clamp(2.2rem,4vw,3.4rem)] leading-none">{s.value}</p>
                  <p className={`mt-2 font-mono text-[11px] uppercase tracking-[0.16em] ${dark ? 'text-mint' : 'text-forest/70'}`}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <LedgerFill className={`mt-9 h-3 ${dark ? 'text-mint/40' : 'text-ink/20'}`} dense />
        </Reveal>

        {/* Editorial spread */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <motion.div
              style={{ y }}
              className="relative aspect-[4/3] overflow-hidden rounded-[22px] md:rounded-[28px]"
            >
              <Image
                src={doctor.consult}
                alt={`${doctor.name} in consultation`}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
            </motion.div>

            <Reveal delay={0.1}>
              <p className={`mt-11 text-2xl leading-snug md:text-3xl ${dark ? 'text-paper' : 'text-ink'}`}>
                {doctor.headline}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.06}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-[20px]">
                <Image
                  src={doctor.portrait}
                  alt={doctor.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div
                className={`measure mt-8 space-y-4 leading-relaxed ${dark ? 'text-paper/72' : 'text-ink/72'}`}
              >
                {doctor.bio.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Facts + feature image */}
        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <ul>
                {doctor.facts.map((fact, i) => (
                  <li
                    key={fact}
                    className={`flex items-baseline gap-5 border-t py-4 last:border-b ${
                      dark ? 'border-paper/15' : 'border-ink/12'
                    }`}
                  >
                    <span className={`font-mono text-[11px] tabular-nums ${dark ? 'text-mint/70' : 'text-teal'}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={dark ? 'text-paper/85' : 'text-ink/80'}>{fact}</span>
                  </li>
                ))}
              </ul>

              {quals && (
                <ol className="mt-10">
                  {quals.map((q) => (
                    <li key={q.year} className="flex gap-6 py-3">
                      <span className={`font-mono text-sm tabular-nums ${dark ? 'text-mint' : 'text-teal'}`}>
                        {q.year}
                      </span>
                      <span className={`text-sm ${dark ? 'text-paper/70' : 'text-ink/70'}`}>{q.title}</span>
                    </li>
                  ))}
                </ol>
              )}
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <figure>
                <div className="relative aspect-[3/2] overflow-hidden rounded-[22px]">
                  <Image
                    src={doctor.feature}
                    alt={doctor.featureCaption}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover"
                  />
                </div>
                <figcaption
                  className={`mt-4 font-mono text-[11px] uppercase tracking-[0.14em] ${
                    dark ? 'text-paper/50' : 'text-ink/50'
                  }`}
                >
                  {doctor.featureCaption}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ApproachGrid() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <Reveal>
          <p className="eyebrow text-teal">Technique</p>
          <h2 className="mt-5 max-w-[16ch] font-display text-ink" style={{ fontSize: 'var(--text-display)' }}>
            {aboutPage.approach.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal delay={0.08}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-[24px]">
                <Image
                  src="/images/gen-duo-bench.jpg"
                  alt="Both doctors reviewing surgical instruments"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ol>
              {aboutPage.approach.points.map((point, i) => (
                <Reveal as="li" key={point.title} delay={i * 0.06}>
                  <div className="flex gap-6 border-t border-ink/12 py-7 md:gap-10">
                    <span className="mt-1 font-mono text-sm tabular-nums text-coral">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl text-ink md:text-3xl">{point.title}</h3>
                      <p className="measure mt-3 leading-relaxed text-ink/70">{point.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
