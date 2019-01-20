import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class PrivateRoute extends Component {
  giveMeRender = () => {
    const { component: Component, render } = this.props;
    return render ? render : props => <Component {...props} />;
  };

  render() {
    const { user, ...rest } = this.props;

    const render = user ? (
      <Route {...rest} render={this.giveMeRender()} />
    ) : (
      <Redirect to="/auth" />
    );

    return render;
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};
export default connect(
  mapStateToProps,
  null
)(PrivateRoute);
