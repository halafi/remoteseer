// @flow
import * as React from 'react';
import { hot } from 'react-hot-loader/root';
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
      path="/remote-(development|design|customer-support|sales-and-marketing|copywriting|human-resources)-jobs/"
    />
    <Route component={Category} path="/remote-development-jobs/" />
    <Route component={Category} path="/remote-sales-and-marketing-jobs/seo/" />
    {/* <Route
      component={Category}
      exact
      path="/remote-development-jobs/frontend/(react|angular|vue)/"
    />
    <Route component={Category} exact path="/remote-development-jobs/backend/(php|scala|java)/" />
    <Route
      component={Category}
      exact
      path="/remote-development-jobs/(mobile|frontend|backend|full-stack|devops|games|blockchain|javascript|web|nodejs)/"
    />
    */}
    <Route component={Stats} exact path="/about/" />
    <Route component={Companies} exact path="/companies-hiring-remotely/" />
    <Route component={Root} exact path="/" />
    <Route component={Root} />
  </Switch>
);

export default hot(Routes);
