import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import recipesContext from '../context/RecipesContext';
import Footer from '../components/Footer';

function Profile({ history, location: { pathname } }) {
  const { user } = useContext(recipesContext);

  return (
    <section>
      <Header page={ pathname } search={ false } />
      <h1 data-testid="profile-email">{ user }</h1>
      <button
        type="button"
        data-testid="profile-done-btn"
        id="done"
        onClick={ () => { history.push('/done-recipes'); } }
      >
        Done Recipes
      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
        id="favorite"
        onClick={ () => { history.push('/favorite-recipes'); } }
      >
        Favorite Recipes
      </button>
      <button
        type="button"
        data-testid="profile-logout-btn"
        id="logout"
        onClick={ () => {
          localStorage.clear();
          history.push('/');
        } }
      >
        Logout
      </button>
      <Footer />
    </section>
  );
}

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Profile;
