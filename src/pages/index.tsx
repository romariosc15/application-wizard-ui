import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Process from '../components/Process';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <Layout navigation={true}>
      <Head>
        <title>Asistente - Inicio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-main">
        <div className="flex flex-row justify-between items-center py-12 lg:py-16 xl:py-20 2xl:py-0 px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-36">
          <div className="text-black">
            <h1 className="mb-4 text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold">Gestiona dinámicamente <br className="hidden md:block" /> tus formularios</h1>
            <p className="mb-4 text-sm lg:text-base xl:text-lg font-normal text-gray-700">Crea, edita y publica formularios con preguntas personalizadas <br className="hidden lg:block xl:hidden" /> de forma rápida para <br className="hidden xl:block" /> tus procesos de selección</p>
            <Link href={`/wizard`}>
              <a className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-xs xl:text-base font-medium rounded-md text-white bg-black hover:opacity-90 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer">Ver formularios</a>
            </Link>
            <div className="w-fit rounded-md px-4 lg:px-8 py-3 lg:py-4 mt-6 xl:mt-8 space-y-1.5 lg:space-y-2 bg-alternative">
              <p className="text-xs 2xl:text-sm font-normal text-gray-700">Recursos y contenido obtenidos de</p>
              <div className="flex flex-row space-x-4">
                <img src="/image/providers/freepik.png" className="w-14 xl:w-16"/>
                <img src="/image/providers/contentful.png" className="w-16 xl:w-20"/>
              </div>
            </div>
          </div>
          <div className="hidden md:block mt-8">
            <img src="/image/wizard/home_2.png" width="250px"/>
          </div>
        </div>
        <div className="bg-white py-12 lg:py-16 xl:py-20 2xl:py-20 px-8 md:px-24 lg:px-20 xl:px-28 2xl:px-36">
          <Process />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
