import Head from 'next/head';
import Page from '../../hocs/securedPage';
import YoutubeSearch from '../../containers/YoutubeSearch';

export default Page(() => (
  <>
    <Head>
      <title>Alert</title>
    </Head>
    <div>
      <YoutubeSearch />
    </div>
  </>
));
