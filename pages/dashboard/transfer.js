import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Transfer from '../../containers/Forms/Transfer';

export default Page(() => (
  <>
    <Head>
      <title>Transfer</title>
    </Head>
    <div>
      <Transfer />
    </div>
  </>
));
