import { supabaseClient } from '@/utils/supabase';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import React, { useState } from 'react';

export const useSprint = () => {
  const [payload, setPayload] = useState({
    sprint_name: '',
  });
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { getToken, userId } = useAuth();
  const router = useRouter();

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value, name } = e.target;
    setPayload({ ...payload, [name]: value });
  };

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async () => {
    setIsLoading(true);
    const body = {
      sprint_name: payload.sprint_name,
      start_date: startDate,
      end_date: endDate,
      project_id: JSON.parse(localStorage.getItem('project_id') as string) ?? '',
      user_id: userId,
    };

    const token = await getToken({ template: 'supabase-board-pro' });
    const supabase = await supabaseClient(token as string);
    const result = await supabase.from('sprints').insert({ ...body });

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
    handleInput,
    handleSubmit,
    isLoading,
    isOpen,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    setIsOpen,
  };
};
