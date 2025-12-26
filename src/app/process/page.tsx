import { Navbar } from '../components/Navbar';
import { Process } from '../components/Process';
import { Footer } from '../components/Footer';

export default function ProcessPage() {
  return (
    <div className='size-full'>
      <Navbar />
      <Process />
      <Footer />
    </div>
  );
}
