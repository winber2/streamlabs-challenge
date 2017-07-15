import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './navigation/home';
import ShowVideoContainer from './stream/show_video_container';

const App = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/:videoId' component={ShowVideoContainer} />
    </Switch>
  </div>
);

export default App;
