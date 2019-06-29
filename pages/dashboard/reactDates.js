import Head from 'next/head';
import Page from '../../hocs/securedPage';
import ReactDates from '../../containers/AdvancedUI/ReactDates/reactDates';

export default Page(() => (
  <>
    <Head>
      <title>React Dates</title>
    </Head>
    <div>
      <ReactDates />
    </div>
  </>
));
