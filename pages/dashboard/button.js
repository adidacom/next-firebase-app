import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Button from '../../containers/Forms/Button';

export default Page(() => (
  <div>
    <Head>
      <title>Button</title>
    </Head>
    <div>
      <Button />
    </div>
  </div>
));
