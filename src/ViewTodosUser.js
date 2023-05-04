import React, { Component } from "react";

class ViewTodosUser extends Component {
    constructor(props) {
      super(props);
    }

    render() {
     // console.log(this.props.listTodos) ;
      return (  
        <div>

            {this.props.listTodos.map((todo)=>{
              <p>{todo}</p>

            })}
        </div>
      );
    }
  }
   
  export default ViewTodosUser;