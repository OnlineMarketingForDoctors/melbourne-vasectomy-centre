import Image from 'next/image';
import { clinic, nav } from '@/lib/content';

export function Footer() {
  return (
    <footer className="bg-forest text-paper">
      <div className="mx-auto max-w-[1440px] px-4 py-14 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <Image src="/images/logo-mark.png" alt="" width={205} height={256} className="h-9 w-auto" />
              <span className="font-display text-base leading-[1.05] tracking-tight">
                Melbourne
                <br />
                Vasectomy Centre
              </span>
            </div>
            <p className="measure mt-6 text-sm leading-relaxed text-paper/60">
              No scalpel vasectomy under local anaesthetic, performed by two of the most experienced
              vasectomists in Australia.
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Footer">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mint">Explore</p>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-paper/70 transition-colors hover:text-mint">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mint">Contact</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={clinic.phoneHref} className="text-paper/70 transition-colors hover:text-mint">
                  {clinic.phoneLabel} ({clinic.phoneDigits})
                </a>
              </li>
              <li>
                <a href={`mailto:${clinic.email}`} className="text-paper/70 transition-colors hover:text-mint">
                  {clinic.email}
                </a>
              </li>
            </ul>
            <a
              href={clinic.bookingHref}
              className="mt-7 inline-flex rounded-full bg-coral px-6 py-3 text-sm font-medium text-forest-deep transition-colors hover:bg-[#ff8a70]"
            >
              Book online
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-paper/15 pt-7">
          <p className="text-xs text-paper/45">
            © {new Date().getFullYear()} {clinic.name}. All rights reserved.
          </p>
          <p className="text-xs text-paper/45">
            Vasectomy is a permanent form of contraception. Talk to your doctor about whether it is right for you.
          </p>
        </div>
      </div>
    </footer>
  );
}
