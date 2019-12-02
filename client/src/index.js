import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./global.scss";

import AuthProvider from "./context/auth/AuthState";
import AlertProvider from "./context/alert/AlertState";

import App from "./components/App";

ReactDOM.render(
  <AlertProvider>
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </AlertProvider>,
  document.querySelector("#root")
);
