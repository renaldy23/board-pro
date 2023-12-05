import React from 'react';
import { twMerge } from 'tailwind-merge';
import { type VariantProps, tv } from 'tailwind-variants';

const textAreaStyle = tv({
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

type TextAreaVariants = VariantProps<typeof textAreaStyle>;
type NativeProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

interface TextAreaProps extends Omit<NativeProps, keyof TextAreaVariants>, TextAreaVariants {}

export const TextArea: React.FC<TextAreaProps> = ({
  size,
  rounded,
  className,
  children,
  ...props
}) => {
  return (
    <textarea className={twMerge(textAreaStyle({ size, rounded }), className)} {...props}>
      {children}
    </textarea>
  );
};
