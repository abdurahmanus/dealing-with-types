import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { EnumFromCore, InterfaceFromSomePlugin } from "@abdurahmanus/core";
import { init } from "@abdurahmanus/loader";

const a: InterfaceFromSomePlugin = {
  a: "111",
};

init(EnumFromCore.A, { a: "12" });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
