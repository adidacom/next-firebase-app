import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Card from '../../containers/Ecommerce/card';

export default Page(() => (
  <div>
    <Head>
      <title>Card</title>
    </Head>
    <div>
      <Card />
    </div>
  </div>
));
