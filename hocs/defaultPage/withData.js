import React, { Component } from 'react';
import 'isomorphic-fetch';

export default ComposedComponent =>
  class WithData extends Component {
    render() {
      return <ComposedComponent {...this.props} />;
    }
  };
