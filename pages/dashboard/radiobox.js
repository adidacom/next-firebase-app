import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Radiobox from '../../containers/Forms/Radiobox';

export default Page(() => (
  <>
    <Head>
      <title>Radiobox</title>
    </Head>
    <div>
      <Radiobox />
    </div>
  </>
));
