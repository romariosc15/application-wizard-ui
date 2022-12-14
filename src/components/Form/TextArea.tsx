import React from 'react';
import InputLayout from '../Form/InputLayout';

type TextAreaProps = {
    label: string,
    rows?: number,
    name: string,
    id: string,
    placeholder: string,
    required: boolean,
    dynamicClasses?: string
    columns: number
};

const TextArea = ({ label, rows, name, id, placeholder, required, dynamicClasses, columns }: TextAreaProps) => {
    return (
        <InputLayout columns={columns}>
            <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <div className="mt-1">
                <textarea
                    id={id}
                    name={name}
                    rows={rows}
                    className={`shadow-sm focus:ring-black focus:border-black mt-1 block w-full text-sm lg:text-base border border-gray-300 rounded-sm ${dynamicClasses}`}
                    placeholder={placeholder}
                    defaultValue={''}
                    required={required}
                />
            </div>
        </InputLayout>
    );
};

export default TextArea;