import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onSignIn = this.onSignIn.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    if (this.props.currentUser) {
      return;
    }
    gapi.signin2.render('g-signin2', {
      'scope': 'https://www.googleapis.com/auth/plus.login',
      'width': 170,
      'height': 32,
      'longtitle': true,
      'theme': 'light',
      'onsuccess': this.onSignIn
    });
  }

  onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    let user = {
      name: profile.getGivenName(),
      image: profile.getImageUrl(),
      uid: profile.getId()
    }
    this.props.login(user);
  }

  logout() {
    gapi.auth2.getAuthInstance().signOut();
    this.props.logout();
  }

  render() {
    let currentUser = this.props.currentUser, login;
    if (currentUser) {
      login = (
        <div className='login'>
          <span className='white'>Hey, {currentUser.name}!</span>
          <div className='logout' onClick={this.logout}></div>
        </div>
      )
    } else {
      currentUser = { name: '' };
      login = (
        <div className='login'>
          <div id="g-signin2" data-onsuccess={this.onSignIn}></div>
        </div>
      )
    }
    return(login);
  }
}

export default Login;
