import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Carousel from '../../containers/Uielements/Carousel';

export default Page(() => (
  <>
    <Head>
      <title>Carousel</title>
    </Head>
    <div>
      <Carousel />
    </div>
  </>
));
