import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { CtaBand } from '@/components/CtaBand';
import { Faq } from '@/components/Faq';
import {
  Aftercare,
  Consultation,
  InsuranceBlock,
  Preparing,
  ProcedureWalkthrough,
} from '@/components/patient-sections';
import { patientPage } from '@/lib/pages';

export const metadata: Metadata = {
  title: 'Patient Information | No Scalpel Vasectomy Explained',
  description:
    'What happens on the day of your vasectomy, how to prepare, what recovery looks like, and answers to the questions men actually ask.',
};

export default function PatientInformationRoute() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow={patientPage.eyebrow}
          titleLines={patientPage.titleLines}
          lede={patientPage.lede}
          image="/images/gen-procedure-room.jpg"
          imageMobile="/images/gen-waiting-corner.jpg"
          imageAlt="A procedure room at the Melbourne Vasectomy Centre"
        />
        <Consultation />
        <ProcedureWalkthrough />
        <Preparing />
        <Aftercare />
        <InsuranceBlock />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
