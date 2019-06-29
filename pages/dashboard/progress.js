import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Progress from '../../containers/Forms/Progress';

export default Page(() => (
  <>
    <Head>
      <title>Progress</title>
    </Head>
    <Progress />
  </>
));
