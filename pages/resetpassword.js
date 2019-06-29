import Head from 'next/head';
import Page from '../hocs/defaultPage';
import ResetPassword from '../containers/Page/resetPassword';

export default Page(() => (
  <>
    <Head>
      <title>Reset Password</title>
    </Head>
    <ResetPassword />
  </>
));
