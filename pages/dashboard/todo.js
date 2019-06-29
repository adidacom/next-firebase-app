import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Todo from '../../containers/Todo';

export default Page(() => (
  <>
    <Head>
      <title>Todo</title>
    </Head>
    <div>
      <Todo />
    </div>
  </>
));
