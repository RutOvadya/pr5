import React, { Component } from "react";
import './Login.css';

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
            <div id="loginContainer">
                <h1 id="welcome">WELCOME</h1>
                <form>
                <label class="label" htmlFor="name">name: </label>
                <input class="box" type="text" id="username" name="name" required></input>
                <label class="label" htmlFor="password"> password: </label>
                <input class="box" type="text" id="password" name="password" required></input>
                </form>               
                <button id="login" onClick={this.loginFunction}>Login</button>
                <footer class="footer">COPYRIGHT © 2023 BY AVITAL & RUT</footer>
            </div>
        );
    };
   
}

export default Login;
