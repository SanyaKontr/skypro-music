import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { IndexStyles } from "./index.styles.js";
import { Provider } from "react-redux";
import { store } from "./Store/store.js";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <IndexStyles />
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
      </Provider>
  </React.StrictMode>
</>
);
