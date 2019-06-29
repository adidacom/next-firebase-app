import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Tab from '../../containers/Forms/Tab';

export default Page(() => (
  <>
    <Head>
      <title>Tab</title>
    </Head>
    <div>
      <Tab />
    </div>
  </>
));
