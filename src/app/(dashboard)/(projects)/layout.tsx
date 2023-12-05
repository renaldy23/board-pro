import { ProjectLayout } from '@/components/project/layouts/project.layout';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ProjectLayout>{children}</ProjectLayout>;
}
