import React, { Component } from "react";
import { Provider } from "react-redux";
import Firebase from "./firebase";
import store from "./store";
import Router from "./Router";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    Firebase();
  }
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
