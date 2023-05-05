import React, { Component } from "react";

class ViewPostsUser extends Component {
    constructor(props) {
      super(props);
      this.boldThePost = this.boldThePost.bind(this);
      this.showComments = this.showComments.bind(this);
    }

    showComments(id){

    }
    boldThePost(id){
      var body= document.getElementById("postBody");
      var currentPost= this.props.listPosts[id-1];
     // body.innerText=currentPost.body;//זה הרציונאל,  להציג את גוף הפוסט
    }

    render() {
      return (  
        <div>
            {this.props.listPosts.map((post)=>(
            <div>
                <a href={this.boldThePost(post.id)}>{post.id}. {post.title}</a>  
                <p id="postBody"></p>    
                <button id="commentsBtn" className='fas' title="Comments" onClick={this.showComments(post.id)}>View the comments &#xf086;</button>    
             </div>        
          ))}
        </div>
      );
    }
  }
   
  export default ViewPostsUser;