import type { Metadata, Viewport } from 'next';
import { Fraunces, Instrument_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
  axes: ['SOFT', 'WONK', 'opsz'],
});

const instrument = Instrument_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  variable: '--font-mono-face',
});

// Pre-launch: the site must not be indexed. See CLAUDE.md.
// The X-Robots-Tag header in next.config.mjs is the authoritative layer.
export const metadata: Metadata = {
  title: 'Melbourne Vasectomy Centre | No Scalpel Vasectomy | $597 Out Of Pocket',
  description:
    'No scalpel vasectomy in Melbourne with two of Australia’s most experienced vasectomists. Local anaesthetic, about 15 minutes, $597 out of pocket. Free phone consultations and online bookings.',
  robots: { index: false, follow: false, nocache: true },
};

export const viewport: Viewport = {
  themeColor: '#163130',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${fraunces.variable} ${instrument.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
