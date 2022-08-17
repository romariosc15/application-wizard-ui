import { useContext } from 'react';
import { WizardContext } from '../../context/WizardContext';
import Link from 'next/link';

type ErrorProps = {
    stepsLength: number
};

const Error = ({ stepsLength }: ErrorProps) => {
    const { currentStep } = useContext(WizardContext);
    return (
        <div className={`px-6 pt-6 ${currentStep > stepsLength ? 'block' : 'hidden'}`}>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className='px-4 pt-12 pb-16 bg-white text-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h4 className='text-2xl py-2 font-medium'>Ha ocurrido un problema</h4>
                    <p className='text-lg'>El formulario al que estás intentando ingresar, no existe.</p>
                    <div className='mt-3 underline'>
                        <Link href={'/wizard'}>
                            Explorar formularios
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;