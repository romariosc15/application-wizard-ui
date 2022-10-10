import React, { Fragment } from 'react';
import { useContext } from "react";
import { WizardContext } from '../context/WizardContext';
import StepSeparator from '../components/Steps/StepSeparator';

interface Step {
  id: string,
  title: string,
  order: number
};

type StepsProps = {
  steps: Step[],
};

const ascOrder = (steps:Step[]):Step[] => {
  return steps.sort(((a, b) => a.order - b.order));
};

const Steps = ({ steps }: StepsProps) => {
  const orderedSteps = ascOrder(steps);
  const stepsLength:number = steps.length - 1;
  const { currentStep } = useContext(WizardContext);
  return (
    <div className='flex flex-row justify-center items-center'>
        {
          orderedSteps?.map((value, index:number) => {
            const className = 'rounded-full border w-10 h-10 flex justify-center items-center';
            const dynamicClasses = `${(currentStep >= value.order) ? 'border-active-step text-white' : ''} ${currentStep === value.order ? 'font-bold text-active-step bg-white' : ''} ${currentStep > value.order ? 'bg-active-step font-semibold' : ''} ${currentStep < value.order ? 'text-gray-500 bg-white' : ''}`;
            const separatorDynamicClasses = `${currentStep > value.order ? 'bg-active-step' : 'bg-gray-200'}`;
            return (
              <Fragment key={index}>
                <div
                  className={`${className} ${dynamicClasses}`}
                >
                  <span data-step-id={value.id}>{value.order}</span>
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