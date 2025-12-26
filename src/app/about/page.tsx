import { Navbar } from '../components/Navbar';
import { About } from '../components/About';
import { Team } from '../components/Team';
import { Awards } from '../components/Awards';
import { Testimonials } from '../components/Testimonials';
import { Footer } from '../components/Footer';

export default function AboutPage() {
  return (
    <div className='size-full'>
      <Navbar />
      <About />
      <Team />
      <Awards />
      <Testimonials />
      <Footer />
    </div>
  );
}
