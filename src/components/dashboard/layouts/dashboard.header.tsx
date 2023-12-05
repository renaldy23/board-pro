import { Logo } from '@/components/ui/logo';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

export const DashboardHeader = () => {
  return (
    <div className="fixed w-full border-b border-slate-300 bg-white px-20 py-8">
      <div className="flex items-center justify-between">
        <Link href="/dashboard">
          <Logo iconSize={34} textSize="text-2xl" />
        </Link>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};
