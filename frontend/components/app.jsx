import React from 'react';
import LoginContainer from './session/login_container';
import StreamIndex from './stream/stream_index';

const App = () => (
  <div>
    <LoginContainer />
    <StreamIndex />
    <div id='messages'></div>
  </div>
);

export default App;
