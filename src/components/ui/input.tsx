import React from 'react';
import { twMerge } from 'tailwind-merge';
import { tv, type VariantProps } from 'tailwind-variants';

const inputStyle = tv({
  base: 'w-full bg-white border border-slate-200 focus:border-slate-300 focus:ring-1 focus:ring-slate-300 focus:outline-none transition duration-150 ease-in-out',
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-sm px-3 py-2',
      lg: 'px-4 py-3 text-lg',
    },
    rounded: {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      none: 'rounded-none',
    },
  },
  defaultVariants: {
    size: 'md',
    rounded: 'md',
  },
});

type InputVariants = VariantProps<typeof inputStyle>;
type NativeProps = React.InputHTMLAttributes<HTMLInputElement>;

interface InputProps extends Omit<NativeProps, keyof InputVariants>, InputVariants {}

export const Input: React.FC<InputProps> = ({ size, rounded, className, children, ...props }) => {
  return <input className={twMerge(inputStyle({ size, rounded }), className)} {...props} />;
};
