import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { CtaBand } from '@/components/CtaBand';
import { DoctorProfile, ApproachGrid, AboutIntro } from '@/components/about-sections';
import { aboutPage } from '@/lib/pages';

export const metadata: Metadata = {
  title: 'About | Melbourne Vasectomy Centre',
  description:
    'Dr Geoff Cashion and Dr Matt Valentine perform no scalpel vasectomy at the Melbourne Vasectomy Centre in Prahran.',
};

export default function AboutRoute() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow={aboutPage.eyebrow}
          titleLines={aboutPage.titleLines}
          lede={aboutPage.lede}
          image="/images/gen-duo-bench.jpg"
          imageMobile="/images/gen-duo-vertical.jpg"
          imageAlt="Dr Geoff Cashion and Dr Matt Valentine reviewing instruments together"
          mirror
        />
        <AboutIntro />
        {aboutPage.doctors.map((doctor, i) => (
          <DoctorProfile key={doctor.id} doctor={doctor} index={i} />
        ))}
        <ApproachGrid />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
