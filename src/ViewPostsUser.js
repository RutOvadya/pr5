import React, { Component } from "react";

class ViewPostsUser extends Component {
    constructor(props) {
      super(props);
      this.boldThePost = this.boldThePost.bind(this);
      this.showComments = this.showComments.bind(this);
      this.state={
        cuurentPost:""
      };
    }

    showComments(){

    }
    boldThePost(){
        return <div>
            <p>{this.state.cuurentPost.body}</p>
            <button id="commentsBtn" className='fas' title="Comments" onClick={this.showComments}>View the comments &#xf086;</button> 
           </div> 
    }

    render() {
      return (  
        <div>
            {this.props.listPosts.map((post)=>(
                this.setState({cuurentPost:post}),
            <div>
                <a onClick={this.boldThePost}>{post.id}. {post.title}</a>  
                {/* <p id="postBody">{post.body}</p>            */}
             </div> 
             
          ))}
        </div>
      );
    }
  }
   
  export default ViewPostsUser;