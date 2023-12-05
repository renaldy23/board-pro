import { Button } from '@/components/ui/button';
import { sprintAtom } from '@/context/jotai/sprint.jotai';
import { supabaseClient } from '@/utils/supabase';
import { useAuth } from '@clerk/nextjs';
import { useAtom } from 'jotai/react';
import React, { useEffect } from 'react';

export const SprintPanel = () => {
  const { getToken } = useAuth();
  const [sprints, setSprints] = useAtom(sprintAtom);
  useEffect(() => {
    const projectId = localStorage.getItem('project_id') ?? null;
    if (projectId) {
      const result = async () => {
        const token = await getToken({ template: 'supabase-board-pro' });
        const supabase = await supabaseClient(token as string);
        const { data } = await supabase.from('sprints').select('*');
        setSprints(data as SprintInterface[]);
      };
      result();
    }

    return () => {};
  }, [getToken]);

  return (
    <div className="flex h-[450px] w-[250px] flex-col gap-4 rounded-md bg-slate-50 p-4">
      <h3>Sprints</h3>
      <div className="flex h-full flex-col gap-2 overflow-y-auto">
        {sprints.length === 0 ? (
          <p className="text-sm">No Sprint Created!</p>
        ) : (
          sprints.map((sprint) => {
            return <p key={sprint.uuid}>{sprint.sprint_name}</p>;
          })
        )}
      </div>
      <Button variant="main">Add Sprint</Button>
    </div>
  );
};
