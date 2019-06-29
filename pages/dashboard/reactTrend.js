import Head from 'next/head';
import Page from '../../hocs/securedPage';
import ReactTrend from '../../containers/Charts/reactTrend';

export default Page(() => (
  <>
    <Head>
      <title>React Trend</title>
    </Head>
    <div>
      <ReactTrend />
    </div>
  </>
));
