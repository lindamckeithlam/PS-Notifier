import React from "react";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import "./App.css";
import NavBar from "./NavBar";
import { getChangelogHTML } from "./actions";

const mdp = dispatch => ({
  fetchChangelog: () => dispatch(getChangelogHTML())
});

class App extends React.Component {
  componentDidMount() {
    this.props.fetchChangelog();
  }
  render() {
    return (
      <Provider store={this.props.store}>
        <div className="App">
          <NavBar />
          <header className="App-header">
            <img
              src={
                "https://screamless-seed.s3.us-east-2.amazonaws.com/panda.png"
              }
              className="App-logo"
              alt="logo"
            />

            <div className="personal-links">
              <a
                href="https://angel.co/linda-mckeith-lam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-angellist" />
              </a>
              <a
                href="https://www.linkedin.com/in/lindamckeithlam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                href="https://github.com/lindamckeithlam/PS-Notifier"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github" />
              </a>
            </div>
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
