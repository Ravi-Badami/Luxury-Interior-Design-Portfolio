import type { Metadata } from 'next';
import '../styles/index.css';

export const metadata: Metadata = {
  title: 'Luxe Interiors - Luxury Interior Design Portfolio',
  description:
    'Transforming spaces into extraordinary experiences. Luxury interior design services for discerning clients.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='antialiased'>{children}</body>
    </html>
  );
}
