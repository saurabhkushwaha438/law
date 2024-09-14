// Import the necessary modules
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Find the root element where the app will be rendered
const container = document.getElementById('root');

// Create a root and render the app
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
