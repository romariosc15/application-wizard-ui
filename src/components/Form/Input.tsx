import React from 'react';
import InputLayout from '../Form/InputLayout';
    
type InputProps = {
    label: string,
    type: string,
    name: string,
    id: string,
    placeholder: string,
    required: boolean,
    dynamicClasses?: string,
    columns: number,
    pattern?: string
};

const Input = ({ label, type, name, id, placeholder, required, dynamicClasses, columns, pattern }: InputProps) => {
    return (
        <InputLayout columns={columns}>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
                <input
                    type={type}
                    name={name}
                    id={id}
                    className={`focus:ring-black focus:border-black flex-1 block w-full rounded-sm text-sm lg:text-base border-gray-300 ${dynamicClasses}`}
                    placeholder={placeholder}
                    required={required}
                    pattern={pattern}
                />
            </div>
        </InputLayout>
    );
};

export default Input;