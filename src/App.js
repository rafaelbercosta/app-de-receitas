import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RecipiesProvider from './context/RecipiesProvider';
import Login from './pages/Login';
import Recipes from './pages/Recipes';

function App() {
  return (
    <RecipiesProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/meals" component={ Recipes } />
        {/* <Route path='/drinks' component={ } />
        <Route path='/meals/:id' component={  } />
        <Route path='/drinks/:id' component={ } />
        <Route path='/meals/:id/in-progress' component={ } />
        <Route path='/drinks/:id/in-progress' component={ } />
        <Route path='/profile' component={ } />
        <Route path='/done-recipes' component={ } />
        <Route path='/favorite-recipes' component={ } /> */}
      </Switch>
    </RecipiesProvider>
  );
}

export default App;
