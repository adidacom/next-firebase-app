import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Timeline from '../../containers/Uielements/Timeline';

export default Page(() => (
  <div>
    <Head>
      <title>Timeline</title>
    </Head>
    <div>
      <Timeline />
    </div>
  </div>
));
