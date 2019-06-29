import Head from 'next/head';
import Page from '../../hocs/securedPage';
import AntTables from '../../containers/Tables/antTables';

export default Page(() => (
  <>
    <Head>
      <title>AntTables</title>
    </Head>
    <div>
      <AntTables />
    </div>
  </>
));
