import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { Provider as ReduxProvider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ReduxProvider> */}
      <App />
      {/* </ReduxProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
