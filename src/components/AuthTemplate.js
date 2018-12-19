import React from "react";
import { connect } from "react-redux";
import { logOut } from "../actions/AuthActions";



const AuthTemplate = ({ component: Compo, ...rest}) => <Compo {...rest} />


const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(
  mapStateToProps,
  { logOut }
)(AuthTemplate);