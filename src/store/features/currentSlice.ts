import { TrackType } from "@/types/tracks";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CurrentTrackStateType = {
    currentPlaylistState: TrackType[] | null;
    currentTrackState: TrackType | null;
}

const initialState: CurrentTrackStateType = {
    currentPlaylistState: null,
    currentTrackState: null,
}

const currentSlice = createSlice({
    name: "current",
    initialState,
    reducers: {
        setCurrentPlaylist: (state, action: PayloadAction<TrackType[] | null>) => {
            state.currentPlaylistState = action.payload;
        },
        setCurrentTrack: (state, action: PayloadAction<TrackType | null>) => {
            state.currentTrackState = action.payload;
        },
    },
});

export const { setCurrentPlaylist, setCurrentTrack } = currentSlice.actions;
export const currentReducers = currentSlice.reducer;