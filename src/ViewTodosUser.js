import React, { Component } from "react";

class ViewTodosUser extends Component {
    constructor(props) {
      super(props);
    }

    render() {
     console.log(typeof(this.props.listTodos[0])) ;
      return (  
        <div>
            {this.props.listTodos.map((todo)=>(
              <div>
                <p><input type="checkbox" defaultChecked={todo.completed}/>{todo.title}</p>             
              </div> 
          ))}
        </div>
      );
    }
  }
   
  export default ViewTodosUser;