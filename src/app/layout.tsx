import type { Metadata } from 'next';
import { Suspense } from 'react';
import '../styles/index.css';
import { ScrollToTop } from './components/ScrollToTop';

export const metadata: Metadata = {
  title: 'Luxe Interiors - Luxury Interior Design Portfolio',
  description:
    'Transforming spaces into extraordinary experiences. Luxury interior design services for discerning clients.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='antialiased'>
        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
