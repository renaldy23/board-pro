'use client';

import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { ArrowRightCircle } from 'lucide-react';

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
      className="fixed flex w-full items-center justify-between  px-20 py-10 transition-all duration-100"
    >
      <Logo iconSize={34} textSize="text-2xl" />
      <div className="flex gap-7">
        <Link href="/">Solutions</Link>
        <Link href="/">Documentation</Link>
        <Link href="/">Pricing</Link>
      </div>
      <Link href="/login">
        <Button variant="main">
          Sign In <ArrowRightCircle className="ml-2" />
        </Button>
      </Link>
    </div>
  );
};
