import React from 'react';

type StepSeparatorProps = {
  label: string,
  type: "submit" | "reset" | "button",
  disabled: boolean,
  dynamicClasses: string,
  onClick?: () => void
};

const StepSeparator = ({ label, type, disabled, dynamicClasses, onClick }: StepSeparatorProps) => {
  return (
    <>
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-opacity duration-300 ${dynamicClasses}`}
        >
            {label}
        </button>
    </>
  );
};

export default StepSeparator;
