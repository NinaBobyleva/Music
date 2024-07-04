"use client";
import { TrackType } from "@/types/tracks";
import styles from "./track.module.css";
import { useCurrentTrack } from "@/contexts/CurrentTrackProvider";
import { timeFormat } from "../../utils/helpers";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setCurrentTrack } from "@/store/features/currentTrackSlice";

type TrackProps = {
  track: TrackType;
};

export function Track({ track }: TrackProps) {
  const { isPlaying, setIsPlaying, audioRef } = useCurrentTrack();
  // const [isPlaying, setIsPlaying] = useState<boolean>(false);
  // const audioRef = useRef<HTMLAudioElement | null>(null);
  const { name, author, album, duration_in_seconds } = track;
  const currentTrack = useAppSelector((state) => state.current.currentTrackState);
  // const isPlaying = useAppSelector((state) => state.play.playState);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(setCurrentTrack(track));
  // }, [dispatch])

  const handleTrackClick = () => {
    dispatch(setCurrentTrack(track));
  }

  useEffect(() => {
    audioRef.current?.play();
    setIsPlaying(true);
  }, [currentTrack])

  const time = timeFormat(duration_in_seconds);

  return (
    <div onClick={handleTrackClick} className={styles.playlistItem}>
      <div className={styles.playlistTrack}>
        <div className={styles.trackTitle}>
          <div className={styles.trackTitleImage}>
            {currentTrack?.id === track.id ? (<svg className={isPlaying ? classNames(styles.trackTitleSvg, styles.playingDot) : styles.trackTitleSvg}>
              <use xlinkHref="img/icon/sprite.svg#icon-dot" />
            </svg>) : (<svg className={styles.trackTitleSvg}>
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </svg>)}
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
