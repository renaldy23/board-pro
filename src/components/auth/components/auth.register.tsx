'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import React from 'react';
import { Loader2 } from 'lucide-react';
import { useRegister } from '../hooks/useRegister';

export const AuthRegister = () => {
  const { handleChange, handleSignUp, isLoading } = useRegister();

  return (
    <div className="flex w-[450px] flex-col items-center gap-6">
      <div className="w-full rounded-md border border-zinc-200 bg-white p-7 shadow-sm">
        <h1 className="text-lg font-semibold">Sign Up</h1>
        <p className="text-zinc-400">Please register to our platform to use our solutions.</p>
        <div className="mt-5 flex flex-col gap-4">
          <div className="flex gap-3">
            <div className="flex flex-col gap-2">
              <Label text="First Name" />
              <Input
                name="first_name"
                rounded="sm"
                type="text"
                placeholder="John"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label text="Last Name" />
              <Input
                name="last_name"
                rounded="sm"
                type="text"
                placeholder="Doe"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label text="Email Address" />
            <Input
              name="email"
              rounded="sm"
              type="email"
              placeholder="example@company.com"
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-3">
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
            <div className="flex flex-col gap-2">
              <Label text="Confirm Password" />
              <Input
                name="confirm_password"
                rounded="sm"
                type="password"
                placeholder="******"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <Button disabled={isLoading} onClick={handleSignUp} variant="main" className="mt-4">
          {isLoading && <Loader2 className="mr-2 animate-spin" />}
          {isLoading ? 'Please Wait' : 'Register'}
        </Button>
      </div>
      <span className="flex">
        <p>Already have an account ?&nbsp;</p>
        <Link href="login" className="text-main-800 font-semibold underline">
          Sign In
        </Link>
      </span>
    </div>
  );
};
