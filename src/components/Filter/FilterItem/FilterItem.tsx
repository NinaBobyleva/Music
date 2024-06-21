import classNames from "classnames";
import styles from "../filter.module.css";

export function FilterItem() {
    return (
        <div className={styles.filterWrapper}>
            <div className={classNames(styles.filterButton, styles.btnText)}>исполнителю</div>
            <ul>
                <li>
                    
                </li>
            </ul>
        </div>
    )
}