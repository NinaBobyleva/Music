"use client";
import { TrackType } from "@/types/tracks";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type CurrentTrackContextValue = {
  currentTrack: TrackType | null;
  setCurrentTrack: Dispatch<SetStateAction<TrackType | null>>;
};
const CurrentTrackContext = createContext<CurrentTrackContextValue | undefined>(
  undefined
);

type CurrentTrackProviderProps = {
  children: ReactNode;
};

export function CurrentTrackProvider({ children }: CurrentTrackProviderProps) {
  const [currentTrack, setCurrentTrack] = useState<TrackType | null>(null);

  return (
    <CurrentTrackContext.Provider value={{ currentTrack, setCurrentTrack }}>
      {children}
    </CurrentTrackContext.Provider>
  );
}

export function useCurrentTrack() {
  const context = useContext(CurrentTrackContext);
  if (context === undefined) {
    throw new Error ("useCurrentTrack должен использоваться внутри провайдера");
  }
  return context;
}
