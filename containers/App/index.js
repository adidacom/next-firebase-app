import React, { Component } from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import Widgets from '../Widgets';

class App extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Home page</title>
        </Head>
        <Widgets />
      </>
    );
  }
}

export default connect(state => state)(App);
