import React, { useState } from 'react';
import PropTypes from 'prop-types';
import recipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [settings, setSettings] = useState('set');

  const contextValues = {
    settings,
    setSettings,
  };
  return (
    <recipesContext.Provider value={ contextValues }>
      { children }
    </recipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
