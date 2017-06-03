import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WelcomePage from './WelcomePage'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<WelcomePage />, document.getElementById('root'));
registerServiceWorker();
