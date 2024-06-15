import { Filter } from "../Filter/Filter";
import { Playlist } from "../Playlist/Playlist";

export function Tracks() {
  return (
    <>
      <h2 className="centerblock__h2">Треки</h2>
      <Filter />
      <Playlist />
    </>
  );
}
