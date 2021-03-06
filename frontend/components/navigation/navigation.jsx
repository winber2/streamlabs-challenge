import React from 'react';
import LoginContainer from '../session/login_container';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.toHome = this.toHome.bind(this);
    this.search = this.search.bind(this);
  }

  toHome() {
    this.props.history.push('/');
  }

  search(e) {
    if (e.keyCode === 13) {
      this.props.history.push('/');
      this.props.handleSubmit(e);
    }
  }

  render() {
    return(
      <header className='home'>
        <nav className='home'>
          <ul className='home'>
            <li onClick={this.toHome}><span className='white'>stream</span><span className='green'>play</span></li>
            <li className='search'><input onKeyDown={this.search} ></input></li>
          </ul>
          <li className='login'>
            <div className={`require-signin ${this.props.active}`}>
              <span>Please sign in first</span>
            </div>
            <LoginContainer />
          </li>
        </nav>
      </header>
    )
  }
}

export default Navigation;
