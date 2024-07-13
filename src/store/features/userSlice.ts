import { getUser } from "@/api/user";
import { UserType } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthStateType = {
  user: UserType[] | null;
  authState: boolean;
};

const initialState: AuthStateType = {
  user: null,
  authState: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<boolean>) => {
      state.authState = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.authState = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action: PayloadAction<UserType[] | null>) => {
        state.user = action.payload;
        state.authState = true;
      })
      .addCase(getUser.rejected, (state, action) => {
        console.error("Error:", action.error.message);
      });
  },
});

export const { setAuthState, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;
