import '../styles/tailwind.css';
import '../styles/custom.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
};

export default MyApp;
