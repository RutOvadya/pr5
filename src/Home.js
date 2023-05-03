import React, { Component } from "react";
import ViewInfoUser from './ViewInfoUser';
import ViewTodosUser from './ViewTodosUser';

class Home extends Component {
    constructor(props){
        super(props);
        this.getCurrentName = this.getCurrentName.bind(this);
        this.exit = this.exit.bind(this);
        this.showInfo = this.showInfo.bind(this);
        this.getCurrentUser = this.getCurrentUser.bind(this);
        this.getTodosById = this.getTodosById.bind(this);
        this.showPosts = this.showPosts.bind(this);
        this.showAlbums = this.showAlbums.bind(this);
        this.showTodos = this.showTodos.bind(this);
        this.state={
            contentValue:''
        };
    }

    
     getCurrentName(){
         var objUser=this.getCurrentUser();
         return objUser.name;
     }
     exit(){
        localStorage.removeItem("currentUser");
        //חזרה לעמוד הכניסה
     }
     getCurrentUser(){
        var user= localStorage.getItem("currentUser");
        var objUser=JSON.parse(user);
        return objUser;
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
        

     }
     showTodos(){
        var object= this.getCurrentUser();
        var listTodos= this.getTodosById(object.id);
        this.setState({contentValue: <ViewTodosUser listTodos={listTodos}/>});  
     }
     showAlbums(){

     }
    render(){
        return(
             <div>
             <h1>{this.getCurrentName()}</h1>
             <button id="exitIcon" className="material-icons" title="Logout" onClick={this.exit}> &#xe879;</button>
             <button id="infoButton" title="Info" onClick={this.showInfo}>Show My Info</button>
             <button id="postsButton" title="Posts" onClick={this.showPosts}>Show My Posts</button>
             <button id="todosButton" title="Todos" onClick={this.showTodos}>Show My Todos</button>
             <button id="albumsButton" className='fas' title="Albums" onClick={this.showAlbums}>Show My Albums &#xf03e;</button>
             <div id="locationForContent">{this.state.contentValue}</div>
            </div>
        );
        
    };
}

export default Home;
