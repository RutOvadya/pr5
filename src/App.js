import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import Login from './Login';
import Home from './Home';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      contentValue:''
  };
  }

  render(){
    if(localStorage.getItem("currentUser")){
      this.setState({contentValue: <Home/>});
    }
    else{
      this.setState({contentValue: <Login/>});
    }
    return (
      <div>
        {this.state.contentValue}
      </div>
    );
  } 
}

export default App;

// import React from "react";
// import { useState, useEffect, useRef } from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import './App.css';
// import Layout from "./Layout";
// // import Login from "./Login";
// // import Home from "./Home";
// import NoPage from "./NoPage";

// export default function App() {
//   const isLoggedIn = localStorage.getItem("currentUser") != null;

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={isLoggedIn ? <Layout /> : <Navigate to="/login" />}>
//           <Route index element={<Home />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//         <Route path="/login" element={!isLoggedIn ? <Login /> : <Navigate to="/" />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
// function Home() {
//   return(<div>hi</div>);
// }
// function Login() {
//     return(<div>login page</div>);
// }
