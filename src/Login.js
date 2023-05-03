//import './Login.css';
import React, { Component } from "react";

class Login extends Component {
    constructor(props){
        super(props);
    }
    loginFunction() {
        var username=document.getElementById('username');
        var password=document.getElementById('password');
        fetch(`https://jsonplaceholder.typicode.com/users?username=${username.value}`)
      .then(response => {if(response.ok) {
                            return response.json();    
                        } else{
                           throw "Request failed!";    
                    }
        })
      .then(checkUser=> {if(checkUser.length==0){
                        throw "The name is not valid";
                    }else{
                        return checkUser[0];
                    }
        })
      .then(myUser=>{ 
        if(password.value==myUser.address.geo.lat.slice(-4))
        {
            return JSON.stringify(myUser);
        } else{
            throw "The password is not valid";
        }
    })
      .then(userJSON => { window.localStorage.setItem("currentUser", userJSON); }) 
      .catch(error=>alert(""+error));

    }

    render(){
        return(
            <div>
                <h1>WELCOME</h1>
                <form>
                <label htmlFor="name">name</label>
                <input type="text" id="username" name="name" required></input>
                <label htmlFor="password">password</label>
                <input type="text" id="password" name="password" required></input>
                </form>               
                <button id="login" onClick={this.loginFunction}>Login</button>
            </div>
        );
    };
   
}

export default Login;
