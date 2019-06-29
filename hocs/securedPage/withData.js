import React, { Component } from 'react';
import redirect from '../../helpers/redirect';
import { getCookie } from '../../helpers/session';

import 'isomorphic-unfetch';

export default ComposedComponent =>
  class WithData extends Component {
    static async getInitialProps(context) {
      const isLoggedIn = getCookie('id_token', context.req) ? true : false;
      if (!isLoggedIn) {
        redirect(context, '/');
      }
      return { isLoggedIn };
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  };
