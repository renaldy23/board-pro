import React from 'react';

import { AlignEndVertical } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  iconSize: number;
  textSize: 'text-lg' | 'text-xl' | 'text-2xl' | 'text-3xl';
}

export const Logo: React.FC<LogoProps> = ({ iconSize, textSize, className }) => {
  return (
    <div className={twMerge('flex items-center gap-2', className)}>
      <AlignEndVertical size={iconSize} />
      <span className={twMerge('flex', textSize)}>
        <h1 className="font-medium">Board</h1>
        <h1 className="text-zinc-600">Pro</h1>
      </span>
    </div>
  );
};
