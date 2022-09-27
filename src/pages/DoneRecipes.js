import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

function DoneRecipes({ location: { pathname } }) {
  return (
    <div>
      <Header page={ pathname } search={ false } />
    </div>
  );
}

DoneRecipes.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default DoneRecipes;
