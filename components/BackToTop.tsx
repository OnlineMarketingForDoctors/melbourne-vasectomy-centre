'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * Appears once the page has scrolled far enough that the header is well out of
 * reach. Sits below the nav's z-index so the mobile menu covers it.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={toTop}
          aria-label="Back to top"
          title="Back to top"
          className="group fixed bottom-5 right-5 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-paper/20 bg-forest-deep/90 text-paper shadow-lg shadow-forest-deep/30 backdrop-blur-md transition-colors duration-300 hover:border-mint hover:bg-forest hover:text-mint md:bottom-8 md:right-8 md:h-14 md:w-14"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <svg width="16" height="18" viewBox="0 0 16 18" fill="none" aria-hidden>
            <path
              d="M8 17V1M1 8l7-7 7 7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="square"
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
