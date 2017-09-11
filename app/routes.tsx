import * as React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import Book from './containers/Book';
import CounterPage from './containers/CounterPage';

export default () => (
  <App>
    <Switch>
      <Route path="/counter" component={CounterPage} />
      <Route path="/" component={Book} />
    </Switch>
  </App>
);
