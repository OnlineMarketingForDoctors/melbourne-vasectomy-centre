'use client';

import Image from 'next/image';
import { recovery } from '@/lib/content';
import { LedgerFill, Reveal } from './primitives';

export function Recovery() {
  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] md:aspect-[16/10]">
                <Image
                  src={recovery.image}
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
              <p className="eyebrow text-forest/70">Recovery</p>
              <h2 className="mt-5 font-display text-ink" style={{ fontSize: 'var(--text-title)' }}>
                {recovery.title}
              </h2>
              <p className="measure mt-6 leading-relaxed text-ink/75">{recovery.body}</p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1}>
          <LedgerFill className="mt-14 h-3 text-ink/20" dense />
          <ol className="grid gap-x-8 gap-y-8 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {recovery.markers.map((marker, i) => (
              <li key={marker.time} className="flex flex-col">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-forest/60">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="mt-3 font-display text-3xl text-ink">{marker.time}</span>
                <span className="mt-2 text-sm text-ink/65">{marker.note}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
