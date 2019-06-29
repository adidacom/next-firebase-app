import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Card from '../../containers/Uielements/Card';

export default Page(() => (
  <>
    <Head>
      <title>Card</title>
    </Head>
    <div>
      <Card />
    </div>
  </>
));
