import '@/styles/globals.css';
import { twMerge } from 'tailwind-merge';

import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import { AppContext } from '@/context/provider/app';

const rubik = Rubik({ weight: ['400', '500', '600'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Board Pro',
  description: 'Project Management Tool',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={twMerge(rubik.className)}>
        <AppContext>{children}</AppContext>
      </body>
    </html>
  );
}
