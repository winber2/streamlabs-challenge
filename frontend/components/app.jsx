import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import ShowVideo from './stream/show_video';

const App = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/:videoId' component={ShowVideo} />
    </Switch>
  </div>
);

export default App;
