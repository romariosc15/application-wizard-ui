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
        <div className={`px-4 pt-6 ${currentStep === order ? 'block' : 'hidden'}`}>
            <form onSubmit={nextStep}>
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                        <h2 className="text-2xl font-bold">{title}</h2>
                        <div className="">
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
                                                containerClasses={value.containerClasses}
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
        </div>
    );
};

export default Form;