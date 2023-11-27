import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import { ShowEmulationApp } from "./components/Emulation/EmulationApp.jsx";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ShowEmulationApp />;
  </React.StrictMode>
);