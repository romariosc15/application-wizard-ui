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
            <div className="py-4 px-12 bg-gray-50 default-min-screen">
                <div className="grid grid-cols-4">
                    {
                        wizardData.map((value:any, index:number) => (
                            <div className="px-6 pt-6" key={index}>
                                <div className="shadow sm:rounded-md sm:overflow-hidden">
                                    <div className='px-6 py-6 bg-white'>
                                        <div className="flex flex-column justify-between items-center">
                                            <h5 className="text-2xl font-medium">
                                                <Link href={`/wizard/${value.id}`}>
                                                    {value.title}
                                                </Link>
                                            </h5>
                                            <Image src={value.logo} alt="me" width="56" height="32" />
                                        </div>
                                        <p className="text-normal text-gray-500">{value.author}</p>
                                        <p className="text-lg mt-2">{`${value.description.substring(0, 120)} ${value.description.length > 120 ? '...' : ''}`}</p>
                                    </div>
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
