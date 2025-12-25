import type { Metadata } from 'next';
import '../styles/index.css';

export const metadata: Metadata = {
  title: 'Interior Design Portfolio',
  description: 'Professional interior design portfolio'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
