import Head from 'next/head';
import Page from '../../hocs/securedPage';
;
import Checkout from '../../containers/Ecommerce/checkout';

export default Page(() => (
  <div>
    <Head>
      <title>Checkout</title>
    </Head>
    <div>
      <Checkout />
    </div>
  </div>
));
