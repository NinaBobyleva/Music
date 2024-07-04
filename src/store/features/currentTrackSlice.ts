import { TrackType } from "@/types/tracks";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CurrentTrackStateType = {
    currentTrackState: TrackType | null;
}

const initialState: CurrentTrackStateType = {
    currentTrackState: null,
}

const currentTrackSlice = createSlice({
    name: "current",
    initialState,
    reducers: {
        setCurrentTrack: (state, action: PayloadAction<TrackType | null>) => {
            state.currentTrackState = action.payload;
        },
    },
});

export const { setCurrentTrack } = currentTrackSlice.actions;
export const currentReducers = currentTrackSlice.reducer;