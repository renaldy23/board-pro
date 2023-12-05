'use client';

import React from 'react';
import { SprintPanel } from './sprint.panel';
import { BacklogContent } from './backlog.content';

export const StoriesPage = () => {
  return (
    <div className="h-full">
      <h1 className="font-semibold">Project Backlog</h1>
      <div className="mt-4 flex h-full gap-4">
        <SprintPanel />
        <BacklogContent />
      </div>
    </div>
  );
};
