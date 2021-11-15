import ReactDOM from 'react-dom';
import './style/index.scss';

import {
    BrowserRouter,
} from "react-router-dom";

import App from './app/App';

import AuthProvider from './app/Authorization/AuthProvider';

ReactDOM.render( 
  <BrowserRouter>
  <AuthProvider> 
    <App />
    </AuthProvider>
  </BrowserRouter>,
    document.getElementById('root')
);