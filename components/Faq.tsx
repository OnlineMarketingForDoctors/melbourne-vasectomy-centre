'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { faqs } from '@/lib/content';
import { Reveal } from './primitives';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow text-teal">Questions</p>
              <h2
                className="mt-5 font-display text-ink lg:sticky lg:top-28"
                style={{ fontSize: 'var(--text-display)' }}
              >
                The things men actually ask
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={0.06}>
              <ul>
                {faqs.map((faq, i) => {
                  const isOpen = open === i;
                  return (
                    <li key={faq.q} className="border-t border-ink/12 last:border-b">
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex w-full items-start justify-between gap-6 py-5 text-left"
                      >
                        <span
                          className={`text-[1.05rem] transition-colors duration-300 md:text-lg ${
                            isOpen ? 'text-forest' : 'text-ink/80'
                          }`}
                        >
                          {faq.q}
                        </span>
                        <span
                          className={`relative mt-2 block h-3 w-3 shrink-0 transition-transform duration-400 ${
                            isOpen ? 'rotate-45' : ''
                          }`}
                          aria-hidden
                        >
                          <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-coral" />
                          <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-coral" />
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="measure pb-6 leading-relaxed text-ink/70">{faq.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
