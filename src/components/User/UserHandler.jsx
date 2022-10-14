import React, { Component } from "react";
import AuthService from "../../services/auth.service";
import { Redirect } from "react-router-guard";



export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    
    const { currentUser } = this.state;
    

    return (
      <div className="container">
      {(this.state.userReady) ?
      <div>
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong>{" "}
        {currentUser.accessToken}
      </p>
      <p>
        <strong>Id:</strong>{" "}
        {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong>{" "}
        {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
    </div>: null}
    </div>
    );
  }
}


export var userName = String('Nathan Aruna');

export var aboutMe = String('The about me part of the profile goes here.');

export var userEmail = String('Example Email');

export var activity = String('Online');

export var userImage = String('https://avatars.githubusercontent.com/u/110752227?s=160&v=4')

export var followerCount = 10

export var followingCount = 10
