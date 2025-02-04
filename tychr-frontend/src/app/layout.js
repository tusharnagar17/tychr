import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tycher',
  description: 'Tycher',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
