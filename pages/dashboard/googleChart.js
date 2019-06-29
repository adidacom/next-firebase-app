import Head from 'next/head';
import Page from '../../hocs/securedPage';
import GoogleChart from '../../containers/Charts/googleChart';

export default Page(() => (
  <>
    <Head>
      <title>Google Chart</title>
    </Head>
    <div>
      <GoogleChart />
    </div>
  </>
));
