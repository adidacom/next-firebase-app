import Head from 'next/head';
import Page from '../../hocs/securedPage';
import ReactVis from '../../containers/Charts/reactVis';

export default Page(() => (
  <>
    <Head>
      <title>React Vis</title>
    </Head>
    <div>
      <ReactVis />
    </div>
  </>
));
