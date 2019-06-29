import Head from 'next/head';
import Page from '../../hocs/securedPage';
import BlankPage from '../../containers/blankPage';

export default Page(() => (
  <div>
    <Head>
      <title>Blank Page</title>
    </Head>
    <div>
      <BlankPage />
    </div>
  </div>
));
