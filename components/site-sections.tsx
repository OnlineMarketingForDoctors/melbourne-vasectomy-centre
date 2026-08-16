'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  clinic,
  feeLines,
  feeNote,
  feeTotal,
  medicareClaim,
  satelliteLocations,
} from '@/lib/site';
import { privacyBlocks } from '@/lib/privacy';
import { ArrowCta, LedgerFill, Reveal } from './primitives';

export function FeeLedger() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-teal">What it costs</p>
              <h2 className="mt-5 font-display text-ink" style={{ fontSize: 'var(--text-display)' }}>
                The whole price, on one line
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <dl className="mt-12">
                {feeLines.map((line) => (
                  <div
                    key={line.label}
                    className="flex items-baseline justify-between gap-6 border-t border-ink/12 py-5"
                  >
                    <dt className="text-ink/70">{line.label}</dt>
                    <dd className="font-mono text-xl tabular-nums text-ink">
                      {line.kind === 'less' ? '-' : ''}
                      {line.value}
                    </dd>
                  </div>
                ))}
                <div className="flex flex-wrap items-baseline justify-between gap-4 border-t-2 border-forest pt-7">
                  <dt className="font-display text-2xl text-ink md:text-3xl">{feeTotal.label}</dt>
                  <dd className="font-display text-[clamp(3.5rem,8vw,6rem)] leading-none text-forest">
                    {feeTotal.value}
                  </dd>
                </div>
              </dl>
              <p className="measure mt-8 text-sm leading-relaxed text-ink/60">{feeNote}</p>
              <div className="mt-8">
                <ArrowCta href={clinic.bookingHref}>Book online</ArrowCta>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-[24px]">
                <Image
                  src="/images/gen-desk-detail.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-6 rounded-[18px] bg-haze p-7">
                <p className="font-display text-2xl leading-tight text-forest">Deposit and balance</p>
                <div className="mt-5 space-y-3 font-mono text-sm text-forest/80">
                  <div className="flex justify-between border-b border-forest/15 pb-3">
                    <span>Deposit on booking</span>
                    <span>$100</span>
                  </div>
                  <div className="flex justify-between border-b border-forest/15 pb-3">
                    <span>Balance on the day</span>
                    <span>$730</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rebate back to you</span>
                    <span>$233</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MedicareClaim() {
  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow text-forest/70">Medicare</p>
              <h2 className="mt-5 font-display text-ink" style={{ fontSize: 'var(--text-title)' }}>
                {medicareClaim.title}
              </h2>
              <p className="measure mt-6 leading-relaxed text-ink/70">{medicareClaim.lede}</p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <ol>
              {medicareClaim.methods.map((m, i) => (
                <Reveal as="li" key={m.label} delay={i * 0.05}>
                  <a
                    href={m.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-6 border-t border-ink/15 py-6 md:gap-10"
                  >
                    <span className="mt-1.5 font-mono text-sm tabular-nums text-forest/60">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1">
                      <span className="flex items-center gap-3 font-display text-2xl text-ink transition-colors group-hover:text-forest">
                        {m.label}
                        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden>
                          <path
                            d="M4 12L12 4M12 4H6M12 4v6"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </svg>
                      </span>
                      <span className="measure mt-2 block leading-relaxed text-ink/70">{m.body}</span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={0.15}>
              <p className="measure mt-9 border-t border-ink/15 pt-7 text-sm leading-relaxed text-ink/60">
                {medicareClaim.invoiceNote}{' '}
                <a
                  href={`mailto:${clinic.email}`}
                  className="text-forest underline decoration-forest/30 underline-offset-4"
                >
                  {clinic.email}
                </a>
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LocationList() {
  const [active, setActive] = useState(0);
  const current = satelliteLocations[active];

  return (
    <section className="bg-forest-deep py-20 text-paper md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <Reveal>
          <p className="eyebrow text-mint">Where we operate</p>
          <h2 className="mt-5 max-w-[18ch] font-display" style={{ fontSize: 'var(--text-display)' }}>
            One home clinic, four satellites
          </h2>
          <LedgerFill className="mt-10 h-3 text-mint/40" dense />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <ul>
              {satelliteLocations.map((loc, i) => (
                <li key={loc.name}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-current={active === i}
                    className="w-full border-t border-paper/15 py-6 text-left last:border-b"
                  >
                    <motion.div animate={{ opacity: active === i ? 1 : 0.55 }} transition={{ duration: 0.35 }}>
                      <div className="flex items-baseline gap-4">
                        <span className="font-mono text-[11px] tabular-nums text-mint">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="font-display text-2xl md:text-3xl">{loc.name}</span>
                        {loc.primary && (
                          <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.16em] text-coral">
                            Main clinic
                          </span>
                        )}
                      </div>
                      <p className="mt-2 pl-9 font-mono text-xs text-paper/55">{loc.address}</p>
                      <p className="measure mt-2 pl-9 text-sm text-paper/70">{loc.note}</p>
                    </motion.div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="sticky top-28">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
                <motion.div key={current.image} initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="absolute inset-0">
                  <Image src={current.image} alt={current.name} fill sizes="50vw" className="object-cover" />
                </motion.div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/85 to-transparent p-7">
                  <p className="font-display text-2xl">{current.name}</p>
                  <p className="mt-1 font-mono text-xs text-mint">{current.address}</p>
                </div>
              </div>
              <div className="mt-6">
                <ArrowCta href={clinic.bookingHref}>Book at this clinic</ArrowCta>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MapAndAddress() {
  const a = clinic.address;
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-teal">Prahran</p>
              <h2 className="mt-5 font-display text-ink" style={{ fontSize: 'var(--text-title)' }}>
                Find the clinic
              </h2>
              <address className="mt-8 not-italic">
                <span className="block font-display text-3xl leading-tight text-ink">
                  {a.line1}
                  <br />
                  {a.line2}
                </span>
                <span className="mt-3 block font-mono text-sm tracking-wide text-ink/60">
                  {a.suburb} {a.state} {a.postcode}
                </span>
              </address>

              <dl className="mt-10">
                <div className="flex items-baseline justify-between gap-4 border-t border-ink/12 py-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">Phone</dt>
                  <dd>
                    <a href={clinic.phoneHref} className="text-ink transition-colors hover:text-forest">
                      {clinic.phoneLabel} ({clinic.phoneDigits})
                    </a>
                  </dd>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-4 border-t border-ink/12 py-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">Email</dt>
                  <dd>
                    <a href={`mailto:${clinic.email}`} className="text-ink transition-colors hover:text-forest">
                      {clinic.email}
                    </a>
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-t border-b border-ink/12 py-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">Maps</dt>
                  <dd>
                    <a
                      href={clinic.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink transition-colors hover:text-forest"
                    >
                      Open in Google Maps
                    </a>
                  </dd>
                </div>
              </dl>

              <div className="mt-9">
                <ArrowCta href={clinic.bookingHref}>Book online</ArrowCta>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.08}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
                <Image
                  src="/images/gen-clinic-exterior.jpg"
                  alt="Commercial Road, Prahran"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-6 overflow-hidden rounded-[20px] border border-ink/10">
                <iframe
                  src={clinic.mapsEmbed}
                  title="Map showing the Melbourne Vasectomy Centre in Prahran"
                  width="100%"
                  height="320"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0, display: 'block' }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BookingPanel() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-teal">Three steps</p>
              <h2 className="mt-5 font-display text-ink" style={{ fontSize: 'var(--text-title)' }}>
                How booking works
              </h2>
              <ol className="mt-9">
                {[
                  { t: 'Pick a time', b: 'Choose a clinic and a slot in the online calendar.' },
                  { t: 'Pay the deposit', b: 'A $100 deposit secures the booking. The $730 balance is due on the day.' },
                  { t: 'Sign the consent form', b: 'We text you an electronic consent form three days before.' },
                ].map((s, i) => (
                  <li key={s.t} className="flex gap-6 border-t border-ink/12 py-5 last:border-b">
                    <span className="mt-1 font-mono text-sm tabular-nums text-coral">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl text-ink">{s.t}</h3>
                      <p className="measure mt-1.5 text-sm leading-relaxed text-ink/70">{s.b}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <ArrowCta href={clinic.bookingHref}>Open the calendar</ArrowCta>
                <a href={clinic.phoneHref} className="font-mono text-sm text-ink/60 hover:text-forest">
                  or call {clinic.phoneLabel}
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
                <Image
                  src="/images/gen-reception-detail.jpg"
                  alt="The reception desk at the Melbourne Vasectomy Centre"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-6 rounded-[20px] bg-forest p-8 text-paper">
                <p className="font-display text-3xl leading-tight">Prefer to talk first?</p>
                <p className="measure mt-3 leading-relaxed text-paper/75">
                  Free phone consultations are available with your doctor before you book anything. No referral
                  is needed.
                </p>
                <a
                  href={clinic.phoneHref}
                  className="mt-6 inline-block font-mono text-sm text-mint underline decoration-mint/40 underline-offset-4 hover:decoration-mint"
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

export function PolicyBody() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow text-teal">Your information</p>
              <p className="measure mt-5 leading-relaxed text-ink/70 lg:sticky lg:top-28">
                This policy explains what we collect, why we collect it, how it is stored and how you can access
                it. If you have a question about any of it, contact the practice.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={0.06}>
              <div className="measure">
                {privacyBlocks.map((block, i) => {
                  if (block.type === 'h') {
                    return (
                      <h2
                        key={i}
                        className="mt-12 border-t border-ink/12 pt-8 font-display text-2xl text-ink first:mt-0 first:border-0 first:pt-0 md:text-3xl"
                      >
                        {block.text}
                      </h2>
                    );
                  }
                  if (block.type === 'li') {
                    return (
                      <p key={i} className="mt-2.5 flex gap-4 leading-relaxed text-ink/70">
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" />
                        <span>{block.text}</span>
                      </p>
                    );
                  }
                  return (
                    <p key={i} className="mt-4 leading-relaxed text-ink/70">
                      {block.text}
                    </p>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
