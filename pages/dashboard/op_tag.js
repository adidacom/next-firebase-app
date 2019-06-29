import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Tag from '../../containers/Uielements/Tag';

export default Page(() => (
  <div>
    <Head>
      <title>Tag</title>
    </Head>
    <div>
      <Tag />
    </div>
  </div>
));
