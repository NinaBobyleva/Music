import styles from "./search.module.css";

export function Search() {
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
    </div>
  );
}
