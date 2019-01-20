import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Auth from "./components/Auth";
import PrivateRoute from './components/PrivateRoute';
import AuthTemplate from './components/AuthTemplate';
import PrivateSection from './components/PrivateSection';
import UserGenerator from './components/UserGenerator';

export default () => {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute path="/private" exact render={(props) => <AuthTemplate {...props} component={PrivateSection} />} />
        <PrivateRoute path="/user" exact component={UserGenerator(PrivateSection)} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/" exact component={Auth} />
      </Switch>
    </Router>
  );
};
