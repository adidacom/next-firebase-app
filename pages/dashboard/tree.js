import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Tree from '../../containers/Uielements/Tree';

export default Page(() => (
  <>
    <Head>
      <title>Tree</title>
    </Head>
    <div>
      <Tree />
    </div>
  </>
));
