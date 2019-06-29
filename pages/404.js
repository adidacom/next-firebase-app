import Head from 'next/head';
import Page from '../hocs/defaultPage';
import FourZeroFour from '../containers/Page/404';

export default Page(() => (
  <>
    <Head>
      <title>404</title>
    </Head>
    <FourZeroFour />
  </>
));
