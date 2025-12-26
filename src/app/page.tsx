'use client';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Philosophy } from './components/Philosophy';
import { Services } from './components/Services';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';

export default function Home() {
  return (
    <div className='size-full'>
      <Navbar />

      {/* 1. The Hook */}
      <Hero />

      {/* 2. Authority (Quickly establish you are legit) */}
      <Stats />

      {/* 3. The "What" (Overview of offers) */}
      <Services />

      {/* 4. The "Proof" (The most important visual section) */}
      <Portfolio />

      {/* 5. The "How" (Reduces fear of hiring you) */}
      <Process />

      {/* 6. The "Why" (Emotional connection) */}
      <Philosophy />

      {/* 7. The Trust (Other people love you) */}
      <Testimonials />

      {/* 8. The Close */}
      <CTA />

      <Footer />
    </div>
  );
}
