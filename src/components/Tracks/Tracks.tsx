'use client'
import useAllTracks from "@/hooks/useAllTracks";
import { Filter } from "../Filter/Filter";
import { Playlist } from "../Playlist/Playlist";
import styles from "./tracks.module.css"
import { useAppSelector } from "@/store/store";


export function Tracks() {
  
  useAllTracks();
  const allTracks = useAppSelector((state) => state.tracks.currentPlaylist);
  const {error} = useAppSelector((state) => state.tracks);
  
  return (
    <>
      {error && error}
      <h2 className={styles.centerblockH2}>Треки</h2>
      <Filter tracks={allTracks} />
      <Playlist tracks={allTracks}/>
    </>
  );
}
