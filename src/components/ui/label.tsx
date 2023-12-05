import React from 'react';

interface LabelProps {
  text: string;
  required?: boolean;
}

export const Label: React.FC<LabelProps> = ({ text, required = false }) => {
  return (
    <div className="mb-0 flex gap-x-1">
      <p className="text-sm tracking-tight">
        {text} &nbsp;
        {required && <span className="mb-0 font-bold text-red-500">*</span>}
      </p>
    </div>
  );
};
