import Head from 'next/head';
import Page from '../../hocs/securedPage';
;
import Contacts from '../../containers/Contacts';

export default Page(() => (
  <div>
    <Head>
      <title>Contacts</title>
    </Head>
    <div>
      <Contacts />
    </div>
  </div>
));
