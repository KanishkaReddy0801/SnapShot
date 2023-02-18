import React, { useState } from 'react';
import axios from 'axios';
import Gallery from '../components/Gallery';
import SearchBar from './SearchBar';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const response = await axios.get(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=ea083d35f879c79b952fb878d408152a&text=${searchQuery}&per_page=50&format=json&nojsoncallback=1`
    );
    const images = response.data.photos.photo.map((photo) => ({
      id: photo.id,
      url: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
      title: photo.title,
    }));
    setSearchResults(images);
  };

  return (
    <div className="search">
      <h2>Search Photos</h2>
      <SearchBar value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onSearch={handleSearch} />
      {searchResults.length > 0 ? <Gallery images={searchResults} /> : <p>No results found.</p>}
    </div>
  );
};

export default Search;
