import { WizardContextProvider } from '../../context/WizardContext';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Head from 'next/head';
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
  const [applicationForm, setApplicationForm] = useState({steps: []});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getApplicationForm = async () => {
      try {
        const response = await axios.post(`https://graphql.contentful.com/content/v1/spaces/${process.env.contentfulSpace}/`, { query }, {
          headers: {
            "Content-Type": "application/json",
            Authorization: process.env.contentfulToken || "",
          }
        });
        setApplicationForm(response.data.data.applicationForm);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    if(id){
      getApplicationForm();
    }
  }, [id]);
  return (
    <Layout navigation={false}>
      <Head>
        <title>Asistente - Postulación</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={`py-4 px-12 bg-gray-50 h-screen ${loading && "flex justify-center items-center"}`}>
        {
          loading ? <Spinner /> :
          <WizardContextProvider>
            <div className='w-6/12 mx-auto py-20'>
              <Steps
                steps={applicationForm.steps}
              />
              {
                applicationForm.steps.map((value:any, index:number) => (
                  <div className="mt-5 md:mt-0 md:col-span-2" key={index}>
                    <WizardForm
                      title={value.title}
                      order={value.order}
                      fields={value.fields}
                      stepsLength={applicationForm.steps.length}
                    />
                  </div>
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
