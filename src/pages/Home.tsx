import Hero from '../components/home/Hero';
import ServicesPreview from '../components/home/ServicesPreview';
import PrintTechniques from '../components/home/PrintTechniques';
import ReferencesSection from '../components/home/ReferencesSection';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <PrintTechniques />
      <ReferencesSection />
      <CTASection />
    </>
  );
}
