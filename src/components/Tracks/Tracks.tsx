import { Filter } from "../Filter/Filter";
import { Playlist } from "../Playlist/Playlist";
import styles from "./tracks.module.css"

export function Tracks() {
  return (
    <>
      <h2 className={styles.centerblockH2}>Треки</h2>
      <Filter />
      <Playlist />
    </>
  );
}
