import React, { Component } from "react";

class ViewTodosUser extends Component {
    constructor(props) {
      super(props);
    }

    render() { 
      return (  
        <div>

            {this.props.listTodos.map(todo=>{

            })}
        </div>
      );
    }
  }
   
  export default ViewTodosUser;