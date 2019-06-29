import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Calendar from '../../containers/Calendar';

export default Page(() => (
  <>
    <Head>
      <title>Alert</title>
    </Head>
    <Calendar />
  </>
));
