// @flow
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import Root from './scenes/Root';
import Category from './scenes/Category';
import Stats from './scenes/Stats';
import Companies from './scenes/Companies';

const Routes = () => (
  <Switch>
    <Route
      component={Category}
      exact
      path="/remote-development-jobs/(mobile|frontend|backend|full-stack|devops|games|blockchain)/"
    />
    <Route
      component={Category}
      exact
      path="/remote-(development|design|customer-support|sales-and-marketing|copywriting)-jobs/"
    />
    <Route component={Stats} exact path="/about/" />
    <Route component={Companies} exact path="/companies-hiring-remotely/" />
    <Route component={Root} exact path="/" />
    <Route component={Root} />
  </Switch>
);

export default hot(module)(Routes);
