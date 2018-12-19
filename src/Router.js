import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Auth from "./components/Auth";
import PrivateRoute from './components/PrivateRoute';
import AuthTemplate from './components/AuthTemplate';
import PrivateSection from './components/PrivateSection';

export default () => {
  const history = createBrowserHistory();
  return (
    <HashRouter history={history}>
      <Switch>
        <PrivateRoute path="/private" exact render={(props) => <AuthTemplate {...props} component={PrivateSection} />} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
    </HashRouter>
  );
};
