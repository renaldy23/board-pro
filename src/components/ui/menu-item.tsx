import React from 'react';
import Link from 'next/link';

interface MenuProps {
  children: React.ReactNode;
  href: string;
}

export const MenuItem: React.FC<MenuProps> = ({ children, href }) => {
  return (
    <Link href={href} className="flex items-center gap-1">
      {children}
    </Link>
  );
};
