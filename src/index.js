import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./globalStyles"; //styles will apply to the whole app

ReactDOM.render(
  <React.StrictMode>

    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
