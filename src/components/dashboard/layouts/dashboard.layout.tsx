import React from 'react';
import { DashboardHeader } from './dashboard.header';

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen bg-fixed">
      <DashboardHeader />
      <div className="pt-[98.8px]">{children}</div>
    </div>
  );
};
