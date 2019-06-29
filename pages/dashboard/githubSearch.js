import Head from 'next/head';
import Page from '../../hocs/securedPage';
import GithubSearch from '../../containers/GithubSearch';

export default Page(() => (
  <>
    <Head>
      <title>Github Search</title>
    </Head>
    <div>
      <GithubSearch />
    </div>
  </>
));
