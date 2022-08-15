import React from 'react';

type TextAreaProps = {
    label: string,
    rows?: number,
    name: string,
    id: string,
    placeholder: string,
    required: boolean
};

const TextArea = ({ label, rows, name, id, placeholder, required }: TextAreaProps) => {
  return (
    <>
        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
            {label}
        </label>
        <div className="mt-1">
            <textarea
                id={id}
                name={name}
                rows={rows}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                placeholder={placeholder}
                defaultValue={''}
                required={required}
            />
        </div>
        <p className="mt-2 text-sm text-gray-500">
            Brief description for your profile. URLs are hyperlinked.
        </p>
    </>
  );
};

export default TextArea;