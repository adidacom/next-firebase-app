import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Modal from '../../containers/Feedback/Modal';

export default Page(() => (
  <div>
    <Head>
      <title>Modal</title>
    </Head>
    <div>
      <Modal />
    </div>
  </div>
));
