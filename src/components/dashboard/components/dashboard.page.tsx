'use client';

import { ProjectCreate } from '@/components/dashboard/components/project.create';
import { ProjectList } from '@/components/dashboard/components/project.list';
import React from 'react';

interface DashboardPageProps {
  projects: Project[] | null;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ projects }) => {
  return (
    <div className="px-40 py-8">
      <h1 className="text-3xl font-medium">My Projects</h1>
      <div className="mt-8">
        <div className="grid grid-cols-3 gap-4">
          <ProjectCreate />
          {projects?.map((project) => {
            return <ProjectList project={project} key={project.uuid} />;
          })}
        </div>
      </div>
    </div>
  );
};
