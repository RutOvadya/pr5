import React, { Component } from "react";
import Styles from "./Home.css"

//import './Home.css';
import Login from './Login';
import ViewInfoUser from './ViewInfoUser';
import ViewTodosUser from './ViewTodosUser';
import ViewPostsUser from './ViewPostsUser';
import ViewAlbumsUser from './ViewAlbumsUser';

class Home extends Component {
    constructor(props){
        super(props);
        this.getCurrentName = this.getCurrentName.bind(this);
        this.exit = this.exit.bind(this);
        this.showInfo = this.showInfo.bind(this);
        this.getCurrentUser = this.getCurrentUser.bind(this);
        this.getTodosById = this.getTodosById.bind(this);
        this.getPostsById = this.getPostsById.bind(this);
        this.getAlbumsById = this.getAlbumsById.bind(this);
        this.showPosts = this.showPosts.bind(this);
        this.showAlbums = this.showAlbums.bind(this);
        this.showTodos = this.showTodos.bind(this);
        this.state={
            contentValue:''
        };
        this.data={
            generalListPosts: [],
            generalListTodos: [],
            generalListAlbums: []
        };
    }

    
     getCurrentName(){
         var objUser=this.getCurrentUser();
         return objUser.name;
     }
     exit(){
        localStorage.removeItem("currentUser");
        //super.setState({contentValue: <Login/>});
        //חזרה לעמוד הכניסה
     }
     getCurrentUser(){
        var user= localStorage.getItem("currentUser");
        var objUser=JSON.parse(user);
        return objUser;
     }
     getAlbumsById(id){
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
           .then(response => {if(response.ok) {
                                 return response.json();    
                             } else{
                                throw "Request failed!";    
                         }
             })
           .then(listAlbums=> {if(listAlbums.length==0){
                             throw "You have not Albums";
                         }else{
                           this.data.generalListAlbums=listAlbums;
                           return listAlbums;
                         }
             })
           .catch(error=>alert(""+error));
    }
     getPostsById(id){
     fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(response => {if(response.ok) {
                              return response.json();    
                          } else{
                             throw "Request failed!";    
                      }
          })
        .then(listPosts=> {if(listPosts.length==0){
                          throw "You have not Posts";
                      }else{
                        this.data.generalListPosts=listPosts;
                        return listPosts;
                      }
          })
        .catch(error=>alert(""+error));
     }
     getTodosById(id){
     fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
        .then(response => {if(response.ok) {
                              return response.json();    
                          } else{
                             throw "Request failed!";    
                      }
          })
        .then(listTodos=> {if(listTodos.length==0){
                          throw "You have not Todos";
                      }else{
                        this.data.generalListTodos=listTodos;
                        return listTodos;
                      }
          })
        .catch(error=>alert(""+error));
     }
     showInfo(){
        var object= this.getCurrentUser();
        this.setState({contentValue: <ViewInfoUser user={object}/>});
     }
     showPosts(){
        var object= this.getCurrentUser();
        this.getPostsById(object.id);
        //גם פה רק בלחיצה השניה הוא מביא
        this.setState({contentValue: <ViewPostsUser listPosts={this.data.generalListPosts}/>});  
     }
     showTodos(){
        var object= this.getCurrentUser();
        this.getTodosById(object.id);
       // .. יש בעיה שהרשימה הכללית מתעדכנת רק בלחיצה השניה
        this.setState({contentValue: <ViewTodosUser listTodos={this.data.generalListTodos}/>});  
     }
     showAlbums(){
        var object= this.getCurrentUser();
        this.getAlbumsById(object.id);
        this.setState({contentValue: <ViewAlbumsUser listAlbums={this.data.generalListAlbums}/>});  
     }
    render(){
        return(
             <div id="homeContainer">
             <h1 id="currentName">Hello {this.getCurrentName()}</h1>
             <button id="exitIcon" className='fas' title="Logout" onClick={this.exit}>Logout &#xf2f6;</button>
             <button id="infoButton" className='fas' title="Info" onClick={this.showInfo}>Show My Info &#xf2bb;</button>
             <button id="postsButton" className='fas' title="Posts" onClick={this.showPosts}>Show My Posts &#xf07c;</button>
             <button id="todosButton" className='fas' title="Todos" onClick={this.showTodos}>Show My Todos &#xf044;</button>
             <button id="albumsButton" className='fas' title="Albums" onClick={this.showAlbums}>Show My Albums &#xf03e;</button>
             <div id="locationForContent">{this.state.contentValue}</div>
             <footer class="footer">COPYRIGHT © 2023 BY AVITAL & RUT</footer>
            </div>
        );
        
    };
}

export default Home;
