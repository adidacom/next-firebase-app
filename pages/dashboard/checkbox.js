import Head from 'next/head';
import Page from '../../hocs/securedPage';
;
import Checkbox from '../../containers/Forms/Checkbox';

export default Page(() => (
  <div>
    <Head>
      <title>Checkbox</title>
    </Head>
    <div>
      <Checkbox />
    </div>
  </div>
));
