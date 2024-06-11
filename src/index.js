import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain = "dev-m70hy87aos1r3ere.us.auth0.com"
    clientId = "QkgYqFio0hXmzQ9AB0dFKQ7NHnDzS2RC"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
      
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
reportWebVitals();
