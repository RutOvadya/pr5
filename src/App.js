import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import Login from './Login';
import Home from './Home';
class App extends Component {

  render(){

 return(
    <div>
      <Login/>
    <Home/>
    </div>
  );

    
  } 
}

export default App;
