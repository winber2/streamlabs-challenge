import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: '' };
    this.onSignIn = this.onSignIn.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    if (this.props.currentUser) {
      return;
    }
    if (document.getElementById('g-signin2')) {
      gapi.signin2.render('g-signin2', {
        'scope': 'https://www.googleapis.com/auth/plus.login',
        'width': 170,
        'height': 35,
        'longtitle': true,
        'theme': 'light',
        'onsuccess': this.onSignIn
      });
    }
    setTimeout(() => this.activateSignin(), 600);
  }

  activateSignin() {
    if (!this.props.currentUser) this.setState({ active: 'active' });
  }

  onSignIn(googleUser) {
    this.setState({ active: '' });
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
    this.setState({ active: 'active' })
  }

  render() {
    let currentUser = this.props.currentUser, login;
    if (currentUser) {
      login = (
        <div className='greeting'>
          <span className='white'>Hey, {currentUser.name}!</span>
          <div className='logout' onClick={this.logout}></div>
        </div>
      )
    } else {
      currentUser = { name: '' };
    }
    return(
      <div className='login'>
        {login}
        <div className={`google-signin ${this.state.active}`} id="g-signin2" data-onsuccess={this.onSignIn}></div>
      </div>
    )
  }
}

export default Login;
