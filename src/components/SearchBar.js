import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { fetchMealsByIngredient,
  fetchMealsByName,
  fetchMealsByLetter } from '../services/fetchMealsFilters';
import { fetchDrinksByIngredient,
  fetchDrinksByName,
  fetchDrinksByLetter } from '../services/fetchDrinksFilter';
import recipesContext from '../context/RecipesContext';

function SearchBar({ page }) {
  const { setRecipesToRender } = useContext(recipesContext);
  const [filterSelected, setFilterSelected] = useState('');
  const [search, setSearch] = useState('');
  console.log(search.length);
  const chooseMealsFilter = async () => {
    if (filterSelected === 'ingredient') {
      const meals = await fetchMealsByIngredient(search);
      return meals;
    }
    if (filterSelected === 'name') {
      const meals = await fetchMealsByName(search);
      return meals;
    }
    if (filterSelected === 'letter' && search.length === 1) {
      const meals = await fetchMealsByLetter(search);
      return meals;
    }
    global.alert('Your search must have only 1 (one) character');
  };

  const chooseDrinksFilter = async () => {
    if (filterSelected === 'ingredient') {
      const drinks = await fetchDrinksByIngredient(search);
      return drinks;
    }
    if (filterSelected === 'name') {
      const drinks = await fetchDrinksByName(search);
      return drinks;
    }
    if (filterSelected === 'letter' && search.length === 1) {
      const drinks = await fetchDrinksByLetter(search);
      return drinks;
    }
    global.alert('Your search must have only 1 (one) character');
  };

  // const redirectToDetails = (array) => {
  //   const ways = {
  //     '/meals': `/meals/${array[0].idMeal}`,
  //     '/drinks': `/drinks/${array[0].idDrink}`,
  //   };

  //   if (array.length === 1) {
  //     history.push(ways[page]);
  //   }
  // };

  const handleSearch = async () => {
    if (page === '/meals') {
      const meals = await chooseMealsFilter();
      setRecipesToRender(meals);
      // redirectToDetails(meals);
    }
    if (page === '/drinks') {
      const drinks = await chooseDrinksFilter();
      setRecipesToRender(drinks);
      // redirectToDetails(drinks);
    }
  };

  return (
    <form>
      <label htmlFor="search">
        <input
          type="text"
          id="search"
          data-testid="search-input"
          placeholder="Search Recipes"
          value={ search }
          onChange={ ({ target: { value } }) => setSearch(value) }
        />
      </label>
      <label htmlFor="ingredient">
        <input
          type="radio"
          id="ingredient"
          value="ingredient"
          checked={ filterSelected === 'ingredient' }
          data-testid="ingredient-search-radio"
          onChange={ () => { setFilterSelected('ingredient'); } }
        />
      </label>
      <label htmlFor="name">
        <input
          type="radio"
          id="name"
          value="name"
          checked={ filterSelected === 'name' }
          data-testid="name-search-radio"
          onChange={ () => { setFilterSelected('name'); } }
        />
      </label>
      <label htmlFor="first-letter">
        <input
          type="radio"
          id="first-letter"
          value="letter"
          checked={ filterSelected === 'letter' }
          data-testid="first-letter-search-radio"
          onChange={ () => { setFilterSelected('letter'); } }
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleSearch }
      >
        Search
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  page: PropTypes.string.isRequired,
};

export default SearchBar;
