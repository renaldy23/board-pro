import { MenuGroup } from '@/components/ui/menu-group';
import { MenuItem } from '@/components/ui/menu-item';
import {
  BookMarked,
  CircleDot,
  FlagTriangleRight,
  LayoutDashboard,
  Settings,
  Users,
} from 'lucide-react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ProjectLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ProjectMenu: React.FC<ProjectLayoutProps> = ({ className }) => {
  return (
    <div className={twMerge('flex flex-col gap-7 border-r border-slate-300', className)}>
      <MenuItem href="/project">
        <LayoutDashboard size={22} />
        Overview
      </MenuItem>
      <MenuGroup title="Workspace">
        <MenuItem href="/project">
          <FlagTriangleRight size={22} />
          Timeline
        </MenuItem>
        <MenuItem href="/backlog">
          <BookMarked size={22} />
          Backlog
        </MenuItem>
        <MenuItem href="/project">
          <CircleDot />
          Issues
        </MenuItem>
      </MenuGroup>
      <MenuGroup title="Configuration">
        <MenuItem href="/project">
          <Users size={22} />
          Members
        </MenuItem>
        <MenuItem href="/project">
          <Settings size={22} />
          Settings
        </MenuItem>
      </MenuGroup>
    </div>
  );
};
