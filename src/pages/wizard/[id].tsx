import { WizardContextProvider } from '../../context/WizardContext';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../../components/Layout';
import Steps from '../../components/Steps';
import WizardForm from '../../components/Wizard/Form';
import WizardSuccess from '../../components/Wizard/Success';
import WizardError from '../../components/Wizard/Error';
import wizardDetailData from '../../data/WizardDetail';

const Wizard: NextPage = () => {
  const router = useRouter();
  const id = (router.query.id)?.toString() || '';
  const steps:[] = wizardDetailData[id] || [];
  return (
    <Layout>
      <Head>
        <title>Asistente - Postulación</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="py-4 px-12 bg-gray-50 default-min-screen">
        <WizardContextProvider>
          <div className='w-6/12 mx-auto py-16'>
            <Steps
              steps={steps}
            />
            {
              steps.map((value:any, index:number) => (
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
            {
              steps.length > 0 ? <WizardSuccess stepsLength={steps.length} />
               : <WizardError stepsLength={steps.length} />
            }
          </div>

        </WizardContextProvider>
      </div>
    </Layout>
  );
};

export default Wizard;
