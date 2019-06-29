import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Message from '../../containers/Feedback/Message';

export default Page(() => (
  <>
    <Head>
      <title>Message</title>
    </Head>
    <div>
      <Message />
    </div>
  </>
));
