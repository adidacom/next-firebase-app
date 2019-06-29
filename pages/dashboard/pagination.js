import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Pagination from '../../containers/Uielements/Pagination/pagination.js';

export default Page(() => (
  <div>
    <Head>
      <title>Pagination</title>
    </Head>
    <div>
      <Pagination />
    </div>
  </div>
));
