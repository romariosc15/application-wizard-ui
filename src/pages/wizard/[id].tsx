import { WizardContextProvider } from '../../context/WizardContext';
import useAxios from '../../hooks/useAxios';

import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { useEffect, useState, Fragment } from 'react';

import Layout from '../../components/Layout';
import Steps from '../../components/Steps';
import WizardForm from '../../components/Wizard/Form';
import WizardSuccess from '../../components/Wizard/Success';
import WizardError from '../../components/Wizard/Error';
import Spinner from '../../components/Spinner';

const Wizard: NextPage = () => {
  const router = useRouter();
  const id = (router.query.id)?.toString() || '';
  const query = `
  {
    applicationForm(id: "${id}") {
        title
        description
        author
        logo {
          url
        }
        steps
    }
  }
  `;

  const [applicationForm, setApplicationForm] = useState({steps: [], author: "", description: ""});
  const { response, error, loading } = useAxios(`https://graphql.contentful.com/content/v1/spaces/${process.env.contentfulSpace}/`, { query }, id, {data: {applicationForm: {steps: [], author: "", description: ""}}});

  useEffect(() => {
    setApplicationForm(response.data.applicationForm);
  }, [response]);

  return (
    <Layout navigation={false}>
      <Head>
        <title>Asistente - Postulación</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={`h-screen ${loading ? "flex justify-center items-center" : "grid grid-cols-3"}`}>
        {
          loading ? <Spinner /> :
          <WizardContextProvider>
            <div className='h-full bg-main flex flex-col col-span-3 lg:col-span-1'>
              <div className="flex justify-between px-8 pt-4">
                <Link href={'/'}>
                  <a>
                    <img src="/image/wizard/romario.png" className="w-16 lg:w-20"/>
                  </a>
                </Link>
                <div className="space-x-4 flex flex-row items-center font-medium text-base">
                  <a href="https://www.romariosarmiento.com" target="_blank" rel="noopener noreferrer">
                    <img src="/image/icons/website.png" className="w-6 h-6 hover:opacity-75 transition-opacity duration-300"/>
                  </a>
                  <a href="https://www.linkedin.com/in/romariosarmiento/" target="_blank" rel="noopener noreferrer">
                    <img src="/image/icons/linkedin.png" className="w-6 h-6 hover:opacity-75 transition-opacity duration-300"/>
                  </a>
                </div>
              </div>
              <div className="my-auto flex flex-col items-center justify-center text-center px-8 lg:px-12 py-8 lg:py-0">
                <img src="/image/wizard/wizard_left_central_image.png" className="w-96"/>
                <h1 className="text-3xl lg:text-4xl font-bold text-black mt-6">{applicationForm.author}</h1>
                <p className="text-sm lg:text-base text-gray-600 mt-3">{applicationForm.description}</p>
              </div>
              <div className="px-8 lg:px-12 py-6 text-center font-normal text-sm lg:text-base text-gray-500">
                2022. Desarrollado por Jaime Sarmiento
              </div>
            </div>
            <div className='col-span-3 lg:col-span-2 h-full flex flex-col items-center justify-center px-8 lg:px-16 py-8 lg:py-0'>
              <div className="mb-8">
                <Steps
                  steps={applicationForm.steps}
                />
              </div>
              {
                applicationForm.steps.map((value:any, index:number) => (
                  <Fragment key={index}>
                    <WizardForm
                      title={value.title}
                      order={value.order}
                      fields={value.fields}
                      stepsLength={applicationForm.steps.length}
                    />
                  </Fragment>
                ))
              }
              {
                applicationForm.steps.length > 0 && <WizardSuccess stepsLength={applicationForm.steps.length} />
              }
              {
                error && <WizardError stepsLength={applicationForm.steps.length} />
              }
            </div>
          </WizardContextProvider>
        }
      </div>
    </Layout>
  );
};

export default Wizard;
