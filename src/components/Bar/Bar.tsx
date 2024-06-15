import { Player } from "../Player/Player";
import { TrackPlay } from "../TrackPlay/TrackPlay";
import { Volume } from "../Volume/Volume";

export function Bar() {
  return (
    <div className="bar">
      <div className="bar__content">
        <div className="bar__player-progress" />
        <div className="bar__player-block">
          <div className="bar__player player">
            <Player />
            <TrackPlay />
          </div>
          <Volume />
        </div>
      </div>
    </div>
  );
}
