import styles from "./filter.module.css"

export function Filter() {
  const classNames = require('classnames');
  return (
    <div className={styles.centerblockFilter}>
      <div className={styles.filterTitle}>Искать по:</div>
      <div className={classNames(styles.filterButton, styles.btnText)}>исполнителю</div>
      <div className={classNames(styles.filterButton, styles.btnText)}>году выпуска</div>
      <div className={classNames(styles.filterButton, styles.btnText)}>жанру</div>
    </div>
  );
}
