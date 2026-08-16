'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { clinic, nav } from '@/lib/content';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-forest-deep/92 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 md:px-8 md:py-5">
          <Link href="/" className="flex items-center gap-3" aria-label={`${clinic.name} home`}>
            <Image src="/images/logo-mark.png" alt="" width={205} height={256} className="h-8 w-auto md:h-9" priority />
            <span className="font-display text-[15px] leading-[1.05] tracking-tight text-paper md:text-base">
              Melbourne
              <br />
              Vasectomy Centre
            </span>
          </Link>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-paper/75 transition-colors duration-200 hover:text-mint"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={clinic.phoneHref}
              className="hidden font-mono text-xs tracking-wide text-paper/75 transition-colors hover:text-mint md:block"
            >
              {clinic.phoneLabel}
            </a>
            <a
              href={clinic.bookingHref}
              className="hidden rounded-full bg-coral px-5 py-2.5 text-sm font-medium text-forest-deep transition-colors duration-300 hover:bg-[#ff8a70] sm:block"
            >
              Book online
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/25 lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 block h-px w-4 bg-paper transition-all duration-300 ${
                    open ? 'top-1.5 rotate-45' : 'top-0'
                  }`}
                />
                <span
                  className={`absolute left-0 block h-px w-4 bg-paper transition-all duration-300 ${
                    open ? 'top-1.5 -rotate-45' : 'top-3'
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-forest-deep px-5 pt-24 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
          >
            <nav className="flex flex-col" aria-label="Mobile">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-paper/12 py-5 font-display text-3xl text-paper"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 + i * 0.05, duration: 0.5 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-10 flex flex-col gap-4">
              <a
                href={clinic.bookingHref}
                onClick={() => setOpen(false)}
                className="rounded-full bg-coral px-6 py-4 text-center font-medium text-forest-deep"
              >
                Book online
              </a>
              <a href={clinic.phoneHref} className="text-center font-mono text-sm text-paper/70">
                {clinic.phoneLabel} ({clinic.phoneDigits})
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
