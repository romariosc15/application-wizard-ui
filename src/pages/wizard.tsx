import { WizardContextProvider } from '../context/WizardContext';
import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import Steps from '../components/Steps';
import Form from '../components/Wizard/Form';

const Wizard: NextPage = () => {
  const steps = [
    {title: 'Información Personal', order: 1}, 
    {title: 'Formación', order: 2}, 
    {title: 'Experiencia', order: 3}
  ];
  return (
    <Layout>
      <Head>
        <title>Asistente - Postulación</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="py-4 px-12 min-h-screen">
        <WizardContextProvider>
          <div className='w-6/12 mx-auto px-4 py-6'>
            <Steps
              steps={steps}
            />
          </div>
          <div className='w-6/12 mx-auto px-4 py-6'>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <Form 
                stepsLength={steps.length}
              />
            </div>
          </div>
        </WizardContextProvider>
      </div>
    </Layout>
  );
};

export default Wizard;
