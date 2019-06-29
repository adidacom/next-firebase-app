import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Spin from '../../containers/Feedback/Spin';

export default Page(() => (
  <>
    <Head>
      <title>Spin</title>
    </Head>
    <div>
      <Spin />
    </div>
  </>
));
