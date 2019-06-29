import Head from 'next/head';
import Page from '../hocs/defaultPage';
import SignUp from '../containers/Page/signup.js';

export default Page(() => (
  <>
    <Head>
      <title>Sign Up</title>
    </Head>
    <SignUp />
  </>
));
