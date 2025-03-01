import React from "react";
import styles from "./styles.module.css";

function Track({ name, artist, album }) {
  return (
    <div className={styles.track}>
      <h3>{name}</h3>
      <p>{artist} | {album}</p>
      <button>+</button>
    </div>
  );
}

export default Track;
