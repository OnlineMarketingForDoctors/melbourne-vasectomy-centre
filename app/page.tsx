import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Ledger } from '@/components/Ledger';
import { Doctors } from '@/components/Doctors';
import { Pillars } from '@/components/Pillars';
import { Procedure } from '@/components/Procedure';
import { Recovery } from '@/components/Recovery';
import { WhyChoose } from '@/components/WhyChoose';
import { Fees } from '@/components/Fees';
import { Reviews } from '@/components/Reviews';
import { Faq } from '@/components/Faq';
import { Closing } from '@/components/Closing';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ledger />
        <Doctors />
        <Pillars />
        <Procedure />
        <Recovery />
        <WhyChoose />
        <Fees />
        <Reviews />
        <Faq />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
