import React from 'react';

type FormProps = {
    fields: []
};

const Form = ({ fields }: FormProps) => (
    <>
        <div>Ahre</div>
        {fields?.map((_, index) => (
            <div key={index}>
                Índice: {index}
            </div>
        ))}
    </>
);

export default Form;