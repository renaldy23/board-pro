import React from 'react';
import { Toaster } from 'react-hot-toast';
import { ClerkContext } from './clerk';

export const AppContext = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkContext>
      {children}
      <Toaster />
    </ClerkContext>
  );
};
