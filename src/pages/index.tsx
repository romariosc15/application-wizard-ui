import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Asistente - Inicio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="py-4 px-12 default-min-screen">
        <div>
          Index
        </div>
      </div>
    </Layout>
  );
};

export default Home;
