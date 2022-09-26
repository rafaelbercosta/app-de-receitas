import React from 'react';

export default function SearchBar() {
  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        placeholder="Search Recipes"
      />
    </div>
  );
}
