import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Select from '../../containers/Forms/Select';

export default Page(() => (
  <>
    <Head>
      <title>Select</title>
    </Head>
    <div>
      <Select />
    </div>
  </>
));
