import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type AuthStateType = {
    playState: boolean,
}

const initialState: AuthStateType = {
    playState: false,
}

const playSlice = createSlice({
    name: "play",
    initialState,
    reducers: {
        setPlayState: (state, action: PayloadAction<boolean>) => {
            state.playState = action.payload;
        },
    },
});

export const { setPlayState } = playSlice.actions;
export const playReducers = playSlice.reducer;