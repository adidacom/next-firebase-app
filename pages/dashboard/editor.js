import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Editor from '../../containers/Forms/editor';

export default Page(() => (
  <>
    <Head>
      <title>Editor</title>
    </Head>
    <div>
      <Editor />
    </div>
  </>
));
