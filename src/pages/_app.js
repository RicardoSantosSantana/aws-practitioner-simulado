import Head from 'next/head';
import { AwsSimulacao } from '../context/Index';

function MyApp({ Component, pageProps }) {

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
