'use client';

/* eslint-disable react/no-unescaped-entities */
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import React from 'react';
import { Loader2 } from 'lucide-react';
import { useLogin } from '../hooks/useLogin';

export const AuthLogin = () => {
  const { handleChange, handleSignIn, isLoading } = useLogin();
  return (
    <div className="flex w-[450px] flex-col items-center gap-6">
      <div className="w-full rounded-md border border-zinc-200 bg-white p-7 shadow-sm">
        <h1 className="text-lg font-semibold">Sign In</h1>
        <p className="text-zinc-400">Please login first to continue to your workspaces</p>
        <div className="mt-5 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label text="Email Address" />
            <Input
              name="email"
              rounded="sm"
              type="text"
              placeholder="example@company.com"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label text="Password" />
            <Input
              name="password"
              rounded="sm"
              type="password"
              placeholder="******"
              onChange={handleChange}
            />
          </div>
        </div>
        <Button disabled={isLoading} onClick={handleSignIn} variant="main" className="mt-4">
          {isLoading && <Loader2 className="mr-2 animate-spin" />}
          {isLoading ? 'Please Wait' : 'Login'}
        </Button>
      </div>
      <span className="flex">
        <p>Doesn't have account ?&nbsp;</p>
        <Link href="register" className="font-semibold text-main-800 underline">
          Sign Up
        </Link>
      </span>
    </div>
  );
};
