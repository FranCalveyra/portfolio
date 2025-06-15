import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// @ts-ignore
import App from './App.tsx';
// @ts-ignore
import reportWebVitals from "./reportWebVitals.ts";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="dark">
      <div className="min-h-screen bg-bg text-text">
        <App />
      </div>
    </div>
  </React.StrictMode>
);
reportWebVitals()
