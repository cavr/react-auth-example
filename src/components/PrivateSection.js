import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../actions/AuthActions";

class PrivateSection extends Component {
  render() {
    return (
      <div style={{padding:'64px'}}>
        <h3 style={{ color: "green" }}>Private</h3>
        <p style={{ width: "100%", overflow: "scroll" }}>
          {JSON.stringify(this.props.user)}
        </p>
        <div style={{marginTop: '32px'}}>
          <Link onClick={() => this.props.logOut()} to="/auth">
            LOGOUT
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(
  mapStateToProps,
  { logOut }
)(PrivateSection);
