import Head from 'next/head';
import Page from '../../hocs/securedPage';
import { LeafletMap } from '../../containers/Map';

export default Page(() => (
  <>
    <Head>
      <title>Leaflet Map</title>
    </Head>
    <div>
      <LeafletMap />
    </div>
  </>
));
