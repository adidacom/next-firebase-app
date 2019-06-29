import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Rating from '../../containers/Uielements/rating';

export default Page(() => (
  <>
    <Head>
      <title>rating</title>
    </Head>
    <div>
      <Rating />
    </div>
  </>
));
