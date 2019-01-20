import React from "react";
import { connect } from "react-redux";
import { logOut } from "../actions/AuthActions";

const componentWithAuth = Component => {
  const resultComponent = props => <Component {...props} />;

  const mapStateToProps = state => {
    return {
      user: state.auth.user
    };
  };

  return connect(mapStateToProps, {logOut})(resultComponent);
};


export default componentWithAuth;
