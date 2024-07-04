"use client";
import { useCurrentTrack } from "@/contexts/CurrentProvider";
import { Player } from "../Player/Player";
import { TrackPlay } from "../TrackPlay/TrackPlay";
import { Volume } from "../Volume/Volume";
import styles from "./bar.module.css";
import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar/ProgressBar";
import { CurrentTimeBlock } from "./CurrentTimeBlock/CurrentTimeBlock";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setIsPlaying, setNext } from "@/store/features/tracksSlice";

export function Bar() {
  const { audioRef } = useCurrentTrack();
  const {currentTrack, isPlaying} = useAppSelector(
    (state) => state.tracks
  );
  const dispatch = useAppDispatch();
  
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isLoop, setIsLoop] = useState<boolean>(false);

  const audio = audioRef.current;

  useEffect(() => {
    audio?.addEventListener("ended", () => dispatch(setNext()));
    audio?.play();
    return () => audio?.removeEventListener("ended", () => dispatch(setNext()));
  }, [audio, dispatch])

  if (!currentTrack) {
    return null;
  }
  const { name, author, track_file } = currentTrack;

  const duration = audioRef.current?.duration || 0;

  const handlePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    }
    dispatch(setIsPlaying(!isPlaying));
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.currentTime = Number(e.target.value);
      }
    }
  };

  const handleLoop = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isLoop) {
        audio.loop = false;
      } else {
        audio.loop = true;
      }
    }
    setIsLoop((prev) => !prev);
  };

  return (
    <div className={styles.bar}>
      <div className={styles.barContent}>
        <audio
          className={styles.audio}
          ref={audioRef}
          controls
          src={track_file}
          onTimeUpdate={(e) => {
            setCurrentTime(e.currentTarget.currentTime);
          }}
        ></audio>
        <ProgressBar
          max={duration}
          value={currentTime}
          step={0.01}
          onChange={handleSeek}
        />
        <div className={styles.barPlayerBlock}>
          <div className={styles.barPlayer}>
            <Player
              handlePlay={handlePlay}
              isPlaying={isPlaying}
              handleLoop={handleLoop}
              isLoop={isLoop}
            />
            <TrackPlay name={name} author={author} />
          </div>
          <div className={styles.wrapper}>
            <Volume audio={audioRef.current} />
            <CurrentTimeBlock currentTime={currentTime} duration={duration} />
          </div>
        </div>
      </div>
    </div>
  );
}
