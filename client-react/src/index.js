import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Menu from './Menu';
import ListEmployees from './ListEmployees';
import CreateEmployee from './CreateEmployee';
import Login from './Login';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';
import "./index.css";
 

// render main component
ReactDOM.render(<Main />, document.getElementById('root'));

registerServiceWorker();
