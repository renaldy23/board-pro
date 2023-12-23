'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DatePicker } from '@/components/ui/datepicker';
import { Loader2 } from 'lucide-react';
import { useSprint } from '../hooks/useSprint';

export const SprintCreate = () => {
  const {
    handleInput,
    handleSubmit,
    isLoading,
    isOpen,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    setIsOpen,
  } = useSprint();
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="main">Add Sprint</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Sprint</DialogTitle>
          <DialogDescription>
            Short time period for team member to reach project goal.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-2 flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <Label text="Sprint Name" required />
            <Input type="text" rounded="sm" name="sprint_name" onChange={handleInput} />
          </div>
          <div className="flex flex-col gap-2">
            <Label text="Start Date" required />
            <DatePicker selected={startDate as Date} onSelect={setStartDate} />
          </div>
          <div className="flex flex-col gap-2">
            <Label text="End Date" required />
            <DatePicker selected={endDate as Date} onSelect={setEndDate} />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit} type="submit" variant="main" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 animate-spin" />}
            {isLoading ? 'Please Wait' : 'Save'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
