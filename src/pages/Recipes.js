import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Card from '../components/Card';
import recipesContext from '../context/RecipesContext';

const MAXIMUM_CARD = 11;

function Recipes({ location: { pathname } }) {
  const { isFilter, recipesToRender, whatIsRender } = useContext(recipesContext);
  return (
    <div>
      <Header page={ pathname } search />
      {
        isFilter ? recipesToRender.filter((_recipe, i) => i <= MAXIMUM_CARD)
          .map((recipe, i) => {
            if (whatIsRender === 'meals') {
              return (
                <Card
                  image={ recipe.strMealThumb }
                  name={ recipe.strMeal }
                  index={ i }
                />
              );
            }
            return (
              <Card
                key={ `${i}-${recipe.strDrink}` }
                image={ recipe.strDrinkThumb }
                name={ recipe.strDrink }
                index={ i }
              />
            );
          }) : recipesToRender.map((recipes, i) => {
          if (whatIsRender === 'meals') {
            return (
              <Card
                image={ recipes.strMealThumb }
                name={ recipes.strMeal }
                index={ i }
              />
            );
          }
          return (
            <Card
              key={ `${i}-${recipes.strDrink}` }
              image={ recipes.strDrinkThumb }
              name={ recipes.strDrink }
              index={ i }
            />
          );
        })
      }
      <Footer />
    </div>
  );
}

Recipes.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Recipes;
