import styles from "./volume.module.css";

export function Volume() {
    const className = require('classnames');
  return (
    <div className={styles.barVolumeBlock}>
      <div className={styles.volumeContent}>
        <div className={styles.volumeImage}>
          <svg className={styles.volumeSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-volume" />
          </svg>
        </div>
        <div className={className(styles.volumeProgress, styles.btn)}>
          <input
            className={className(styles.volumeProgressLine, styles.btn)}
            name="range"
            type="range"
          />
        </div>
      </div>
    </div>
  );
}
