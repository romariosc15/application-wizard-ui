import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import useAxios from '../../hooks/useAxios';
import Layout from '../../components/Layout';
import Spinner from '../../components/Spinner';
import Ready from '../../components/Ready';
import Head from 'next/head';
import Link from 'next/link';

const WizardIndex: NextPage = () => {
    const query = `
    {
        applicationFormCollection {
            items {
                sys{
                    id
                }
                title
                description
                author
                logo {
                    url
                }
            }
        }
    }
    `;
    const [applicationForms, setApplicationForms] = useState([]);
    const { response, error, loading } = useAxios(`https://graphql.contentful.com/content/v1/spaces/${process.env.contentfulSpace}/`, { query }, true, {data: {applicationFormCollection: {items: []}}});
    useEffect(() => {
        setApplicationForms(response.data.applicationFormCollection.items);
    }, [response]);
    return (
        <Layout navigation={true}>
            <Head>
                <title>Asistente - Formularios</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={`py-12 px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-36 bg-main default-min-screen ${loading && "flex justify-center items-center"}`}>
                {
                    loading ? <Spinner /> :
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-10">
                        {
                            applicationForms.map((value:any, index:number) => (
                                <div className="shadow rounded-md sm:overflow-hidden bg-white" key={index}>
                                    <div className='px-5 lg:px-6 py-5 lg:py-6'>
                                        <div className="flex flex-row justify-between items-center">
                                            <h5 className="text-lg lg:text-2xl font-medium">
                                                {value.title}
                                            </h5>
                                            <Link href={`/wizard/${value.sys.id}`}>
                                                <a className="font-base text-sm lg:text-base">
                                                    <img src="/image/icons/eye.png" className="w-6 h-6 hover:opacity-80 transition-opacity duration-300"/>
                                                </a>
                                            </Link>
                                        </div>
                                        <p className="text-sm lg:text-base text-gray-500">{value.author}</p>
                                        <div className='bg-yellow w-10 h-1 rounded-md mt-2'></div>
                                        <p className="text-sm lg:text-base font-base mt-2 text-gray-600">{`${value.description}`}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                }
            </div>
            <div className="bg-white pt-12 lg:py-16 xl:py-20 2xl:py-0 px-8 md:px-24 lg:px-20 xl:px-28 2xl:px-36">
                <Ready />
            </div>
        </Layout>
    );
};

export default WizardIndex;
