import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Badge from '../../containers/Uielements/Badge';

export default Page(() => (
  <>
    <Head>
      <title>Badge</title>
    </Head>
    <div>
      <Badge />
    </div>
  </>
));
