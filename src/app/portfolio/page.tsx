import { Navbar } from '../components/Navbar';
import { Portfolio } from '../components/Portfolio';
import { BeforeAfter } from '../components/BeforeAfter';
import { Footer } from '../components/Footer';

export default function PortfolioPage() {
  return (
    <div className='size-full'>
      <Navbar />
      <Portfolio />
      <BeforeAfter />
      <Footer />
    </div>
  );
}
