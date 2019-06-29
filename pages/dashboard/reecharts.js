import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Recharts from '../../containers/Charts/recharts';

export default Page(() => (
  <>
    <Head>
      <title>Recharts</title>
    </Head>
    <div>
      <Recharts />
    </div>
  </>
));
