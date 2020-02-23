import React, { Fragment } from 'react';
// import { useSelector, connect } from 'react-redux';
// import reactor from 'reactor-connect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'next/router';
import Link from 'next/link';

const Index = ({ router, isServer }) => { // eslint-disable-line
  // const data = useSelector(state => reactor.selectors.collection(state, 'test collection'));
  return (
    <Fragment>
      <h1>Hello World!</h1>
      <Link href="/contact-us" >
        <a>contact us</a>
      </Link>
    </Fragment>
  );
};

export default compose(withRouter, connect())(Index);
