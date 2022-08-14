import React from 'react';
import { useContext } from "react";
import { WizardContext } from '../../context/WizardContext';
import Input from '../Form/Input';
import TextArea from '../Form/TextArea';
import Button from '../Form/Button';

interface FormProps {
    fields?: [],
    stepsLength: number
};

const Form = ({ fields, stepsLength }: FormProps) => {
    const { currentStep, setCurrentStep } = useContext(WizardContext);
    const isVisiblePreviousButton = currentStep > 1;
    const isVisibleNextButton = currentStep <= stepsLength;
    const isLastStep = currentStep === stepsLength;
    const nextStep = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setCurrentStep(currentStep + 1);
    };
    const previousStep = () => setCurrentStep(currentStep - 1);
    return(
        <>
            <form onSubmit={nextStep}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <h2 className='text-2xl font-bold'>Información personal</h2>
                  <div className="grid grid-cols-4 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <Input
                        label='Nombres'
                        type='text'
                        name='firstName'
                        id='firstName'
                        placeholder='Ingresa tus nombres'
                        required={true}
                      />
                    </div>
                    <div className="col-span-3 sm:col-span-2">
                      <Input
                        label='Apellidos'
                        type='text'
                        name='lastName'
                        id='lastName'
                        placeholder='Ingresa tus apellidos'
                        required={true}
                      />
                    </div>
                  </div>

                  <div>
                    <TextArea 
                      label='Describe como sería tu trabajo ideal'
                      rows={3}
                      name='idealJob'
                      id='idealJob'
                      placeholder='Ejemplo: Mi trabajo ideal está en un ambiente retador, en donde pueda asumir mayor responsabilidad ...'
                      required={true}
                    />
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 flex justify-between">
                  {
                    <Button
                      label='Anterior'
                      type={'button'}
                      disabled={!isVisiblePreviousButton}
                      dynamicClasses={isVisiblePreviousButton ? 'visible' : 'invisible'}
                      onClick={previousStep}
                    />
                  }
                  {
                    <Button
                      label={isLastStep ? 'Finalizar' : 'Siguiente'}
                      type={'submit'}
                      disabled={!isVisibleNextButton}
                      dynamicClasses={isVisibleNextButton ? 'visible' : 'invisible'}
                    />
                  }
                </div>
              </div>
            </form>
        </>
    );
};

export default Form;