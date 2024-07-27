"use client";
import { TrackType } from "@/types/tracks";
import { Track } from "../Track/Track";
import styles from "./playlist.module.css";
import classNames from "classnames";
import { useAppDispatch } from "@/store/store";
import { setCurrentPlaylist } from "@/store/features/tracksSlice";

type PlaylistProps = {
  tracks: TrackType[];
};

export function Playlist({ tracks }: PlaylistProps) {
  // const dispatch = useAppDispatch();

  // dispatch(setCurrentPlaylist(tracks));

  return (
    <div className={styles.centerblockContent}>
      <div className={styles.contentTitle}>
        <div className={classNames(styles.playlistTitleCol, styles.col01)}>
          Трек
        </div>
        <div className={classNames(styles.playlistTitleCol, styles.col02)}>
          Исполнитель
        </div>
        <div className={classNames(styles.playlistTitleCol, styles.col03)}>
          Альбом
        </div>
        <div className={classNames(styles.playlistTitleCol, styles.col04)}>
          <svg className={styles.playlistTitleSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-watch" />
          </svg>
        </div>
      </div>
      <div className={styles.contentPlaylist}>
        {tracks.map((track) => (
          <Track key={track._id} track={track} />
        ))}
      </div>
    </div>
  );
}
