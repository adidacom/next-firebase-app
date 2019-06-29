import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Cart from '../../containers/Ecommerce/cart';

export default Page(() => (
  <div>
    <Head>
      <title>Cart</title>
    </Head>
    <div>
      <Cart />
    </div>
  </div>
));
