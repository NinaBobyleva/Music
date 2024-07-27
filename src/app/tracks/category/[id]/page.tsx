'use client'
import styles from "../../layout.module.css";
import { getCategoryTracks } from "@/api/tracks";
import { Filter } from "@/components/Filter/Filter";
import { Playlist } from "@/components/Playlist/Playlist";
import { setCategoryPlaylist } from "@/store/features/tracksSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect, useRef } from "react";

type CategoryProps = {
  params: {
    id: number;
  }
};

function Category({ params }: CategoryProps) {
  const dispatch = useAppDispatch();
  const allTracks = useAppSelector((state) => state.tracks.categoryPlaylist);
  const {currentPlaylist} = useAppSelector((state) => state.tracks);

  const name = useRef();
  
  useEffect(() => {
    try {
      getCategoryTracks(params.id).then((res) => {
        console.log(res.items);
        name.current = res.name;
        const items = res.items;
        const tracks = items.map((item: number) => currentPlaylist.find((track) => track._id === item)).filter(Boolean);
        console.log(tracks);
        dispatch(setCategoryPlaylist(tracks));
      })
    } catch (error) {
      
    }
  }, [dispatch, params.id, currentPlaylist, name]);

  return (
    <>
      <h2 className={styles.centerblockH2}>{name.current}</h2>
      <Filter tracks={allTracks} />
      <Playlist tracks={allTracks} />
    </>
  );
};

export default Category;
