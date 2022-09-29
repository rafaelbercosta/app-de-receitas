import React, { useState } from 'react';
import PropTypes from 'prop-types';
import recipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [user, setUser] = useState('');
  const [drinks, setDrinks] = useState([]);
  const [meals, setMeals] = useState([]);
  const [recipesToRender, setRecipesToRender] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  const [whatIsRender, setWhatIsRender] = useState('meals');
  const [CategoriesFilter, setCategoriesFilter] = React.useState([]);
  const contextValues = {
    user,
    setUser,
    drinks,
    setDrinks,
    meals,
    setMeals,
    recipesToRender,
    setRecipesToRender,
    isFilter,
    setIsFilter,
    whatIsRender,
    setWhatIsRender,
    CategoriesFilter,
    setCategoriesFilter,
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
