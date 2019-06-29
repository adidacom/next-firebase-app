import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Popover from '../../containers/Uielements/Popover';

export default Page(() => (
  <div>
    <Head>
      <title>Popover</title>
    </Head>
    <div>
      <Popover />
    </div>
  </div>
));
