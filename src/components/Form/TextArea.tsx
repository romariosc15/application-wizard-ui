import React from 'react';

type TextAreaProps = {
    label: string,
    rows?: number,
    name: string,
    id: string,
    placeholder: string,
    required: boolean,
    dynamicClasses?: string
    containerClasses?: string
};

const TextArea = ({ label, rows, name, id, placeholder, required, dynamicClasses, containerClasses }: TextAreaProps) => {
  return (
    <div className={containerClasses}>
        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
            {label}
        </label>
        <div className="mt-1">
            <textarea
                id={id}
                name={name}
                rows={rows}
                className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md ${dynamicClasses}`}
                placeholder={placeholder}
                defaultValue={''}
                required={required}
            />
        </div>
    </div>
  );
};

export default TextArea;