import React from 'react';
import InputLayout from '../Form/InputLayout';

type RadioProps = {
    label: string,
    description?: string,
    name: string,
    id: string,
    required: boolean,
    columns: number,
    options: any[]
};

const Input = ({ label, description, name, id, required, columns, options }: RadioProps) => {
    return (
        <InputLayout columns={columns}>
            <fieldset>
                <legend className="contents text-base font-medium text-gray-900">{label}</legend>
                <p className="text-sm text-gray-500">{description}</p>
                <div className="mt-4 space-y-4">
                    {
                        options?.map((value, index:number) => (
                            <div className="flex items-center" key={index}>
                                <input
                                    id={`${id}-${index}`}
                                    name={name}
                                    type="radio"
                                    value={value.value}
                                    className="focus:ring-black h-4 w-4 text-black border-gray-300"
                                    required={required}
                                />
                                <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                                    {value.label}
                                </label>
                            </div>
                        ))
                    }
                </div>
            </fieldset>
        </InputLayout>
    );
};

export default Input;