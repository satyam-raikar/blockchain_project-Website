import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './Pages/NavBar';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home'

ReactDOM.render(
  
  <Router>
          <div className="App">
            <NavBar />
            
            <Routes />
        </div>
  </Router>,
  document.getElementById('root')
);



