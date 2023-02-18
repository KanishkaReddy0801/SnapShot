import React, { useState } from "react";

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit">Go</button>
    </form>
  );
}

export default SearchBar;
