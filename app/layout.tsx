import './globals.css';
import type { Metadata } from 'next';
import { Inter, Fira_Sans } from 'next/font/google';
import CustomCursor from '@/components/ui/CustomCursor';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const fira = Fira_Sans({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-fira' });

export const metadata: Metadata = {
  title: 'Shivasish Mahapatra - Product Manager | AI Strategist',
  description: 'Product Manager with 3+ years experience transforming AI-driven insights into scalable products. Specializing in AI strategy, business consulting, and product leadership.',
  keywords: 'Product Manager, AI Strategist, Business Consultant, Machine Learning, Product Strategy',
  authors: [{ name: 'Shivasish Mahapatra' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${fira.variable}`}>
      <body className="antialiased font-sans bg-gradient-to-br from-blue-50 via-white to-teal-50 min-h-screen">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}