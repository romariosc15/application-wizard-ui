import React, { Fragment } from 'react';
import { useContext } from "react";
import { WizardContext } from '../context/WizardContext';
import StepSeparator from '../components/Steps/StepSeparator';

interface Step {
  title: string,
  order: number
};

type StepsProps = {
  steps: Step[],
};

const Steps = ({ steps }: StepsProps) => {
  steps.sort(((a, b) => a.order - b.order));
  const stepsLength:number = steps.length - 1;
  const { currentStep } = useContext(WizardContext);
  return (
    <div className='flex flex-column justify-center items-center px-4 pb-6'>
        {
          steps?.map((value, index:number) => {
            const className = 'rounded-full border w-10 h-10 flex flex-column justify-center items-center';
            const dynamicClasses = `${(currentStep >= value.order) ? 'border-indigo-500 text-white' : ''} ${currentStep === value.order ? 'font-bold text-indigo-500 bg-white' : ''} ${currentStep > value.order ? 'bg-indigo-300 font-semibold bg-indigo-500' : ''} ${currentStep < value.order ? 'text-gray-500 bg-white' : ''}`;
            const separatorDynamicClasses = `${currentStep > value.order ? 'bg-indigo-500' : 'bg-gray-200'}`;
            return (
              <Fragment key={index}>
                <div
                  className={`${className} ${dynamicClasses}`}
                >
                  <span>{value.order}</span>
                </div>
                <StepSeparator stepsLength={stepsLength} index={index} dynamicClasses={separatorDynamicClasses} />
              </Fragment>
            );
          })
        }
    </div>
  );
};

export default Steps;