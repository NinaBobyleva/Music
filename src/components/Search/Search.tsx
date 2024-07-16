"use client";
import { useSelector } from "react-redux";
import styles from "./search.module.css";

export function Search() {
  const { error } = useSelector((state) => state.user);
  return (
    <div className={styles.wrapper}>
      <div className={styles.centerblockSearch}>
        <svg className={styles.searchSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-search" />
        </svg>
        <input
          className={styles.searchText}
          name="search"
          placeholder="Поиск"
          type="search"
        />
      </div>
      <p className={styles.error}>{error && error}</p>
    </div>
  );
}
