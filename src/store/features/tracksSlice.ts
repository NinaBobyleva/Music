import { fetchFavoriteTracks } from "@/api/tracks";
import { Tokens } from "@/types/tokens";
import { TrackType } from "@/types/tracks";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const getFavoriteTrack = createAsyncThunk(
  "playlist/getFavoriteTracks",
  async ({ access, refresh }: Tokens) => {
    const favoriteTracks = fetchFavoriteTracks({ access, refresh });
    return favoriteTracks;
  }
);

type InitialStateType = {
  currentPlaylist: TrackType[];
  likedPlaylist: TrackType[];
  currentTrack: TrackType | null;
  isPlaying: boolean;
  initialTracks: TrackType[];
  isShuffle: boolean;
};

const initialState: InitialStateType = {
  currentPlaylist: [],
  likedPlaylist: [],
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
      const currentIdx = state.currentPlaylist.findIndex(
        (track) => track._id === state.currentTrack?._id
      );
      if (!currentIdx) {
        return;
      }
      state.currentTrack = state.currentPlaylist[currentIdx - 1];
      state.isPlaying = true;
    },
    setNext: (state) => {
      const currentIdx = state.currentPlaylist.findIndex(
        (track) => track._id === state.currentTrack?._id
      );
      if (currentIdx >= state.currentPlaylist.length - 1) {
        return;
      }
      state.currentTrack = state.currentPlaylist[currentIdx + 1];
      state.isPlaying = true;
    },
    setShuffle: (state, action: PayloadAction<boolean>) => {
      state.isShuffle = action.payload;
      const shuffleTracks = state.currentPlaylist.toSorted(
        () => Math.random() - 0.5
      );
      state.currentPlaylist = state.isShuffle
        ? shuffleTracks
        : state.initialTracks;
    },
    setDislikeTrack: (state, action: PayloadAction<TrackType>) => {
      console.log(action.payload);
      const index = state.likedPlaylist.findIndex((track) => track._id === action.payload._id);
      state.likedPlaylist.splice(index, 1);
    },
    setLikeTrack: (state, action: PayloadAction<TrackType>) => {
      state.likedPlaylist.push(action.payload);;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(
        getFavoriteTrack.fulfilled,
        (state, action: PayloadAction<TrackType[]>) => {
          state.likedPlaylist = action.payload;
        }
      )
      .addCase(getFavoriteTrack.rejected, (state, action) => {
        console.error("Error:", action.error.message);
      });
  },
});

export const {
  setCurrentPlaylist,
  setCurrentTrack,
  setPrev,
  setNext,
  setShuffle,
  setIsPlaying,
  setDislikeTrack,
  setLikeTrack,
} = tracksSlice.actions;
export const tracksReducers = tracksSlice.reducer;
