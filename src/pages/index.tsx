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
        <div className="flex flex-column justify-between items-center py-28 px-36">
          <div className="">
            <h1 className="mb-4 text-5xl font-extrabold">Gestiona dinámicamente <br /> tus formularios</h1>
            <p className="mb-4 text-xl font-normal text-gray-600">Crea, edita y publica formularios con preguntas personalizadas para iniciar con las postulaciones <br /> a tu oferta de trabajo</p>
            <Link href={`/wizard`}>
              <div className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-normal font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Ver formularios</div>
            </Link>
            <div className="mt-6 space-y-2">
              <p className="text-sm font-normal text-gray-600">Gráficos obtenidos de</p>
              <img src="/image/providers/freepik.png" className="w-20"/>
            </div>
          </div>
          <div>
            <img src="/image/wizard/home_1.png" width="400px"/>
          </div>
        </div>
        <div className="bg-white py-20 px-36">
          <Process />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
