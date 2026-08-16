import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { CtaBand } from '@/components/CtaBand';
import { FeeLedger, MedicareClaim } from '@/components/site-sections';
import { InsuranceBlock } from '@/components/patient-sections';
import { feesPage } from '@/lib/pages';

export const metadata: Metadata = {
  title: 'Vasectomy Fees | $597 Out Of Pocket | Melbourne Vasectomy Centre',
  description:
    'A no scalpel vasectomy is $830 with a $233 Medicare rebate, leaving $597 out of pocket. One fee, quoted up front.',
};

export default function FeesRoute() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow={feesPage.eyebrow}
          titleLines={feesPage.titleLines}
          lede={feesPage.lede}
          image="/images/gen-desk-detail.jpg"
          imageAlt="A consulting room desk at the Melbourne Vasectomy Centre"
        />
        <FeeLedger />
        <MedicareClaim />
        <InsuranceBlock />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
