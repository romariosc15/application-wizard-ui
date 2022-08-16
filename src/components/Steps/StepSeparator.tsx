import React from 'react';

type StepSeparatorProps = {
  stepsLength: number,
  index: number,
  dynamicClasses: string
};

const StepSeparator = ({ stepsLength, index, dynamicClasses }: StepSeparatorProps) => {
  return (
    <>
      {stepsLength > index ? <div className={`w-32 h-0.5 mx-2 ${dynamicClasses}`}></div>: <></>}
    </>
  );
};

export default StepSeparator;