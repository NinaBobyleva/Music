"use client";
import { useCurrentTrack } from "@/contexts/CurrentProvider";
import { Player } from "../Player/Player";
import { TrackPlay } from "../TrackPlay/TrackPlay";
import { Volume } from "../Volume/Volume";
import styles from "./bar.module.css";
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";
import ProgressBar from "./ProgressBar/ProgressBar";
import { CurrentTimeBlock } from "./CurrentTimeBlock/CurrentTimeBlock";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setIsPlaying, setNext } from "@/store/features/tracksSlice";

type BarProps = {
  currentTime: number,
  setCurrentTime: Dispatch<SetStateAction<number>>,
}

export function Bar({currentTime, setCurrentTime}: BarProps) {
  const { audioRef } = useCurrentTrack();
  const {currentTrack, isPlaying} = useAppSelector(
    (state) => state.tracks
  );
  const dispatch = useAppDispatch();
  
  const [isLoop, setIsLoop] = useState<boolean>(false);

  const audio = audioRef.current;

  useEffect(() => {
    audio?.addEventListener("ended", () => dispatch(setNext()));
    return () => audio?.removeEventListener("ended", () => dispatch(setNext()));
  }, [audio, dispatch])

  const duration = audioRef.current?.duration || 0;

  const handlePlay = useCallback(() => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    }
    dispatch(setIsPlaying(!isPlaying));
  }, [audio, isPlaying, dispatch]);

  const handleSeek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (audio) {
      if (isPlaying) {
        audio.currentTime = Number(e.target.value);
      }
    }
  }, [audio, isPlaying]);

  const handleLoop = useCallback(() => {
    if (audio) {
      if (isLoop) {
        audio.loop = false;
      } else {
        audio.loop = true;
      }
    }
    setIsLoop((prev) => !prev);
  }, [audio, isLoop, setIsLoop]);

  if (!currentTrack) {
    return null;
  }

  const { name, author, track_file } = currentTrack;

  return (
    <div className={styles.bar}>
      <div className={styles.barContent}>
        
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
            <TrackPlay currentTrack={currentTrack} name={name} author={author} />
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
