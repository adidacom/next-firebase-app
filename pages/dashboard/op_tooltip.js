import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Tooltip from '../../containers/Uielements/Tooltip';

export default Page(() => (
  <div>
    <Head>
      <title>Tooltip</title>
    </Head>
    <div>
      <Tooltip />
    </div>
  </div>
));
