import React from "react";
import styles from "./styles.module.css";

function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Enter a song, album, or artist" />
      <button>Search</button>
    </div>
  );
}

export default SearchBar;
