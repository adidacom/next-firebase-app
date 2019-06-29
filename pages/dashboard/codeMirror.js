import Head from 'next/head';
import Page from '../../hocs/securedPage';
;
import CodeMirror from '../../containers/AdvancedUI/codeMirror';

export default Page(() => (
  <div>
    <Head>
      <title>Code Mirror</title>
    </Head>
    <div>
      <CodeMirror />
    </div>
  </div>
));
