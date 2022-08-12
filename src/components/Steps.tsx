import React from 'react';

type StepsProps = {
    steps: [],
};

const Steps = ({ steps }: StepsProps) => {
  return (
    <>
        {steps?.map((_, index) => (
            <div key={index}>
                Índice: {index}
            </div>
        ))}
    </>
  );
};

export default Steps;