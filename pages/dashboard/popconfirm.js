import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Popconfirm from '../../containers/Feedback/Popconfirm';

export default Page(() => (
  <div>
    <Head>
      <title>Popconfirm</title>
    </Head>
    <div>
      <Popconfirm />
    </div>
  </div>
));
