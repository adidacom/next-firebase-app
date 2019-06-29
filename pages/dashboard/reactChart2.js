import Head from 'next/head';
import Page from '../../hocs/securedPage';
import ReactChart2 from '../../containers/Charts/reactChart2';

export default Page(() => (
  <>
    <Head>
      <title>React Chart2</title>
    </Head>
    <div>
      <ReactChart2 />
    </div>
  </>
));
