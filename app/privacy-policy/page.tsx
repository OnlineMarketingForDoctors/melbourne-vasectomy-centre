import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { PolicyBody } from '@/components/site-sections';
import { privacyPage } from '@/lib/pages';

export const metadata: Metadata = {
  title: 'Privacy Policy | Melbourne Vasectomy Centre',
  description: 'How the Melbourne Vasectomy Centre collects, stores and handles your personal information.',
};

export default function PrivacyRoute() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow={privacyPage.eyebrow}
          titleLines={privacyPage.titleLines}
          lede={privacyPage.lede}
          image="/images/gen-texture.jpg"
          imageAlt=""
        />
        <PolicyBody />
      </main>
      <Footer />
    </>
  );
}
