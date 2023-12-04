'use client';

import { useSignIn } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

export const useLogin = () => {
  const [payload, setPayload] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const { signIn, setActive } = useSignIn();
  const router = useRouter();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setPayload({ ...payload, [name]: value });
  };

  const handleSignIn: React.MouseEventHandler<HTMLButtonElement> = async () => {
    setIsLoading(true);
    try {
      const result = await signIn?.create({
        identifier: payload.email,
        password: payload.password,
      });

      if (result !== undefined) {
        if (result.status === 'complete') {
          await setActive!({ session: result?.createdSessionId });
          router.push('/dashboard');
        }
      }

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      const stringError = JSON.stringify(err, null, 2);
      const jsonError = JSON.parse(stringError);
      toast.error(jsonError.errors[0].message, {
        duration: 4000,
      });
    }
  };

  return { handleChange, handleSignIn, isLoading };
};
