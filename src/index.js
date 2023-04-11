// IMPORTING BrowserRouter COMPONENT
import { BrowserRouter } from "react-router-dom";
// IMPORTING THE CountryInfo-Context-Provider
import { CountryInfoProvider } from "./CountryInfoContext/CountryInfoContext";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CountryInfoProvider>
        <App />
      </CountryInfoProvider>
    </BrowserRouter>
  </React.StrictMode>
);
