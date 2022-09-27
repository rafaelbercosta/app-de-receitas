import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Card from '../components/Card';
import recipesContext from '../context/RecipesContext';
import fetchMeals from '../services/fetchMeals';
import fetchDrinks from '../services/fetchDrinks';

const MAXIMUM_CARD = 11;

function Recipes({ location: { pathname } }) {
  const { recipesToRender,
    setRecipesToRender,
    setDrinks,
    setMeals } = useContext(recipesContext);

  const requisitions = async () => {
    const meals = await fetchMeals();
    const drinks = await fetchDrinks();
    if (pathname === '/meals') {
      setRecipesToRender(meals);
    } else {
      setRecipesToRender(drinks);
    }
    setDrinks(drinks);
    setMeals(meals);
  };

  useEffect(() => {
    requisitions();
  }, []);

  return (
    <div>
      <Header page={ pathname } search />
      {
        recipesToRender.filter((_recipe, i) => i <= MAXIMUM_CARD)
          .map((recipe, i) => {
            if (pathname === '/meals') {
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
