import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import { AwsSimulacao } from '../context';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <AwsSimulacao>
          <Component {...pageProps} />
  </AwsSimulacao>
  )
}

export default MyApp
