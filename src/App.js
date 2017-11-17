// @flow
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <div className="w-screen h-screen flex flex-col justify-center align-center bg-grey-darker">
        <div className="mx-auto max-w-sm rounded overflow-hidden shadow-lg bg-grey-lighter">
          <img src={logo} className="w-full mx-auto h-24 app-logo" alt="logo" />
          <div className="px-6 px-4 mb-6">
            <div className="font-bold text-xl mb-2">Welcome to React</div>
            <p className="text-grey-darker text-base">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
