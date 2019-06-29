import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Dropdown from '../../containers/Uielements/Dropdown/dropdown.js';

export default Page(() => (
  <>
    <Head>
      <title>Dropdown</title>
    </Head>
    <div>
      <Dropdown />
    </div>
  </>
));
