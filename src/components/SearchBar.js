import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search photos..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
