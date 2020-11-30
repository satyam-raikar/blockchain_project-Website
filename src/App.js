import logo_white from './images/logo_white.png';

import './App.css';
import { Button } from '@material-ui/core';


import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from './Pages/NavBar';
import Home from './Pages/Home' 

function App() {
  return (
    <div className="App">
      
      <NavBar />
      <Home/>
      
      <footer>


        <Button varient="filled">
          test
        </Button>
        
        
      </footer>

    </div>
  );
}

export default App;
