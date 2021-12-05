import 'bootstrap/dist/css/bootstrap.css';
import { AwsSimulacao } from '../context';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AwsSimulacao>
          <Component {...pageProps} />
  </AwsSimulacao>
  )
}

export default MyApp
