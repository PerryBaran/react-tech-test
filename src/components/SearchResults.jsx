import React from 'react';
import PropTypes from 'prop-types';
import '../styles/search-results.css';

function SearchResults({results}) {
  return (
    <>
      {results && !results.length ? (
        <p>No results</p>
      ) : (
        <div className="card-container">
          {results.map((image) => {
            return (
              <img 
                className="card-image"
                src={image}
                alt="search result"
                key={image}
              />
            )
          })}
        </div>
      )}
    </>
  );
}

SearchResults.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.string,
  ),
};

export default SearchResults;