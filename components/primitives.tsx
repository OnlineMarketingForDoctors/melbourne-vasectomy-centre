'use client';

import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionProps,
} from 'framer-motion';
import { useEffect, useRef, useState, type ReactNode } from 'react';

const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
  as = 'div',
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'figure' | 'span';
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as] as React.ComponentType<MotionProps & { className?: string }>;

  return (
    <Tag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
      transition={{ duration: 0.85, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
}

/** Words rise into place from behind a mask. Used once, on the hero. */
export function MaskedLines({
  lines,
  className,
  lineClassName,
  delay = 0,
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={line} className="block overflow-hidden pb-[0.06em]">
          <motion.span
            className={`block ${lineClassName ?? ''}`}
            initial={reduce ? { opacity: 0 } : { y: '105%' }}
            animate={reduce ? { opacity: 1 } : { y: '0%' }}
            transition={{ duration: 1.05, delay: delay + i * 0.09, ease: EASE }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function Counter({
  value,
  suffix = '',
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });
  const reduce = useReducedMotion();
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1600, bounce: 0 });
  const rounded = useTransform(spring, (v) => Math.round(v).toLocaleString('en-AU'));
  const [text, setText] = useState('0');

  useEffect(() => {
    if (reduce) {
      setText(value.toLocaleString('en-AU'));
      return;
    }
    if (inView) mv.set(value);
  }, [inView, mv, value, reduce]);

  useEffect(() => rounded.on('change', (v) => setText(v)), [rounded]);

  return (
    <span ref={ref} className={className}>
      {text}
      {suffix}
    </span>
  );
}

/**
 * The caseload ledger: a row of hairline tally marks that fills left to right
 * as it enters view. Density is the point, so the marks stay hairline thin.
 */
export function LedgerFill({ className = '', dense = false }: { className?: string; dense?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  const reduce = useReducedMotion();

  return (
    <div ref={ref} className={`overflow-hidden ${className}`} aria-hidden>
      <motion.div
        className={`h-full w-full ${dense ? 'ledger-dense' : 'ledger-rule'}`}
        initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : undefined}
        style={{ transformOrigin: 'left' }}
        transition={{ duration: 1.6, ease: EASE }}
      />
    </div>
  );
}

export function ArrowCta({
  href,
  children,
  tone = 'coral',
  className = '',
}: {
  href: string;
  children: ReactNode;
  tone?: 'coral' | 'forest' | 'paper';
  className?: string;
}) {
  const tones = {
    coral: 'bg-coral text-forest-deep hover:bg-[#ff8a70]',
    forest: 'bg-forest text-paper hover:bg-forest-deep',
    paper: 'bg-paper text-forest-deep hover:bg-white',
  };

  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-medium tracking-wide transition-colors duration-300 ${tones[tone]} ${className}`}
    >
      {children}
      <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden className="shrink-0">
        <path
          d="M0 5h14M10 1l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.4"
          className="origin-left transition-transform duration-300 group-hover:translate-x-1"
        />
      </svg>
    </a>
  );
}
