// Import the necessary modules
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

// Find the root element where the app will be rendered
const container = document.getElementById('root');

// Create a root and render the app
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Auth0Provider
    domain="dev-qc2i8zmaeh5535u5.us.auth0.com"
    clientId="aR0YD2w6ssB5Igf1yRXUSFou7iLUYbME"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
  </BrowserRouter>
  
);
