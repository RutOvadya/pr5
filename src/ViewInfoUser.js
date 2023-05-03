import React, { Component } from "react";

class ViewInfoUser extends Component {
    constructor(props) {
      super(props);
    }

    render() { 
      return (  
        <div>
            <p>name: {this.props.user.name}</p>
            <p>user name: {this.props.user.username}</p>
            <p>email: {this.props.user.email}</p>
            <p>phone: {this.props.user.phone}</p>
            <p>website: {this.props.user.website}</p>
            <p>address:</p>
            <p>street: {this.props.user.address.street}<br>
            </br>   suite: {this.props.user.address.suite}<br>
            </br>   city: {this.props.user.address.city}<br>
            </br>   zipcode: {this.props.user.address.zipcode}<br>
            </br>   geo: lat: {this.props.user.address.geo.lat} lng: {this.props.user.address.geo.lng}</p>
            <p>company:</p>
            <p>   name: {this.props.user.company.name}<br>
            </br>   catchPhrase: {this.props.user.company.catchPhrase}<br>
            </br>   bs: {this.props.user.company.bs}</p>
        </div>
      );
    }
  }
   
  export default ViewInfoUser;