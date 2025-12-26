import { Navbar } from '../components/Navbar';
import { Services } from '../components/Services';
import { Footer } from '../components/Footer';

export default function ServicesPage() {
  return (
    <div className='size-full'>
      <Navbar />
      <Services />
      <Footer />
    </div>
  );
}
