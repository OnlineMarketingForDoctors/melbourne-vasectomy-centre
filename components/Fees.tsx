'use client';

import Image from 'next/image';
import { clinic, fees } from '@/lib/content';
import { ArrowCta, Reveal } from './primitives';

export function Fees() {
  return (
    <section id="fees" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-teal">Fees</p>
              <h2 className="mt-5 font-display text-ink" style={{ fontSize: 'var(--text-display)' }}>
                {fees.title}
              </h2>
              <p className="measure mt-6 text-lg text-ink/70">{fees.lede}</p>
            </Reveal>

            <Reveal delay={0.08}>
              <dl className="mt-12">
                {fees.lines.map((line) => (
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
                  <dt className="font-display text-2xl text-ink md:text-3xl">{fees.total.label}</dt>
                  <dd className="font-display text-[clamp(3.5rem,8vw,6rem)] leading-none text-forest">
                    {fees.total.value}
                  </dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="measure mt-8 text-sm leading-relaxed text-ink/60">{fees.note}</p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <ArrowCta href={clinic.bookingHref}>Book online</ArrowCta>
                <a
                  href={fees.policyHref}
                  className="text-sm text-ink/60 underline decoration-ink/25 underline-offset-4 transition-colors hover:text-forest hover:decoration-forest"
                >
                  {fees.policyLabel}
                </a>
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
                <p className="font-display text-2xl leading-tight text-forest">No private health needed</p>
                <p className="mt-3 text-sm leading-relaxed text-forest/75">
                  Because we work in medical centres rather than private hospitals, there is no excess, no
                  anaesthetist fee and no surgeon gap. One fee, quoted up front.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
