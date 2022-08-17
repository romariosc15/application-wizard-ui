import { useContext } from 'react';
import { WizardContext } from '../../context/WizardContext';

type SuccessProps = {
    stepsLength: number
};

const Success = ({ stepsLength }: SuccessProps) => {
    const { currentStep } = useContext(WizardContext);
    return (
        <div className={`px-6 pt-6 ${currentStep > stepsLength ? 'block' : 'hidden'}`}>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className='px-4 pt-12 pb-16 bg-white space-y-2 text-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <h4 className='text-2xl font-medium'>Gracias por completar tu postulación a nuestra oferta</h4>
                    <p className='text-lg'>Vamos a analizar tus respuestas y en caso avancemos a una siguiente etapa, nos pondremos en contacto directamente contigo.</p>
                </div>
            </div>
        </div>
    );
};

export default Success;