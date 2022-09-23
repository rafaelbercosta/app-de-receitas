import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import RecipiesProvider from './context/RecipiesProvider';
import Login from './pages/Login';

function App() {
  return (
    <RecipiesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          {/* <Route path='/meals' component={ } />
          <Route path='/drinks' component={ } />
          <Route path='/meals/:id' component={ } />
          <Route path='/drinks/:id' component={ } />
          <Route path='/meals/:id/in-progress' component={ } />
          <Route path='/drinks/:id/in-progress' component={ } />
          <Route path='/profile' component={ } />
          <Route path='/done-recipes' component={ } />
          <Route path='/favorite-recipes' component={ } /> */}
        </Switch>
      </BrowserRouter>
    </RecipiesProvider>

  );
}

export default App;
