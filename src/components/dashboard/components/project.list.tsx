import { projectIdAtom } from '@/context/jotai/project.jotai';
import { useSetAtom } from 'jotai/react';
import { useRouter } from 'next/navigation';
import React from 'react';

export const ProjectList = ({ project }: { project: Project }) => {
  const router = useRouter();
  const setProjectId = useSetAtom(projectIdAtom);
  const handleRedirect = (projectId: string) => {
    setProjectId(projectId);
    router.push('project');
  };

  return (
    <div
      onClick={() => {
        handleRedirect(project.uuid);
      }}
      className="flex h-[300px] cursor-pointer flex-col justify-center rounded-md border border-slate-200 px-6 py-8 transition duration-150 hover:shadow-lg"
    >
      <div className="flex h-full flex-col">
        <h3 className="font-semibold">{project.name}</h3>
        <p>{project.description}</p>
        <p className="mt-4 text-sm text-slate-500">
          {project.end_date
            ? `Timeline: ${project.start_date} until ${project.end_date}`
            : `Start Date: ${project.start_date}`}
        </p>
      </div>
    </div>
  );
};
