"use client";
import { Navigation } from "@/components/Navigation/Navigation";
import styles from "./layout.module.css";
import { Search } from "@/components/Search/Search";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Bar } from "@/components/Bar/Bar";
import { useCurrentTrack } from "@/contexts/CurrentProvider";
import { useAppSelector } from "@/store/store";
import { useState } from "react";

export default function TracksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const { audioRef } = useCurrentTrack();

  const {currentTrack, isPlaying} = useAppSelector(
    (state) => state.tracks
  );
  const track_file = currentTrack?.track_file;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
          <main className={styles.main}>
            <Navigation />
            <div className={styles.mainCenterblock}>
              <Search />
              {children}
            </div>
            <Sidebar />
          </main>
          <audio
          className={styles.audio}
          ref={audioRef}
          controls
          src={track_file}
          onTimeUpdate={(e) => {
            setCurrentTime(e.currentTarget.currentTime);
          }}
        ></audio>
          <Bar currentTime={currentTime} setCurrentTime={setCurrentTime} />
        <footer />
      </div>
    </div>
  );
}
