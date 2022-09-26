import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProfileIcon from '../images/profileIcon.svg';
import SearchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

export default function Header({ page, search }) {
  const [researched, setResearched] = useState(false);

  const handleSearch = () => {
    if (researched) {
      setResearched(false);
    } else {
      setResearched(true);
    }
  };

  return (
    <main>

      <header>
        <div>
          <Link to="/profile">
            <img src={ ProfileIcon } alt="Profile Icon" data-testid="profile-top-btn" />
          </Link>
          <h1 data-testid="page-title">{page}</h1>
          {search && (
            <button type="button" onClick={ handleSearch }>
              <img src={ SearchIcon } alt="Search Icon" data-testid="search-top-btn" />
            </button>
          )}
        </div>
      </header>
      {researched && <SearchBar page={ page } />}
    </main>
  );
}

Header.propTypes = {
  page: PropTypes.string.isRequired,
  search: PropTypes.bool.isRequired,
};
