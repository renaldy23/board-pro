import { UserButton } from '@clerk/nextjs';
import React from 'react';

export const DashboardPage = () => {
  return (
    <div>
      DashboardPage <UserButton afterSignOutUrl="/login" />
    </div>
  );
};
