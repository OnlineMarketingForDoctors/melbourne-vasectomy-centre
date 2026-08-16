'use client';

import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { insurance, patientPage } from '@/lib/pages';
import { clinic } from '@/lib/site';
import { ArrowCta, LedgerFill, Reveal } from './primitives';

const EASE = [0.22, 1, 0.36, 1] as const;

export function Consultation() {
  const c = patientPage.consultation;
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px]">
                <Image
                  src={c.image}
                  alt="A pre-vasectomy consultation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:pt-6">
            <Reveal>
              <p className="eyebrow text-teal">{c.kicker}</p>
              <h2 className="mt-5 font-display text-ink" style={{ fontSize: 'var(--text-display)' }}>
                {c.title}
              </h2>
              <p className="measure mt-6 text-lg text-ink/70">{c.body}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-10">
                {c.points.map((p, i) => (
                  <li key={p} className="flex gap-5 border-t border-ink/12 py-4 last:border-b">
                    <span className="font-mono text-[11px] tabular-nums text-teal">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-ink/80">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-9 rounded-[18px] bg-haze p-7">
                <p className="leading-relaxed text-forest/85">{c.note}</p>
                <a
                  href={clinic.phoneHref}
                  className="mt-4 inline-block font-mono text-sm text-forest underline decoration-forest/30 underline-offset-4 transition-colors hover:decoration-forest"
                >
                  {clinic.phoneLabel} ({clinic.phoneDigits})
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Seven real steps, so they are numbered. The image swaps with the step. */
export function ProcedureWalkthrough() {
  const p = patientPage.procedure;
  const [active, setActive] = useState(0);
  const stepRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="procedure" className="bg-forest text-paper">
      <div className="mx-auto max-w-[1440px] px-4 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="eyebrow text-mint">Step by step</p>
          <h2 className="mt-5 max-w-[14ch] font-display" style={{ fontSize: 'var(--text-display)' }}>
            {p.title}
          </h2>
          <p className="measure mt-6 text-lg text-paper/70">{p.lede}</p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="hidden lg:col-span-6 lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
                <AnimatePresence mode="sync">
                  <motion.div
                    key={p.steps[active].title}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.75, ease: EASE }}
                  >
                    <Image src={p.steps[active].image} alt="" fill sizes="50vw" className="object-cover" />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/85 to-transparent p-8">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mint">
                    Step {String(active + 1).padStart(2, '0')} of {String(p.steps.length).padStart(2, '0')}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex gap-1.5">
                {p.steps.map((s, i) => (
                  <span
                    key={s.title}
                    className={`h-0.5 flex-1 transition-colors duration-500 ${
                      i <= active ? 'bg-coral' : 'bg-paper/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <ol className="lg:col-span-6">
            {p.steps.map((step, i) => (
              <li
                key={step.title}
                data-index={i}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className="border-t border-paper/15 py-8 first:border-t-0 first:pt-0 md:py-10"
              >
                <div className="relative mb-6 aspect-[3/2] overflow-hidden rounded-[16px] lg:hidden">
                  <Image src={step.image} alt="" fill sizes="100vw" className="object-cover" />
                </div>
                <motion.div
                  className="flex gap-6 md:gap-9"
                  animate={{ opacity: active === i ? 1 : 0.55 }}
                  transition={{ duration: 0.45 }}
                >
                  <span className="mt-1.5 font-mono text-sm tabular-nums text-coral">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl">{step.title}</h3>
                    <p className="measure mt-3 leading-relaxed text-paper/72">{step.body}</p>
                  </div>
                </motion.div>
              </li>
            ))}
          </ol>
        </div>

        <Reveal delay={0.1}>
          <p className="measure mt-14 border-t border-paper/15 pt-8 text-lg text-paper/80">{p.after}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function Preparing() {
  const p = patientPage.preparing;
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-4%', '4%']);

  return (
    <section ref={ref} className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-forest/70">Before the day</p>
              <h2 className="mt-5 font-display text-ink" style={{ fontSize: 'var(--text-display)' }}>
                {p.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <motion.div
                style={{ y }}
                className="relative mt-10 aspect-[4/5] overflow-hidden rounded-[24px]"
              >
                <Image
                  src={p.image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </motion.div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ol>
              {p.items.map((item, i) => (
                <Reveal as="li" key={item.title} delay={i * 0.06}>
                  <div className="grid gap-3 border-t border-ink/15 py-7 md:grid-cols-[130px_1fr] md:gap-8">
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-forest/70 md:pt-2">
                      {item.when}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl text-ink md:text-3xl">{item.title}</h3>
                      <p className="measure mt-2.5 leading-relaxed text-ink/70">{item.body}</p>
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

export function Aftercare() {
  const r = patientPage.recovery;
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[24px]">
                <Image
                  src={r.image}
                  alt="Recovering at home after a vasectomy"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-teal">Recovery</p>
              <h2 className="mt-5 font-display text-ink" style={{ fontSize: 'var(--text-title)' }}>
                {r.title}
              </h2>
              <p className="measure mt-6 leading-relaxed text-ink/75">{r.body}</p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.08}>
          <LedgerFill className="mt-14 h-3 text-ink/20" dense />
          <ol className="grid gap-x-8 gap-y-8 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {r.markers.map((m, i) => (
              <li key={m.time} className="flex flex-col">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-teal">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="mt-3 font-display text-3xl text-ink">{m.time}</span>
                <span className="mt-2 text-sm text-ink/65">{m.note}</span>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-12 flex flex-col gap-5 rounded-[20px] border border-coral/35 bg-coral/8 p-8 md:flex-row md:items-center md:gap-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-coral">Important</span>
            <p className="text-lg leading-snug text-ink/85">{r.warning}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function InsuranceBlock() {
  return (
    <section className="bg-forest-deep py-20 text-paper md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow text-mint">Private health</p>
              <h2 className="mt-5 font-display" style={{ fontSize: 'var(--text-display)' }}>
                {insurance.title}
              </h2>
              <p className="measure mt-6 text-lg text-mint">{insurance.lede}</p>
              <div className="measure mt-6 space-y-4 leading-relaxed text-paper/70">
                {insurance.body.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.08}>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/50">
                Going through a hospital
              </p>
              <dl className="mt-6">
                {insurance.comparison.map((row) => (
                  <div
                    key={row.label}
                    className="flex flex-wrap items-baseline justify-between gap-4 border-t border-paper/15 py-5"
                  >
                    <dt className="text-paper/75">{row.label}</dt>
                    <dd className="font-mono text-sm text-paper/60">{row.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 rounded-[20px] bg-forest p-8">
                <p className="leading-relaxed text-paper/80">{insurance.punchline}</p>
                <div className="mt-7 flex items-baseline gap-4">
                  <span className="font-display text-6xl leading-none text-mint">$597</span>
                  <span className="font-mono text-xs tracking-wider text-paper/55">out of pocket</span>
                </div>
                <div className="mt-8">
                  <ArrowCta href={clinic.bookingHref}>Book online</ArrowCta>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
