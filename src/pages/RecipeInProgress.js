import React from 'react';
import { useHistory } from 'react-router-dom';

function RecipeInProgress() {
  const history = useHistory();

  const handleGoToMealsPage = () => {
    history.push('/meals');
  };

  return (
    <div>
      <h1>Recipe In Progress</h1>
      <button
        type="button"
        onClick={ handleGoToMealsPage }
      >
        Go to Meals Page
      </button>
    </div>
  );
}

export default RecipeInProgress;
