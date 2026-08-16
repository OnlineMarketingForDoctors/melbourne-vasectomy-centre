import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { CtaBand } from '@/components/CtaBand';
import { LocationList, MapAndAddress } from '@/components/site-sections';
import { locationsPage } from '@/lib/pages';

export const metadata: Metadata = {
  title: 'Locations | Melbourne Vasectomy Centre',
  description:
    'Our main clinic is on Commercial Road in Prahran, with satellite clinics in Clyde, Geelong, Ballarat and Gladstone Park.',
};

export default function LocationsRoute() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow={locationsPage.eyebrow}
          titleLines={locationsPage.titleLines}
          lede={locationsPage.lede}
          image="/images/gen-clinic-exterior.jpg"
          imageMobile="/images/gen-entrance.jpg"
          imageAlt="The clinic building on Commercial Road, Prahran"
        />
        <MapAndAddress />
        <LocationList />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
