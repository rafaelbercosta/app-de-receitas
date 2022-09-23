import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={} />
      <Route  path='/meals' component={} />
      <Route  path='/drinks' component={} />
      <Route  path='/meals/:id' component={} />
      <Route  path='/drinks/:id' component={} />
      <Route  path='/meals/:id/in-progress' component={} />
      <Route  path='/drinks/:id/in-progress' component={} />
      <Route  path='/profile' component={} />
      <Route  path='/done-recipes' component={} />
      <Route  path='/favorite-recipes' component={} />
    </Switch>

  );
}

export default App;
