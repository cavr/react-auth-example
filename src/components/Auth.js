import React, { Component } from "react";
import { connect } from "react-redux";
import { login, changeEmail, changePassword } from "../actions/AuthActions";
import { Redirect } from 'react-router-dom';

class Auth extends Component {
  logUser = event => {
    event.preventDefault();
    this.props.login(this.props.email, this.props.password);
  };

  renderForm() {
    const { email, password, error } = this.props;
    return (
      <form style={styles.form} onSubmit={this.logUser}>
        <h3 style={{color:'red'}}>{error}</h3>
        <div style={styles.input}>
          <label htmlFor="email">Username</label>
          <input
            type="email"
            id="email"
            placeholder="Username"
            required
            value={email}
            onChange={event => this.props.changeEmail(event.target.value)}
          />
        </div>
        <div style={styles.input}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={event => this.props.changePassword(event.target.value)}
          />
        </div>
        <button>LOGIN</button>
      </form>
    );
  }

  render() {
    const { loading, user } = this.props;


    return loading ? (
      <div>Loading</div>
    ) : user ? (
      <Redirect to="/private" />
    ) : (
      this.renderForm()
    );
  }
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "16px",
    marginBottom: "32px"
  },
  input: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: "16px",
    width: '240px'
  }
};

const mapStateToProps = (state, props) => {
  return { ...state.auth };
};
export default connect(
  mapStateToProps,
  { login, changeEmail, changePassword }
)(Auth);
