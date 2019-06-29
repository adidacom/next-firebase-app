import Head from 'next/head';
import Page from '../hocs/defaultPage';
import ForgotPassword from '../containers/Page/forgotPassword';

export default Page(() => (
  <>
    <Head>
      <title>Forgot Password</title>
    </Head>
    <ForgotPassword />
  </>
));
