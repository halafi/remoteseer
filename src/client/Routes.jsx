// @flow
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import Root from './scenes/Root';
import Category from './scenes/Category';

const Routes = () => (
  <Switch>
    <Route component={Category} exact path="/*-jobs/" />
    <Route component={Root} exact path="/" />
    <Route component={Root} />
  </Switch>
);

export default hot(module)(Routes);
