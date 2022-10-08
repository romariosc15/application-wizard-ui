import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import Spinner from '../../components/Spinner';
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
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getApplicationForms = async () => {
        try {
            const response = await axios.post(`https://graphql.contentful.com/content/v1/spaces/${process.env.contentfulSpace}/`, { query }, {
                headers: {
                "Content-Type": "application/json",
                Authorization: process.env.contentfulToken || "",
                }
            });
            setApplicationForms(response.data.data.applicationFormCollection.items);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
        };
        getApplicationForms();
    }, []);
    return (
        <Layout navigation={true}>
            <Head>
                <title>Asistente - Formularios</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={`py-12 px-6 md:px-12 lg:px-20 xl:px-28 2xl:px-36 bg-slate-100 default-min-screen ${loading && "flex justify-center items-center"}`}>
                {
                    loading ? <Spinner /> :
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-0 lg:gap-6">
                        {
                            applicationForms.map((value:any, index:number) => (
                                <div className="shadow rounded-md sm:overflow-hidden bg-white" key={index}>
                                    <div className='px-6 py-6'>
                                        <div className="flex flex-row justify-between items-center">
                                            <h5 className="text-lg 2xl:text-2xl font-medium">
                                                <Link href={`/wizard/${value.sys.id}`}>
                                                    {value.title}
                                                </Link>
                                            </h5>
                                            <img src={value.logo.url} alt="me" className="w-12 2xl:w-16" />
                                        </div>
                                        <p className="text-sm 2xl:text-base text-gray-500">{value.author}</p>
                                        <div className='bg-indigo-600 w-10 h-1 rounded-md mt-2'></div>
                                        <p className="text-sm 2xl:text-base font-light mt-2">{`${value.description}`}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                }
            </div>
        </Layout>
    );
};

export default WizardIndex;
