import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Shop from '../../containers/Ecommerce/algolia/instantSearch';

export default Page(() => (
  <>
    <Head>
      <title>Shop</title>
    </Head>
    <div>
      <Shop />
    </div>
  </>
));
