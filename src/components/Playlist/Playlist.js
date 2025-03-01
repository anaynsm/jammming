import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import styles from "./styles.module.css";

function Playlist() {
  return (
    <div className={styles.playlist}>
      <h2>My Playlist</h2>
      <input type="text" placeholder="Enter playlist name" />
      <Tracklist />
      <button>Save to Spotify</button>
    </div>
  );
}

export default Playlist;
