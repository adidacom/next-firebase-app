import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Alert from '../../containers/Feedback/Alert';

export default Page(() => (
  <div>
    <Head>
      <title>Alert</title>
    </Head>
    <div>
      <Alert />
    </div>
  </div>
));
