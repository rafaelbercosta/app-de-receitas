import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setStorage, getStorage } from '../services/Storage';
import recipesContext from '../context/RecipesContext';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function FavoriteBtn({ recipe }) {
  const { setFavoriteRecipes, favoriteRecipes } = useContext(recipesContext);
  const { pathname } = useLocation();

  const id = pathname.includes('/meals') ? recipe.idMeal : recipe.idDrink;
  const isFavorite = [...getStorage('favoriteRecipes')]
    .some((favorite) => favorite.id === id);

  const handleClickFavoriteBtn = () => {
    const addNewFavorite = [...favoriteRecipes,
      {
        id: pathname.includes('/meals') ? recipe.idMeal : recipe.idDrink,
        type: pathname.includes('/meals') ? 'meal' : 'drink',
        nationality: pathname.includes('/meals') ? recipe.strArea : '',
        category: recipe.strCategory,
        alcoholicOrNot: pathname.includes('/meals') ? '' : recipe.strAlcoholic,
        name: pathname.includes('/meals') ? recipe.strMeal : recipe.strDrink,
        image: pathname.includes('/meals') ? recipe.strMealThumb : recipe.strDrinkThumb,
      }];

    const removeFavorite = [...favoriteRecipes].filter((favorite) => favorite.id !== id);

    if (isFavorite) {
      setStorage('favoriteRecipes', removeFavorite);
      setFavoriteRecipes(removeFavorite);
      console.log(isFavorite, favoriteRecipes, id);
    } else {
      setStorage('favoriteRecipes', addNewFavorite);
      setFavoriteRecipes(addNewFavorite);
    }
  };

  return (
    <div>
      <img
        aria-hidden="true"
        src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
        alt={ isFavorite ? 'blackHeartIcon' : 'whiteHeartIcon' }
        data-testid="favorite-btn"
        onClick={ handleClickFavoriteBtn }
      />
    </div>
  );
}

FavoriteBtn.propTypes = {
  recipe: PropTypes.shape({
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strArea: PropTypes.string,
    strCategory: PropTypes.string,
    strInstructions: PropTypes.string,
    strYoutube: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strDrink: PropTypes.string,
    strAlcoholic: PropTypes.string,
    idMeal: PropTypes.string,
    idDrink: PropTypes.string,
  }).isRequired,
};

export default FavoriteBtn;
