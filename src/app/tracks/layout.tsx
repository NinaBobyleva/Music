"use client";
import { Navigation } from "@/components/Navigation/Navigation";
import styles from "./layout.module.css";
// import { CurrentTrackProvider, useCurrentTrack } from "@/contexts/CurrentProvider";
import { Search } from "@/components/Search/Search";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Bar } from "@/components/Bar/Bar";
// import { useCallback } from "react";
// import { useAppDispatch, useAppSelector } from "@/store/store";
// import { setIsPlaying } from "@/store/features/tracksSlice";

export default function FavoriteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const { audioRef } = useCurrentTrack();

  // const {currentTrack, isPlaying} = useAppSelector(
  //   (state) => state.tracks
  // );
  // const dispatch = useAppDispatch();

  // const handlePlay = useCallback(() => {
  //   const audio = audioRef.current;
  //   if (audio) {
  //     if (isPlaying) {
  //       audio.pause();
  //     } else {
  //       audio.play();
  //     }
  //   }
  //   dispatch(setIsPlaying(!isPlaying));
  // }, [audioRef, isPlaying, dispatch]);

  // const handleSeek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (audioRef.current) {
  //     if (isPlaying) {
  //       audioRef.current.currentTime = Number(e.target.value);
  //     }
  //   }
  // }, [audioRef, isPlaying]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* <CurrentTrackProvider> */}
          <main className={styles.main}>
            <Navigation />
            <div className={styles.mainCenterblock}>
              <Search />
              {children}
            </div>
            <Sidebar />
          </main>
          <Bar />
        {/* </CurrentTrackProvider> */}
        <footer />
      </div>
    </div>
  );
}
