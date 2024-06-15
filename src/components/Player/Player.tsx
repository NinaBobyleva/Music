import styles from "./player.module.css";

export function Player() {
    const className = require('classnames');
  return (
    <div className={styles.playerControls}>
      <div className={styles.playerBtnPrev}>
        <svg className={styles.playerBtnPrevSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-prev" />
        </svg>
      </div>
      <div className={className(styles.playerBtnPlay, styles.btn)}>
        <svg className={styles.playerBtnPlaySvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-play" />
        </svg>
      </div>
      <div className={styles.playerBtnNext}>
        <svg className={styles.playerBtnNextSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-next" />
        </svg>
      </div>
      <div className={className(styles.playerBtnRepeat, styles.btnIcon)}>
        <svg className={styles.playerBtnRepeatSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
        </svg>
      </div>
      <div className={className(styles.playerBtnShuffle, styles.btnIcon)}>
        <svg className={styles.playerBtnShuffleSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
        </svg>
      </div>
    </div>
  );
}
