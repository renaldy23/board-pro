import React from 'react';

interface MenuGroupProps {
  title: string;
  children: React.ReactNode;
}

export const MenuGroup: React.FC<MenuGroupProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-slate-400">{title}</p>
      {children}
    </div>
  );
};
