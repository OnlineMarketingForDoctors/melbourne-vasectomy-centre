import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { CtaBand } from '@/components/CtaBand';
import { BookingPanel, LocationList } from '@/components/site-sections';
import { bookPage } from '@/lib/pages';

export const metadata: Metadata = {
  title: 'Book Online | Melbourne Vasectomy Centre',
  description:
    'Book your no scalpel vasectomy online at any of our Victorian clinics. Consultation and procedure usually within 48 hours.',
};

export default function BookOnlineRoute() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow={bookPage.eyebrow}
          titleLines={bookPage.titleLines}
          lede={bookPage.lede}
          image="/images/gen-entrance.jpg"
          imageAlt="The entrance to the Melbourne Vasectomy Centre"
        />
        <BookingPanel />
        <LocationList />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
