import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

function FavoriteRecipes({ location: { pathname } }) {
  return (
    <div>
      <Header page={ pathname } search={ false } />
    </div>
  );
}

FavoriteRecipes.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default FavoriteRecipes;
