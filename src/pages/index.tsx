import type { NextPage } from 'next';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="my-4 px-12 min-h-screen">
        <div>
          Index
        </div>
      </div>
    </Layout>
  );
};

export default Home;
