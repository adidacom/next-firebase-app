import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Collapse from '../../containers/Uielements/Collapse';

export default Page(() => (
  <>
    <Head>
      <title>Collapse</title>
    </Head>
    <div>
      <Collapse />
    </div>
  </>
));
