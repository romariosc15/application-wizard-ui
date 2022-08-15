import { WizardContextProvider } from '../context/WizardContext';
import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import Steps from '../components/Steps';
import WizardForm from '../components/Wizard/Form';
import DataSteps from '../data/Steps';

const Wizard: NextPage = () => {
  const steps = DataSteps;
  return (
    <Layout>
      <Head>
        <title>Asistente - Postulación</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="py-4 px-12 min-h-screen bg-gray-50">
        <WizardContextProvider>
          <div className='w-6/12 mx-auto'>
            <Steps
              steps={steps}
            />
            <>
              {
                DataSteps.map((value, index:number) => (
                  <div className="mt-5 md:mt-0 md:col-span-2" key={index}>
                    <WizardForm
                      title={value.title}
                      order={value.order}
                      fields={value.fields}
                      stepsLength={steps.length}
                    />
                  </div>
                ))
              }
            </>
          </div>

        </WizardContextProvider>
      </div>
    </Layout>
  );
};

export default Wizard;
