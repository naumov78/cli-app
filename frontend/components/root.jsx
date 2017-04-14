import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import AppContainer from './app_container';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <AppContainer />
    </Provider>
  );
};



export default Root;
