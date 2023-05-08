import React, { Component } from "react";

class ViewAlbumsUser extends Component {
    constructor(props) {
      super(props);
      this.ViewThePhotos = this.ViewThePhotos.bind(this);
    }

    ViewThePhotos(id){

    }

    render() { 
      return (  
        <div>
            {this.props.listAlbums.map((album)=>(
            <div>
                <a href={this.ViewThePhotos(album.id)}>{album.title}</a>  
             </div>        
          ))}
        </div>
      );
    }
  }
   
  export default ViewAlbumsUser;