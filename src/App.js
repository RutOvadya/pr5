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

    // this.setState({contentValue: <ViewInfoUser user={object}/>});
  
    if(localStorage.getItem("currentUser")){
      this.setState({contentValue: <Home/>});
      // return (<div>
      //   <Home/>
      // </div>);
    }
    else{
      this.setState({contentValue: <Login/>});

      // return (<div>
      //   <Login/>
      // </div>);
    }
    return (
      <div>
        {this.state.contentValue}
      </div>
    );
//  return(
//     <div>
//       <Login/>
//     <Home/>
//     </div>
//   );
  } 
}

export default App;
