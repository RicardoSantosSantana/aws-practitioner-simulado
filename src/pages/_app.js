import { useEffect } from 'react';
import Head from 'next/head';
import { AwsSimulacao } from '../context';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
 
function MyApp({ Component, pageProps }) {

  useEffect(() => {
    //import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      <Head>
        <title>AWS Practitioner - Estudos</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
    <AwsSimulacao>
          <Component {...pageProps} />
  </AwsSimulacao>
  </>
  )
}

export default MyApp
