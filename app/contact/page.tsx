import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { CtaBand } from '@/components/CtaBand';
import { MapAndAddress } from '@/components/site-sections';
import { contactPage } from '@/lib/pages';

export const metadata: Metadata = {
  title: 'Contact Us | Melbourne Vasectomy Centre',
  description:
    'Call 1800 SNIPME, email the clinic, or book online. Free phone consultations available before you book.',
};

export default function ContactRoute() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow={contactPage.eyebrow}
          titleLines={contactPage.titleLines}
          lede={contactPage.lede}
          image="/images/gen-reception-detail.jpg"
          imageMobile="/images/gen-waiting-corner.jpg"
          imageAlt="The reception desk at the Melbourne Vasectomy Centre"
        />
        <MapAndAddress />
        <CtaBand title="Still deciding?" body="A free phone consultation with your doctor costs nothing and takes ten minutes. No referral needed." />
      </main>
      <Footer />
    </>
  );
}
