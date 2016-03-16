import 'babel-core/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import LoginPage from'./components/LoginPage.jsx'
import HackerNewsPage from'./components/HackerNewsPage.jsx'
import configureStore from './store/configureStore'
import { connect } from 'react-redux'
import { Router, Route, Redirect, DefaultRoute } from 'react-router';
import { createHistory, useBasename } from 'history';

const store = configureStore();
const history = useBasename(createHistory)({
  basename: ''
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" store={store} component={LoginPage}/>
      <Route path="/hackernews" store={store} component={HackerNewsPage}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)
