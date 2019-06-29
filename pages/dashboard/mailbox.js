import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Mail from '../../containers/Mail';

export default Page(() => (
  <>
    <Head>
      <title>Mail</title>
    </Head>
    <Mail />
  </>
));
