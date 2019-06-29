import Head from 'next/head';
import Page from '../../hocs/securedPage';
import { GoogleMap } from '../../containers/Map';

export default Page(() => (
  <>
    <Head>
      <title>Google Map</title>
    </Head>
    <div>
      <GoogleMap />
    </div>
  </>
));
