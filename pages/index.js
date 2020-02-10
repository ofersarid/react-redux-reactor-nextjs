import React from 'react';
// import { useSelector, connect } from 'react-redux';
// import reactor from 'reactor-connect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'next/router';

const Index = ({ router, isServer }) => { // eslint-disable-line
  // const data = useSelector(state => reactor.selectors.collection(state, 'test collection'));
  return <h1>Hello World!</h1>;
};

export default compose(withRouter, connect())(Index);
