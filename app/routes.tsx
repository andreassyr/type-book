import * as React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import BookContainer from './containers/BookContainer';

export default () => (
  <App>
    <Switch>
      <Route path="/" component={BookContainer} />
    </Switch>
  </App>
);
