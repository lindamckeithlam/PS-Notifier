import React from "react";
import { connect } from "react-redux";
import { Provider } from "react-redux";

import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar";
import { getChangelogHTML } from "./actions";

const mdp = dispatch => ({
  fetchChangelog: () => dispatch(getChangelogHTML())
});

class App extends React.Component {
  componentDidMount() {
    // on mount, check last time user viewed changelog to render the appropriate
    // notification number
    this.props.fetchChangelog();
  }
  render() {
    return (
      <Provider store={this.props.store}>
        <div className="App">
          <NavBar />
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </Provider>
    );
  }
}

export default connect(
  null,
  mdp
)(App);
