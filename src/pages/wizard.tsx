import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import Input from '../components/Form/Input';
import TextArea from '../components/Form/TextArea';
import Steps from '../components/Steps';

const Wizard: NextPage = () => {
  const steps = [
    {title: 'Información Personal', order: 1}, 
    {title: 'Formación', order: 2}, 
    {title: 'Experiencia', order: 3}
  ];
  const [currentStepState, setCurrentStepState] = useState(1);
  const nextStep = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCurrentStepState(currentStepState + 1);
  };
  const previousStep = () => setCurrentStepState(currentStepState - 1);
  return (
    <Layout>
      <Head>
        <title>Asistente - Postulación</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="py-4 px-12 min-h-screen">
        <div className='w-6/12 mx-auto px-4 py-6'>
          <Steps
            steps={steps}
            currentStep={currentStepState}
          />
        </div>
        <div className='w-6/12 mx-auto px-4 py-6'>
          <div className="mt-5 md:mt-0 md:col-span-2">
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
                  <button
                    type="button"
                    onClick={previousStep}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Anterior
                  </button>
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Siguiente
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Wizard;
