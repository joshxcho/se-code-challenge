import React from "react";

const Search = ({ placeholderText, searchValue, updateSearchValue }) => (
  <section>
    <input
      className="searchInput"
      type="search"
      placeholder={placeholderText}
      onChange={updateSearchValue}
      value={searchValue}
    ></input>
  </section>
);

export default Search;