'use client';

import { Button } from '@/components/ui/button';
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import VerificationInput from 'react-verification-input';
import { useVerify } from '../hooks/useVerify';

export const AuthVerify = () => {
  const { handleChange, handleSubmit } = useVerify();
  return (
    <div className="flex w-[450px] flex-col items-center gap-6">
      <div className="w-full rounded-md border border-zinc-200 bg-white p-7 shadow-sm">
        <h1 className="text-lg font-semibold">Verify Account</h1>
        <p className="text-zinc-400">We've send you a verification code to your email.</p>
        <div className="mt-4">
          <VerificationInput
            classNames={{
              character: 'border border-none bg-secondary rounded-md',
              characterSelected: 'outline-main-500 text-main-500',
            }}
            length={6}
            autoFocus
            onChange={handleChange}
          />
        </div>
        <Button onClick={handleSubmit} className="mt-4" variant="main">
          Verify
        </Button>
      </div>
    </div>
  );
};
