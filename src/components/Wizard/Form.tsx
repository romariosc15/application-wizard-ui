import { useContext, FormEvent } from "react";
import { WizardContext } from '../../context/WizardContext';
import Input from '../Form/Input';
import TextArea from '../Form/TextArea';
import Button from '../Form/Button';
import Radio from '../Form/Radio';

interface FormProps {
    title: string,
    order: number,
    fields?: any[],
    stepsLength: number
};

const Form = ({ title, order, fields, stepsLength }: FormProps) => {

    const { currentStep, setCurrentStep } = useContext(WizardContext);
    const isVisiblePreviousButton = currentStep > 1;
    const isVisibleNextButton = currentStep <= stepsLength;
    const isLastStep = currentStep === stepsLength;

    const nextStep = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setCurrentStep(currentStep + 1);
    };
    const previousStep = () => setCurrentStep(currentStep - 1);

    return(
        <div className={`w-6/12 ${currentStep === order ? 'block' : 'hidden'}`}>
            <form onSubmit={nextStep}>
                <div className="">
                    <div className="bg-white">
                        <h2 className="text-2xl font-bold">{title}</h2>
                        <h3 className="text-base text-gray-600 mb-4">Paso {currentStep}</h3>
                        <div className="grid grid-cols-12 gap-6 border-b-2 border-b-gray-200 pb-8">
                            {
                                fields?.map((value, index:number) => {
                                    if(value.type === 'text' || value.type === 'url' || value.type === 'tel' || value.type === 'number')
                                        return (
                                            <Input
                                                key={index}
                                                label={value.label}
                                                type={value.type}
                                                name={value.name}
                                                id={value.id}
                                                placeholder={value.placeholder}
                                                required={value.required}
                                                columns={value.columns}
                                                pattern={value.pattern}
                                            />
                                        );
                                    if(value.type === 'textarea')
                                        return (
                                            <TextArea
                                                key={index}
                                                label={value.label}
                                                rows={value.rows}
                                                name={value.name}
                                                id={value.id}
                                                placeholder={value.placeholder}
                                                required={value.required}
                                                columns={value.columns}
                                            />
                                        );
                                    if(value.type === 'radio')
                                        return (
                                            <Radio
                                                key={index}
                                                label={value.label}
                                                description={value.description}
                                                name={value.name}
                                                id={value.id}
                                                required={value.required}
                                                columns={value.columns}
                                                options={value.options}
                                            />
                                        );
                                })
                            }
                        </div>
                    </div>
                    <div className="mt-6 text-right flex justify-between">
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
        </div>
    );
};

export default Form;