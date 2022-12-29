import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import {
  InterfaceFromCore,
  EnumFromCore,
  ObjFromCore,
  InterfaceFromSomePlugin,
  InterfaceFromSomePlugin2,
  Enum1FromSomePlugin3,
  Enum2FromSomePlugin3,
  InterfaceFromSomePluginMultipleDeclarationMerging,
  UnionFromSomePluginMultipleDeclarationMerging,
} from "@abdurahmanus/core";

const a: InterfaceFromCore = {
  a: "22",
};

const b: InterfaceFromSomePlugin = {
  a: "12",
};

const c: InterfaceFromSomePlugin2 = {
  b: 1,
};

const d = EnumFromCore.A;

const e = ObjFromCore.B;

// this doesn't work (breaks compilation)
// const e1 = Enum1FromSomePlugin3.A;
// const e2 = Enum2FromSomePlugin3.C;

const f: InterfaceFromSomePluginMultipleDeclarationMerging = {
  b: 1,
  c: true,
};

const g: UnionFromSomePluginMultipleDeclarationMerging = "bar";

console.log({ a, b, c, d, e, f, g });

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
