import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Chat from '../../containers/Chat';

export default Page(() => (
  <div>
    <Head>
      <title>Chat</title>
    </Head>
    <div>
      <Chat />
    </div>
  </div>
));
