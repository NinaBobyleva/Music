import styles from "../../layout.module.css";
import { getCategoryTracks } from "@/api/tracks";
import { Filter } from "@/components/Filter/Filter";
import { Playlist } from "@/components/Playlist/Playlist";
import { TrackType } from "@/types/tracks";

type CategoryProps = {
  params: {
    id: string;
  }
};

async function Category({ params }: CategoryProps) {
  let tracks: TrackType[] = [];
  let error = "";
  
  try {
    tracks = await getCategoryTracks(params.id);
    console.log(tracks);
  } catch (err: unknown) {
    error = err instanceof Error ? "Ошибка при загрузке треков " + err.message : "Неизвестная ошибка" ;
    console.log(err);
  }

  return (
    <>
      <h2 className={styles.centerblockH2}>{tracks.name}</h2>
      <Filter tracks={tracks.items} />
      <Playlist tracks={tracks.items} />
    </>
  );
};

export default Category;
