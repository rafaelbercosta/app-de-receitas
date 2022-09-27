import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { fetchMealsByIngredient,
  fetchMealsByName,
  fetchMealsByLetter } from '../services/fetchMealsFilters';
import { fetchDrinksByIngredient,
  fetchDrinksByName,
  fetchDrinksByLetter} from '../services/fetchDrinksFilter';
import recipesContext from '../context/RecipesContext';

function SearchBar({ page }) {
  const { setRecipesToRender } = useContext(recipesContext);
  const [filterSelected, setFilterSelected] = useState('');
  const [search, setSearch] = useState('');

  const handleSearch = async () => {
    const fetchFilters = {
      '/meals': {
        ingredient: fetchMealsByIngredient(search),
        name: fetchMealsByName(search),
        letter: fetchMealsByLetter(search),
      },
      '/drinks': {
        ingredient: fetchDrinksByIngredient(search),
        name: fetchDrinksByName(search),
        letter: fetchDrinksByLetter(search),
      },
    };
    const filterResponse = fetchFilters[page][filterSelected];
    console.log(filterResponse, filterSelected, page);
    setRecipesToRender(filterResponse);
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
