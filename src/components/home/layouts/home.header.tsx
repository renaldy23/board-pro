'use client';

import { Button } from '@/components/ui/button';
import { ArrowRightCircle, AlignEndVertical } from 'lucide-react';

import Link from 'next/link';
import React, { useEffect } from 'react';

export const HomeHeader = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const header = document.getElementById('header');
      if (header) {
        const scrolled = window.top?.scrollY as number;

        if (scrolled > 50) {
          header.classList.add('scroll-header');
        } else {
          header.classList.remove('scroll-header');
        }
      }
    });

    return () => {};
  }, []);

  return (
    <div
      id="header"
      className="fixed flex w-full items-center justify-between bg-slate-50 px-20 py-10 transition-all duration-100"
    >
      <div className="flex items-center gap-2">
        <AlignEndVertical size={34} />
        <span className="flex text-2xl">
          <h1 className="font-medium">Board</h1>
          <h1 className="text-zinc-600">Pro</h1>
        </span>
      </div>
      <div className="flex gap-7">
        <Link href="/">Solutions</Link>
        <Link href="/">Documentation</Link>
        <Link href="/">Pricing</Link>
      </div>
      <Button variant="main">
        Sign In <ArrowRightCircle className="ml-2" />
      </Button>
    </div>
  );
};
