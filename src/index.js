import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from "react-router-dom";
import './index.css';
import App from './App';
import { SpeedInsights } from "@vercel/speed-insights/react"

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('index.js')
root.render(
  <React.StrictMode> 
    <Router>
      <App />
      <SpeedInsights />
    </Router>
  </React.StrictMode>
);