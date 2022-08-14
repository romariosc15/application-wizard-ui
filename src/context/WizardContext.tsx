import React from 'react';

interface WizardContextInterface {
  currentStep: number,
  setCurrentStep?: any,
};

const defaultState = {
  stepsLength: 0,
  currentStep: 1
};

type ProviderProps = {
  children?: React.ReactNode
};

const WizardContext = React.createContext<WizardContextInterface>(defaultState);

const WizardContextProvider = (props:ProviderProps) => {
  const [currentStep, setCurrentStep] = React.useState(1);
  return (
    <WizardContext.Provider
      value={{
        currentStep,
        setCurrentStep
      }}
    >
      {props.children}
    </WizardContext.Provider>
  );
};

export { WizardContextProvider, WizardContext };