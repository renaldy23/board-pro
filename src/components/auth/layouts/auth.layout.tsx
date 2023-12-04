import React from 'react';
import { Logo } from '@/components/ui/logo';

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="from-main-100 to-main-200 flex min-h-screen flex-col items-center justify-center bg-gradient-to-tr via-blue-100">
      <Logo iconSize={30} textSize="text-xl" className="mb-4" />
      {children}
    </div>
  );
};
