import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Card from '../components/Card';
import recipesContext from '../context/RecipesContext';

function Recipes({ location: { pathname }}) {
  const { isFilter, recipesToRender, whatIsRender} = useContext(recipesContext);
  return (
    <div>
      <Header page={ pathname } search />
      {
        isFilter ? recipesToRender.filter((_recipe, i) => i <= 11).map((recipe, i) => {
          if (whatIsRender === 'meals') {
            return <Card image={ recipe.strMealThumb } name={ recipe.strMeal } index={ i }/>
          }
          return <Card image={ recipe.strDrinkThumb } name={ recipe.strDrink } index={ i }/>
        }) : recipesToRender.map((recipe, i) => {
          if (whatIsRender === 'meals') {
            return <Card image={ recipe.strMealThumb } name={ recipe.strMeal } index={ i }/>
          }
          return <Card image={ recipe.strDrinkThumb } name={ recipe.strDrink } index={ i }/>
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
