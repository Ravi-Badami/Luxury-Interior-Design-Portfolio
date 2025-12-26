import { Navbar } from '../components/Navbar';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export default function ContactPage() {
  return (
    <div className='size-full'>
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
}
