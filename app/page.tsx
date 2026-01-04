import Hero from '@/components/Hero';
import Welcome from '@/components/Welcome';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="mx-auto w-full overflow-x-hidden">
      <Hero />
      <Welcome />
      <Services />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
