import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './navigation/home';
import ShowVideoContainer from './stream/show_video_container';
import { ProtectedRoute } from '../util/route_api_util';

const App = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <ProtectedRoute path='/:videoId' component={ShowVideoContainer} />
    </Switch>
  </div>
);

export default App;
