import { getUser, signUp } from "@/api/user";
import { UserType } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthStateType = {
  user: UserType[] | null;
  authState: boolean;
  error: unknown;
  refresh: string | null;
};

const initialState: AuthStateType = {
  user: null,
  authState: false,
  error: null,
  refresh: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
    setRefresh: (state, action) => {
      state.refresh = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getUser.fulfilled,
        (state, action: PayloadAction<UserType[]>) => {
          state.error = null;
          state.user = action.payload;
        }
      )
      .addCase(
        signUp.fulfilled,
        (state, action: PayloadAction<UserType[]>) => {
          state.error = null;
          state.user = action.payload;
        }
      )
      .addCase(getUser.rejected, (state, action) => {
        state.error = action.error.message;
        console.error("Error:", action.error.message);
      })
      .addCase(signUp.rejected, (state, action) => {
        state.error = action.payload;
        console.error("Error:", action.error.message);
      });
  },
});

export const { logout, setRefresh } = userSlice.actions;
export const userReducer = userSlice.reducer;
