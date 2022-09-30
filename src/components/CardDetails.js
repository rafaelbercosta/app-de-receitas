import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { setStorage, getStorage } from '../services/Storage';
import recipesContext from '../context/RecipesContext';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function CardDetails({ recipe, pathname }) {
  const { setFavoriteRecipes, favoriteRecipes } = useContext(recipesContext);

  const objectEntries = Object.entries(recipe);

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
      {
        pathname.includes('meals') ? (
          <div>
            <img
              src={ recipe.strMealThumb }
              alt={ recipe.strMeal }
              data-testid="recipe-photo"
            />
            <button
              type="button"
              data-testid="share-btn"
            >
              Share
            </button>
            <img
              aria-hidden="true"
              src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
              alt="blackHeartIcon"
              data-testid="favorite-btn"
              onClick={ handleClickFavoriteBtn }
            />
            <h1 data-testid="recipe-title">{ recipe.strMeal }</h1>
            <p data-testid="recipe-category">{recipe.strCategory}</p>
            <ul>
              {
                objectEntries
                  .filter((entrie) => entrie[0].includes('strIngredient') && entrie[1])
                  .map((ingredient, i) => (
                    <li key={ i } data-testid={ `${i}-ingredient-name-and-measure` }>
                      {ingredient && `${ingredient[1]}: ${objectEntries
                        .filter((measure) => (
                          measure[0].includes('strMeasure') && measure[1]
                        ))[i]}`}
                    </li>
                  ))
              }
            </ul>
            <p data-testid="instructions">{recipe.strInstructions}</p>
            <iframe
              title={ recipe.strMeal }
              width="420"
              height="315"
              data-testid="video"
              src={ recipe.strYoutube }
            />
          </div>
        ) : (
          <div>
            <img
              src={ recipe.strDrinkThumb }
              alt={ recipe.strDrink }
              data-testid="recipe-photo"
            />
            <button
              type="button"
              data-testid="share-btn"
            >
              Share
            </button>
            <img
              aria-hidden="true"
              src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
              alt="blackHeartIcon"
              data-testid="favorite-btn"
              onClick={ handleClickFavoriteBtn }
            />
            <h1 data-testid="recipe-title">{ recipe.strDrink }</h1>
            <p data-testid="recipe-category">
              {
                `${recipe.strCategory} ${recipe.strAlcoholic}`
              }
            </p>
            <ul>
              {

                objectEntries
                  .filter((entrie) => entrie[0].includes('strIngredient') && entrie[1])
                  .map((ingredient, i) => {
                    console.log(ingredient[1]);
                    return (
                      <li key={ i } data-testid={ `${i}-ingredient-name-and-measure` }>
                        {ingredient && `${ingredient[1]}: ${objectEntries
                          .filter((amount) => (
                            amount[0].includes('strMeasure') && amount[1]
                          ))[i][1]}`}
                      </li>
                    );
                  })
              }
            </ul>
            <p data-testid="instructions">{recipe.strInstructions}</p>
          </div>
        )
      }
    </div>
  );
}

CardDetails.propTypes = {
  pathname: PropTypes.string.isRequired,
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

export default CardDetails;
