import React, { useState } from 'react';
import PropTypes from 'prop-types';
import recipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [user, setUser] = useState('');
  const [drinks, setDrinks] = useState([]);
  const [meals, setMeals] = useState([]);
  const [recipesToRender, setRecipesToRender] = useState([]);

  const contextValues = {
    user,
    setUser,
    drinks,
    setDrinks,
    meals,
    setMeals,
    recipesToRender,
    setRecipesToRender,
  };
  return (
    <recipesContext.Provider value={ contextValues }>
      { children }
    </recipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
