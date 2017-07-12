import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onSignIn = this.onSignIn.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    gapi.signin2.render('g-signin2', {
      'scope': 'https://www.googleapis.com/auth/plus.login',
      'width': 200,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': this.onSignIn
    });
  }

  onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    let user = {
      name: profile.getName()
    }
    this.props.login(user);
  }

  logout() {
    gapi.auth2.getAuthInstance().signOut();
    this.props.logout();
  }

  render() {
    let currentUser = this.props.currentUser || { name: '' }
    return(
      <div>
        <span>{currentUser.name}</span>
        <div id="g-signin2" data-onsuccess={this.onSignIn}></div>
        <div onClick={this.logout}>LOGOUT</div>
      </div>
    )
  }
}

export default Login;
