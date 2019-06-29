import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Shuffle from '../../containers/Shuffle';

export default Page(() => (
  <>
    <Head>
      <title>Shuffle</title>
    </Head>
    <Shuffle />
  </>
));
