import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="size-full">
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <Process />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
