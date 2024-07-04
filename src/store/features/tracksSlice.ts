import { TrackType } from "@/types/tracks";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
  currentPlaylist: TrackType[];
  currentTrack: TrackType | null;
  isPlaying: boolean;
  initialTracks: TrackType[];
  isShuffle: boolean;
};

const initialState: InitialStateType = {
  currentPlaylist: [],
  currentTrack: null,
  isPlaying: false,
  initialTracks: [],
  isShuffle: false,
};

const tracksSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    setCurrentPlaylist: (state, action: PayloadAction<TrackType[]>) => {
      state.currentPlaylist = action.payload;
      state.initialTracks = action.payload;
    },
    setCurrentTrack: (state, action: PayloadAction<TrackType>) => {
      state.currentTrack = action.payload;
      state.isPlaying = true;
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    setPrev: (state) => {
      const currentIdx = state.currentPlaylist.findIndex((track) => track.id === state.currentTrack?.id);
      if (!currentIdx) {
        return;
      }
      state.currentTrack = state.currentPlaylist[currentIdx - 1];
      state.isPlaying = true;
    },
    setNext: (state) => {
      const currentIdx = state.currentPlaylist.findIndex((track) => track.id === state.currentTrack?.id);
      if (currentIdx >= state.currentPlaylist.length - 1) {
        return;
      }
      state.currentTrack = state.currentPlaylist[currentIdx + 1];
      state.isPlaying = true;
    },
    setShuffle: (state, action: PayloadAction<boolean>) => {
      state.isShuffle = action.payload;
      const shuffleTracks = state.currentPlaylist.toSorted(() => Math.random() - 0.5);
      state.currentPlaylist = state.isShuffle ? shuffleTracks : state.initialTracks;
    },
  },
});

export const {
  setCurrentPlaylist,
  setCurrentTrack,
  setPrev,
  setNext,
  setShuffle,
  setIsPlaying,
} = tracksSlice.actions;
export const tracksReducers = tracksSlice.reducer;
