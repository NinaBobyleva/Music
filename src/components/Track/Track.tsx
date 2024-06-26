"use client";
import { TrackType } from "@/types/tracks";
import styles from "./track.module.css";
import { useCurrentTrack } from "@/contexts/CurrentTrackProvider";
import { timeFormat } from "../../utils/helpers";

type TrackProps = {
  track: TrackType;
};

export function Track({ track }: TrackProps) {
  const { setCurrentTrack } = useCurrentTrack();
  const { name, author, album, duration_in_seconds } = track;

  const handleTrackClick = () => {
    setCurrentTrack(track);
  }

  const time = timeFormat(duration_in_seconds);

  return (
    <div onClick={handleTrackClick} className={styles.playlistItem}>
      <div className={styles.playlistTrack}>
        <div className={styles.trackTitle}>
          <div className={styles.trackTitleImage}>
            <svg className={styles.trackTitleSvg}>
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </svg>
          </div>
          <div>
            <span className={styles.trackTitleLink}>
              {name} <span className={styles.trackTitleSpan} />
            </span>
          </div>
        </div>
        <div className={styles.trackAuthor}>
          <span className={styles.trackAuthorLink}>{author}</span>
        </div>
        <div className={styles.trackAlbum}>
          <span className={styles.trackAlbumLink}>{album}</span>
        </div>
        <div>
          <svg className={styles.trackTimeSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </svg>
          <span className={styles.trackTimeText}>{time}</span>
        </div>
      </div>
    </div>
  );
}
