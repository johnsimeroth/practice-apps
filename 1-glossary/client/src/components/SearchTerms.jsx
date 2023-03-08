import React from 'react';

const SearchTerms = ({ handleChange }) => {


  return (
  <input type="text" name="search-terms" className="search-terms" placeholder="Find a term" onChange={handleChange} />
  );
}

export default SearchTerms;