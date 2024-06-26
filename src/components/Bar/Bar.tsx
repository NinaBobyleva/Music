"use client";
import { useCurrentTrack } from "@/contexts/CurrentTrackProvider";
import { Player } from "../Player/Player";
import { TrackPlay } from "../TrackPlay/TrackPlay";
import { Volume } from "../Volume/Volume";
import styles from "./bar.module.css";
import { useRef, useState } from "react";
import ProgressBar from "./ProgressBar/ProgressBar";

export function Bar() {
  const { currentTrack } = useCurrentTrack();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  if (!currentTrack) {
    return null;
  }
  const { name, author, track_file} = currentTrack;

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
    
    setIsPlaying((prev) => !prev);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(e.target.value);
    }
  }

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
        <ProgressBar max={duration} value={currentTime} step={0.01} onChange={handleSeek} />
        <div className={styles.barPlayerBlock}>
          <div className={styles.barPlayer}>
            <Player handlePlay={handlePlay} isPlaying={isPlaying} />
            <TrackPlay name={name} author={author} />
          </div>
          <Volume audio={audioRef.current} />
        </div>
      </div>
    </div>
  );
}
