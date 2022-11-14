import React, { useRef } from "react";
import "../styles/search.css";

function Search(props) {
  const searchRef = useRef();

  return (
    <form className="search-form">
      <input type="text" className="search-input" ref={searchRef} />
      <button type="submit" className="search-submit">search</button>
    </form>
  );
}

export default Search;
