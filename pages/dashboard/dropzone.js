import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Dropzon from '../../containers/AdvancedUI/dropzone/';

export default Page(() => (
  <>
    <Head>
      <title>Dropzon</title>
    </Head>
    <div>
      <Dropzon />
    </div>
  </>
));
