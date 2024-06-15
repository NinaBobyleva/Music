import styles from "./trackPlay.module.css";

export function TrackPlay() {
    const className = require('classnames');
  return (
    <div className={styles.playerTrackPlay}>
      <div className={styles.trackPlayContain}>
        <div className={styles.trackPlayImage}>
          <svg className={styles.trackPlaySvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-note" />
          </svg>
        </div>
        <div className={styles.trackPlayAuthor}>
          <a className={styles.trackPlayAuthorLink} href="http://">
            Ты та...
          </a>
        </div>
        <div className={styles.trackPlayAlbum}>
          <a className={styles.trackPlayAlbumLink} href="http://">
            Баста
          </a>
        </div>
      </div>
      <div className={styles.trackPlayLikeDis}>
        <div className={className(styles.trackPlayLike, styles.btnIcon)}>
          <svg className={styles.trackPlayLikeSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </svg>
        </div>
        <div className={className(styles.trackPlayDislike, styles.btnIcon)}>
          <svg className={styles.trackPlayDislikeSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
          </svg>
        </div>
      </div>
    </div>
  );
}
