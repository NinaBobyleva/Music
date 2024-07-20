"use client";
import { Filter } from "../Filter/Filter";
import { Playlist } from "../Playlist/Playlist";
import styles from "./favoriteTracks.module.css";
import { useAppSelector } from "@/store/store";

export function FavoriteTracks() {
  const {likedPlaylist} = useAppSelector((state) => state.tracks);
  console.log(likedPlaylist);
  return (
    <>
      <h2 className={styles.centerblockH2}>Мои треки</h2>
      <Filter tracks={likedPlaylist} />
      <Playlist tracks={likedPlaylist} />
    </>
  );
}
