import Head from 'next/head';
import Page from '../../hocs/securedPage';
import AutoComplete from '../../containers/Forms/AutoComplete';

export default Page(() => (
  <div>
    <Head>
      <title>AutoComplete</title>
    </Head>
    <div>
      <AutoComplete />
    </div>
  </div>
));
