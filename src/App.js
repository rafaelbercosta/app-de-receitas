import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RecipesProvider from './context/RecipesProvider';
import Login from './pages/Login';
import Recipes from './pages/Recipes';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';

function App() {
  return (
    <RecipesProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/meals" component={ Recipes } />
        {/* <Route path="/drinks" component={ } />
        <Route path="/meals/:id" component={  } />
        <Route path="/drinks/:id" component={ } />
        <Route path="/meals/:id/in-progress" component={ } />
        <Route path="/drinks/:id/in-progress" component={ } /> */}
        <Route path="/profile" component={ Profile } />
        <Route path="/done-recipes" component={ DoneRecipes } />
        <Route path="/favorite-recipes" component={ FavoriteRecipes } />
      </Switch>
    </RecipesProvider>
  );
}

export default App;
