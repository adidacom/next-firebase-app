import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Invoice from '../../containers/Invoice';
import SingleInvoice from '../../containers/Invoice/singleInvoice';
import { withRouter } from 'next/router';

const getInvoiceId = props => {
  try {
    const { router } = props;
    return {
      invoiceId: router.query.id,
      redirectPath: router.pathname,
    };
  } catch (e) {}
};
export default withRouter(
  Page(props => {
    let { invoiceId, redirectPath } = getInvoiceId(props);
    return (
      <>
        <Head>
          <title>Invoice</title>
        </Head>
        <div>
          {invoiceId ? (
            <SingleInvoice invoiceId={invoiceId} redirectPath={redirectPath} />
          ) : (
            <Invoice />
          )}
        </div>
      </>
    );
  })
);
