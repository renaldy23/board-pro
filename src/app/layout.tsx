import '@/styles/globals.css';
import { twMerge } from 'tailwind-merge';

import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';

const rubik = Rubik({ weight: ['400', '500', '600'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nextjs Tailwindcss Starter',
  description: 'Generated for personal use - @indrazm',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={twMerge(rubik.className)}>{children}</body>
    </html>
  );
}
