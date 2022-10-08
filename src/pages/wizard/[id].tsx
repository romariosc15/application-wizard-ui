import { WizardContextProvider } from '../../context/WizardContext';
import type { NextPage } from 'next';
import { useEffect, useState, Fragment } from 'react';
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
  const [applicationForm, setApplicationForm] = useState({steps: [], author: "", description: ""});
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
      <div className={`h-screen ${loading ? "flex justify-center items-center" : "grid grid-cols-3"}`}>
        {
          loading ? <Spinner /> :
          <WizardContextProvider>
            <div className='h-full bg-gray-50 flex flex-col px-12 py-4'>
              <div className="mb-auto flex justify-between">
                <img src="/image/wizard/romario.png" className="w-16 xl:w-20"/>
                <div>
                  Lista
                </div>
              </div>
              <div className="mb-auto flex flex-col items-center justify-center space-y-3">
                <img src="/image/wizard/wizard_left_central_image.png" className="w-64 xl:w-80"/>
                <h1 className="text-2xl font-semibold">{applicationForm.author}</h1>
                <p className="text-center text-base">{applicationForm.description}</p>
              </div>
              
            </div>
            <div className='col-span-2 h-full flex flex-col items-center justify-center px-12'>
              <Steps
                steps={applicationForm.steps}
              />
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
