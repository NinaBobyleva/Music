"use client";
import { useState } from "react";
import styles from "./search.module.css";
import { useAppDispatch } from "@/store/store";
import { resetFilters, setFilters } from "@/store/features/tracksSlice";

export function Search() {
  // const { initialPlaylist } = useAppSelector((state) => state.tracks);
  // const dispatch = useAppDispatch();
  // const [search, setSearch] = useState("");

  // useEffect(() => {
  //   const searchTracks = initialPlaylist.filter((track) =>
  //     track.name.toLowerCase().includes(search.toLowerCase())
  //   );
  //   dispatch(setCurrentPlaylist(searchTracks));
  // }, [dispatch, initialPlaylist, search]);

  const dispatch = useAppDispatch();
  const [search, setSearch] = useState<string>("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchEvent = event.target.value;
    setSearch(searchEvent);
    if (searchEvent.trim() === "") {
      dispatch(resetFilters());
    } else {
      dispatch(setFilters({ searchString: searchEvent }));
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.centerblockSearch}>
        <svg className={styles.searchSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-search" />
        </svg>
        <input
          className={styles.searchText}
          value={search}
          onChange={handleSearch}
          name="search"
          placeholder="Поиск"
          type="search"
          // onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
