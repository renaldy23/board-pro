import { useSignUp } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

export const useVerify = () => {
  const [code, setCode] = useState('');
  const { signUp, setActive } = useSignUp();
  const router = useRouter();

  const handleChange = (val: string) => {
    setCode(val);
  };

  const handleSubmit = async () => {
    try {
      const completeSignUp = await signUp?.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp !== undefined) {
        if (completeSignUp.status !== 'complete') {
          const strErr = JSON.stringify(completeSignUp, null, 2);
          const jsonErr = JSON.parse(strErr);
          toast.error(jsonErr.errors[0].longMessage, {
            duration: 4000,
          });
        }
        if (completeSignUp.status === 'complete') {
          await setActive!({ session: completeSignUp.createdSessionId });
          router.push('/dashboard');
        }
      }
    } catch (err: any) {
      const strErr = JSON.stringify(err, null, 2);
      const jsonErr = JSON.parse(strErr);
      toast.error(jsonErr.errors[0].longMessage, {
        duration: 4000,
      });
    }
  };

  return { handleChange, handleSubmit };
};
