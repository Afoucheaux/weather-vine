import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { HelperContextProvider } from './Context/HelperContext';

ReactDOM.render(
  <Auth0Provider
    domain="dev-jjgf5zq2.us.auth0.com"
    clientId="A3Zo1bv45OhHnUd9pl1aTWwgSZR8VMLG"
    redirectUri={window.location.origin}>
    <BrowserRouter>
      <HelperContextProvider>
        <App />
      </HelperContextProvider>
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById('root')
);

reportWebVitals();
