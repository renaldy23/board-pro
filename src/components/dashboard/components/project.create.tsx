'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import React from 'react';
import { Loader2, PlusIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TextArea } from '@/components/ui/textarea';
import { DatePicker } from '@/components/ui/datepicker';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { useCreateProject } from '../hooks/useCreateProject';

export const ProjectCreate = () => {
  const {
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
  } = useCreateProject();
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <div className="flex h-[300px] w-full flex-col items-center justify-center gap-3 rounded-md border border-slate-200 transition duration-150 hover:shadow-lg">
          <PlusIcon className="text-main-500" size={34} />
          <h3 className="tracking-wide">New Project</h3>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Project</DialogTitle>
          <DialogDescription>
            Inside project you can create stories, issues, invite members and others.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-2 flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <Label text="Project Name" required />
            <Input type="text" rounded="sm" name="name" onChange={handleInput} />
          </div>
          <div className="flex flex-col gap-2">
            <Label text="Description" />
            <TextArea rounded="sm" name="description" onChange={handleInput} />
          </div>
          <div className="flex w-full gap-3">
            <div className="flex w-full flex-col gap-2">
              <Label text="Start Date" required />
              <DatePicker selected={startDate as Date} onSelect={setStartDate} />
            </div>
            <div className="flex w-full flex-col gap-2">
              <Label text="End Date" />
              <DatePicker
                selected={endDate as Date}
                onSelect={setEndDate}
                disabled={isEndDateActive}
              />
              <div className="flex gap-2">
                <Checkbox onClick={handleCheckbox} />
                <Label text="Disable end date" />
              </div>
            </div>
          </div>
          <Button disabled={isLoading} onClick={handleSubmit} variant="main" className="mt-4">
            {isLoading && <Loader2 className="mr-2 animate-spin" />}
            {isLoading ? 'Please Wait' : 'Save'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
