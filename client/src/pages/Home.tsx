import PageSplash from '@/components/PageSplash';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Platforms from '@/components/sections/Platforms';
import Testimonials from '@/components/sections/Testimonials';
import IncomeChart from '@/components/sections/IncomeChart';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import BrandBanner from '@/components/sections/BrandBanner';

export default function Home() {
  return (
    <>
      <PageSplash />
      <Navbar />
      <main>
        <Hero />
        <BrandBanner />
        <Stats />
        <About />
        <Services />
        <Process />
        <Platforms />
        <Testimonials />
        <IncomeChart />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
