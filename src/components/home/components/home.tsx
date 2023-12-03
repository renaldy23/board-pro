import React from 'react';
import { Button } from '@/components/ui/button';
import { HomeHeader } from '../layouts/home.header';

export const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 bg-fixed">
      <HomeHeader />
      <div className="mt-[120px] flex h-[calc(100vh-120px)] justify-center gap-4">
        <div className="flex w-[400px] flex-col pt-28">
          <h1 className="mb-4 text-center text-4xl font-bold">
            Simple and Reliable, Increase Productivity
          </h1>
          <p className="mb-8 text-center text-lg">
            Project management solution with simplicty. Without pain, overwhelming, and tears. Keep
            focus and increasing productivity your works.
          </p>
          <Button variant="main" size="lg" className="text-lg">
            Start work with us!
          </Button>
        </div>
      </div>
    </div>
  );
};
