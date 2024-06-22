import classNames from "classnames";
import styles from "./filterItem.module.css";

type FilterItemProps = {
  title: string;
  isActive: boolean;
  handleFilter: (newFilter: string) => void;
  list: string[];
};

export function FilterItem({
  title,
  isActive,
  handleFilter,
  list,
}: FilterItemProps) {
    console.log(title);
  return (
    <div className={styles.filterWrapper}>
      <div
        onClick={() => handleFilter(title)}
        className={classNames(isActive ? styles.filterButtonActive : styles.filterButton, styles.btnText)}
      >
        {title}
      </div>
        {isActive && (
          <div className={styles.filterContainer}>
            <ul className={styles.filterBox}>
            {list.map((item, index) => (
              <li key={index} className={styles.filterList}>
                {item}
              </li>
            ))}
          </ul>
          </div>
        )}
    </div>
  );
}
