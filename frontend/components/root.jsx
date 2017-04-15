import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import App from './app';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <App />
    </Provider>
  );
};



export default Root;
