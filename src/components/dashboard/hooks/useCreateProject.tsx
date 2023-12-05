import { useState } from 'react';
import { useAuth } from '@clerk/nextjs';
import { supabaseClient } from '@/utils/supabase';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export const useCreateProject = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [isEndDateActive, setIsEndDateActive] = useState<boolean>(false);
  const { userId, getToken } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [payload, setPayload] = useState({
    name: '',
    description: '',
  });
  const router = useRouter();

  const handleCheckbox: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const state = e.currentTarget.getAttribute('data-state');
    if (state === 'unchecked') {
      setIsEndDateActive(true);
      setEndDate(undefined);
    } else {
      setIsEndDateActive(false);
    }
  };

  const handleInput: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    const { value, name } = e.target;
    setPayload({ ...payload, [name]: value });
  };

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async () => {
    setIsLoading(true);
    const body = {
      name: payload.name,
      description: payload.description,
      start_date: startDate,
      end_date: endDate !== undefined ? endDate : null,
      user_id: userId,
    };
    const token = await getToken({
      template: 'supabase-board-pro',
    });

    const supabase = await supabaseClient(token as string);
    const result = await supabase.from('projects').insert({
      name: body.name,
      description: body.description,
      start_date: body.start_date,
      end_date: body.end_date,
      user_id: body.user_id,
    });

    if (result.status === 201) {
      setIsLoading(false);
      setIsOpen(false);
      toast.success('Success creating data', {
        duration: 1000,
      });
      router.refresh();
    } else {
      setIsLoading(false);
      toast.error('Failed creating data', {
        duration: 1000,
      });
    }
  };

  return {
    isOpen,
    setIsOpen,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    isEndDateActive,
    handleCheckbox,
    handleSubmit,
    handleInput,
    isLoading,
  };
};
