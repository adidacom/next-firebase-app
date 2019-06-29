import Head from 'next/head';
import Page from '../../hocs/securedPage';
import UppyUploader from '../../containers/AdvancedUI/uppy';

export default Page(() => (
  <>
    <Head>
      <title>Uppy Uploader</title>
    </Head>
    <div>
      <UppyUploader />
    </div>
  </>
));
