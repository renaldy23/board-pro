'use client';

import { useSignUp } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

export const useRegister = () => {
  const { signUp } = useSignUp();
  const [payload, setPayload] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setPayload({ ...payload, [name]: value });
  };

  const handleSignUp: React.MouseEventHandler<HTMLButtonElement> = async () => {
    setIsLoading(true);

    if (payload.password !== payload.confirm_password) {
      toast.error("Password doesn't match", {
        duration: 2500,
      });
      setIsLoading(false);
      return;
    }
    try {
      await signUp?.create({
        emailAddress: payload.email,
        firstName: payload.first_name,
        lastName: payload.last_name,
        password: payload.password,
      });

      await signUp?.prepareEmailAddressVerification({ strategy: 'email_code' });
      setIsLoading(false);
      router.replace('/verify');
    } catch (err) {
      setIsLoading(false);
      const stringError = JSON.stringify(err, null, 2);
      const jsonError = JSON.parse(stringError);
      toast.error(jsonError.errors[0].message, {
        duration: 4000,
      });
    }
  };

  return { handleChange, handleSignUp, isLoading };
};
