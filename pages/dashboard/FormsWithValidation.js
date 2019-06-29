import Head from 'next/head';
import Page from '../../hocs/securedPage';
import FormsWithValidation from '../../containers/Forms/FormsWithValidation';

export default Page(() => (
  <>
    <Head>
      <title>FormsWithValidation</title>
    </Head>
    <div>
      <FormsWithValidation />
    </div>
  </>
));
