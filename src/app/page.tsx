import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Philosophy } from './components/Philosophy';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <div className='size-full'>
      <Navbar />
      <Hero />
      <Stats />
      <Philosophy />
      <CTA />
      <Footer />
    </div>
  );
}
