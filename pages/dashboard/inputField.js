import Head from 'next/head';
import Page from '../../hocs/securedPage';
import InputField from '../../containers/Forms/Input';

export default Page(() => (
  <>
    <Head>
      <title>InputField</title>
    </Head>
    <div>
      <InputField />
    </div>
  </>
));
