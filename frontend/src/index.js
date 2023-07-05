import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider, UserDataProvider } from "./context";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <UserDataProvider>
        <Router>
          <App />
        </Router>
      </UserDataProvider>
    </AuthProvider>
   </React.StrictMode>
);

reportWebVitals();
