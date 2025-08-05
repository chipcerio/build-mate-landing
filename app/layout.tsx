import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "PickAxe DH - Making a difference to people's lives",
  description: 'Creating a way to connect people ready to work, with people who need work done',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} ${inter.variable}`}>{children}</body>
    </html>
  );
}
