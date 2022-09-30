import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { getStorage } from '../services/Storage';

function FavoriteRecipes({ location: { pathname } }) {
  const [favoriteRecipes, setFavoriteRecipe] = useState([]);
  useEffect(() => {
    console.log(getStorage('favoriteRecipes'));
    setFavoriteRecipe(getStorage(favoriteRecipes));
  });
  return (
    <div>
      <Header page={ pathname } search={ false } />
      <button
        type="button"
        data-testid="filter-by-all-btn"
        value="all"
        /* onClick={ onClickChange } */
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-meal-btn"
        value="meal"
        /* onClick={ onClickChange } */
      >
        Meals
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        value="drink"
        /* onClick={ onClickChange } */
      >
        Drinks
      </button>
    </div>
  );
}

FavoriteRecipes.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default FavoriteRecipes;
