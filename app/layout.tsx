import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}