'use client';

import { ledger } from '@/lib/content';
import { Counter, LedgerFill, Reveal } from './primitives';

/**
 * The caseload ledger. Volume is the whole positioning, so the page states it
 * once, plainly, in the register of a surgical logbook rather than a stat grid.
 */
export function Ledger() {
  return (
    <section className="relative bg-forest-deep pb-20 pt-4 md:pb-28" aria-label="Practice at a glance">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <LedgerFill className="h-3 text-mint/45" dense />

        <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {ledger.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.09}>
              <div className="flex h-full flex-col">
                <Counter
                  value={item.value}
                  suffix={item.suffix}
                  className="font-display text-[clamp(3rem,5.4vw,4.75rem)] leading-none text-paper"
                />
                <p className="mt-4 text-sm font-medium text-mint">{item.label}</p>
                <p className="mt-1.5 text-sm text-paper/50">{item.note}</p>
                <LedgerFill className="mt-6 h-2.5 text-paper/22" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
