import React from 'react';
import { getColspan } from '../../helpers/classes';

type RadioProps = {
    label: string,
    description?: string,
    name: string,
    id: string,
    required: boolean,
    dynamicClasses?: string,
    columns: number,
    options: any[]
};

const Input = ({ label, description, name, id, required, dynamicClasses, columns, options }: RadioProps) => {
    const containerClasses = getColspan(columns);
    return (
        <div className={containerClasses}>
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
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
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
        </div>
    );
};

export default Input;