import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Auth from "./components/Auth";
import PrivateRoute from './components/PrivateRoute';
import PrivateSection from './components/PrivateSection';

export default () => {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <Switch>
        <Route path="/auth" exact component={Auth} />
        <PrivateRoute path="/private" exact component={PrivateSection} />
      </Switch>
    </Router>
  );
};
