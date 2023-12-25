import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { IndexStyles } from "./index.styles.js";
import { ShowEmulationApp } from "./components/Emulation/EmulationApp.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <IndexStyles />
    <React.StrictMode>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </React.StrictMode>
  </>
);
