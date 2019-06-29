import Head from 'next/head';
import Page from '../hocs/defaultPage';
import FiveHundred from '../containers/Page/500';

export default Page(() => (
  <>
    <Head>
      <title>500</title>
    </Head>
    <FiveHundred />
  </>
));
