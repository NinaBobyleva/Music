"use client";
import { setCurrentPlaylist } from "@/store/features/tracksSlice";
import { Filter } from "../Filter/Filter";
import { Playlist } from "../Playlist/Playlist";
import styles from "./favoriteTracks.module.css";
import { useAppDispatch, useAppSelector } from "@/store/store";

export function FavoriteTracks() {
  const allTracks = useAppSelector((state) => state.tracks.favoritePlaylist);

  const dispatch = useAppDispatch();
  dispatch(setCurrentPlaylist(allTracks));

  return (
    <>
      <h2 className={styles.centerblockH2}>Мои треки</h2>
      <Filter tracks={allTracks} />
      <Playlist tracks={allTracks} />
    </>
  );
}
