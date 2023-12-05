'use client';

import React from 'react';
import { ProjectMenu } from './project.menu';

export const ProjectLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-40 py-8">
      {/* <h2 className="text-lg font-semibold">Project UNTAR</h2> */}
      <div className="mt-7 grid grid-cols-12 gap-4">
        <ProjectMenu className="col-span-3" />
        <div className="col-span-9">{children}</div>
      </div>
    </div>
  );
};
