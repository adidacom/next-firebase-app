import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Notification from '../../containers/Feedback/Notification';

export default Page(() => (
  <>
    <Head>
      <title>Notification</title>
    </Head>
    <div>
      <Notification />
    </div>
  </>
));
