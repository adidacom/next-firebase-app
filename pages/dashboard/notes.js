import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Notes from '../../containers/Notes';

export default Page(() => (
  <>
    <Head>
      <title>Notes</title>
    </Head>
    <div>
      <Notes />
    </div>
  </>
));
