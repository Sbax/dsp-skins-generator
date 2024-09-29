import React from "react";
import ReactDOM from "react-dom/client";

import Home from "pages/Home";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Route } from "wouter";
import Description from "pages/Description";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <main className="p-4">
      <Route path="/">
        <Home />
      </Route>
      <Route path="/about">
        <Description />
      </Route>
    </main>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
