import React from 'react';

type InputProps = {
    label: string,
    type: string,
    name: string,
    id: string,
    placeholder: string,
    required: boolean
};

const Input = ({ label, type, name, id, placeholder, required }: InputProps) => {
  return (
    <>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
            {label}
        </label>
        <div className="mt-1 flex rounded-md shadow-sm">
            <input
                type={type}
                name={name}
                id={id}
                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                placeholder={placeholder}
                required={required}
            />
        </div>
    </>
  );
};

export default Input;