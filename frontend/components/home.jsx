import React from 'react';
import LoginContainer from './session/login_container';
import StreamIndex from './stream/stream_index';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="main">
        <LoginContainer />
        <StreamIndex history={this.props.history}/>
      </div>
    )
  }
}

export default Home;
