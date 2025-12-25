import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Philosophy } from './components/Philosophy';
import { Portfolio } from './components/Portfolio';
import { BeforeAfter } from './components/BeforeAfter';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { Team } from './components/Team';
import { Awards } from './components/Awards';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Partners } from './components/Partners';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="size-full">
      <Navbar />
      <Hero />
      <Stats />
      <Philosophy />
      <Portfolio />
      <BeforeAfter />
      <Services />
      <Process />
      <Pricing />
      <About />
      <Team />
      <Awards />
      <Testimonials />
      <FAQ />
      <Partners />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}