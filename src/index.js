import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { ContextProvider } from './Context/Context';

ReactDOM.render(
  	<React.StrictMode>
    	<ContextProvider>
    		<App />
    	</ContextProvider>
  </React.StrictMode>,
  document.getElementById('varia')
);