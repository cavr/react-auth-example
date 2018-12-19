import React, { Component } from "react";
import { Link } from "react-router-dom";

class PrivateSection extends Component {
  state = {
    inputValue: ""
  };
  render() {
    return (
      <div style={{ padding: "64px" }}>
        <h3 style={{ color: "green" }}>Private</h3>
        <p style={{ width: "100%", overflow: "scroll" }}>
          {JSON.stringify(this.props.user)}
        </p>
        <input
          type="text"
          value={this.state.inputName}
          onChange={e =>
            this.setState({
              inputName: e.target.value
            })
          }
        />
        <div style={{ marginTop: "32px" }}>
          <Link onClick={() => this.props.logOut()} to="/auth">
            LOGOUT
          </Link>
        </div>
      </div>
    );
  }
}

export default PrivateSection;