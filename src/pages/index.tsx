import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Process from '../components/Process';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Asistente - Inicio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-gray-50">
        <div className="flex flex-row justify-between items-center py-12 2xl:py-28 px-6 2xl:px-36">
          <div className="">
            <h1 className="mb-4 text-2xl 2xl:text-5xl font-extrabold">Gestiona dinámicamente <br className="hidden lg:block" /> tus formularios</h1>
            <p className="mb-4 text-sm 2xl:text-xl font-normal text-gray-600">Crea, edita y publica formularios con preguntas personalizadas para iniciar <br className="hidden lg:block" /> con las postulaciones a tu oferta de trabajo</p>
            <Link href={`/wizard`}>
              <a className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-xs 2xl:text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer">Ver formularios</a>
            </Link>
            <div className="mt-6 space-y-2">
              <p className="text-xs 2xl:text-sm font-normal text-gray-600">Gráficos obtenidos de</p>
              <img src="/image/providers/freepik.png" className="w-16 2xl:w-20"/>
            </div>
          </div>
          <div className="hidden 2xl:block">
            <img src="/image/wizard/home_1.png" width="400px"/>
          </div>
        </div>
        <div className="bg-white py-12 2xl:py-24 px-6 2xl:px-36">
          <Process />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
