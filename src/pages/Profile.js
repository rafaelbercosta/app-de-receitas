import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getStorage } from '../services/Storage';

function Profile({ history }) {
  const [user, setUser] = useState('');

  useEffect(() => {
    setUser(getStorage('user').email);
  }, []);

  return (
    <section>
      <p data-testid="profile-email">{ user }</p>
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
    </section>
  );
}

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Profile;
