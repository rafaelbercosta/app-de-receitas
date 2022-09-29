import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import { useLocation } from 'react-router-dom';
import CardDetails from '../components/CardDetails';
import CardRecommendation from '../components/CardRecommendation';
import { getStorage } from '../services/Storage';
import { fetchDetailsDrinks, fetchDetailsMeals } from '../services/fetchDetails';
import { fetchDrinksRecommendation,
fetchMealsRecommendation } from '../services/fetchRecommendation';
import '../styles/RecipeDetails.css';

const LIMIT_OF_RECOMMENDATION = 5;

function RecipeDetails() {
  const { pathname } = useLocation();
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [recommendation, setRecommendation] = useState([]);
  const [doneRecipes, setDoneRecipes] = useState([]);

  const urlSplit = pathname.split('/');

  const fetchDetail = async () => {
    setDoneRecipes(getStorage('doneRecipes'));

    if (pathname.includes('meals')) {
      const mealDetails = await fetchDetailsMeals(urlSplit[2]);
      const drinksRecommendation = await fetchDrinksRecommendation();
      setRecipeDetails(mealDetails);
      setRecommendation(drinksRecommendation);
    } else {
      const drinkDetails = await fetchDetailsDrinks(urlSplit[2]);
      const mealsRecommendation = await fetchMealsRecommendation();
      setRecipeDetails(drinkDetails);
      setRecommendation(mealsRecommendation);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  return (
    <section>
      {
        recipeDetails.map((details, i) => (
          <CardDetails
            key={ `${i}-${pathname}` }
            recipe={ details }
            pathname={ pathname }
          />
        ))
      }
      <h1>Recommended</h1>
      <Carousel>
        {
          recommendation && recommendation.filter((_, i) => i <= LIMIT_OF_RECOMMENDATION)
            .map((sugestion, index) => (
              <CardRecommendation
                index={ index }
                sugestion={ sugestion }
                pathname={ pathname }
                key={ `recommendation-${index}` }
              />
            ))
        }
      </Carousel>
      {
        doneRecipes && !doneRecipes.some(({ id }) => id === urlSplit[2]) && (
          <button
            className="start-recipe-btn"
            data-testid="start-recipe-btn"
            type="button"
          >
            Start Recipe
          </button>
        )
      }
    </section>
  );
}

RecipeDetails.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeDetails;
