"use client";
import { useEffect, useState } from "react";
import styles from "./search.module.css";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setCurrentPlaylist } from "@/store/features/tracksSlice";

export function Search() {
  const { initialPlaylist } = useAppSelector((state) => state.tracks);
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const searchTracks = initialPlaylist.filter((track) =>
      track.name.toLowerCase().includes(search.toLowerCase())
    );
    dispatch(setCurrentPlaylist(searchTracks));
  }, [dispatch, initialPlaylist, search]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.centerblockSearch}>
        <svg className={styles.searchSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-search" />
        </svg>
        <input
          className={styles.searchText}
          value={search}
          name="search"
          placeholder="Поиск"
          type="search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
