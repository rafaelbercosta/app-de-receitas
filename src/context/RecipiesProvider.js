import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import recipiesContext from './RecipiesContext';

function RecipiesProvider({ children }) {
  const [settings, setSettings] = useState('set');

  const contextValues = useMemo(() => ({ settings, setSettings }), []);
  return (
    <recipiesContext.Provider value={ contextValues }>
      { children }
    </recipiesContext.Provider>
  );
}

RecipiesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipiesProvider;
