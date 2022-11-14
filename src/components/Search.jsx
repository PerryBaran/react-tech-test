import React, { useRef } from "react";
import PropTypes from "prop-types";
import "../styles/search.css";
import getImages from "../requests/getImages";

function Search({setSearchResults}) {
  const searchRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const images = await getImages(searchRef.current.value);
    setSearchResults(images);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input type="text" className="search-input" ref={searchRef} />
      <button type="submit" className="search-submit">search</button>
    </form>
  );
}

Search.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};

export default Search;
