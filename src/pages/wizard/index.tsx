import type { NextPage } from 'next';
import Image from 'next/image';
import Layout from '../../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import wizardData from '../../data/Wizard';

const WizardIndex: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Asistente - Formularios</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="py-12 px-6 2xl:px-12 bg-gray-50 default-min-screen">
                <div className="grid grid-cols-1 2xl:grid-cols-4 space-y-6 lg:space-y-0 lg:space-x-6">
                    {
                        wizardData.map((value:any, index:number) => (
                            <div className="shadow rounded-md sm:overflow-hidden bg-white" key={index}>
                                <div className='px-6 py-6'>
                                    <div className="flex flex-row justify-between items-center">
                                        <h5 className="text-lg 2xl:text-2xl font-medium">
                                            <Link href={`/wizard/${value.id}`}>
                                                {value.title}
                                            </Link>
                                        </h5>
                                        <img src={value.logo} alt="me" className="w-12 2xl:w-16" />
                                    </div>
                                    <p className="text-sm 2xl:text-base text-gray-500">{value.author}</p>
                                    <p className="text-sm 2xl:text-base font-light mt-2">{`${value.description}`}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Layout>
    );
};

export default WizardIndex;
