import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import React from 'react';

export const BacklogContent = () => {
  return (
    <div className="flex h-[450px] w-[calc(908px-250px)] flex-col gap-4 rounded-md bg-slate-50 p-4">
      Sprint backlog
      <div className="flex flex-col gap-4 overflow-y-auto">
        <div className="flex cursor-pointer justify-between rounded bg-white px-4 py-2 text-sm hover:bg-slate-100">
          <div className="flex flex-col gap-1">
            <h4>Backlog 1</h4>
            <p className="text-sm text-slate-400">This backlog isn&apos;t linked to any issues</p>
          </div>
        </div>
      </div>
      <Button variant="ghost" className="w-min">
        <Plus size={18} className="mr-2" />
        Create Backlog
      </Button>
    </div>
  );
};
